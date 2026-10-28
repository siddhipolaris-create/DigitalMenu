// Initial Multi-Tenant Database Simulation
// Updated with Shiv Sagar Pure Veg Restaurant, JM Road, Pune menu as per PDF

const INITIAL_DATA = {
  "activeTenantId": "tenant_olive",
  "activeLocation": {
    "id": "loc_table_4",
    "label": "Table 04",
    "type": "table"
  },
  "tenants": {
    "tenant_olive": {
      "id": "tenant_olive",
      "name": "Shiv Sagar Pure Veg Restaurant",
      "slug": "shiv-sagar-pune",
      "type": "restaurant",
      "tagline": "Pure Veg Multi-Cuisine Since 1981 · JM Road, Shivajinagar, Pune",
      "logo": "assets/shiv-sagar-emblem.png",
      "coverImage": "assets/shiv-sagar-cover.jpg",
      "primaryColor": "#e64a19",
      "accentColor": "#f59e0b",
      "currency": "₹",
      "rating": "4.8",
      "reviewsCount": "1,420",
      "openingHours": "9:00 AM - 11:30 PM",
      "wifiSsid": "ShivSagar_Guest",
      "wifiPass": "shivsagar1981",
      "gstPercent": 5,
      "tablesCount": 36,
      "roomsCount": 0
    },
    "tenant_royal": {
      "id": "tenant_royal",
      "name": "Royal Amber Palace Hotel",
      "slug": "royal-amber",
      "type": "hotel",
      "tagline": "Heritage Luxury Dining & 24/7 In-Room Service",
      "logo": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=150&q=80",
      "coverImage": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "primaryColor": "#b45309",
      "accentColor": "#f59e0b",
      "currency": "₹",
      "rating": "4.8",
      "reviewsCount": "512",
      "openingHours": "Open 24 Hours",
      "wifiSsid": "RoyalAmber_HighSpeed",
      "wifiPass": "palace5star",
      "gstPercent": 5,
      "tablesCount": 16,
      "roomsCount": 120
    }
  },
  "categories": {
    "tenant_olive": [
      {
        "id": "cat_pav_bhaji",
        "name": "Pav Bhaji & Fast Food",
        "icon": "🍲"
      },
      {
        "id": "cat_idli_wada",
        "name": "South Indian Idli & Wada",
        "icon": "🥞"
      },
      {
        "id": "cat_dosa_uttappa",
        "name": "Crispy Dosas & Uttappas",
        "icon": "🫓"
      },
      {
        "id": "cat_sandwiches",
        "name": "Sandwiches & Grilled Toasts",
        "icon": "🥪"
      },
      {
        "id": "cat_pizzas",
        "name": "Wood-Fired & Pan Pizzas",
        "icon": "🍕"
      },
      {
        "id": "cat_pastas",
        "name": "Pastas (Indian Style)",
        "icon": "🍝"
      },
      {
        "id": "cat_mexican",
        "name": "Indian Mexican",
        "icon": "🌮"
      },
      {
        "id": "cat_sizzlers",
        "name": "Sizzlers",
        "icon": "🔥"
      },
      {
        "id": "cat_chinese_starters",
        "name": "Chinese Soups",
        "icon": "🥢"
      },
      {
        "id": "cat_chinese_mains",
        "name": "Chinese Noodles, Rice & Gravies",
        "icon": "🥡"
      },
      {
        "id": "cat_tandoor",
        "name": "Tandoor Starters & Snacks",
        "icon": "🍢"
      },
      {
        "id": "cat_indian_gravies",
        "name": "North Indian Curries & Gravies",
        "icon": "🍛"
      },
      {
        "id": "cat_kadhai",
        "name": "Nawabi Kadhai Specials",
        "icon": "🥘"
      },
      {
        "id": "cat_rotis",
        "name": "Tokhri Khana (Rotis & Naans)",
        "icon": "🫓"
      },
      {
        "id": "cat_biryanis",
        "name": "Biryani, Pulav & Rice",
        "icon": "🍚"
      },
      {
        "id": "cat_salads_raita",
        "name": "Salads & Fresh Raitas",
        "icon": "🥗"
      },
      {
        "id": "cat_mocktails",
        "name": "Mocktails & Coolers",
        "icon": "🍹"
      },
      {
        "id": "cat_juices_shakes",
        "name": "Fresh Juices & Milkshakes",
        "icon": "🥤"
      },
      {
        "id": "cat_falooda_desserts",
        "name": "Faloodas, Lassi & Sundaes",
        "icon": "🍨"
      },
      {
        "id": "cat_hot_beverages",
        "name": "Hot Beverages & Accompaniments",
        "icon": "☕"
      }
    ],
    "tenant_royal": [
      {
        "id": "cat_royal_breakfast",
        "name": "Palatial Breakfast",
        "icon": "🍳"
      },
      {
        "id": "cat_royal_tandoor",
        "name": "Royal Tandoori Kebab",
        "icon": "🍢"
      },
      {
        "id": "cat_royal_mains",
        "name": "Awadhi & Mughlai Mains",
        "icon": "🍛"
      },
      {
        "id": "cat_royal_dessert",
        "name": "Shahi Mithai & Delicacies",
        "icon": "🍧"
      },
      {
        "id": "cat_royal_drinks",
        "name": "Nectar & Mocktails",
        "icon": "🥂"
      }
    ]
  },
  "menuItems": {
    "tenant_olive": [
      {
        "id": "ss_pav_bhaji",
        "categoryId": "cat_pav_bhaji",
        "name": "Pav Bhaji",
        "description": "Shiv Sagar's legendary mashed vegetable bhaji slow-cooked on a wide tava with fragrant spices and rich dollop of Amul butter, served with two golden toasted pavs, chopped onions and lemon.",
        "price": 175,
        "image": "assets/pav_bhaji/Pav-bhaji.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "8-10 mins",
        "nutrition": {
          "calories": 480,
          "protein": 11.0,
          "carbs": 62.0,
          "fat": 20.5,
          "fiber": 7.0,
          "sodium": 620
        },
        "allergens": [
          "Dairy",
          "Gluten"
        ],
        "ingredients": [
          "Potato",
          "Green Peas",
          "Tomato",
          "Capsicum",
          "Amul Butter",
          "Shiv Sagar Special Spices",
          "Pav Bread"
        ]
      },
      {
        "id": "ss_jain_pav_bhaji",
        "categoryId": "cat_pav_bhaji",
        "name": "Jain Pav Bhaji",
        "description": "Authentic Jain recipe without onion, garlic, or potatoes, prepared with raw banana, green peas, and fresh tomatoes in special aromatic spices.",
        "price": 185,
        "image": "assets/pav_bhaji/Jain-PavBhaji.png",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "10-12 mins",
        "nutrition": {
          "calories": 420,
          "protein": 9.5,
          "carbs": 58.0,
          "fat": 17.0,
          "fiber": 6.5,
          "sodium": 540
        },
        "allergens": [
          "Dairy",
          "Gluten"
        ],
        "ingredients": [
          "Raw Green Banana",
          "Green Peas",
          "Tomatoes",
          "Amul Butter",
          "Jain Spices",
          "Pav Bread"
        ]
      },
      {
        "id": "ss_cheese_pav_bhaji",
        "categoryId": "cat_pav_bhaji",
        "name": "Cheese Pav Bhaji",
        "description": "Rich tava bhaji generously smothered with a thick snowy blanket of grated processed cheese, served with two hot buttered pavs.",
        "price": 220,
        "image": "assets/pav_bhaji/cheese_pav_bhaji.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 590,
          "protein": 18.0,
          "carbs": 64.0,
          "fat": 29.0,
          "fiber": 7.0,
          "sodium": 780
        },
        "allergens": [
          "Dairy",
          "Gluten"
        ],
        "ingredients": [
          "Bhaji Mash",
          "Processed Cheese",
          "Amul Butter",
          "Spiced Gravy",
          "Pav Bread"
        ]
      },
      {
        "id": "ss_kada_handi_pav_bhaji",
        "categoryId": "cat_pav_bhaji",
        "name": "Kada Handi Pav Bhaji",
        "description": "Rustic, coarse handi-style bhaji with whole simmered vegetables and freshly pounded whole garam spices, served steaming hot.",
        "price": 205,
        "image": "assets/pav_bhaji/kada-handi-pavbhaji.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 3,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 495,
          "protein": 11.5,
          "carbs": 63.0,
          "fat": 21.0,
          "fiber": 8.0,
          "sodium": 660
        },
        "allergens": [
          "Dairy",
          "Gluten"
        ],
        "ingredients": [
          "Coarse Vegetable Blend",
          "Whole Spices",
          "Handi Gravy",
          "Pure Butter",
          "Pav Bread"
        ]
      },
      {
        "id": "ss_paneer_pav_bhaji",
        "categoryId": "cat_pav_bhaji",
        "name": "Paneer Pav Bhaji",
        "description": "Succulent cubes of fresh cottage cheese tossed in the simmering butter bhaji and garnished with grated malai paneer.",
        "price": 200,
        "image": "assets/pav_bhaji/paneer-pavbhaji.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 530,
          "protein": 19.0,
          "carbs": 61.0,
          "fat": 24.0,
          "fiber": 7.0,
          "sodium": 640
        },
        "allergens": [
          "Dairy",
          "Gluten"
        ],
        "ingredients": [
          "Fresh Paneer",
          "Vegetable Mash",
          "Butter",
          "Tomato Coulis",
          "Pav Bread"
        ]
      },
      {
        "id": "ss_masala_pav",
        "categoryId": "cat_pav_bhaji",
        "name": "Masala Pav (2 pcs.)",
        "description": "Two soft pavs slathered with spicy onion-tomato-capsicum bhaji masala on the roaring hot tawa, finished with butter and coriander.",
        "price": 135,
        "image": "assets/pav_bhaji/masala-pav.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "6 mins",
        "nutrition": {
          "calories": 360,
          "protein": 8.0,
          "carbs": 52.0,
          "fat": 14.0,
          "fiber": 4.5,
          "sodium": 510
        },
        "allergens": [
          "Dairy",
          "Gluten"
        ],
        "ingredients": [
          "Soft Pav",
          "Tawa Bhaji Masala",
          "Chopped Onions",
          "Coriander",
          "Butter"
        ]
      },
      {
        "id": "ss_cheese_masala_pav",
        "categoryId": "cat_pav_bhaji",
        "name": "Cheese Masala Pav",
        "description": "Tawa-grilled buttered masala pav stuffed and topped with melted stringy cheese and chopped fresh coriander.",
        "price": 165,
        "image": "assets/pav_bhaji/cheese-masalapav.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 440,
          "protein": 14.5,
          "carbs": 53.0,
          "fat": 21.0,
          "fiber": 4.5,
          "sodium": 680
        },
        "allergens": [
          "Dairy",
          "Gluten"
        ],
        "ingredients": [
          "Soft Pav",
          "Tawa Masala",
          "Processed Cheese",
          "Butter"
        ]
      },
      {
        "id": "ss_roasted_masala_papad",
        "categoryId": "cat_pav_bhaji",
        "name": "Roasted Masala Papad",
        "description": "Crisp dry roasted lentil papad topped with crunchy diced onions, juicy tomatoes, fresh coriander, and chatpata chaat masala.",
        "price": 40,
        "image": "assets/pav_bhaji/rosted-masalapapad.jpg",
        "dietary": "vegan",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "3 mins",
        "nutrition": {
          "calories": 75,
          "protein": 4.0,
          "carbs": 12.0,
          "fat": 1.0,
          "fiber": 2.0,
          "sodium": 280
        },
        "allergens": [],
        "ingredients": [
          "Urad Dal Papad",
          "Finely Chopped Onion",
          "Tomato",
          "Chaat Masala",
          "Lemon Juice"
        ]
      },
      {
        "id": "ss_steam_idli",
        "categoryId": "cat_idli_wada",
        "name": "Steam Idli (2 pcs.)",
        "description": "Pillowy, feather-light steamed rice and urad lentil cakes served with Shiv Sagar's signature piping-hot sambar and fresh coconut chutney.",
        "price": 85,
        "image": "assets/South Indian Idli & Wada/steam-idli.jpg",
        "dietary": "vegan",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 180,
          "protein": 6.5,
          "carbs": 36.0,
          "fat": 1.0,
          "fiber": 3.0,
          "sodium": 290
        },
        "allergens": [],
        "ingredients": [
          "Fermented Rice Batter",
          "Urad Dal",
          "Coconut Chutney",
          "Toor Dal Sambar"
        ]
      },
      {
        "id": "ss_butter_idli",
        "categoryId": "cat_idli_wada",
        "name": "Butter Idli",
        "description": "Two piping hot steamed idlis doused with melting golden butter, served with rich coconut chutney and sambar.",
        "price": 100,
        "image": "assets/South Indian Idli & Wada/butter-idli .jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 260,
          "protein": 6.5,
          "carbs": 36.0,
          "fat": 10.0,
          "fiber": 3.0,
          "sodium": 360
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Steamed Idli",
          "Country Butter",
          "Fresh Coconut Chutney",
          "Sambar"
        ]
      },
      {
        "id": "ss_rava_idli",
        "categoryId": "cat_idli_wada",
        "name": "Rava Idli",
        "description": "Traditional Karnataka style semolina idlis tempered with mustard seeds, curry leaves, ginger, cashew nuts, and grated carrot.",
        "price": 90,
       "image": "assets/South Indian Idli & Wada/rava-idli.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 210,
          "protein": 5.8,
          "carbs": 38.0,
          "fat": 4.5,
          "fiber": 2.5,
          "sodium": 310
        },
        "allergens": [
          "Gluten",
          "Nuts"
        ],
        "ingredients": [
          "Semolina Rava",
          "Curd",
          "Cashew Nuts",
          "Mustard Tempering",
          "Curry Leaves"
        ]
      },
      {
        "id": "ss_medu_wada",
        "categoryId": "cat_idli_wada",
        "name": "Medu Wada (2 pcs.)",
        "description": "Golden crisp on the outside, fluffy soft inside, spiced with whole peppercorns, fresh ginger, and curry leaves. Served with coconut chutney and sambar.",
        "price": 100,
        "image": "assets/South Indian Idli & Wada/Medu Wada.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 330,
          "protein": 11.2,
          "carbs": 34.0,
          "fat": 17.0,
          "fiber": 5.0,
          "sodium": 380
        },
        "allergens": [],
        "ingredients": [
          "Urad Dal",
          "Black Pepper",
          "Fresh Ginger",
          "Curry Leaves",
          "Coconut Chutney"
        ]
      },
      {
        "id": "ss_idli_medu_wada_plate",
        "categoryId": "cat_idli_wada",
        "name": "Idli Medu Wada Plate",
        "description": "The quintessential South Indian breakfast combo: one steamed fluffy idli and one crispy golden medu wada with hot sambar and chutney.",
        "price": 95,
        "image": "assets/South Indian Idli & Wada/Idli Medu Wada Plate.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 255,
          "protein": 8.8,
          "carbs": 35.0,
          "fat": 9.0,
          "fiber": 4.0,
          "sodium": 335
        },
        "allergens": [],
        "ingredients": [
          "Steamed Idli",
          "Crispy Medu Wada",
          "Hot Sambar",
          "Coconut Chutney"
        ]
      },
      {
        "id": "ss_dahi_wada",
        "categoryId": "cat_idli_wada",
        "name": "Dahi Wada",
        "description": "Soft lentil wadas steeped in chilled creamy beaten yogurt, garnished with roasted cumin powder, sweet tamarind chutney, and red chilli powder.",
        "price": 135,
        "image": "assets/South Indian Idli & Wada/Dahi Wada.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "6 mins",
        "nutrition": {
          "calories": 310,
          "protein": 10.5,
          "carbs": 38.0,
          "fat": 13.0,
          "fiber": 3.5,
          "sodium": 420
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Urad Wada",
          "Thick Sweetened Dahi",
          "Roasted Jeera",
          "Saunth Chutney",
          "Coriander"
        ]
      },
      {
        "id": "ss_sada_dosa",
        "categoryId": "cat_dosa_uttappa",
        "name": "Sada Dosa",
        "description": "Thin, golden, paper-crisp crepe crafted from fermented rice & lentil batter, served folded with warm spiced sambar and coconut chutney.",
        "price": 100,
        "image": "assets/Crispy Dosas & Uttappas/Sada Dosa.jpg",
        "dietary": "vegan",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 280,
          "protein": 6.2,
          "carbs": 48.0,
          "fat": 7.0,
          "fiber": 3.2,
          "sodium": 340
        },
        "allergens": [],
        "ingredients": [
          "Fermented Dosa Batter",
          "Coconut Chutney",
          "Sambar"
        ]
      },
      {
        "id": "ss_masala_dosa",
        "categoryId": "cat_dosa_uttappa",
        "name": "Masala Dosa",
        "description": "Crispy golden crepe wrapped around Shiv Sagar's signature mildly spiced potato bhaji with caramelized onions, mustard seeds, and turmeric.",
        "price": 135,
        "image": "assets/Crispy Dosas & Uttappas/Masala -Dosa.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 390,
          "protein": 8.5,
          "carbs": 62.0,
          "fat": 12.0,
          "fiber": 5.0,
          "sodium": 520
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Crisp Dosa Crepe",
          "Spiced Aloo Bhaji",
          "Pure Butter",
          "Coconut Chutney",
          "Sambar"
        ]
      },
      {
        "id": "ss_mysore_masala_dosa",
        "categoryId": "cat_dosa_uttappa",
        "name": "Mysore Masala Dosa (Green Chutney)",
        "description": "Crisp crepe smeared with Shiv Sagar's fiery herbal spicy green chutney and stuffed with spiced potato bhaji and fresh onions.",
        "price": 135,
        "image": "assets/Crispy Dosas & Uttappas/Mysore Masala- Dosa(Green Chutney).jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 410,
          "protein": 8.8,
          "carbs": 63.0,
          "fat": 13.5,
          "fiber": 5.2,
          "sodium": 580
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Dosa Crepe",
          "Mysore Green Chutney",
          "Potato Bhaji",
          "Butter",
          "Sambar"
        ]
      },
      {
        "id": "ss_cheese_mysore_masala",
        "categoryId": "cat_dosa_uttappa",
        "name": "Cheese Mysore Masala Dosa (Green Chutney)",
        "description": "Shiv Sagar's all-time bestseller! Crisp roasted dosa lined with piquant Mysore green chutney, stuffed with potato masala and a generous layer of melted cheese.",
        "price": 230,
        "image": "assets/Crispy Dosas & Uttappas/Cheese Mysore Masala -Dosa        (Green Chutney).jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "10-12 mins",
        "nutrition": {
          "calories": 520,
          "protein": 16.0,
          "carbs": 64.0,
          "fat": 23.0,
          "fiber": 5.5,
          "sodium": 720
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Dosa Crepe",
          "Mysore Green Chutney",
          "Processed Cheese",
          "Aloo Masala",
          "Butter"
        ]
      },
      {
        "id": "ss_rava_masala_dosa",
        "categoryId": "cat_dosa_uttappa",
        "name": "Rava Masala Dosa",
        "description": "Delicate lace-pattern semolina dosa made with peppercorns, cumin, ginger, and green chillies, folded with spicy potato masala inside.",
        "price": 145,
        "image": "assets/Crispy Dosas & Uttappas/Rava Masala - Dosa.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 430,
          "protein": 8.2,
          "carbs": 65.0,
          "fat": 15.0,
          "fiber": 4.5,
          "sodium": 510
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Semolina Rava",
          "Rice Flour",
          "Black Peppercorns",
          "Jeera",
          "Aloo Masala"
        ]
      },
      {
        "id": "ss_rava_cheese_masala",
        "categoryId": "cat_dosa_uttappa",
        "name": "Rava Cheese Masala",
        "description": "Lacy, ultra-crispy semolina crepe loaded with grated cheese, diced onions, and spiced potato filling.",
        "price": 240,
        "image": "assets/Crispy Dosas & Uttappas/Rava Cheese Masala-dosa.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 540,
          "protein": 15.5,
          "carbs": 66.0,
          "fat": 24.0,
          "fiber": 4.5,
          "sodium": 710
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Semolina Rava",
          "Processed Cheese",
          "Potato Masala",
          "Curry Leaves"
        ]
      },
      {
        "id": "ss_paper_masala_dosa",
        "categoryId": "cat_dosa_uttappa",
        "name": "Paper Masala Dosa",
        "description": "Extra-large thin wafer-crisp giant dosa roasted with butter, served rolled with aloo bhaji, sambar, and coconut chutney.",
        "price": 280,
        "image": "assets/Crispy Dosas & Uttappas/Paper Masala Dosa.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "12-14 mins",
        "nutrition": {
          "calories": 510,
          "protein": 9.5,
          "carbs": 76.0,
          "fat": 18.0,
          "fiber": 5.0,
          "sodium": 560
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Paper Dosa Batter",
          "Pure Butter",
          "Potato Masala",
          "Chutney",
          "Sambar"
        ]
      },
      {
        "id": "ss_schezwan_cheese_masala",
        "categoryId": "cat_dosa_uttappa",
        "name": "Schezwan Cheese Masala",
        "description": "Fusion favorite combining crunchy dosa base with tangy spicy Schezwan sauce, melted cheese, and savoury potato stuffing.",
        "price": 240,
        "image": "assets/Crispy Dosas & Uttappas/Schezwan Cheese Masala-dosa.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 3,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 530,
          "protein": 15.2,
          "carbs": 65.0,
          "fat": 23.5,
          "fiber": 5.0,
          "sodium": 790
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Dosa Batter",
          "Schezwan Sauce",
          "Processed Cheese",
          "Potato Bhaji"
        ]
      },
      {
        "id": "ss_onion_uttappa",
        "categoryId": "cat_dosa_uttappa",
        "name": "Onion Uttappa",
        "description": "Thick, soft fermented rice-lentil pancake embedded with sweet caramelized finely chopped red onions and green chillies.",
        "price": 120,
        "image": "assets/Crispy Dosas & Uttappas/Onion Uttappa.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 320,
          "protein": 7.5,
          "carbs": 54.0,
          "fat": 8.5,
          "fiber": 4.0,
          "sodium": 420
        },
        "allergens": [],
        "ingredients": [
          "Uttappa Batter",
          "Red Onions",
          "Green Chillies",
          "Fresh Coriander"
        ]
      },
      {
        "id": "ss_cheese_tomato_onion_uttappa",
        "categoryId": "cat_dosa_uttappa",
        "name": "Cheese Tomato Onion Uttappa",
        "description": "Fluffy golden pancake topped with diced ripe tomatoes, pungent onions, coriander, and finished with a rich layer of melted cheese.",
        "price": 215,
        "image": "assets/Crispy Dosas & Uttappas/Cheese Tomato Onion -Uttappa.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 460,
          "protein": 15.0,
          "carbs": 56.0,
          "fat": 20.0,
          "fiber": 4.5,
          "sodium": 680
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Uttappa Batter",
          "Tomatoes",
          "Onions",
          "Processed Cheese",
          "Butter"
        ]
      },
      {
        "id": "ss_tomato_omlet",
        "categoryId": "cat_dosa_uttappa",
        "name": "Tomato Omlet (Pure Veg)",
        "description": "Shiv Sagar's iconic Maharashtra classic! 100% Pure vegetarian savory spiced gram flour (besan) pancake with tomatoes, onions, and herbs.",
        "price": 140,
        "image": "assets/Crispy Dosas & Uttappas/Tomato Omlet.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 290,
          "protein": 12.0,
          "carbs": 38.0,
          "fat": 9.5,
          "fiber": 6.0,
          "sodium": 460
        },
        "allergens": [],
        "ingredients": [
          "Gram Flour Besan",
          "Tomatoes",
          "Onions",
          "Green Chillies",
          "Coriander",
          "Cumin"
        ]
      },
      {
        "id": "ss_veg_toast_sandwich",
        "categoryId": "cat_sandwiches",
        "name": "Veg. Toast Sandwich (Grilled)",
        "description": "Golden grilled double-decker sandwich packed with sliced cucumbers, tomatoes, potatoes, beetroot, mint chutney, and butter.",
        "price": 150,
        "image": "assets/Sandwiches & Grilled Toasts/Veg. Toast Sandwich (Grilled).jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 360,
          "protein": 8.0,
          "carbs": 54.0,
          "fat": 13.0,
          "fiber": 4.5,
          "sodium": 520
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "White Bread",
          "Cucumber",
          "Tomato",
          "Boiled Potato",
          "Beetroot",
          "Mint Chutney",
          "Butter"
        ]
      },
      {
        "id": "ss_veg_cheese_sandwich",
        "categoryId": "cat_sandwiches",
        "name": "Veg. Cheese Sandwich",
        "description": "Classic deli sandwich layered with crunchy seasoned garden vegetables, spicy mint green chutney, and thick slices of cheese.",
        "price": 145,
        "image": "assets/Sandwiches & Grilled Toasts/Veg. Cheese Sandwichjpp.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "6 mins",
        "nutrition": {
          "calories": 390,
          "protein": 13.5,
          "carbs": 46.0,
          "fat": 17.5,
          "fiber": 3.8,
          "sodium": 640
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Bread Slices",
          "Processed Cheese",
          "Garden Veggies",
          "Mint Chutney",
          "Chaat Masala"
        ]
      },
      {
        "id": "ss_cheese_chilly_toast",
        "categoryId": "cat_sandwiches",
        "name": "Cheese Chilly Toast (Grilled)",
        "description": "Crisp toasted artisan bread crowned with a sizzling blend of molten cheese, spicy green chillies, and crushed black pepper.",
        "price": 190,
        "image": "assets/Sandwiches & Grilled Toasts/Cheese Chilly Toast (Grilled),jpg.webp",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 440,
          "protein": 17.0,
          "carbs": 42.0,
          "fat": 23.0,
          "fiber": 2.5,
          "sodium": 760
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Toasted Bread",
          "Molten Processed Cheese",
          "Finely Diced Green Chillies",
          "Butter",
          "Herbs"
        ]
      },
      {
        "id": "ss_club_sandwich",
        "categoryId": "cat_sandwiches",
        "name": "Club Sandwich",
        "description": "Triple-layered toasted feast with seasoned vegetable slaw, sliced cheese, tomato slices, cucumber, and house special dressing.",
        "price": 170,
        "image": "assets/Sandwiches & Grilled Toasts/Club Sandwich.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 480,
          "protein": 14.0,
          "carbs": 62.0,
          "fat": 20.0,
          "fiber": 5.0,
          "sodium": 690
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Three Bread Slices",
          "Coleslaw Slaw",
          "Cheese",
          "Cucumber",
          "Tomato",
          "Butter"
        ]
      },
      {
        "id": "ss_italian_sandwich_cheese",
        "categoryId": "cat_sandwiches",
        "name": "Italian Sandwich with Cheese",
        "description": "Toasted sandwich stuffed with Italian herb-tossed vegetables, sweet corn, black olives, bell peppers, and melted mozzarella.",
        "price": 155,
        "image": "assets/Sandwiches & Grilled Toasts/Itallian Sandwich with Cheese.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 420,
          "protein": 15.0,
          "carbs": 48.0,
          "fat": 19.0,
          "fiber": 4.0,
          "sodium": 670
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Bread",
          "Italian Dressing",
          "Bell Peppers",
          "Sweet Corn",
          "Cheese",
          "Oregano"
        ]
      },
      {
        "id": "ss_pizza_capsicum_onion",
        "categoryId": "cat_pizzas",
        "name": "Pizza (Cheese Capsicum Onion)",
        "description": "Classic pan pizza base topped with zesty Italian tomato marinara sauce, diced green capsicum, crunchy onions, and 100% real mozzarella cheese.",
        "price": 265,
        "image": "assets/Wood-Fired & Pan Pizzas/Pizza (Cheese Capsicum Onion).jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "12-15 mins",
        "nutrition": {
          "calories": 590,
          "protein": 22.0,
          "carbs": 74.0,
          "fat": 22.0,
          "fiber": 4.5,
          "sodium": 780
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Pizza Dough",
          "Marinara Sauce",
          "Capsicum",
          "Onion",
          "Mozzarella Cheese",
          "Oregano"
        ]
      },
      {
        "id": "ss_special_pizza",
        "categoryId": "cat_pizzas",
        "name": "Special Pizza",
        "description": "Shiv Sagar house special loaded pizza with bell peppers, mushrooms, sweet corn, black olives, paneer chunks, and dual cheese blend.",
        "price": 275,
        "image": "assets/Wood-Fired & Pan Pizzas/Special Pizza.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "15 mins",
        "nutrition": {
          "calories": 640,
          "protein": 25.0,
          "carbs": 76.0,
          "fat": 26.0,
          "fiber": 5.5,
          "sodium": 820
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Crust",
          "Pizza Sauce",
          "Paneer",
          "Mushroom",
          "Corn",
          "Olives",
          "Mozzarella"
        ]
      },
      {
        "id": "ss_paneer_wala_pizza",
        "categoryId": "cat_pizzas",
        "name": "Paneer Wala Pizza",
        "description": "Desi fusion pizza loaded with tandoori spiced paneer cubes, roasted capsicum, caramelized onions, spicy sauce, and bubbly melted cheese.",
        "price": 300,
        "image": "assets/Wood-Fired & Pan Pizzas/Paneer Wala Pizza.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "15 mins",
        "nutrition": {
          "calories": 690,
          "protein": 28.5,
          "carbs": 75.0,
          "fat": 30.0,
          "fiber": 5.0,
          "sodium": 860
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Pizza Base",
          "Tandoori Paneer",
          "Capsicum",
          "Onion",
          "Mozzarella",
          "Desi Masala"
        ]
      },
      {
        "id": "ss_veg_lover_pizza",
        "categoryId": "cat_pizzas",
        "name": "Veg Lover Pizza",
        "description": "Garden bounty loaded with tomatoes, onions, crisp green bell peppers, golden corn, and aromatic dried Italian oregano.",
        "price": 290,
        "image": "assets/Wood-Fired & Pan Pizzas/Veg Lover Pizza.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "14 mins",
        "nutrition": {
          "calories": 610,
          "protein": 21.0,
          "carbs": 76.0,
          "fat": 24.0,
          "fiber": 6.0,
          "sodium": 750
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Pizza Dough",
          "Tomato Puree",
          "Assorted Veggies",
          "Mozzarella",
          "Basil"
        ]
      },
      {
        "id": "ss_tomato_pasta",
        "categoryId": "cat_pastas",
        "name": "Tomato Pasta",
        "description": "Fettuccine pasta tossed in rich tomato pasta sauce with button mushrooms, herbs, and melted cheese as listed in our authentic menu.",
        "price": 425,
        "image": "assets/Pastas (Indian Style)/tomato-pasta.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "15 mins",
        "nutrition": {
          "calories": 520,
          "protein": 16.0,
          "carbs": 72.0,
          "fat": 18.0,
          "fiber": 5.5,
          "sodium": 640
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Fettuccine Pasta",
          "Mushroom",
          "Cheese",
          "Pasta Sauce",
          "Fresh Herbs"
        ]
      },
      {
        "id": "ss_paneer_pasta",
        "categoryId": "cat_pastas",
        "name": "Paneer Pasta",
        "description": "Fusilli pasta tossed with marinated paneer tikka chunks, crisp green capsicum, oregano, and chef's special spiced cream sauce.",
        "price": 440,
        "image": "assets/Pastas (Indian Style)/paneer pasta.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "15 mins",
        "nutrition": {
          "calories": 580,
          "protein": 24.0,
          "carbs": 68.0,
          "fat": 24.0,
          "fiber": 5.0,
          "sodium": 680
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Fusilli Pasta",
          "Paneer Tikka",
          "Capsicum",
          "Oregano",
          "Spiced Cream Sauce"
        ]
      },
      {
        "id": "ss_cheese_pasta",
        "categoryId": "cat_pastas",
        "name": "Cheese Pasta",
        "description": "Fettuccine pasta enveloped in rich velvety white sauce with spring onions and a decadence of 3 types of cheese.",
        "price": 385,
        "image": "assets/Pastas (Indian Style)/cheese pasta.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "14 mins",
        "nutrition": {
          "calories": 610,
          "protein": 20.0,
          "carbs": 66.0,
          "fat": 29.0,
          "fiber": 3.5,
          "sodium": 740
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Fettuccine Pasta",
          "Spring Onion",
          "3 Types of Cheese",
          "White Sauce"
        ]
      },
      {
        "id": "ss_lasagna",
        "categoryId": "cat_pastas",
        "name": "Lasagna (Indian Veg)",
        "description": "Delicate wonton sheets layered with paneer, palak, til, rich red sauce, bubbly cheese, and savory spinach sauce.",
        "price": 385,
        "image": "assets/Pastas (Indian Style)/deleacasa oasta.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "18 mins",
        "nutrition": {
          "calories": 590,
          "protein": 23.0,
          "carbs": 64.0,
          "fat": 27.0,
          "fiber": 6.0,
          "sodium": 710
        },
        "allergens": [
          "Gluten",
          "Dairy",
          "Sesame"
        ],
        "ingredients": [
          "Soft Wonton Sheets",
          "Paneer",
          "Palak",
          "Til (Sesame)",
          "Red Sauce",
          "Cheese",
          "Spinach Sauce"
        ]
      },
      {
        "id": "ss_nachos_special",
        "categoryId": "cat_mexican",
        "name": "Nachos Special",
        "description": "Crunchy corn tortilla chips generously topped with three melted cheese varieties, refried beans, and freshly made tangy salsa.",
        "price": 385,
        "image": "assets/Indian Mexican/nachos special.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "8-10 mins",
        "nutrition": {
          "calories": 540,
          "protein": 16.0,
          "carbs": 62.0,
          "fat": 26.0,
          "fiber": 6.5,
          "sodium": 720
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Tortilla Chips",
          "3 Types of Cheese",
          "Fresh Tomato Salsa",
          "Refried Beans",
          "Jalapenos"
        ]
      },
      {
        "id": "ss_taco_special",
        "categoryId": "cat_mexican",
        "name": "Taco Special",
        "description": "Crispy corn taco shells packed with seasoned beans, mushrooms, American corn, fire-roasted capsicum, and melted cheese.",
        "price": 305,
        "image": "assets/Indian Mexican/taco special.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 420,
          "protein": 13.0,
          "carbs": 52.0,
          "fat": 18.0,
          "fiber": 7.0,
          "sodium": 590
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Taco Shells",
          "Beans",
          "Mushroom",
          "American Corn",
          "Roasted Capsicum",
          "Cheese"
        ]
      },
      {
        "id": "ss_shivsagar_special_enchilada",
        "categoryId": "cat_mexican",
        "name": "Shivsagar Special Enchilada",
        "description": "House signature rolled tortillas stuffed with baby corn, capsicum, button mushrooms, and baked under bubbling cheese and spicy Mexican salsa.",
        "price": 440,
        "image": "assets/Indian Mexican/shivsagar special enchilada.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "15 mins",
        "nutrition": {
          "calories": 560,
          "protein": 19.0,
          "carbs": 65.0,
          "fat": 25.0,
          "fiber": 7.5,
          "sodium": 760
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Soft Tortilla",
          "Baby Corn",
          "Capsicum",
          "Mushroom",
          "Salsa Sauce",
          "Baked Cheese"
        ]
      },
      {
        "id": "ss_burritos_supreme",
        "categoryId": "cat_mexican",
        "name": "Burritos Supreme",
        "description": "Large soft tortilla stuffed with seasoned Mexican beans, cilantro Mexican rice, spring onions, topped with sour cream, salsa, and melted cheese.",
        "price": 440,
        "image": "assets/Indian Mexican/burritos supreme.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "14 mins",
        "nutrition": {
          "calories": 620,
          "protein": 18.0,
          "carbs": 78.0,
          "fat": 26.0,
          "fiber": 8.0,
          "sodium": 810
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Large Tortilla",
          "Mexican Beans",
          "Mexican Rice",
          "Spring Onion",
          "Sour Cream",
          "Melted Cheese"
        ]
      },
      {
        "id": "ss_quesadilla",
        "categoryId": "cat_mexican",
        "name": "Quesadilla",
        "description": "Grilled soft flour tortilla folded with sweet green peas, seasoned peppers, herbs, and loaded stringy melted cheese.",
        "price": 425,
        "image": "assets/Indian Mexican/quesadilla.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 490,
          "protein": 16.5,
          "carbs": 51.0,
          "fat": 24.0,
          "fiber": 4.5,
          "sodium": 680
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Soft Tortilla",
          "Peas",
          "Peppers",
          "Melted Cheese",
          "Mexican Seasoning"
        ]
      },
      {
        "id": "ss_huevos_rancheros",
        "categoryId": "cat_mexican",
        "name": "Huevos Rancheros (Veg 4 Pcs)",
        "description": "4 crispy tortilla pieces with 4 distinct gourmet toppings: (1) Beans & Olives, (2) Peas & Salsa, (3) 3-Cheeses & Veg, (4) Spinach & Paneer.",
        "price": 500,
        "image": "assets/Indian Mexican/nachos special.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "16 mins",
        "nutrition": {
          "calories": 680,
          "protein": 24.0,
          "carbs": 72.0,
          "fat": 32.0,
          "fiber": 9.0,
          "sodium": 850
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Crispy Tortillas",
          "Beans",
          "American Corn",
          "Mushroom",
          "Paneer",
          "3 Types of Cheese",
          "Olives"
        ]
      },
      {
        "id": "ss_pasta_sizzler",
        "categoryId": "cat_sizzlers",
        "name": "Shivsagar Special Pasta Sizzler",
        "description": "Smoking hot cast-iron sizzler with mixed pasta, diced onion, diced capsicum, baby corn, oregano, sizzling brown gravy, french fries, and cutlet.",
        "price": 495,
        "image": "assets/Sizzlers/shivsagar special sizzler.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "18-20 mins",
        "nutrition": {
          "calories": 740,
          "protein": 22.0,
          "carbs": 92.0,
          "fat": 31.0,
          "fiber": 8.0,
          "sodium": 920
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Mixed Pasta",
          "Baby Corn",
          "Diced Capsicum",
          "French Fries",
          "Veg Cutlet",
          "Sizzler Gravy"
        ]
      },
      {
        "id": "ss_paneer_sizzler",
        "categoryId": "cat_sizzlers",
        "name": "Paneer Sizzler",
        "description": "Sizzling platter served with golden fried paneer slabs, aromatic butter rice, crispy french fries, vegetable cutlet, and piping hot barbecue gravy.",
        "price": 355,
        "image": "assets/Sizzlers/paneer sizzler.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "16 mins",
        "nutrition": {
          "calories": 710,
          "protein": 28.0,
          "carbs": 82.0,
          "fat": 30.0,
          "fiber": 6.5,
          "sodium": 870
        },
        "allergens": [
          "Dairy",
          "Gluten"
        ],
        "ingredients": [
          "Fried Paneer",
          "Herb Rice",
          "French Fries",
          "Veg Cutlet",
          "Smoky Sizzler Sauce"
        ]
      },
      {
        "id": "ss_noodles_sizzler",
        "categoryId": "cat_sizzlers",
        "name": "Noodles Sizzler",
        "description": "Wok-tossed noodles served on a fiery hot plate with crispy french fries, vegetable cutlet, and rich oriental brown gravy.",
        "price": 330,
        "image": "assets/Sizzlers/noodles sizzler.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "15 mins",
        "nutrition": {
          "calories": 660,
          "protein": 16.0,
          "carbs": 88.0,
          "fat": 26.0,
          "fiber": 6.0,
          "sodium": 840
        },
        "allergens": [
          "Gluten",
          "Soy"
        ],
        "ingredients": [
          "Eggless Hakka Noodles",
          "French Fries",
          "Veg Cutlet",
          "Oriental Sizzler Gravy"
        ]
      },
      {
        "id": "ss_manchow_soup",
        "categoryId": "cat_chinese_starters",
        "name": "Manchow Soup",
        "description": "Indo-Chinese dark brown soup with shredded cabbage, carrots, ginger, garlic, and fresh coriander, served with crunchy fried noodles.",
        "price": 160,
        "image": "assets/Chinese Soups/manchow soup.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 140,
          "protein": 3.5,
          "carbs": 22.0,
          "fat": 4.5,
          "fiber": 3.0,
          "sodium": 680
        },
        "allergens": [
          "Gluten",
          "Soy"
        ],
        "ingredients": [
          "Minced Vegetables",
          "Dark Soy",
          "Ginger & Garlic",
          "Fried Crispy Noodles"
        ]
      },
      {
        "id": "ss_sweet_corn_veg_soup",
        "categoryId": "cat_chinese_starters",
        "name": "Sweet Corn Soup",
        "description": "Smooth, comforting broth made with crushed American sweet corn kernels, tender diced carrots, and beans.",
        "price": 150,
        "image": "assets/Chinese Soups/sweet corn soup.jpg",
        "dietary": "vegan",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 130,
          "protein": 3.0,
          "carbs": 26.0,
          "fat": 1.5,
          "fiber": 3.0,
          "sodium": 490
        },
        "allergens": [],
        "ingredients": [
          "Crushed Sweet Corn",
          "Diced Carrots",
          "Vegetable Stock",
          "White Pepper"
        ]
      },
      {
        "id": "ss_special_spring_roll",
        "categoryId": "cat_chinese_starters",
        "name": "Shiv Sagar Special Spring Roll",
        "description": "Golden shatteringly-crisp rolls stuffed with glass noodles, paneer, shredded cabbage, carrots, and special herbs, served with sweet chilli sauce.",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 380,
          "protein": 9.5,
          "carbs": 48.0,
          "fat": 17.0,
          "fiber": 4.0,
          "sodium": 590
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Crispy Wonton Wrapper",
          "Julienned Vegetables",
          "Paneer",
          "Sweet Chilli Dip"
        ]
      },
      {
        "id": "ss_paneer_chilly_dry",
        "categoryId": "cat_chinese_starters",
        "name": "Paneer Chilly Dry",
        "description": "Wok-tossed battered cottage cheese cubes with crunchy capsicum, sliced onions, fresh green chillies, garlic, and savory soy-chilli glaze.",
        "price": 255,
        "image": "assets/paneer-tikka.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "10-12 mins",
        "nutrition": {
          "calories": 420,
          "protein": 21.0,
          "carbs": 24.0,
          "fat": 28.0,
          "fiber": 3.0,
          "sodium": 710
        },
        "allergens": [
          "Dairy",
          "Soy",
          "Gluten"
        ],
        "ingredients": [
          "Fresh Cottage Cheese",
          "Bell Peppers",
          "Onions",
          "Green Chillies",
          "Soy Sauce"
        ]
      },
      {
        "id": "ss_chinese_bhel",
        "categoryId": "cat_chinese_starters",
        "name": "Chinese Bhel",
        "description": "Crispy fried noodles tossed with shredded cabbage, capsicum, spring onion greens, and sweet-spicy Schezwan chutney.",
        "price": 205,
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "6 mins",
        "nutrition": {
          "calories": 340,
          "protein": 6.0,
          "carbs": 52.0,
          "fat": 12.0,
          "fiber": 4.0,
          "sodium": 620
        },
        "allergens": [
          "Gluten",
          "Soy"
        ],
        "ingredients": [
          "Crispy Noodles",
          "Schezwan Sauce",
          "Cabbage",
          "Capsicum",
          "Spring Onions"
        ]
      },
      {
        "id": "ss_paneer_hot_pan",
        "categoryId": "cat_chinese_starters",
        "name": "Paneer Hot Pan",
        "description": "Fiery sizzling hot pan starter of crispy paneer chunks tossed with ginger, roasted garlic, spring onions, and spicy red pepper glaze.",
        "price": 300,
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 3,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 460,
          "protein": 22.5,
          "carbs": 26.0,
          "fat": 31.0,
          "fiber": 3.5,
          "sodium": 760
        },
        "allergens": [
          "Dairy",
          "Soy"
        ],
        "ingredients": [
          "Paneer",
          "Garlic",
          "Ginger",
          "Red Chilli Paste",
          "Spring Onion"
        ]
      },
      {
        "id": "ss_hakka_noodles",
        "categoryId": "cat_chinese_mains",
        "name": "Hakka Noodles",
        "description": "Wok-tossed noodles with shredded cabbage, crunchy carrots, bell peppers, spring onions, and light soy-white pepper seasoning.",
        "price": 280,
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 480,
          "protein": 11.0,
          "carbs": 76.0,
          "fat": 14.5,
          "fiber": 5.0,
          "sodium": 660
        },
        "allergens": [
          "Gluten",
          "Soy"
        ],
        "ingredients": [
          "Wheat Noodles",
          "Cabbage",
          "Carrot",
          "Capsicum",
          "Spring Onion",
          "Soy Sauce"
        ]
      },
      {
        "id": "ss_schezwan_noodles",
        "categoryId": "cat_chinese_mains",
        "name": "Schezwan Noodles",
        "description": "Long noodles wok-fried over roaring flame in house-pounded spicy garlic Schezwan chili paste with shredded vegetables.",
        "price": 285,
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 3,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 510,
          "protein": 11.5,
          "carbs": 78.0,
          "fat": 16.0,
          "fiber": 5.0,
          "sodium": 780
        },
        "allergens": [
          "Gluten",
          "Soy"
        ],
        "ingredients": [
          "Noodles",
          "House Schezwan Sauce",
          "Garlic",
          "Vegetables",
          "Sesame Oil"
        ]
      },
      {
        "id": "ss_veg_fried_rice",
        "categoryId": "cat_chinese_mains",
        "name": "Veg. Fried Rice",
        "description": "Steamed basmati rice wok-tossed with finely diced garden vegetables, spring onions, and delicate Chinese seasoning.",
        "price": 245,
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 460,
          "protein": 9.0,
          "carbs": 80.0,
          "fat": 11.0,
          "fiber": 4.0,
          "sodium": 590
        },
        "allergens": [
          "Soy"
        ],
        "ingredients": [
          "Basmati Rice",
          "Carrots",
          "Beans",
          "Spring Onions",
          "Soy Sauce"
        ]
      },
      {
        "id": "ss_triple_schezwan_rice",
        "categoryId": "cat_chinese_mains",
        "name": "Triple Schezwan Rice",
        "description": "Ultimate Indo-Chinese combo! Spicy Schezwan fried rice and noodles tossed together, served with a pot of rich vegetable Schezwan gravy and crispy fried noodles.",
        "price": 335,
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 3,
        "prepTime": "15 mins",
        "nutrition": {
          "calories": 680,
          "protein": 15.0,
          "carbs": 104.0,
          "fat": 22.0,
          "fiber": 7.0,
          "sodium": 920
        },
        "allergens": [
          "Gluten",
          "Soy"
        ],
        "ingredients": [
          "Basmati Rice",
          "Noodles",
          "Schezwan Gravy",
          "Crispy Noodles",
          "Vegetables"
        ]
      },
      {
        "id": "ss_paneer_chilly_gravy",
        "categoryId": "cat_chinese_mains",
        "name": "Paneer Chilly (Gravy)",
        "description": "Golden battered paneer cubes simmered in a rich garlic, ginger, and green chilli soy gravy with diced bell peppers and onions.",
        "price": 305,
        "image": "assets/paneer-tikka.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 480,
          "protein": 22.0,
          "carbs": 32.0,
          "fat": 29.0,
          "fiber": 3.5,
          "sodium": 820
        },
        "allergens": [
          "Dairy",
          "Soy",
          "Gluten"
        ],
        "ingredients": [
          "Paneer Cubes",
          "Chilli Gravy",
          "Capsicum",
          "Onion",
          "Dark Soy"
        ]
      },
      {
        "id": "ss_paneer_tikka_dry",
        "categoryId": "cat_tandoor",
        "name": "Paneer Tikka Dry",
        "description": "Large farm-fresh paneer blocks marinated in Kashmiri chilli, hung curd, ginger-garlic, roasted cumin, and grilled over charcoal in clay tandoor with onions and capsicum.",
        "price": 310,
        "image": "assets/paneer-tikka.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "12-15 mins",
        "nutrition": {
          "calories": 440,
          "protein": 26.0,
          "carbs": 12.0,
          "fat": 31.0,
          "fiber": 3.0,
          "sodium": 580
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Fresh Cottage Cheese",
          "Hung Curd",
          "Kashmiri Mirch",
          "Garam Masala",
          "Mint Chutney"
        ]
      },
      {
        "id": "ss_veg_seekh_kebab",
        "categoryId": "cat_tandoor",
        "name": "Veg. Seekh Kebab",
        "description": "Minced vegetables, cottage cheese, and aromatic herbs skewered and slow-roasted in the clay oven, dusted with tangy chaat masala.",
        "price": 245,
        "image": "assets/paneer-tikka.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 320,
          "protein": 14.0,
          "carbs": 24.0,
          "fat": 18.0,
          "fiber": 5.0,
          "sodium": 510
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Minced Veggies",
          "Paneer",
          "Gram Flour",
          "Tandoori Spices",
          "Lemon"
        ]
      },
      {
        "id": "ss_chole_bhatura",
        "categoryId": "cat_tandoor",
        "name": "Chole Bhatura",
        "description": "Rich Punjabi spiced dark chickpea masala cooked with amchur and whole spices, served with two colossal puffed golden bhaturas, pickled onions and green chillies.",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 680,
          "protein": 19.0,
          "carbs": 94.0,
          "fat": 25.0,
          "fiber": 11.0,
          "sodium": 780
        },
        "allergens": [
          "Gluten"
        ],
        "ingredients": [
          "Kabuli Chana",
          "Puffed Bhatura",
          "Punjabi Chole Masala",
          "Pickled Onions"
        ]
      },
      {
        "id": "ss_paneer_pakoda",
        "categoryId": "cat_tandoor",
        "name": "Paneer Pakoda",
        "description": "Tender paneer cubes stuffed with tangy green chutney, dipped in seasoned gram flour batter, and deep fried golden crisp.",
        "price": 175,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 420,
          "protein": 20.0,
          "carbs": 26.0,
          "fat": 27.0,
          "fiber": 3.5,
          "sodium": 480
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Fresh Paneer",
          "Besan Batter",
          "Green Mint Chutney",
          "Chaat Masala"
        ]
      },
      {
        "id": "ss_paneer_butter_masala",
        "categoryId": "cat_indian_gravies",
        "name": "Paneer Butter Masala",
        "description": "Silky succulent cottage cheese cubes simmered in a velvety, mildly spiced makhani gravy of ripe tomatoes, butter, cashew paste, and dried fenugreek leaves.",
        "price": 300,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "12-15 mins",
        "nutrition": {
          "calories": 520,
          "protein": 22.0,
          "carbs": 24.0,
          "fat": 38.0,
          "fiber": 4.0,
          "sodium": 660
        },
        "allergens": [
          "Dairy",
          "Nuts"
        ],
        "ingredients": [
          "Malai Paneer",
          "Tomato Puree",
          "Cashew Cream",
          "Amul Butter",
          "Kasuri Methi"
        ]
      },
      {
        "id": "ss_paneer_tikka_masala",
        "categoryId": "cat_indian_gravies",
        "name": "Paneer Tikka Masala",
        "description": "Charcoal grilled paneer tikka skewers diced and tossed into a robust, spiced onion-tomato gravy with diced bell peppers.",
        "price": 295,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "14 mins",
        "nutrition": {
          "calories": 510,
          "protein": 24.0,
          "carbs": 22.0,
          "fat": 36.0,
          "fiber": 4.5,
          "sodium": 690
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Tandoori Paneer",
          "Capsicum",
          "Onion Tomato Gravy",
          "Garam Masala"
        ]
      },
      {
        "id": "ss_malai_kofta",
        "categoryId": "cat_indian_gravies",
        "name": "Malai Kofta",
        "description": "Delicate melt-in-mouth dumplings of paneer, mawa, and dry fruits served in a luxurious golden cashew-saffron gravy.",
        "price": 310,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "14 mins",
        "nutrition": {
          "calories": 560,
          "protein": 16.0,
          "carbs": 38.0,
          "fat": 39.0,
          "fiber": 3.0,
          "sodium": 580
        },
        "allergens": [
          "Dairy",
          "Nuts"
        ],
        "ingredients": [
          "Paneer & Potato Kofta",
          "Cashew Paste",
          "Khoya Mawa",
          "Saffron Cream"
        ]
      },
      {
        "id": "ss_veg_maratha",
        "categoryId": "cat_indian_gravies",
        "name": "Veg Maratha",
        "description": "Spicy authentic Maharashtrian specialty! Crisp spiced vegetable cutlets simmered in a fiery, deep red roasted coconut and onion gravy.",
        "price": 265,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 3,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 480,
          "protein": 14.0,
          "carbs": 38.0,
          "fat": 30.0,
          "fiber": 6.5,
          "sodium": 740
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Veg Kofta",
          "Roasted Dry Coconut",
          "Kanda Masala",
          "Red Chilli Gravy"
        ]
      },
      {
        "id": "ss_veg_kolhapuri",
        "categoryId": "cat_indian_gravies",
        "name": "Veg Kolhapuri",
        "description": "Assorted mixed vegetables cooked in a spicy, fiery Kolhapuri gravy made with hand-pounded Lavangi chillies and whole spices.",
        "price": 245,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 3,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 410,
          "protein": 12.0,
          "carbs": 34.0,
          "fat": 25.0,
          "fiber": 7.0,
          "sodium": 720
        },
        "allergens": [],
        "ingredients": [
          "Mixed Vegetables",
          "Kolhapuri Masala",
          "Red Chillies",
          "Tomato Base"
        ]
      },
      {
        "id": "ss_dal_makhani",
        "categoryId": "cat_indian_gravies",
        "name": "Dal Makhani",
        "description": "Whole black urad lentils and kidney beans slow-simmered overnight with ripe tomatoes, white butter, and fresh cream.",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 420,
          "protein": 18.0,
          "carbs": 44.0,
          "fat": 19.0,
          "fiber": 9.5,
          "sodium": 580
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Black Urad Lentils",
          "Rajma",
          "Country Butter",
          "Fresh Cream",
          "Kasuri Methi"
        ]
      },
      {
        "id": "ss_dal_tadka",
        "categoryId": "cat_indian_gravies",
        "name": "Dal Tadka",
        "description": "Yellow toor lentils cooked to perfection, tempered with desi ghee, cumin seeds, garlic cloves, hing, and dried red chillies.",
        "price": 200,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 310,
          "protein": 15.0,
          "carbs": 42.0,
          "fat": 10.0,
          "fiber": 8.0,
          "sodium": 520
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Toor Lentils",
          "Desi Ghee",
          "Garlic",
          "Cumin",
          "Dried Kashmiri Chillies"
        ]
      },
      {
        "id": "ss_special_kadhai",
        "categoryId": "cat_kadhai",
        "name": "Shiv Sagar Special Kadhai",
        "description": "Chef's pride! Assortment of fresh paneer, mushrooms, baby corn, and florets tossed in an iron kadhai with freshly ground coriander and peppercorns.",
        "price": 300,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "14 mins",
        "nutrition": {
          "calories": 490,
          "protein": 22.0,
          "carbs": 26.0,
          "fat": 33.0,
          "fiber": 6.0,
          "sodium": 690
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Paneer",
          "Mushroom",
          "Baby Corn",
          "Bell Peppers",
          "Crushed Kadhai Spices"
        ]
      },
      {
        "id": "ss_kadhai_paneer",
        "categoryId": "cat_kadhai",
        "name": "Kadhai Paneer",
        "description": "Fresh paneer chunks and crunchy bell pepper cubes stir-fried with crushed whole coriander, red chilies, and tangy tomato gravy.",
        "price": 285,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 470,
          "protein": 23.0,
          "carbs": 20.0,
          "fat": 33.0,
          "fiber": 4.5,
          "sodium": 650
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Paneer",
          "Green Capsicum",
          "Onion Dices",
          "Kadhai Masala",
          "Ginger Juliennes"
        ]
      },
      {
        "id": "ss_kadhai_mushroom_masala",
        "categoryId": "cat_kadhai",
        "name": "Kadhai Mushroom Masala",
        "description": "Juicy button mushrooms sauteed in a sizzling wok with sliced bell peppers, whole spices, and rich semi-dry masala.",
        "price": 270,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 360,
          "protein": 13.0,
          "carbs": 22.0,
          "fat": 24.0,
          "fiber": 5.5,
          "sodium": 610
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Fresh Mushrooms",
          "Capsicum",
          "Onion",
          "Kadhai Spices"
        ]
      },
      {
        "id": "ss_butter_roti",
        "categoryId": "cat_rotis",
        "name": "Butter Roti",
        "description": "Whole wheat flatbread baked fresh in the clay tandoor and brushed with melting butter.",
        "price": 50,
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "4 mins",
        "nutrition": {
          "calories": 130,
          "protein": 3.5,
          "carbs": 21.0,
          "fat": 4.0,
          "fiber": 2.5,
          "sodium": 140
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Whole Wheat Atta",
          "Amul Butter"
        ]
      },
      {
        "id": "ss_butter_naan",
        "categoryId": "cat_rotis",
        "name": "Butter Naan",
        "description": "Fluffy, pillowy leavened bread baked on the clay wall of the tandoor, glistening with pure butter.",
        "price": 75,
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 240,
          "protein": 6.5,
          "carbs": 38.0,
          "fat": 7.0,
          "fiber": 2.0,
          "sodium": 280
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Fine Flour",
          "Butter",
          "Yogurt Leaven"
        ]
      },
      {
        "id": "ss_garlic_butter_naan",
        "categoryId": "cat_rotis",
        "name": "Garlic Butter Naan",
        "description": "Tandoor-baked naan crusted with fragrant minced garlic, fresh coriander leaves, and dripping with melted butter.",
        "price": 115,
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "6 mins",
        "nutrition": {
          "calories": 270,
          "protein": 7.0,
          "carbs": 39.0,
          "fat": 9.5,
          "fiber": 2.2,
          "sodium": 310
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Fine Flour",
          "Roasted Minced Garlic",
          "Butter",
          "Coriander"
        ]
      },
      {
        "id": "ss_cheese_garlic_naan",
        "categoryId": "cat_rotis",
        "name": "Cheese Garlic Naan",
        "description": "Decadent naan stuffed with gooey melted cheese, topped with roasted garlic and butter.",
        "price": 180,
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 360,
          "protein": 13.0,
          "carbs": 42.0,
          "fat": 16.0,
          "fiber": 2.2,
          "sodium": 520
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Naan Dough",
          "Processed Cheese",
          "Minced Garlic",
          "Butter"
        ]
      },
      {
        "id": "ss_alu_paratha",
        "categoryId": "cat_rotis",
        "name": "Alu Paratha",
        "description": "Hearty whole-wheat flatbread stuffed with spiced mashed potatoes, fresh coriander, and ajwain, served with butter.",
        "price": 110,
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 320,
          "protein": 7.5,
          "carbs": 52.0,
          "fat": 9.5,
          "fiber": 4.5,
          "sodium": 420
        },
        "allergens": [
          "Gluten",
          "Dairy"
        ],
        "ingredients": [
          "Atta",
          "Spiced Aloo Filling",
          "Ajwain",
          "Butter"
        ]
      },
      {
        "id": "ss_handi_dum_biryani",
        "categoryId": "cat_biryanis",
        "name": "Handi Dum Biryani",
        "description": "Fragrant long-grain aged Basmati rice layered with marinated spiced seasonal vegetables and saffron, sealed and slow cooked on dum.",
        "price": 255,
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "15-18 mins",
        "nutrition": {
          "calories": 540,
          "protein": 12.0,
          "carbs": 84.0,
          "fat": 17.0,
          "fiber": 6.5,
          "sodium": 640
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Aged Basmati Rice",
          "Assorted Veggies",
          "Kashmiri Saffron",
          "Ghee",
          "Fried Onions"
        ]
      },
      {
        "id": "ss_paneer_tikka_biryani",
        "categoryId": "cat_biryanis",
        "name": "Paneer Tikka Biryani",
        "description": "Clay-oven roasted smoky paneer tikka chunks layered with spiced saffron basmati rice, mint leaves, and caramelized brown onions.",
        "price": 300,
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "16 mins",
        "nutrition": {
          "calories": 590,
          "protein": 22.0,
          "carbs": 82.0,
          "fat": 20.0,
          "fiber": 5.5,
          "sodium": 680
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Tandoori Paneer",
          "Aged Basmati",
          "Biryani Spices",
          "Kewra",
          "Saffron"
        ]
      },
      {
        "id": "ss_tava_pulav",
        "categoryId": "cat_biryanis",
        "name": "Tava Pulav",
        "description": "Iconic Mumbai/Pune street specialty! Basmati rice tossed on a sizzling tawa with pav bhaji masala, butter, tomatoes, capsicum, and green peas.",
        "price": 260,
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 520,
          "protein": 10.0,
          "carbs": 79.0,
          "fat": 18.0,
          "fiber": 5.0,
          "sodium": 710
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Basmati Rice",
          "Pav Bhaji Masala",
          "Amul Butter",
          "Capsicum",
          "Green Peas",
          "Tomatoes"
        ]
      },
      {
        "id": "ss_dal_khichadi",
        "categoryId": "cat_biryanis",
        "name": "Dal Khichadi",
        "description": "Comforting homestyle blend of rice and yellow moong lentils tempered with desi ghee, cumin seeds, garlic, and turmeric.",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "12 mins",
        "nutrition": {
          "calories": 390,
          "protein": 14.0,
          "carbs": 64.0,
          "fat": 9.0,
          "fiber": 6.0,
          "sodium": 480
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Moong Dal",
          "Rice",
          "Desi Ghee",
          "Jeera",
          "Garlic"
        ]
      },
      {
        "id": "ss_jeera_rice",
        "categoryId": "cat_biryanis",
        "name": "Jeera Rice",
        "description": "Steamed fluffy Basmati rice tempered with aromatic crackling cumin seeds and desi ghee.",
        "price": 175,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 320,
          "protein": 6.0,
          "carbs": 58.0,
          "fat": 7.0,
          "fiber": 2.0,
          "sodium": 240
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Basmati Rice",
          "Roasted Jeera",
          "Ghee",
          "Coriander"
        ]
      },
      {
        "id": "ss_green_salad",
        "categoryId": "cat_salads_raita",
        "name": "Green Salad",
        "description": "Crisp farm-fresh slices of cucumber, tomato, carrot, beetroot, and green chillies served with juicy lemon wedges.",
        "price": 115,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "dietary": "vegan",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 65,
          "protein": 2.0,
          "carbs": 13.0,
          "fat": 0.5,
          "fiber": 4.0,
          "sodium": 45
        },
        "allergens": [],
        "ingredients": [
          "Cucumber",
          "Carrot",
          "Tomato",
          "Beetroot",
          "Lemon"
        ]
      },
      {
        "id": "ss_boondi_raita",
        "categoryId": "cat_salads_raita",
        "name": "Boondi Raita",
        "description": "Chilled whipped yogurt mixed with crispy chickpea flour boondi pearls, roasted cumin powder, and fresh mint.",
        "price": 115,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 160,
          "protein": 6.0,
          "carbs": 18.0,
          "fat": 7.0,
          "fiber": 1.5,
          "sodium": 280
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Fresh Curd",
          "Crisp Boondi",
          "Roasted Jeera",
          "Mint Leaves"
        ]
      },
      {
        "id": "ss_special_mocktail",
        "categoryId": "cat_mocktails",
        "name": "Special Mocktail",
        "description": "Shiv Sagar signature creation! Blended orange and pineapple juice, mixed ice cream, dry fruits, jelly cubes, tutti frutti, and sweet Rooh Afza syrup.",
        "price": 230,
        "image": "assets/passion-mocktail.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "6 mins",
        "nutrition": {
          "calories": 280,
          "protein": 4.5,
          "carbs": 56.0,
          "fat": 5.0,
          "fiber": 2.0,
          "sodium": 45
        },
        "allergens": [
          "Dairy",
          "Nuts"
        ],
        "ingredients": [
          "Orange Juice",
          "Pineapple Juice",
          "Mixed Ice Cream",
          "Dry Fruits",
          "Jelly",
          "Tutti Frutti",
          "Rooh Afza"
        ]
      },
      {
        "id": "ss_fruit_punch",
        "categoryId": "cat_mocktails",
        "name": "Fruit Punch",
        "description": "Tropical fusion of orange & pineapple juice, rich Alphonso mango pulp, fragrant khus sharbat, vanilla ice cream, and Rooh Afza.",
        "price": 220,
        "image": "assets/passion-mocktail.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 250,
          "protein": 3.8,
          "carbs": 52.0,
          "fat": 4.0,
          "fiber": 2.2,
          "sodium": 40
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Orange Juice",
          "Pineapple Juice",
          "Mango Pulp",
          "Khus Sharbat",
          "Vanilla Ice Cream",
          "Rooh Afza"
        ]
      },
      {
        "id": "ss_pina_colada",
        "categoryId": "cat_mocktails",
        "name": "Pina Colada",
        "description": "Refreshing blend of freshly pressed pineapple juice, sweet fresh dairy cream, vanilla ice cream, and sparkling soda.",
        "price": 220,
        "image": "assets/passion-mocktail.jpg",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 230,
          "protein": 2.5,
          "carbs": 42.0,
          "fat": 6.5,
          "fiber": 1.8,
          "sodium": 35
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Pineapple Juice",
          "Fresh Cream",
          "Vanilla Ice Cream",
          "Sparkling Soda"
        ]
      },
      {
        "id": "ss_fresh_lime_soda",
        "categoryId": "cat_mocktails",
        "name": "Fresh Lime Soda",
        "description": "Refreshing chilled cooler with freshly squeezed Kagzi lemon juice, sparkling soda, and your choice of sweet, salted, or mixed.",
        "price": 100,
        "image": "assets/passion-mocktail.jpg",
        "dietary": "vegan",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "4 mins",
        "nutrition": {
          "calories": 75,
          "protein": 0.5,
          "carbs": 18.0,
          "fat": 0.1,
          "fiber": 0.5,
          "sodium": 120
        },
        "allergens": [],
        "ingredients": [
          "Fresh Lemon Juice",
          "Club Soda",
          "Sugar / Rock Salt"
        ]
      },
      {
        "id": "ss_ganga_jamuna_juice",
        "categoryId": "cat_juices_shakes",
        "name": "Ganga Jamuna (Orange + Mosambi)",
        "description": "Shiv Sagar's all-time famous 50-50 citrus powerhouse: half sweet Nagpur orange and half Mosambi (sweet lime) extracted fresh with no added water.",
        "price": 155,
        "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
        "dietary": "vegan",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 130,
          "protein": 2.0,
          "carbs": 30.0,
          "fat": 0.2,
          "fiber": 2.5,
          "sodium": 8
        },
        "allergens": [],
        "ingredients": [
          "Nagpur Orange",
          "Fresh Mosambi (Sweet Lime)"
        ]
      },
      {
        "id": "ss_mosambi_juice",
        "categoryId": "cat_juices_shakes",
        "name": "Mosambi (Sweet Lime) Juice",
        "description": "100% pure cold-extracted fresh sweet lime juice served chilled with a hint of black salt.",
        "price": 155,
        "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
        "dietary": "vegan",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "4 mins",
        "nutrition": {
          "calories": 120,
          "protein": 1.5,
          "carbs": 28.0,
          "fat": 0.2,
          "fiber": 2.0,
          "sodium": 10
        },
        "allergens": [],
        "ingredients": [
          "Fresh Sweet Lime Mosambi",
          "Rock Salt"
        ]
      },
      {
        "id": "ss_sitaphal_shake",
        "categoryId": "cat_juices_shakes",
        "name": "Sitaphal (Custard Apple) Seasonal Shake",
        "description": "Pune's beloved specialty! Rich seasonal custard apple pulp blended thick with whole farm milk and ice cream.",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "6 mins",
        "nutrition": {
          "calories": 310,
          "protein": 7.0,
          "carbs": 48.0,
          "fat": 11.0,
          "fiber": 3.5,
          "sodium": 85
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Fresh Sitaphal Pulp",
          "Chilled Milk",
          "Vanilla Ice Cream"
        ]
      },
      {
        "id": "ss_kaju_anjeer_shake",
        "categoryId": "cat_juices_shakes",
        "name": "Kaju Anjeer Milk Shake",
        "description": "Thick premium milkshake blended with soaked royal figs (anjeer), rich cashew nuts, and wholesome dairy milk.",
        "price": 245,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "6 mins",
        "nutrition": {
          "calories": 360,
          "protein": 8.5,
          "carbs": 46.0,
          "fat": 16.0,
          "fiber": 4.0,
          "sodium": 95
        },
        "allergens": [
          "Dairy",
          "Nuts"
        ],
        "ingredients": [
          "Dried Royal Figs (Anjeer)",
          "Cashew Nuts (Kaju)",
          "Cold Milk",
          "Cream"
        ]
      },
      {
        "id": "ss_cold_coffee",
        "categoryId": "cat_juices_shakes",
        "name": "Cold Coffee",
        "description": "Frothy, thick cafe style cold coffee whipped with rich espresso reduction, chilled full-cream milk, and chocolate drizzle.",
        "price": 135,
        "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "4 mins",
        "nutrition": {
          "calories": 240,
          "protein": 6.5,
          "carbs": 34.0,
          "fat": 9.0,
          "fiber": 1.0,
          "sodium": 90
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Espresso Coffee",
          "Full Cream Milk",
          "Sugar",
          "Chocolate Drizzle"
        ]
      },
      {
        "id": "ss_special_falooda",
        "categoryId": "cat_falooda_desserts",
        "name": "Special Falooda",
        "description": "The crown jewel of Shiv Sagar! Tall glass layered with rose syrup, basil seeds (sabja), fine falooda sev, rich milk, mixed ice cream, and chopped roasted cashews & pistachios.",
        "price": 230,
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "6 mins",
        "nutrition": {
          "calories": 390,
          "protein": 8.0,
          "carbs": 66.0,
          "fat": 11.5,
          "fiber": 4.0,
          "sodium": 110
        },
        "allergens": [
          "Dairy",
          "Nuts",
          "Gluten"
        ],
        "ingredients": [
          "Rose Syrup",
          "Sabja Seeds",
          "Cornstarch Vermicelli",
          "Creamy Milk",
          "Ice Cream",
          "Pistachio & Cashews"
        ]
      },
      {
        "id": "ss_gadbad_special",
        "categoryId": "cat_falooda_desserts",
        "name": "Gadbad Special",
        "description": "Legendary coastal Karnataka multi-layered sundae: 3 scoops of assorted ice cream, fresh cut fruits, dry fruits, jelly, tuti-fruity, and strawberry drizzle.",
        "price": 285,
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 480,
          "protein": 9.0,
          "carbs": 78.0,
          "fat": 15.0,
          "fiber": 4.5,
          "sodium": 140
        },
        "allergens": [
          "Dairy",
          "Nuts"
        ],
        "ingredients": [
          "3 Flavors Ice Cream",
          "Seasonal Fresh Fruits",
          "Cashews & Raisins",
          "Jelly",
          "Fruit Syrups"
        ]
      },
      {
        "id": "ss_special_lassi",
        "categoryId": "cat_falooda_desserts",
        "name": "Special Lassi",
        "description": "Rich thick Punjabi style churned curd topped with clotted malai layer, saffron strands, and crushed cardamom.",
        "price": 145,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 280,
          "protein": 8.0,
          "carbs": 38.0,
          "fat": 11.0,
          "fiber": 0.5,
          "sodium": 115
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Thick Dahi Yogurt",
          "Sugar",
          "Fresh Malai",
          "Cardamom",
          "Kesar"
        ]
      },
      {
        "id": "ss_mango_with_cream",
        "categoryId": "cat_falooda_desserts",
        "name": "Mango with Cream (Seasonal)",
        "description": "Iconic summer indulgence of ripe Ratnagiri Alphonso mango chunks immersed in thick, velvety fresh churned dairy cream.",
        "price": 245,
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 360,
          "protein": 4.5,
          "carbs": 44.0,
          "fat": 19.0,
          "fiber": 3.0,
          "sodium": 65
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Fresh Alphonso Mango Cubes",
          "Sweet Dairy Cream"
        ]
      },
      {
        "id": "ss_sizzling_brownie_sundae",
        "categoryId": "cat_falooda_desserts",
        "name": "Sizzling Brownie Sundae",
        "description": "Gooey warm dark chocolate walnut brownie served on a smoking sizzler plate with vanilla bean ice cream and hot chocolate fudge.",
        "price": 255,
        "image": "assets/choco-lava.jpg",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "8 mins",
        "nutrition": {
          "calories": 520,
          "protein": 8.0,
          "carbs": 64.0,
          "fat": 27.0,
          "fiber": 4.5,
          "sodium": 190
        },
        "allergens": [
          "Gluten",
          "Dairy",
          "Nuts"
        ],
        "ingredients": [
          "Chocolate Walnut Brownie",
          "Vanilla Ice Cream",
          "Hot Chocolate Fudge",
          "Roasted Nuts"
        ]
      },
      {
        "id": "ss_filter_coffee",
        "categoryId": "cat_hot_beverages",
        "name": "South Indian Filter Coffee",
        "description": "Authentic Chikmagalur chicory-infused decoction blended with hot frothy boiled milk, served steaming in traditional brass dabarah.",
        "price": 60,
        "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "5 mins",
        "nutrition": {
          "calories": 95,
          "protein": 3.8,
          "carbs": 12.0,
          "fat": 3.5,
          "fiber": 0.5,
          "sodium": 65
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Filter Coffee Decoction",
          "Fresh Milk",
          "Sugar"
        ]
      },
      {
        "id": "ss_tea",
        "categoryId": "cat_hot_beverages",
        "name": "Special Masala Tea",
        "description": "Freshly brewed Assam tea leaves simmered with milk, crushed ginger, cardamom, and aromatic warming spices.",
        "price": 50,
        "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": false,
        "isAvailable": true,
        "spicyLevel": 0,
        "prepTime": "4 mins",
        "nutrition": {
          "calories": 80,
          "protein": 3.0,
          "carbs": 11.0,
          "fat": 2.8,
          "fiber": 0.2,
          "sodium": 45
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Assam Tea",
          "Milk",
          "Ginger",
          "Cardamom"
        ]
      }
    ],
    "tenant_royal": [
      {
        "id": "item_royal_biryani",
        "categoryId": "cat_royal_mains",
        "name": "Dum Pukht Shahi Gosht Biryani",
        "description": "Tender mountain mutton pieces slow-cooked with aged royal Basmati rice in a sealed handi with strands of Kashmiri saffron, kewra water, and brown onions. Served with Burani raita.",
        "price": 699,
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "dietary": "non-veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 2,
        "prepTime": "20-25 mins",
        "nutrition": {
          "calories": 740,
          "protein": 38.0,
          "carbs": 76.0,
          "fat": 32.0,
          "fiber": 4.0,
          "sodium": 680
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Aged Basmati",
          "Select Mutton",
          "Kashmiri Saffron",
          "Clarified Butter Ghee"
        ]
      },
      {
        "id": "item_royal_dal",
        "categoryId": "cat_royal_mains",
        "name": "24-Hour Slow Simmered Dal Bukhara",
        "description": "Whole black urad lentils slow-simmered over charcoal embers for twenty-four hours with rich tomato puree, churned white makhana butter, and sun-dried fenugreek leaves.",
        "price": 449,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "dietary": "veg",
        "isFeatured": true,
        "isAvailable": true,
        "spicyLevel": 1,
        "prepTime": "10 mins",
        "nutrition": {
          "calories": 410,
          "protein": 18.0,
          "carbs": 45.0,
          "fat": 18.5,
          "fiber": 9.0,
          "sodium": 490
        },
        "allergens": [
          "Dairy"
        ],
        "ingredients": [
          "Black Urad Lentils",
          "Tomato Coulis",
          "Country Butter",
          "Kasuri Methi"
        ]
      }
    ]
  },
  "orders": [
    {
      "id": "SNX-8921",
      "tenantId": "tenant_olive",
      "location": "Table 04",
      "items": [
        {
          "name": "Cheese Pav Bhaji",
          "qty": 2,
          "price": 220,
          "note": "Extra butter pav please"
        },
        {
          "name": "Special Falooda",
          "qty": 2,
          "price": 230,
          "note": "Serve chilled"
        }
      ],
      "status": "preparing",
      "createdAt": "10 mins ago",
      "total": 945
    },
    {
      "id": "SNX-8919",
      "tenantId": "tenant_olive",
      "location": "Table 11",
      "items": [
        {
          "name": "Cheese Mysore Masala Dosa (Green Chutney)",
          "qty": 2,
          "price": 230,
          "note": "Crispy roast"
        },
        {
          "name": "Ganga Jamuna (Orange + Mosambi)",
          "qty": 2,
          "price": 155,
          "note": "No ice"
        }
      ],
      "status": "ready",
      "createdAt": "22 mins ago",
      "total": 809
    }
  ]
};
