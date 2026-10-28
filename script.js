/**
 * TEA STALL SHOP - JAVASCRIPT CONTROLLER
 * 100% Offline Experience • Stall Status • Menu Filtering • Counter Slip Planner • Visitor Wall
 */

// ==========================================================================
// 1. MENU DATA
// ==========================================================================
const MENU_ITEMS = [
  {
    id: 'chai-1',
    name: 'Kulhad Masala Chai',
    category: 'chai',
    price: 25,
    tag: 'Signature Bestseller',
    desc: 'Simmered with crushed green cardamom, cinnamon, cloves, ginger, and poured hot into organic earthen clay kulhads.',
    tags: ['Clay Kulhad', 'Fresh Ginger', 'Kerala Spices'],
    serving: 'Served in Clay Kulhad (120ml)',
    strength: 'Kadak',
    isSpecial: true
  },
  {
    id: 'chai-2',
    name: 'Special Irani Chai',
    category: 'chai',
    price: 30,
    tag: 'Stall Heritage',
    desc: 'Slow-simmered rich condensed milk concoction infused with subtle spices, served with fresh Osmania biscuits.',
    tags: ['Rich Milk', 'Dum Brewed', 'Creamy'],
    serving: 'Served in Traditional Glass (130ml)',
    strength: 'Velvet Medium',
    isSpecial: true
  },
  {
    id: 'chai-3',
    name: 'Adrak Elaichi Kadak Chai',
    category: 'chai',
    price: 20,
    tag: 'Morning Kick',
    desc: 'Freshly grated root ginger with crushed green cardamom, brewed strong to power your day.',
    tags: ['Fresh Root Ginger', 'Strong Brew', 'Energizing'],
    serving: 'Served in Cutting Glass (100ml)',
    strength: 'Extra Kadak',
    isSpecial: false
  },
  {
    id: 'chai-4',
    name: 'Royal Kesariya Chai',
    category: 'chai',
    price: 45,
    tag: 'Premium Brew',
    desc: 'Pure Kashmiri saffron strands steeped with crushed almonds, pistachios, and rich cardamom milk.',
    tags: ['Kashmiri Saffron', 'Nuts Infused', 'Festive'],
    serving: 'Served in Large Clay Kulhad (150ml)',
    strength: 'Mild & Aromatic',
    isSpecial: true
  },
  {
    id: 'chai-5',
    name: 'Classic Cutting Chai',
    category: 'chai',
    price: 15,
    tag: 'Street Legend',
    desc: 'The quintessential roadside stall cutting cup. Quick, piping hot, and full of honest flavor.',
    tags: ['Original Street Cut', 'Quick Sip', 'Budget Favorite'],
    serving: 'Half-Glass Cut (80ml)',
    strength: 'Strong',
    isSpecial: false
  },
  {
    id: 'coffee-1',
    name: 'Kumbakonam Degree Filter Kaapi',
    category: 'coffee',
    price: 35,
    tag: 'Authentic South Roast',
    desc: 'Fresh first-pour chicory blend decoction frothed with boiled full-cream milk in a classic brass dabara tumbler.',
    tags: ['Brass Dabara', '80:20 Blend', 'Meter Froth'],
    serving: 'Brass Dabara Set (120ml)',
    strength: 'Bold & Frothy',
    isSpecial: true
  },
  {
    id: 'coffee-2',
    name: 'Hazelnut Roasted Kaapi',
    category: 'coffee',
    price: 45,
    tag: 'Specialty Blend',
    desc: 'Artisanal dark roasted coffee beans infused with natural roasted hazelnut notes and thick steamed milk.',
    tags: ['Nutty Roast', 'Craft Coffee', 'Slow Brew'],
    serving: 'Artisan Cup (140ml)',
    strength: 'Rich Medium',
    isSpecial: false
  },
  {
    id: 'coffee-3',
    name: 'Malabar Dark Black Kaapi',
    category: 'coffee',
    price: 25,
    tag: 'Pure Energy',
    desc: 'Single-origin pure coffee decoction served with a touch of organic jaggery and a hint of crushed dry ginger.',
    tags: ['No Milk', 'Organic Jaggery', 'Pure Decoction'],
    serving: 'Traditional Glass (110ml)',
    strength: 'Extra Bold',
    isSpecial: false
  },
  {
    id: 'herbal-1',
    name: 'Kashmiri Saffron Kahwa',
    category: 'herbal',
    price: 40,
    tag: 'Wellness Elixir',
    desc: 'Traditional green tea leaves infused with whole cinnamon bark, saffron strands, cloves, and slivered almonds.',
    tags: ['Zero Milk', 'Herbal Detox', 'Immunity Boost'],
    serving: 'Clay Cup (130ml)',
    strength: 'Light & Herbal',
    isSpecial: true
  },
  {
    id: 'herbal-2',
    name: 'Lemon Tulsi Mint Green Chai',
    category: 'herbal',
    price: 25,
    tag: 'Refresh & Revive',
    desc: 'Hand-plucked holy basil leaves, fresh mint, pure mountain honey, and a dash of freshly squeezed yellow lemon.',
    tags: ['Forest Honey', 'Fresh Mint', 'Ayurvedic'],
    serving: 'Clear Glass (120ml)',
    strength: 'Zesty & Refreshing',
    isSpecial: false
  },
  {
    id: 'snack-1',
    name: 'Warm Bun Maska with Amul Butter',
    category: 'snack',
    price: 35,
    tag: 'Ultimate Chai Companion',
    desc: 'Pillowy soft Irani-style bakery bun sliced open and slathered with generous melting salted butter.',
    tags: ['Melting Butter', 'Oven Fresh', 'Chai Dip Essential'],
    serving: '1 Full Sliced Bun',
    strength: 'Savory & Soft',
    isSpecial: true
  },
  {
    id: 'snack-2',
    name: 'Crispy Street Samosa (2 Pcs)',
    category: 'snack',
    price: 30,
    tag: 'Stall Hot Bites',
    desc: 'Golden flaky crust stuffed with spiced cumin potatoes and green peas, served with sweet tamarind & mint chutney.',
    tags: ['Crispy Crust', 'Tamarind Dip', 'Hot from Kadhai'],
    serving: 'Plate of 2 Pieces',
    strength: 'Spicy & Crispy',
    isSpecial: false
  },
  {
    id: 'snack-3',
    name: 'Osmania Butter Biscuits (3 Pcs)',
    category: 'snack',
    price: 20,
    tag: 'Tea Stall Classic',
    desc: 'Authentic Hyderabadi salty-sweet crumbly butter biscuits that melt effortlessly in hot chai.',
    tags: ['Melt in Mouth', 'Sweet-Salty', 'Bakery Fresh'],
    serving: '3 Biscuits',
    strength: 'Classic Dip',
    isSpecial: false
  },
  {
    id: 'snack-4',
    name: 'Cardamom Suji Rusk (Pair)',
    category: 'snack',
    price: 15,
    tag: 'Crunch Master',
    desc: 'Twice-baked crunchy semolina rusks scented with real cardamom. Built for the deep chai plunge.',
    tags: ['Twice Baked', 'Extra Crunchy', 'Cardamom Infused'],
    serving: 'Pair of 2 Large Rusks',
    strength: 'Crunchy',
    isSpecial: false
  }
];

