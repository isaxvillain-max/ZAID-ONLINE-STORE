/* ==================== 
   RULES POPUP + TYPING
   ==================== */
(function rulesTyping() {
  const popup = document.getElementById('rulesPopup');
  const typedRules = document.getElementById('typedRules');
  const agreeBtn = document.getElementById('agreeBtn');

  const rulesText = `
Welcome to ZAID STORE! 💫

Before using our website, please read the following terms carefully.

🧾 General Rules:
- Provide accurate personal details including your full name, phone number, and address.
- Orders are confirmed via WhatsApp; ensure your number is correct.
- Avoid fake orders or misuse of this system.
- All products are guaranteed 100% original & high quality.
- Payments accepted: JazzCash, EasyPaisa, and Cash on Delivery.

🛍️ How to Use:
1️⃣ Browse categories (Cosmetics, Garments, Perfumes).
2️⃣ Click on a product to view its details.
3️⃣ Press "Order" to automatically send the product name & price to WhatsApp.
4️⃣ Only the admin can add or remove products & staff.

🚚 Delivery & Support:
- Clear delivery instructions help us serve you better.
- Support available via WhatsApp: 03469489167
- Business hours: 9:00 AM – 8:00 PM.

Thank you for choosing ZAID STORE. Enjoy your shopping! 💖
`;

  if (!localStorage.getItem('agreedToRules')) {
    popup.classList.add('active');
    let i = 0;
    (function type() {
      if (i < rulesText.length) {
        typedRules.textContent += rulesText[i++];
        typedRules.scrollTop = typedRules.scrollHeight;
        setTimeout(type, 22);
      }
    })();
  }

  agreeBtn?.addEventListener('click', () => {
    localStorage.setItem('agreedToRules', 'true');
    popup.classList.remove('active');
  });
})();

/* ====================
   ORDER VIA WHATSAPP
   ==================== */
window.orderProduct = function(name, price) {
  const phone = '923469489167';
  const msg = `Hello! I want to order *${name}* (Rs. ${price}).`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
};

/* ====================
   SECRET ADMIN ACCESS
   Key: Z@ID!ACCESS
   Password: @zaid034
   ==================== */
(function secretAdminAccess() {
  const secretKey = "Z@ID!ACCESS";
  const adminPassword = "@zaid034";
  const adminNavBtn = document.getElementById('adminNavBtn');
  const loginPopup = document.getElementById('adminLoginPopup');
  const loginBtn = document.getElementById('loginBtn');
  const loginClose = document.getElementById('adminLoginClose');
  const passInput = document.getElementById('adminPassword');
  let typed = "";

  // Detect full key typed anywhere
  document.addEventListener("keydown", (e) => {
    typed += e.key;
    if (typed.toUpperCase().includes(secretKey.toUpperCase())) {
      if (adminNavBtn) adminNavBtn.style.display = "inline-block";
      alert("🔐 Secret Admin Access Unlocked!");
      typed = "";
    }
    if (typed.length > secretKey.length) typed = typed.slice(-secretKey.length);
  });

  // Show login popup
  adminNavBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    loginPopup.classList.add("active");
    passInput.value = "";
    passInput.focus();
  });

  // Close popup
  loginClose?.addEventListener("click", () => loginPopup.classList.remove("active"));

  // Validate password
  loginBtn?.addEventListener("click", () => {
    if (passInput.value.trim() === adminPassword) {
      localStorage.setItem("isAdmin", "true");
      alert("✅ Welcome Admin ZAID!");
      window.location.href = "admin.html";
    } else {
      alert("❌ Incorrect password!");
      passInput.focus();
    }
  });
})();
