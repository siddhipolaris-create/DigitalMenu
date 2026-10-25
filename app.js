/**
 * Synexa Solutions — Multi-Tenant QR Digital Menu Platform Logic
 */

class SynexaApp {
  constructor() {
    this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    this.currentMode = 'phone'; // 'phone', 'fullscreen', 'admin'
    this.currentAdminTab = 'menu'; // 'menu', 'qr', 'branding', 'kds'
    this.currentDietFilter = 'all';
    this.searchQuery = '';
    this.cart = [];
    this.activeModalDish = null;
    this.qrCodeInstance = null;

    // Available sample tables/rooms for cycling
    this.locations = [
      { id: "loc_table_4", label: "Table 04", type: "table" },
      { id: "loc_table_11", label: "Table 11", type: "table" },
      { id: "loc_table_18", label: "Table 18", type: "table" },
      { id: "loc_room_302", label: "Room 302", type: "room" }
    ];
    this.currentLocationIndex = 0;

    this.init();
  }

  init() {
    this.applyTenantBrand();
    this.renderCustomerHeader();
    this.renderCategoryNav();
    this.renderDishes();
    this.renderAdminMetrics();
    this.renderAdminTable();
    this.renderKdsOrders();
    this.initQrStudio();
  }

  // --------------------------------------------------------------------------
  // TENANT & THEME MANAGEMENT
  // --------------------------------------------------------------------------
  getTenant() {
    return this.data.tenants[this.data.activeTenantId];
  }

  applyTenantBrand() {
    const tenant = this.getTenant();
    document.documentElement.style.setProperty('--primary', tenant.primaryColor);
    document.documentElement.style.setProperty('--primary-gradient', `linear-gradient(135deg, ${tenant.primaryColor} 0%, #0f2c20 100%)`);
    document.documentElement.style.setProperty('--accent', tenant.accentColor);
  }

  switchTenant(tenantId) {
    if (!this.data.tenants[tenantId]) return;
    this.data.activeTenantId = tenantId;
    this.applyTenantBrand();
    this.renderCustomerHeader();
    this.renderCategoryNav();
    this.renderDishes();
    this.renderAdminMetrics();
    this.renderAdminTable();
    this.updateTentCard();

    // Update Admin banner
    const bannerTitle = document.getElementById('adminBannerTenantName');
    if (bannerTitle) bannerTitle.textContent = this.getTenant().name;
  }

  cycleTable() {
    this.currentLocationIndex = (this.currentLocationIndex + 1) % this.locations.length;
    const loc = this.locations[this.currentLocationIndex];
    this.data.activeLocation = loc;

    const label = `${loc.label} • ${loc.type === 'room' ? 'Room Service' : 'Indoor Dining'}`;
    document.getElementById('headerTableLabel').textContent = loc.label;
    document.getElementById('currentDinerTable').textContent = label;
    document.getElementById('cartDrawerTable').textContent = loc.label;
    
    // Also update QR generator input
    const qrNumInput = document.getElementById('qrNumberInput');
    if (qrNumInput) qrNumInput.value = loc.label;
    this.updateTentCard();
  }

  // --------------------------------------------------------------------------
  // VIEW MODE SWITCHING (Phone Simulator / Fullscreen / Admin)
  // --------------------------------------------------------------------------
  setMode(mode) {
    this.currentMode = mode;
    const body = document.body;
    const customerViewport = document.getElementById('customerViewport');
    const adminViewport = document.getElementById('adminViewport');

    // Update buttons
    document.getElementById('btnModePhone').classList.toggle('active', mode === 'phone');
    document.getElementById('btnModeFullscreen').classList.toggle('active', mode === 'fullscreen');
    document.getElementById('btnModeAdmin').classList.toggle('active', mode === 'admin');

    if (mode === 'admin') {
      body.className = 'admin-mode-active';
      customerViewport.style.display = 'none';
      adminViewport.style.display = 'flex';
      this.renderAdminMetrics();
      this.renderAdminTable();
      this.renderKdsOrders();
      this.updateTentCard();
    } else if (mode === 'fullscreen') {
      body.className = 'fullscreen-mode-active';
      customerViewport.style.display = 'flex';
      adminViewport.style.display = 'none';
    } else {
      body.className = 'phone-mode-active';
      customerViewport.style.display = 'flex';
      adminViewport.style.display = 'none';
    }
  }