// ==========================================================================
// 2. COUNTER SLIP (LOCALSTORAGE MANAGER)
// ==========================================================================
class CounterSlipManager {
  constructor() {
    this.storageKey = 'tea_stall_slip_v1';
    this.tokenKey = 'tea_stall_token_number';
    this.items = this.loadItems();
    this.token = this.loadToken();
  }

  loadItems() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  loadToken() {
    let token = localStorage.getItem(this.tokenKey);
    if (!token) {
      token = 'TS-' + Math.floor(100 + Math.random() * 900);
      localStorage.setItem(this.tokenKey, token);
    }
    return token;
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    this.updateSlipUI();
  }

  addItem(itemId, customization = {}) {
    const product = MENU_ITEMS.find(p => p.id === itemId);
    if (!product) return;

    const existingIndex = this.items.findIndex(i => i.id === itemId);
    if (existingIndex > -1) {
      this.items[existingIndex].qty += 1;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1,
        sugar: customization.sugar || 'Normal Sugar',
        strength: customization.strength || product.strength
      });
    }
    this.save();
    showToast(`Added "${product.name}" to Counter Slip!`);
  }

  updateQty(itemId, delta) {
    const idx = this.items.findIndex(i => i.id === itemId);
    if (idx > -1) {
      this.items[idx].qty += delta;
      if (this.items[idx].qty <= 0) {
        this.items.splice(idx, 1);
      }
      this.save();
    }
  }

  clear() {
    this.items = [];
    this.token = 'TS-' + Math.floor(100 + Math.random() * 900);
    localStorage.setItem(this.tokenKey, this.token);
    this.save();
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  }

  getTotalCount() {
    return this.items.reduce((acc, item) => acc + item.qty, 0);
  }

  updateSlipUI() {
    const countBadge = document.getElementById('nav-slip-count');
    const totalCount = this.getTotalCount();
    if (countBadge) {
      countBadge.textContent = totalCount;
    }

    const itemsList = document.getElementById('slip-items-container');
    const totalElement = document.getElementById('slip-total-amount');
    const tokenElement = document.getElementById('slip-token-id');

    if (tokenElement) {
      tokenElement.textContent = `TOKEN #${this.token}`;
    }

    if (!itemsList || !totalElement) return;

    if (this.items.length === 0) {
      itemsList.innerHTML = `
        <div class="slip-empty-state">
          <span style="font-size:2.5rem; display:block; margin-bottom:8px;">☕</span>
          <strong>Your Counter Slip is Empty</strong>
          <p style="font-size: 0.8rem; margin-top:4px;">Add your favorite Chais, Coffees or Bun Maska from the menu below before heading to the stall counter.</p>
        </div>
      `;
      totalElement.textContent = '₹0';
      return;
    }

    let html = '';
    this.items.forEach(item => {
      const itemSubtotal = item.price * item.qty;
      html += `
        <div class="slip-item-row">
          <div class="slip-item-info">
            <span class="slip-item-name">${item.name}</span>
            <span style="font-size:0.75rem; color:#785f4c;">₹${item.price} each</span>
            <div class="slip-item-qty-controls">
              <button class="qty-btn" onclick="counterSlip.updateQty('${item.id}', -1)">-</button>
              <span style="font-weight:700; font-size:0.85rem;">${item.qty}</span>
              <button class="qty-btn" onclick="counterSlip.updateQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <div class="slip-item-price">₹${itemSubtotal}</div>
        </div>
      `;
    });

    itemsList.innerHTML = html;
    totalElement.textContent = `₹${this.getTotal()}`;
  }
}

