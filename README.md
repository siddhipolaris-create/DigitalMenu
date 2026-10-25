# DigitalMenu — Multi-Tenant QR Digital Menu Platform
Digital Menu MVP · Shiv Sagar Pure Veg Restaurant (Pune)

> **Live Interactive Implementation & Architecture Prototype**  
> Inspired by the digital menu platform plan for hotels & restaurants.

---

## 🚀 Live Demo & How to Run

You can launch and test the application immediately using any local web server.

### Option 1: Python Built-in Server (Recommended)
```bash
cd "C:\Users\Sudesh Kumbhar\.gemini\antigravity-ide\scratch\synexa-menu-platform"
python -m http.server 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option 2: Node / npx serve
```bash
npx -y serve . -p 3000
```

---

## 🌟 Key Features Implemented

### 1. Customer-Facing Digital Menu (Mobile Web)
- **Zero App Download**: Scanned via phone camera, opens instantly in browser.
- **Realistic iPhone 16 Pro Simulator & Fullscreen Mode**: Easy testing on desktop or mobile.
- **Categorized Menu & Dynamic Filtering**:
  - Filter by dietary preferences: 🟢 Pure Veg, 🔴 Non-Veg, 🌱 Vegan, ⭐ Chef's Specials.
  - Real-time search across dish titles, ingredients, and allergens.
- **High-Resolution Culinary Assets**: Pre-loaded with custom-generated photorealistic dishes.
- **Dish Details & Nutrition Modal**:
  - Caloric counts (`kcal`) and macro breakdown (**Protein**, **Carbohydrates**, **Fats**, **Dietary Fiber**).
  - Prominent allergen warning badges (e.g. *Contains Dairy*, *Gluten-Free*).
  - Fresh ingredient list and chef's tasting notes.
- **Phase 2 Table Order Preview**:
  - Add dishes to table cart, adjust quantities.
  - Special cooking instruction input (e.g. *"Extra mint chutney, less spicy"*).
  - Automated 5% GST bill calculation.
  - "Send Order to Kitchen" action simulating live order transmission.

### 2. Reusable Multi-Tenant Admin Portal
- **Tenant Switcher**: Switch on the fly between:
  - *The Olive Kitchen & Bistro* (Italian/Mediterranean palette `#1b4332`)
  - *Royal Amber Palace Hotel* (Heritage Luxury Dining `#b45309`)
- **Real-Time Stock Availability Toggle**:
  - Switch any dish between **"In Stock"** and **"Sold Out"**.
  - Immediately updates the diner's phone menu in real time without refreshing.
- **Add New Dish Modal**:
  - Upload/select photos, set categories, pricing, calories, protein, allergens.
- **Table & Room QR Code Studio**:
  - Select Table # (1 to 24) or Hotel Room # (101 to 404).
  - Generates authentic, vector-sharp QR codes targeting `?tenant=...&table=...`.
  - Preview & print formatted **Table Tent Cards** with `@media print` layout.
- **Branding Customizer**:
  - Customize restaurant name, tagline, cover banner, and live primary accent color.
- **Kitchen Display System (KDS)**:
  - Real-time incoming table orders with live status toggles (*Received → Preparing → Ready → Served*).

---

## 🗄️ Database Architecture (Supabase / PostgreSQL)

When taking this to production, connect to a **Supabase** instance using the schema below:

```sql
-- 1. Businesses / Tenants
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  business_type TEXT CHECK (business_type IN ('restaurant', 'hotel', 'cafe')),
  logo_url TEXT,
  banner_url TEXT,
  primary_color TEXT DEFAULT '#1b4332',
  currency TEXT DEFAULT '₹',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 2. Menu Categories
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true
);

-- 3. Menu Items
CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  dietary_type TEXT CHECK (dietary_type IN ('veg', 'non-veg', 'vegan')),
  is_available BOOLEAN DEFAULT true,
  calories INT,
  protein_grams DECIMAL(5, 1),
  carbs_grams DECIMAL(5, 1),
  fat_grams DECIMAL(5, 1),
  allergens TEXT[],
  ingredients TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 4. Locations & QR Codes
CREATE TABLE locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  label TEXT NOT NULL, -- e.g. "Table 4", "Room 201"
  qr_code_url TEXT
);

-- 5. Orders & KDS
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  location_id UUID REFERENCES locations(id),
  status TEXT CHECK (status IN ('received', 'preparing', 'ready', 'served', 'cancelled')) DEFAULT 'received',
  total_amount DECIMAL(10, 2) NOT NULL,
  special_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);
```

---

## 📁 File Structure

```
synexa-menu-platform/
├── index.html              # Main single-page application with dual viewports
├── styles.css              # Glassmorphic culinary design system & print rules
├── data.js                 # Multi-tenant state & sample menu catalog
├── app.js                  # Application controller, QR engine, and KDS logic
├── assets/
│   ├── qrcode.min.js       # Offline vector QR generator
│   ├── paneer-tikka.jpg    # Signature starter
│   ├── truffle-pasta.jpg   # Signature pasta main
│   ├── choco-lava.jpg      # Signature dessert
│   └── passion-mocktail.jpg# Signature beverage
└── README.md               # Documentation & setup guide
```
>>>>>>> ce72498 (feat: Shiv Sagar Pure Veg Restaurant digital menu platform)