  // --------------------------------------------------------------------------
  // CUSTOMER MENU RENDERING
  // --------------------------------------------------------------------------
  renderCustomerHeader() {
    const tenant = this.getTenant();
    const heroHeader = document.getElementById('menuHeroHeader');
    heroHeader.style.backgroundImage = `url('${tenant.coverImage}')`;
    document.getElementById('menuHeroLogo').src = tenant.logo;
    document.getElementById('menuHeroName').textContent = tenant.name;
    document.getElementById('menuHeroTagline').textContent = tenant.tagline;
    document.getElementById('menuHeroRating').textContent = tenant.rating;
    document.getElementById('menuHeroReviews').textContent = tenant.reviewsCount;
    document.getElementById('headerTableLabel').textContent = this.data.activeLocation.label;
    document.getElementById('currentDinerTable').textContent = `${this.data.activeLocation.label} • ${this.data.activeLocation.type === 'room' ? 'Room Service' : 'Indoor Dining'}`;
    
    // Admin settings fields
    const sName = document.getElementById('settingNameInput');
    if (sName) {
      sName.value = tenant.name;
      document.getElementById('settingTaglineInput').value = tenant.tagline;
      document.getElementById('settingColorPicker').value = tenant.primaryColor;
      document.getElementById('settingColorHex').value = tenant.primaryColor;
      document.getElementById('settingCoverInput').value = tenant.coverImage;
    }
  }