const counterSlip = new CounterSlipManager();

// ==========================================================================
// 3. LIVE STALL TIMINGS & OPEN/CLOSED STATUS
// ==========================================================================
function updateStallStatus() {
  const statusBadge = document.getElementById('stall-live-badge');
  const statusText = document.getElementById('stall-live-status-text');
  const heroStatusText = document.getElementById('hero-status-ticker');
  const kettleStatus = document.getElementById('current-pot-name');

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const totalMinutes = currentHour * 60 + currentMinutes;

  // Stall Schedule:
  // Morning Shift: 6:00 AM (360 min) to 11:30 AM (690 min)
  // Evening Shift: 3:30 PM (930 min) to 10:30 PM (1350 min)
  const isMorningShift = totalMinutes >= 360 && totalMinutes <= 690;
  const isEveningShift = totalMinutes >= 930 && totalMinutes <= 1350;

  const isOpen = isMorningShift || isEveningShift;

  if (isOpen) {
    if (statusBadge) statusBadge.classList.remove('closed');
    const shiftName = isMorningShift ? 'Morning Chai Shift' : 'Evening Sips Shift';
    if (statusText) {
      statusText.innerHTML = `<strong>Stall Open</strong> &bull; ${shiftName}`;
    }
    if (heroStatusText) {
      heroStatusText.innerHTML = `🟢 <strong>Live at Stall:</strong> Hot Kulhads simmering on brass stove! Pay at counter.`;
    }
    if (kettleStatus) {
      kettleStatus.textContent = isMorningShift 
        ? 'Fresh Adrak Cardamom Chai (Batch #4) Simmering' 
        : 'Royal Kulhad Masala Chai & Filter Kaapi Live';
    }
  } else {
    if (statusBadge) statusBadge.classList.add('closed');
    let nextOpenText = '';
    if (totalMinutes < 360) {
      nextOpenText = 'Opens at 6:00 AM for Morning Walkers';
    } else if (totalMinutes > 690 && totalMinutes < 930) {
      nextOpenText = 'Opens at 3:30 PM for Evening Chai';
    } else {
      nextOpenText = 'Opens tomorrow at 6:00 AM';
    }

    if (statusText) {
      statusText.innerHTML = `<strong>Stall Paused</strong> &bull; ${nextOpenText}`;
    }
    if (heroStatusText) {
      heroStatusText.innerHTML = `⏳ <strong>Stall Timings:</strong> 6:00 AM - 11:30 AM & 3:30 PM - 10:30 PM (Visit Offline)`;
    }
    if (kettleStatus) {
      kettleStatus.textContent = 'Kettle resting • Next fresh batch at ' + (totalMinutes < 930 ? '3:30 PM' : '6:00 AM');
    }
  }
}

