# 🫖 Tea Stall shop — Authentic Street Corner Chai & Kaapi

An authentic, modern website created for **Tea Stall shop** — celebrating Indian roadside chai stall culture, earthen clay *kulhads*, frothy South Indian *filter kaapi*, and warm buttered *bun maska*. Built with simple, lightweight vanilla technologies (**HTML5, CSS3, JavaScript**), rich tea & coffee color themes, and a **100% offline stall walk-in experience**.

---

## ☕ Why 100% Offline?
- **No Cold Delivery Bags**: True chai loses its soul within 45 seconds of leaving the stove.
- **Pure Earthen Clay Kulhads**: Natural terracotta imparts an irreplaceable earthy mineral aroma that paper/plastic cups destroy.
- **Theatric Meter Pours**: South Indian filter coffee frothed high between brass dabara and tumbler for thick, velvety crema.
- **Street Corner Camaraderie**: A genuine space to pause, read the morning paper, and share conversations.

---

## 🎨 Color Palette & Themes
- **Espresso Roast & Dark Coffee Bean** (`#120B08`, `#1E130C`): Rich dark ambient canvas.
- **Chai Amber & Saffron Glow** (`#C86D34`, `#E58242`, `#DFB15B`): Radiance of slow-simmered Assam tea and Kashmiri saffron.
- **Terracotta Kulhad** (`#BD5D38`): Traditional earthenware tones for badges and accents.
- **Cardamom Leaf Green** (`#3F684A`): Fresh herb accents and live stall status indicators.
- **Steamed Crema Foam** (`#FAF3EA`, `#E6B77C`): Creamy milk and frothy foam typography.

---

## ✨ Features
1. **Live Stall Timings & Stove Status**: Automatically checks local time to display whether the stall is **OPEN** or **PAUSED** across daily shifts:
   - **Morning Rush**: `06:00 AM – 11:30 AM`
   - **Evening Sips**: `03:30 PM – 10:30 PM`
2. **Interactive Menu with Filters**:
   - Signature Chais (Kulhad Masala, Irani Chai, Adrak Elaichi Kadak, Royal Kesariya, Cutting Chai)
   - Filter Coffees (Kumbakonam Degree Filter Kaapi, Hazelnut Roast, Malabar Dark)
   - Herbal & Spiced Brews (Kashmiri Kahwa, Lemon Tulsi Mint)
   - Stall Bites & Snacks (Warm Bun Maska, Crispy Samosas, Osmania Biscuits, Suji Rusk)
3. **Walk-in Counter Slip Planner**:
   - Replaces an online cart. Customers select their brews and generate a realistic parchment token slip (`#TS-XXX`) with total bill estimation to present to the chaiwala at the counter.
   - Preserved in `localStorage`.
4. **"Find Your Match" Brew Recommender**:
   - Interactive 3-question quiz matching mood, base, and spice level with the perfect stall cup.
5. **Interactive Stall Community Wall**:
   - Read customer stories and submit personal notes/reviews directly on the wall (persisted locally).
6. **Location & Landmark Guide**:
   - Complete address, landmark directions, parking details, and Google Maps directions link.

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser:

```bash
# Option 1: Direct File Opening
Double click index.html

# Option 2: Run with local HTTP server
python -m http.server 8080
# Visit http://localhost:8080
```

---

## 📁 Repository Structure
```
Tea_Coffee_Stall/
├── index.html              # Main semantic HTML5 webpage
├── styles.css              # Custom Vanilla CSS design system
├── script.js               # Interactive JS (timings, menu, counter slip, quiz)
├── README.md               # Documentation & project overview
├── .gitignore              # Git ignore rules
└── assets/
    └── images/
        ├── hero_kulhad_chai.jpg   # Steaming masala chai pouring into kulhad
        ├── filter_coffee.jpg      # Brass dabara South Indian filter coffee
        ├── stall_bun_maska.jpg    # Bun maska & cutting chai at stall
        └── stall_evening.jpg      # Warm evening stall counter ambiance
```

---

## 📜 License & Attribution
Designed for **Tea Stall shop**. Handcrafted for tea and coffee lovers everywhere.