  renderCategoryNav() {
    const categories = this.data.categories[this.data.activeTenantId] || [];
    const container = document.getElementById('categoryNavBar');
    container.innerHTML = '';

    categories.forEach((cat, idx) => {
      const btn = document.createElement('button');
      btn.className = `cat-nav-item ${idx === 0 ? 'active' : ''}`;
      btn.innerHTML = `${cat.icon || '🍽️'} ${cat.name}`;
      btn.onclick = () => {
        document.querySelectorAll('.cat-nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const section = document.getElementById(`cat_sec_${cat.id}`);
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      container.appendChild(btn);
    });
  }

  renderDishes() {
    const tenantId = this.data.activeTenantId;
    const categories = this.data.categories[tenantId] || [];
    const dishes = this.data.menuItems[tenantId] || [];
    const container = document.getElementById('menuSectionsContainer');
    container.innerHTML = '';

    // Apply dietary & search filters
    const filteredDishes = dishes.filter(item => {
      if (this.currentDietFilter === 'veg' && item.dietary !== 'veg') return false;
      if (this.currentDietFilter === 'non-veg' && item.dietary !== 'non-veg') return false;
      if (this.currentDietFilter === 'vegan' && item.dietary !== 'vegan') return false;
      if (this.currentDietFilter === 'featured' && !item.isFeatured) return false;

      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchIng = (item.ingredients || []).some(i => i.toLowerCase().includes(q));
        const matchAllergens = (item.allergens || []).some(a => a.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchIng && !matchAllergens) return false;
      }
      return true;
    });

    if (filteredDishes.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: #64748b;">
          <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
          <div style="font-weight: 700; color: #1e293b;">No dishes found</div>
          <div style="font-size: 12px; margin-top: 4px;">Try searching for another ingredient or reset your filter.</div>
        </div>
      `;
      return;
    }

    // Group filtered dishes by category
    categories.forEach(cat => {
      const catDishes = filteredDishes.filter(d => d.categoryId === cat.id);
      if (catDishes.length === 0) return;

      const sec = document.createElement('div');
      sec.id = `cat_sec_${cat.id}`;
      sec.innerHTML = `
        <div class="category-section-title">
          <h2>${cat.icon || '🍽️'} ${cat.name}</h2>
          <span class="category-badge-count">${catDishes.length} items</span>
        </div>
        <div class="dishes-grid"></div>
      `;

      const grid = sec.querySelector('.dishes-grid');
      catDishes.forEach(item => {
        const card = document.createElement('div');
        card.className = `dish-card ${!item.isAvailable ? 'is-sold-out' : ''}`;
        card.onclick = (e) => {
          if (!e.target.closest('.add-btn')) {
            this.openDishModal(item.id);
          }
        };

        const dietClass = item.dietary === 'veg' ? 'veg' : (item.dietary === 'non-veg' ? 'non-veg' : 'vegan');

        card.innerHTML = `
          <div class="dish-media-container">
            <img src="${item.image}" alt="${item.name}" class="dish-image" loading="lazy">
            <div class="diet-dot-badge">
              <span class="diet-dot ${dietClass}"></span>
            </div>
            ${!item.isAvailable ? `<div class="sold-out-overlay">Sold Out</div>` : ''}
          </div>
          <div class="dish-details-col">
            <div>
              <div class="dish-header-row">
                <span class="dish-title">${item.name}</span>
                ${item.isFeatured ? '<span class="dish-featured-star">★ Chef\'s Pick</span>' : ''}
              </div>
              <p class="dish-description">${item.description}</p>
              <div class="dish-meta-pills">
                <span class="macro-tag calories">🔥 ${item.nutrition.calories} kcal</span>
                <span class="macro-tag protein">💪 ${item.nutrition.protein}g protein</span>
              </div>
            </div>
            <div class="dish-footer-row">
              <span class="dish-price">₹${item.price}</span>
              <button class="add-btn" ${!item.isAvailable ? 'disabled' : ''} onclick="app.quickAddToCart('${item.id}', event)">
                ${item.isAvailable ? '+ Add' : 'Unavailable'}
              </button>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });

      container.appendChild(sec);
    });
  }

  handleSearch(val) {
    this.searchQuery = val;
    this.renderDishes();
  }

  setDietFilter(type, btn) {
    this.currentDietFilter = type;
    document.querySelectorAll('.diet-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.renderDishes();
  }

  // --------------------------------------------------------------------------
  // DISH DETAILS & NUTRITION FACTS MODAL
  // --------------------------------------------------------------------------
  openDishModal(itemId) {
    const dishes = this.data.menuItems[this.data.activeTenantId] || [];
    const item = dishes.find(d => d.id === itemId);
    if (!item) return;

    this.activeModalDish = item;
    document.getElementById('modalDishImg').src = item.image;
    document.getElementById('modalDishTitle').textContent = item.name;
    document.getElementById('modalDishPrice').textContent = `₹${item.price}`;
    document.getElementById('modalDishDesc').textContent = item.description;

    // Diet Badge
    const dietClass = item.dietary === 'veg' ? 'veg' : (item.dietary === 'non-veg' ? 'non-veg' : 'vegan');
    const dietLabel = item.dietary === 'veg' ? '🟢 Pure Vegetarian' : (item.dietary === 'non-veg' ? '🔴 Non-Vegetarian' : '🌱 100% Vegan');
    document.getElementById('modalDietBadge').innerHTML = `
      <span style="font-size: 11px; font-weight: 700; color: #475569; display: inline-block; margin-bottom: 4px;">${dietLabel}</span>
    `;

    // Nutrition values
    document.getElementById('modalCalVal').textContent = item.nutrition.calories;
    document.getElementById('modalProteinVal').textContent = `${item.nutrition.protein}g`;
    document.getElementById('modalCarbsVal').textContent = `${item.nutrition.carbs}g`;
    document.getElementById('modalFatVal').textContent = `${item.nutrition.fat}g`;
    document.getElementById('modalFiberVal').textContent = `${item.nutrition.fiber || 3.0}g`;

    // Allergens
    const allergensWrap = document.getElementById('modalAllergensWrap');
    const allergensPills = document.getElementById('modalAllergensPills');
    allergensPills.innerHTML = '';
    if (item.allergens && item.allergens.length > 0) {
      allergensWrap.style.display = 'block';
      item.allergens.forEach(a => {
        const badge = document.createElement('span');
        badge.className = 'allergen-badge';
        badge.textContent = `⚠️ Contains ${a}`;
        allergensPills.appendChild(badge);
      });
    } else {
      allergensWrap.style.display = 'none';
    }

    // Ingredients
    const ingPills = document.getElementById('modalIngredientsPills');
    ingPills.innerHTML = '';
    (item.ingredients || []).forEach(ing => {
      const tag = document.createElement('span');
      tag.className = 'ingredient-tag';
      tag.textContent = ing;
      ingPills.appendChild(tag);
    });

    // Add to cart button state
    const btn = document.getElementById('modalAddToCartBtn');
    if (!item.isAvailable) {
      btn.disabled = true;
      btn.textContent = 'Currently Sold Out';
      btn.style.opacity = '0.5';
    } else {
      btn.disabled = false;
      btn.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg> Add to Table Order (₹${item.price})`;
      btn.style.opacity = '1';
    }

    document.getElementById('dishModalOverlay').style.display = 'flex';
  }

  closeDishModal() {
    document.getElementById('dishModalOverlay').style.display = 'none';
    this.activeModalDish = null;
  }

  addModalItemToCart() {
    if (!this.activeModalDish || !this.activeModalDish.isAvailable) return;
    this.quickAddToCart(this.activeModalDish.id);
    this.closeDishModal();
  }

  // --------------------------------------------------------------------------
  // CART & TABLE ORDERING (Phase 2 Preview)
  // --------------------------------------------------------------------------
  quickAddToCart(itemId, e) {
    if (e) e.stopPropagation();
    const dishes = this.data.menuItems[this.data.activeTenantId] || [];
    const item = dishes.find(d => d.id === itemId);
    if (!item || !item.isAvailable) return;

    const existing = this.cart.find(c => c.itemId === itemId);
    if (existing) {
      existing.qty += 1;
    } else {
      this.cart.push({
        itemId: item.id,
        name: item.name,
        price: item.price,
        qty: 1,
        note: ''
      });
    }

    this.updateCartUI();
  }

  updateCartUI() {
    const bar = document.getElementById('floatingCartBar');
    const badge = document.getElementById('cartCountBadge');
    const totalEl = document.getElementById('cartTotalAmount');

    const totalQty = this.cart.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

    if (totalQty > 0) {
      bar.style.display = 'flex';
      badge.textContent = totalQty;
      totalEl.textContent = `₹${subtotal}`;
    } else {
      bar.style.display = 'none';
      this.closeCart();
    }
  }

  openCart() {
    const drawer = document.getElementById('cartDrawer');
    const list = document.getElementById('cartItemsList');
    list.innerHTML = '';

    let subtotal = 0;
    this.cart.forEach(item => {
      subtotal += item.price * item.qty;
      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML = `
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${item.price} each</div>
        </div>
        <div class="qty-counter">
          <button class="qty-btn" onclick="app.changeCartQty('${item.itemId}', -1)">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="app.changeCartQty('${item.itemId}', 1)">+</button>
        </div>
      `;
      list.appendChild(row);
    });

    const gst = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + gst;

    document.getElementById('billSubtotal').textContent = `₹${subtotal}`;
    document.getElementById('billGst').textContent = `₹${gst}`;
    document.getElementById('billGrandTotal').textContent = `₹${grandTotal}`;

    drawer.style.display = 'flex';
  }

  closeCart() {
    document.getElementById('cartDrawer').style.display = 'none';
  }

  changeCartQty(itemId, delta) {
    const item = this.cart.find(c => c.itemId === itemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      this.cart = this.cart.filter(c => c.itemId !== itemId);
    }

    this.updateCartUI();
    if (this.cart.length > 0) {
      this.openCart();
    }
  }

  placeOrder() {
    if (this.cart.length === 0) return;

    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const gst = Math.round(subtotal * 0.05);
    const total = subtotal + gst;
    const specialNote = document.getElementById('orderSpecialNotes').value;

    const orderId = `SNX-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder = {
      id: orderId,
      tenantId: this.data.activeTenantId,
      location: this.data.activeLocation.label,
      items: this.cart.map(c => ({
        name: c.name,
        qty: c.qty,
        price: c.price,
        note: specialNote
      })),
      status: "received", // 'received', 'preparing', 'ready', 'served'
      createdAt: "Just now",
      total: total
    };

    this.data.orders.unshift(newOrder);
    this.cart = [];
    this.updateCartUI();
    this.closeCart();
    this.renderKdsOrders();

    alert(`🎉 Order #${orderId} Dispatched!\nYour order has been transmitted directly to the kitchen display for ${this.data.activeLocation.label}.`);
  }

  // --------------------------------------------------------------------------
  // ADMIN DASHBOARD & MENU CRUD
  // --------------------------------------------------------------------------
  setAdminTab(tab) {
    this.currentAdminTab = tab;
    document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tabBtn${tab.toUpperCase()}`).classList.add('active');

    document.getElementById('adminTabContentMenu').style.display = tab === 'menu' ? 'block' : 'none';
    document.getElementById('adminTabContentQR').style.display = tab === 'qr' ? 'block' : 'none';
    document.getElementById('adminTabContentBranding').style.display = tab === 'branding' ? 'block' : 'none';
    document.getElementById('adminTabContentKDS').style.display = tab === 'kds' ? 'block' : 'none';
  }

  renderAdminMetrics() {
    const dishes = this.data.menuItems[this.data.activeTenantId] || [];
    const activeCount = dishes.filter(d => d.isAvailable).length;
    const soldOutCount = dishes.filter(d => !d.isAvailable).length;

    document.getElementById('kpiActiveItems').textContent = activeCount;
    document.getElementById('kpiSoldOut').textContent = soldOutCount;
    document.getElementById('kpiActiveTables').textContent = this.getTenant().tablesCount;
  }

  renderAdminTable() {
    const tenantId = this.data.activeTenantId;
    const categories = this.data.categories[tenantId] || [];
    const dishes = this.data.menuItems[tenantId] || [];
    const tbody = document.getElementById('adminDishTableBody');
    tbody.innerHTML = '';

    dishes.forEach(dish => {
      const cat = categories.find(c => c.id === dish.categoryId);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="display: flex; align-items: center; gap: 10px;">
          <img src="${dish.image}" class="table-dish-thumb" alt="${dish.name}">
          <div>
            <div style="font-weight: 700; color: #fff;">${dish.name}</div>
            <div style="font-size: 11px; color: #94a3b8;">${dish.ingredients ? dish.ingredients.slice(0, 3).join(', ') : ''}</div>
          </div>
        </td>
        <td><span style="background: rgba(255,255,255,0.06); padding: 3px 8px; border-radius: 4px;">${cat ? cat.name : 'General'}</span></td>
        <td style="font-weight: 800; color: #10b981;">₹${dish.price}</td>
        <td>
          <span style="font-size: 11px; color: #cbd5e1;">${dish.dietary.toUpperCase()}</span> ·
          <span style="color: #ea580c; font-size: 11px; font-weight: 600;">${dish.nutrition.calories} kcal</span>
        </td>
        <td>
          <label class="switch-wrap">
            <input type="checkbox" ${dish.isAvailable ? 'checked' : ''} onchange="app.toggleDishStock('${dish.id}', this.checked)">
            <span class="switch-slider"></span>
          </label>
          <span style="margin-left: 8px; font-size: 12px; color: ${dish.isAvailable ? '#34d399' : '#94a3b8'};">
            ${dish.isAvailable ? 'In Stock' : 'Sold Out'}
          </span>
        </td>
        <td>
          <button style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); padding: 4px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;" onclick="app.deleteDish('${dish.id}')">
            Delete
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  toggleDishStock(dishId, isAvailable) {
    const dishes = this.data.menuItems[this.data.activeTenantId] || [];
    const dish = dishes.find(d => d.id === dishId);
    if (!dish) return;

    dish.isAvailable = isAvailable;
    this.renderAdminMetrics();
    this.renderAdminTable();
    this.renderDishes(); // Instantly synchronizes diner phone menu!
  }

  deleteDish(dishId) {
    if (!confirm('Are you sure you want to remove this dish from the menu?')) return;
    this.data.menuItems[this.data.activeTenantId] = this.data.menuItems[this.data.activeTenantId].filter(d => d.id !== dishId);
    this.renderAdminMetrics();
    this.renderAdminTable();
    this.renderDishes();
  }

  openAddDishModal() {
    const categories = this.data.categories[this.data.activeTenantId] || [];
    const select = document.getElementById('newDishCategory');
    select.innerHTML = '';
    categories.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.icon || ''} ${c.name}`;
      select.appendChild(opt);
    });

    document.getElementById('newDishName').value = '';
    document.getElementById('newDishPrice').value = '';
    document.getElementById('newDishDesc').value = '';
    document.getElementById('addDishModalOverlay').style.display = 'flex';
  }

  closeAddDishModal() {
    document.getElementById('addDishModalOverlay').style.display = 'none';
  }

  saveNewDish() {
    const name = document.getElementById('newDishName').value.trim();
    const catId = document.getElementById('newDishCategory').value;
    const price = parseFloat(document.getElementById('newDishPrice').value) || 299;
    const diet = document.getElementById('newDishDietary').value;
    const image = document.getElementById('newDishImageSelect').value;
    const desc = document.getElementById('newDishDesc').value.trim() || 'Prepared fresh with signature ingredients and chef seasonings.';
    const calories = parseInt(document.getElementById('newDishCalories').value) || 380;
    const protein = parseFloat(document.getElementById('newDishProtein').value) || 14;
    const carbs = parseFloat(document.getElementById('newDishCarbs').value) || 40;
    const fat = parseFloat(document.getElementById('newDishFat').value) || 12;
    const allergensStr = document.getElementById('newDishAllergens').value;

    if (!name) {
      alert('Please enter a dish title.');
      return;
    }

    const newDish = {
      id: `item_${Date.now()}`,
      categoryId: catId,
      name: name,
      description: desc,
      price: price,
      image: image,
      dietary: diet,
      isFeatured: false,
      isAvailable: true,
      spicyLevel: 1,
      nutrition: {
        calories: calories,
        protein: protein,
        carbs: carbs,
        fat: fat,
        fiber: 3.5
      },
      allergens: allergensStr ? allergensStr.split(',').map(s => s.trim()) : [],
      ingredients: ["Chef Signature Blend", "Fresh Herbs"]
    };

    this.data.menuItems[this.data.activeTenantId].unshift(newDish);
    this.closeAddDishModal();
    this.renderAdminMetrics();
    this.renderAdminTable();
    this.renderDishes();
    alert(`✨ "${name}" published to live menu!`);
  }

  // --------------------------------------------------------------------------
  // TABLE & ROOM QR CODE STUDIO & LIVE GENERATOR
  // --------------------------------------------------------------------------
  initQrStudio() {
    this.updateTentCard();
  }

  handleQRLocationChange() {
    const type = document.getElementById('qrLocationType').value;
    const input = document.getElementById('qrNumberInput');
    if (type === 'room') {
      input.value = 'Room 201';
    } else {
      input.value = 'Table 04';
    }
    this.updateTentCard();
  }

  updateTentCard() {
    const tenant = this.getTenant();
    const locationVal = document.getElementById('qrNumberInput')?.value || "Table 04";
    const instructionVal = document.getElementById('qrInstructionInput')?.value || "Scan with Phone Camera to View Menu & Order";
    const wifiSsid = document.getElementById('qrWifiSsidInput')?.value || tenant.wifiSsid;
    const wifiPass = document.getElementById('qrWifiPassInput')?.value || tenant.wifiPass;

    document.getElementById('tentCardRestName').textContent = tenant.name;
    document.getElementById('tentCardRestTagline').textContent = tenant.tagline;
    document.getElementById('tentCardLocationBadge').textContent = locationVal;
    document.getElementById('tentCardInstructions').textContent = instructionVal;
    document.getElementById('tentWifiName').textContent = wifiSsid;
    document.getElementById('tentWifiPass').textContent = wifiPass;

    // Generate Scannable QR Code
    // We encode the simulated live destination URL:
    const targetUrl = `https://synexa.menu/${tenant.slug}?table=${encodeURIComponent(locationVal)}`;
    const qrContainer = document.getElementById('tentQrCodeElement');
    if (qrContainer && typeof QRCode !== 'undefined') {
      qrContainer.innerHTML = '';
      this.qrCodeInstance = new QRCode(qrContainer, {
        text: targetUrl,
        width: 140,
        height: 140,
        colorDark: "#0f172a",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  }

  // --------------------------------------------------------------------------
  // BRAND SETTINGS
  // --------------------------------------------------------------------------
  saveBrandSettings() {
    const tenant = this.getTenant();
    tenant.name = document.getElementById('settingNameInput').value;
    tenant.tagline = document.getElementById('settingTaglineInput').value;
    tenant.primaryColor = document.getElementById('settingColorPicker').value;
    tenant.coverImage = document.getElementById('settingCoverInput').value;

    this.applyTenantBrand();
    this.renderCustomerHeader();
    this.updateTentCard();
    alert('✅ Brand settings saved and applied to live menu!');
  }

  // --------------------------------------------------------------------------
  // KITCHEN DISPLAY (KDS)
  // --------------------------------------------------------------------------
  renderKdsOrders() {
    const container = document.getElementById('kdsOrdersGrid');
    if (!container) return;
    container.innerHTML = '';

    const orders = this.data.orders.filter(o => o.tenantId === this.data.activeTenantId);
    if (orders.length === 0) {
      container.innerHTML = `<div style="color: #64748b; font-size: 13px;">No active orders currently for this venue.</div>`;
      return;
    }

    orders.forEach(ord => {
      const card = document.createElement('div');
      card.style.background = 'rgba(255, 255, 255, 0.03)';
      card.style.border = '1px solid rgba(255, 255, 255, 0.08)';
      card.style.borderRadius = '12px';
      card.style.padding = '16px';

      const statusColors = {
        received: { bg: '#3b82f6', text: '#fff' },
        preparing: { bg: '#f59e0b', text: '#000' },
        ready: { bg: '#10b981', text: '#fff' },
        served: { bg: '#6b7280', text: '#fff' }
      };
      const st = statusColors[ord.status] || statusColors.received;

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <div>
            <div style="font-weight: 800; font-size: 15px; color: #fff;">${ord.id}</div>
            <div style="font-size: 12px; color: #34d399; font-weight: 700;">📍 ${ord.location}</div>
          </div>
          <span style="font-size: 10px; font-weight: 800; text-transform: uppercase; background: ${st.bg}; color: ${st.text}; padding: 3px 8px; border-radius: 4px;">
            ${ord.status}
          </span>
        </div>
        <div style="border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 8px; margin-bottom: 12px; font-size: 13px;">
          ${ord.items.map(i => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span><strong>${i.qty}x</strong> ${i.name}</span>
              <span style="color: #94a3b8;">₹${i.price * i.qty}</span>
            </div>
            ${i.note ? `<div style="font-size: 11px; color: #fbbf24; margin-bottom: 6px;">Note: "${i.note}"</div>` : ''}
          `).join('')}
        </div>
        <div style="display: flex; gap: 6px; justify-content: flex-end;">
          <button style="background: rgba(255,255,255,0.1); color: #fff; border: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; cursor: pointer;" onclick="app.updateOrderStatus('${ord.id}', 'preparing')">Preparing</button>
          <button style="background: rgba(16,185,129,0.2); color: #34d399; border: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; cursor: pointer;" onclick="app.updateOrderStatus('${ord.id}', 'ready')">Ready</button>
          <button style="background: rgba(255,255,255,0.06); color: #94a3b8; border: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; cursor: pointer;" onclick="app.updateOrderStatus('${ord.id}', 'served')">Served</button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  updateOrderStatus(orderId, newStatus) {
    const order = this.data.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      this.renderKdsOrders();
    }
  }

  // --------------------------------------------------------------------------
  // GUIDE MODAL
  // --------------------------------------------------------------------------
  openArchitectureModal() {
    document.getElementById('archModalOverlay').style.display = 'flex';
  }

  closeArchitectureModal() {
    document.getElementById('archModalOverlay').style.display = 'none';
  }
}

// Instantiate on load
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new SynexaApp();
});