// ==========================================================================
// 4. RENDER MENU ITEMS
// ==========================================================================
function renderMenu(category = 'all') {
  const container = document.getElementById('menu-items-grid');
  if (!container) return;

  const filtered = category === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => `
    <div class="menu-item-card" data-category="${item.category}">
      <div class="item-top-row">
        <div class="item-title-group">
          <h3>${item.name}</h3>
          <span class="item-subtitle">${item.tag}</span>
        </div>
        <div class="item-price-tag">₹${item.price}</div>
      </div>
      <p class="item-description">${item.desc}</p>
      
      <div class="item-meta-tags">
        ${item.tags.map(t => `<span class="meta-tag ${item.isSpecial ? 'highlight' : ''}">${t}</span>`).join('')}
      </div>

      <div class="item-card-footer">
        <span class="serving-type">
          <span>☕</span> ${item.serving}
        </span>
        <button class="btn-add-item" onclick="counterSlip.addItem('${item.id}')">
          <span>+</span> Add to Slip
        </button>
      </div>
    </div>
  `).join('');
}

// Category filter button click handler
function setupMenuFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderMenu(cat);
    });
  });
}

// ==========================================================================
// 5. INTERACTIVE FLAVOR QUIZ
// ==========================================================================
const quizState = {
  mood: 'comfort',
  base: 'milk',
  spice: 'spicy'
};

const RECOMMENDATIONS = {
  'comfort-milk-spicy': {
    name: 'Kulhad Masala Chai',
    desc: 'The soul warmer. Rich, spicy ginger-clove aroma poured piping hot into natural clay.',
    id: 'chai-1'
  },
  'comfort-milk-sweet': {
    name: 'Special Irani Chai & Bun Maska',
    desc: 'Velvety smooth condensed milk chai paired with buttery bun maska for pure comfort.',
    id: 'chai-2'
  },
  'energy-kaapi-bold': {
    name: 'Kumbakonam Degree Filter Kaapi',
    desc: 'High-meter froth with intense roasted chicory blend to supercharge your senses.',
    id: 'coffee-1'
  },
  'light-herbal-aromatic': {
    name: 'Kashmiri Saffron Kahwa',
    desc: 'Delicate green tea with saffron, cinnamon, and crunchy almonds. Pure royal detox.',
    id: 'herbal-1'
  },
  'default': {
    name: 'Adrak Elaichi Kadak Chai',
    desc: 'The timeless stall favorite. High on punchy ginger and fragrant green cardamom.',
    id: 'chai-3'
  }
};

function updateQuizRecommendation() {
  const key = `${quizState.mood}-${quizState.base}-${quizState.spice}`;
  const rec = RECOMMENDATIONS[key] || RECOMMENDATIONS['default'];

  const titleEl = document.getElementById('quiz-result-title');
  const descEl = document.getElementById('quiz-result-desc');
  const addBtn = document.getElementById('quiz-add-btn');

  if (titleEl) titleEl.textContent = rec.name;
  if (descEl) descEl.textContent = rec.desc;
  if (addBtn) {
    addBtn.onclick = () => counterSlip.addItem(rec.id);
  }
}

function setupQuiz() {
  document.querySelectorAll('.quiz-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parent = btn.closest('.quiz-options');
      parent.querySelectorAll('.quiz-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const type = btn.getAttribute('data-type');
      const val = btn.getAttribute('data-val');
      quizState[type] = val;
      updateQuizRecommendation();
    });
  });
  updateQuizRecommendation();
}

// ==========================================================================
// 6. VISITOR COMMUNITY WALL (GUESTBOOK WITH LOCALSTORAGE)
// ==========================================================================
const DEFAULT_NOTES = [
  {
    author: 'Vikram Seth',
    role: 'Morning Cyclist',
    drink: 'Kulhad Adrak Chai',
    stars: 5,
    note: 'The pure aroma of fresh ginger boiling in brass after a 20km sunrise ride is irreplaceable. Authentic earthy kulhad flavor you cannot get anywhere else!'
  },
  {
    author: 'Ananya Rao',
    role: 'Architecture Professor',
    drink: 'Degree Filter Kaapi',
    stars: 5,
    note: 'Their South Indian filter coffee in the brass dabara tumbler has the perfect thick crema foam. Standing at the counter chatting with regulars is my daily therapy.'
  },
  {
    author: 'Rohan, Sunny & Squad',
    role: 'Post-Office Regulars',
    drink: 'Cutting Chai & Bun Maska',
    stars: 5,
    note: '5:30 PM sharp! Four cutting chais and two hot bun maskas with extra Amul butter. No delivery app can ever match the atmosphere and steaming hot cups here.'
  }
];

function getStoredWallNotes() {
  try {
    const data = localStorage.getItem('tea_stall_guest_notes');
    return data ? JSON.parse(data) : DEFAULT_NOTES;
  } catch (e) {
    return DEFAULT_NOTES;
  }
}

function renderVisitorWall() {
  const container = document.getElementById('wall-notes-grid');
  if (!container) return;

  const notes = getStoredWallNotes();
  container.innerHTML = notes.map(item => `
    <div class="wall-note-card">
      <div class="note-pin"></div>
      <div class="note-stars">${'★'.repeat(item.stars)}</div>
      <p class="note-quote">"${item.note}"</p>
      <div class="note-author">
        <div class="author-avatar">${item.author.charAt(0)}</div>
        <div class="author-meta">
          <h5>${item.author}</h5>
          <span>Loved: ${item.drink} &bull; ${item.role}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function setupWallForm() {
  const form = document.getElementById('add-stall-note-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('note-name').value.trim();
    const drink = document.getElementById('note-drink').value.trim();
    const role = document.getElementById('note-role').value.trim() || 'Stall Visitor';
    const message = document.getElementById('note-message').value.trim();

    if (!name || !drink || !message) {
      showToast('Please fill in your name, favorite brew and story!');
      return;
    }

    const newNote = {
      author: name,
      role: role,
      drink: drink,
      stars: 5,
      note: message
    };

    const notes = getStoredWallNotes();
    notes.unshift(newNote);
    localStorage.setItem('tea_stall_guest_notes', JSON.stringify(notes));

    form.reset();
    renderVisitorWall();
    showToast('Your chai story has been pinned to the Stall Wall! ☕');
  });
}

// ==========================================================================
// 7. COUNTER SLIP MODAL CONTROLS
// ==========================================================================
function setupSlipModal() {
  const overlay = document.getElementById('counter-slip-modal');
  const openBtn = document.getElementById('nav-slip-btn');
  const heroSlipBtn = document.getElementById('hero-calc-slip-btn');
  const closeBtn = document.getElementById('btn-close-slip');
  const clearBtn = document.getElementById('btn-clear-slip');
  const printBtn = document.getElementById('btn-print-slip');

  const openModal = () => {
    if (overlay) {
      counterSlip.updateSlipUI();
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (heroSlipBtn) heroSlipBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      counterSlip.clear();
      showToast('Counter Slip cleared');
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

// ==========================================================================
// 8. TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message) {
  let toast = document.getElementById('stall-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'stall-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>☕</span> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================================================
// 9. NAVBAR SCROLL & MOBILE TOGGLE
// ==========================================================================
function setupNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const toggle = document.querySelector('.mobile-nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
    // Close mobile nav when clicking a link
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => menu.classList.remove('open'));
    });
  }
}

// ==========================================================================
// 10. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  updateStallStatus();
  setInterval(updateStallStatus, 60000); // Check status every minute

  renderMenu('all');
  setupMenuFilters();
  setupQuiz();
  renderVisitorWall();
  setupWallForm();
  setupSlipModal();
  setupNavbar();
  counterSlip.updateSlipUI();
});
