const slides = [
    { tag: "PROMO", title: `<i class="fa-solid fa-gem"></i> KYZANN BUSSINES`, desc: "Pusat Aplikasi Premium & Layanan Virtual Terpercaya dengan Harga Terjangkau." },
    { tag: "DISCOUNT", title: `<i class="fa-solid fa-bolt"></i> FLASH SALE SPECIAL`, desc: "Semua aplikasi premium diskon hingga 20%! Klaim garansi aman & terpercaya." },
    { tag: "HOT", title: `<i class="fa-solid fa-fire"></i> BOT WA & NOKOS VIRTUAL`, desc: "Sewa Bot WhatsApp & Nomor Kosong (Nokos) murah, cepat dan otomatis." }
];

let currentSlide = 0;
let slideTimer;

function updateSlideDisplay(index) {
    const bannerTag = document.getElementById('bannerTag');
    const bannerTitle = document.getElementById('bannerTitle');
    const bannerDesc = document.getElementById('bannerDesc');
    const bannerContent = document.getElementById('bannerContent');
    const dots = document.querySelectorAll('.banner-dots .dot');

    if (!bannerContent) return;

    bannerContent.classList.add('fade-out');

    setTimeout(() => {
        bannerTag.innerText = slides[index].tag;
        bannerTitle.innerHTML = slides[index].title;
        bannerDesc.innerText = slides[index].desc;
        bannerContent.classList.remove('fade-out');
        dots.forEach((dot, i) => {
            if (i === index) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }, 200);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlideDisplay(currentSlide);
}

function setSlide(index) {
    clearInterval(slideTimer);
    currentSlide = index;
    updateSlideDisplay(currentSlide);
    startAutoSlide();
}

function startAutoSlide() {
    slideTimer = setInterval(nextSlide, 3500);
}
startAutoSlide();

function filterSubCat(subType, btnElement) {
    document.querySelectorAll('.sub-cat-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    const allItems = document.querySelectorAll('.product-card');
    allItems.forEach(item => {
        if (subType === 'all') { 
            item.style.display = 'block'; 
        } else {
            if (item.classList.contains(`sub-item-${subType}`)) item.style.display = 'block';
            else item.style.display = 'none';
        }
    });
}

const rulesData = {
    'alightmotion': "✦ Acc buyer wajib fresh.<br>✦ Acc seller tanyakan stock.<br>✦ Garansi 6 bulan only bf.<br>✦ Est 1x24jam.<br>✦ Order = SABAR!",
    'canva': "✦ Designer +500p/bulan.<br>✦ Canva head acc buyer wajib acc fresh.<br>✦ Garansi only bf.<br>✦ Di atas 1 bulan sistem perpanjang.<br>✦ Est 1x24jam.<br>✦ Order = SABAR!",
    'capcut': "✦ Only acc seller.<br>✦ iOS wajib beli private.<br>✦ Garansi only bf.<br>✦ Est 1x24jam.<br>✦ Order = SABAR!",
    'ibispaint': "✦ Only acc seller.<br>✦ Garansi 6 bulan jika ikut S&K.<br>✦ Est 1x24 jam.<br>✦ Order = SABAR!",
    'lightroom': "✦ Only acc seller.<br>✦ Garansi 6 bulan jika ikut S&K.<br>✦ Est 1x24 jam.<br>✦ Order = SABAR!",
    'meitu': "✦ Only acc seller.<br>✦ Support Android & iOS.<br>✦ Garansi only bf, bug device no garansi/reff.<br>✦ Est 1x24 jam.<br>✦ Order = SABAR!",
    'picsart': "✦ Only acc seller.<br>✦ Garansi only bf.<br>✦ Est 1x24jam.<br>✦ Order = SABAR!",
    'remini': "✦ Only acc seller.<br>✦ 1 tahun log apk only Android.<br>✦ 1 bulan log web supp iOS & Android.<br>✦ 1thn garansi 6 bulan only bf.<br>✦ Est 1x24jam.<br>✦ Order = SABAR!",
    'vsco': "✦ Only acc seller.<br>✦ Garansi 6 bulan only bf.<br>✦ Est 1x24jam.<br>✦ Order = SABAR!",
    'wink': "✦ Only acc seller.<br>✦ Support iOS & Android.<br>✦ Garansi only bf, bug device nogar, noreff.<br>✦ Est 1x24 jam.<br>✦ Order = SABAR!",
    'youtube': "✦ Acc C (Akun Kamu), Acc S (Akun Aku).<br>✦ Acc Seller tanyakan stok.<br>✦ Head bisa invite 5 orang.<br>✦ Famplan max join 2x setahun.<br>✦ Durasi di atas 1 bulan sistem PPJ.<br>✦ Fullgar jika ikut S&K.<br>✦ Est 1x24 jam.<br>✦ Order = SABAR!",
    'vidio': "✦ Only acc seller.<br>✦ Garansi only bf.<br>✦ Est 1x24 jam.",
    'iqiyi': "✦ Only acc seller.<br>✦ Fullgar jika ikut snk.<br>✦ Est 1x24jam.",
    'loklok': "✦ Only acc seller.<br>✦ Fullgar jika ikut snk.<br>✦ Est 1x24jam.",
    'mangotv': "✦ Only acc seller.<br>✦ Fullgar jika ikut snk.<br>✦ Est 1x24jam.",
    'netflix': "✦ Only acc seller.<br>✦ Acc strong, login with code.<br>✦ Fullgar jika ikut snk.<br>✦ Est 1x24jam.",
    'mlchecker': "✦ Via id + server akun!<br>✦ Cek tanggal pembuatan cc ml.<br>✦ Include wr, history main, high rank + rank saat ini.<br>✦ Cek bind acc ml (full info plat yang terkait: wa, fb, email, dll).<br>✦ Find id (cek id mlbb melalui nick name dan server).<br>✦ Reset password moonton (email harus aktif).",
    'bstation': "✦ Only acc seller.<br>✦ Fullgar jika ikut snk.<br>✦ Est 1x24jam.",
    'catchplay': "✦ Only acc seller.<br>✦ 1tahun garansi 6bulan jika ikut snk.<br>✦ Est 1x24jam.",
    'disney': "✦ Only acc seller.<br>✦ OTP wajib janjian.<br>✦ Fullgar jika ikut snk.<br>✦ Est 1x24jam.",
    'dramabox': "✦ Only acc seller.<br>✦ Support andro & ios.<br>✦ Fullgar jika ikut snk.<br>✦ Est 1x24jam.",
    'applemusic': "✦ Indplan & Famhead acc seller.<br>✦ Famplan max join 2x setahun.<br>✦ Fullgar jika ikut snk.<br>✦ Est 1x24jam.<br>✦ Order = SABAR!",
    'spotify': "✦ Only acc seller.<br>✦ Fullgar jika ikut snk.<br>✦ Est 1x24jam.",
    'zoom': "✦ Only acc seller.<br>✦ Garansi only bf.<br>✦ Est 1x24 jam.<br>✦ Order = SABAR!",
    'nokos': "✦ Tanya stock sebelum order.<br>✦ All nokos setelah OTP masuk NO GARANSI.<br>✦ Nokwa Indo, jika ready bisa langsung OTP.<br>✦ Order = SABAR!",
    'sewabot': "✦ Wajib patuhi rules!<br>✦ Order = SABAR!"
};

let currentData = { name: "", price: 0, qty: 1 };

function formatRupiah(number) {
    return "Rp " + number.toLocaleString('id-ID');
}

function openModal(name, price, ruleKey) {
    currentData.name = name;
    currentData.price = price;
    currentData.qty = 1;

    const modalProductName = document.getElementById('modalProductName');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const descElement = document.getElementById('modalProductDesc');
    const productModal = document.getElementById('productModal');

    if (modalProductName) modalProductName.innerText = name;
    if (modalProductPrice) modalProductPrice.innerText = formatRupiah(price);
    if (descElement) descElement.innerHTML = rulesData[ruleKey] || "Deskripsi belum tersedia.";

    updateQtyDisplay();
    if (productModal) productModal.classList.add('show');
}

function closeModal() {
    const productModal = document.getElementById('productModal');
    if (productModal) productModal.classList.remove('show');
}

function changeQty(amount) {
    currentData.qty += amount;
    if (currentData.qty < 1) currentData.qty = 1;
    updateQtyDisplay();
}

function updateQtyDisplay() {
    const modalQty = document.getElementById('modalQty');
    const modalTotal = document.getElementById('modalTotal');
    if (modalQty) modalQty.value = currentData.qty;
    if (modalTotal) modalTotal.innerText = formatRupiah(currentData.price * currentData.qty);
}

function checkoutWA() {
    const total = currentData.price * currentData.qty;
    const text = `Halo Kyzann Bussines, saya ingin order:%0A%0A*Produk:* ${currentData.name}%0A*Harga:* Rp ${currentData.price.toLocaleString('id-ID')}%0A*Qty:* ${currentData.qty}%0A*Total Bayar:* Rp ${total.toLocaleString('id-ID')}%0A%0AMohon info panduan pembayarannya.`;
    
    const phone = "6281371713911";
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    closeModal();
}

let typeTimer;
function typeWriterEffect(elementId, text) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    clearInterval(typeTimer);
    element.innerHTML = "";
    
    let i = 0;
    typeTimer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typeTimer);
        }
    }, 40);
}

function switchCategory(type, btnElement) {
    if (btnElement) {
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }

    const sectionTitle = document.getElementById('sectionTitle');
    const categoryContent = document.getElementById('categoryContent');
    
    if (!categoryContent) return;

    categoryContent.style.transition = "opacity 0.2s ease";
    categoryContent.style.opacity = 0;

    setTimeout(() => {
        if (type === 'info') {
            sectionTitle.innerText = "INFORMATION & RULES";
            categoryContent.innerHTML = `
                <div class="content-card">
                    <div class="content-card-header">
                        <i class="fa-solid fa-heart" style="color:#f43f5e;"></i> WELCOME TO KYZANN BUSSINES
                    </div>
                    <div class="content-card-body">
                        <div id="typewriterText" style="min-height: 20px; text-align: center; margin-bottom: 10px; font-weight: 500;"></div>
                        
                        <div style="display: flex; flex-direction: column; gap: 10px; margin: 15px 0;">
                            <a href="https://wa.me/6281371713911" target="_blank" class="order-btn-card" style="background-color: #25D366; text-decoration: none;">
                                <i class="fa-brands fa-whatsapp"></i> Chat Admin (WA)
                            </a>
                            <a href="https://t.me/greyvvcileiis" target="_blank" class="order-btn-card" style="background-color: #229ED9; text-decoration: none;">
                                <i class="fa-brands fa-telegram"></i> Chat Admin (Tele)
                            </a>
                            <a href="https://chat.whatsapp.com/LSpK5bWMmV8JTSVB3NZ9fy" target="_blank" class="order-btn-card" style="background-color: #128C7E; text-decoration: none;">
                                <i class="fa-solid fa-users"></i> Join Grup WhatsApp
                            </a>
                            <a href="https://t.me/kkyzann" target="_blank" class="order-btn-card" style="background-color: #0088cc; text-decoration: none;">
                                <i class="fa-solid fa-bullhorn"></i> Join Channel Telegram
                            </a>
                        </div>

                        <div class="modal-desc-box" style="text-align: left; margin-top: 20px;">
                            <strong><i class="fa-solid fa-scroll" style="color:#f59e0b;"></i> REGULATION:</strong>
                            <ul style="padding-left: 20px; margin-top: 10px; line-height: 1.6; font-size: 13px; color: #f1f5f9;">
                                <li>Disarankan join grup whatsapp agar tidak ketinggalan informasi.</li>
                                <li>Tanyakan stock sebelum order.</li>
                                <li>Pastikan untuk membaca note & snk produk yang di order.</li>
                                <li>Garansi apk berlaku jika mematuhi snk yang tersedia.</li>
                                <li>Tidak menerima buyer rude.</li>
                            </ul>
                            <div style="margin-top: 15px; color: #fbbf24; font-weight: bold; text-align: center; font-size: 13px; border-top: 1px dashed #fbbf24; padding-top: 10px;">
                                <i class="fa-solid fa-triangle-exclamation"></i> Pembayaran dilakukan di awal untuk menghindari hit & run
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            typeWriterEffect("typewriterText", "Halo! Selamat datang di katalog resmi Kyzann Bussines.");

        } else if (type === 'editing') {
            sectionTitle.innerText = "EDITING APPS";
            categoryContent.innerHTML = `
                <div class="sub-category-container">
                    <button class="sub-cat-btn active" onclick="filterSubCat('all', this)">Semua</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('alightmotion', this)">Alight Motion</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('canva', this)">Canva</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('capcut', this)">CapCut</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('ibispaint', this)">Ibis Paint</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('lightroom', this)">Lightroom</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('meitu', this)">Meitu</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('picsart', this)">Picsart</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('remini', this)">Remini</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('vsco', this)">VSCO</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('wink', this)">Wink</button>
                </div>

                <div class="product-grid">
                    <div class="product-card sub-item-alightmotion">
                        <i class="fa-solid fa-play product-icon"></i>
                        <div class="product-name">AM Gene/Tmail 1Th</div>
                        <div class="product-price">Rp 1.000</div>
                        <button class="order-btn-card" onclick="openModal('AM Gene/Tmail 1Th', 1000, 'alightmotion')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-alightmotion">
                        <i class="fa-solid fa-play product-icon"></i>
                        <div class="product-name">AM Acc Buyer 1Th</div>
                        <div class="product-price">Rp 3.000</div>
                        <button class="order-btn-card" onclick="openModal('AM Acc Buyer 1Th', 3000, 'alightmotion')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-alightmotion">
                        <i class="fa-solid fa-play product-icon"></i>
                        <div class="product-name">AM Acc Seller Gsuite 1Th</div>
                        <div class="product-price">Rp 5.000</div>
                        <button class="order-btn-card" onclick="openModal('AM Acc Seller Gsuite 1Th', 5000, 'alightmotion')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-alightmotion">
                        <i class="fa-solid fa-play product-icon"></i>
                        <div class="product-name">AM Acc Seller Gmail 1Th</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('AM Acc Seller Gmail 1Th', 10000, 'alightmotion')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-canva">
                        <i class="fa-solid fa-palette product-icon"></i>
                        <div class="product-name">Canva Member 1Bln</div>
                        <div class="product-price">Rp 1.000</div>
                        <button class="order-btn-card" onclick="openModal('Canva Member 1Bln', 1000, 'canva')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-canva">
                        <i class="fa-solid fa-palette product-icon"></i>
                        <div class="product-name">Canva Member 2Bln</div>
                        <div class="product-price">Rp 2.000</div>
                        <button class="order-btn-card" onclick="openModal('Canva Member 2Bln', 2000, 'canva')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-canva">
                        <i class="fa-solid fa-palette product-icon"></i>
                        <div class="product-name">Canva Member 1Th</div>
                        <div class="product-price">Rp 5.000</div>
                        <button class="order-btn-card" onclick="openModal('Canva Member 1Th', 5000, 'canva')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-canva">
                        <i class="fa-solid fa-crown product-icon"></i>
                        <div class="product-name">Canva Head Acc Buyer</div>
                        <div class="product-price">Rp 5.000</div>
                        <button class="order-btn-card" onclick="openModal('Canva Head Acc Buyer', 5000, 'canva')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-canva">
                        <i class="fa-solid fa-crown product-icon"></i>
                        <div class="product-name">Canva Head Acc Seller Tmail</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Canva Head Acc Seller Tmail', 10000, 'canva')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-canva">
                        <i class="fa-solid fa-crown product-icon"></i>
                        <div class="product-name">Canva Head Acc Seller Gmail</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Canva Head Acc Seller Gmail', 15000, 'canva')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-capcut">
                        <i class="fa-solid fa-scissors product-icon"></i>
                        <div class="product-name">CapCut Private 7 Hari</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('CapCut Private 7 Hari', 10000, 'capcut')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-capcut">
                        <i class="fa-solid fa-scissors product-icon"></i>
                        <div class="product-name">CapCut Sharing 1 Bln</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('CapCut Sharing 1 Bln', 15000, 'capcut')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-capcut">
                        <i class="fa-solid fa-scissors product-icon"></i>
                        <div class="product-name">CapCut Private 1 Bln</div>
                        <div class="product-price">Rp 30.000</div>
                        <button class="order-btn-card" onclick="openModal('CapCut Private 1 Bln', 30000, 'capcut')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-ibispaint">
                        <i class="fa-solid fa-brush product-icon"></i>
                        <div class="product-name">Ibis Paint X Sharing (Andro) 1Th</div>
                        <div class="product-price">Rp 16.000</div>
                        <button class="order-btn-card" onclick="openModal('Ibis Paint X Sharing (Andro) 1Th', 16000, 'ibispaint')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-ibispaint">
                        <i class="fa-solid fa-brush product-icon"></i>
                        <div class="product-name">Ibis Paint X Sharing (iOS) 1Th</div>
                        <div class="product-price">Rp 20.000</div>
                        <button class="order-btn-card" onclick="openModal('Ibis Paint X Sharing (iOS) 1Th', 20000, 'ibispaint')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-lightroom">
                        <i class="fa-solid fa-camera product-icon"></i>
                        <div class="product-name">Lightroom Sharing 1Th</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Lightroom Sharing 1Th', 15000, 'lightroom')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-meitu">
                        <i class="fa-solid fa-camera-retro product-icon"></i>
                        <div class="product-name">Meitu VIP 7 Hari</div>
                        <div class="product-price">Rp 7.000</div>
                        <button class="order-btn-card" onclick="openModal('Meitu VIP 7 Hari', 7000, 'meitu')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-meitu">
                        <i class="fa-solid fa-camera-retro product-icon"></i>
                        <div class="product-name">Meitu VIP 14 Hari</div>
                        <div class="product-price">Rp 12.000</div>
                        <button class="order-btn-card" onclick="openModal('Meitu VIP 14 Hari', 12000, 'meitu')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-meitu">
                        <i class="fa-solid fa-camera-retro product-icon"></i>
                        <div class="product-name">Meitu VIP 1 Bln (Renew)</div>
                        <div class="product-price">Rp 20.000</div>
                        <button class="order-btn-card" onclick="openModal('Meitu VIP 1 Bln (Renew)', 20000, 'meitu')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-meitu">
                        <i class="fa-solid fa-camera-retro product-icon"></i>
                        <div class="product-name">Meitu VIP+ 7 Hari</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Meitu VIP+ 7 Hari', 10000, 'meitu')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-meitu">
                        <i class="fa-solid fa-camera-retro product-icon"></i>
                        <div class="product-name">Meitu VIP+ 14 Hari</div>
                        <div class="product-price">Rp 18.000</div>
                        <button class="order-btn-card" onclick="openModal('Meitu VIP+ 14 Hari', 18000, 'meitu')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-meitu">
                        <i class="fa-solid fa-camera-retro product-icon"></i>
                        <div class="product-name">Meitu VIP+ 1 Bln (Renew)</div>
                        <div class="product-price">Rp 25.000</div>
                        <button class="order-btn-card" onclick="openModal('Meitu VIP+ 1 Bln (Renew)', 25000, 'meitu')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-picsart">
                        <i class="fa-solid fa-p product-icon"></i>
                        <div class="product-name">Picsart Private 7 Hari</div>
                        <div class="product-price">Rp 7.000</div>
                        <button class="order-btn-card" onclick="openModal('Picsart Private 7 Hari', 7000, 'picsart')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-remini">
                        <i class="fa-solid fa-image product-icon"></i>
                        <div class="product-name">Remini Lite Sharing 1Th</div>
                        <div class="product-price">Rp 25.000</div>
                        <button class="order-btn-card" onclick="openModal('Remini Lite Sharing 1Th', 25000, 'remini')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-remini">
                        <i class="fa-solid fa-image product-icon"></i>
                        <div class="product-name">Remini Pro Sharing 1Th</div>
                        <div class="product-price">Rp 35.000</div>
                        <button class="order-btn-card" onclick="openModal('Remini Pro Sharing 1Th', 35000, 'remini')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-remini">
                        <i class="fa-solid fa-image product-icon"></i>
                        <div class="product-name">Remini Sharing</div>
                        <div class="product-price">Rp 9.000</div>
                        <button class="order-btn-card" onclick="openModal('Remini Sharing', 9000, 'remini')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-remini">
                        <i class="fa-solid fa-image product-icon"></i>
                        <div class="product-name">Remini Private</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Remini Private', 15000, 'remini')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-vsco">
                        <i class="fa-solid fa-v product-icon"></i>
                        <div class="product-name">VSCO Plus (Andro) Sharing 1Th</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('VSCO Plus (Andro) Sharing 1Th', 15000, 'vsco')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-vsco">
                        <i class="fa-solid fa-v product-icon"></i>
                        <div class="product-name">VSCO Pro (iOS) 1Th</div>
                        <div class="product-price">Rp 17.000</div>
                        <button class="order-btn-card" onclick="openModal('VSCO Pro (iOS) 1Th', 17000, 'vsco')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-wink">
                        <i class="fa-solid fa-wand-magic-sparkles product-icon"></i>
                        <div class="product-name">Wink Private AllDev 7 Hari</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Wink Private AllDev 7 Hari', 10000, 'wink')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-wink">
                        <i class="fa-solid fa-wand-magic-sparkles product-icon"></i>
                        <div class="product-name">Wink Private AllDev 14 Hari</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Wink Private AllDev 14 Hari', 15000, 'wink')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-wink">
                        <i class="fa-solid fa-wand-magic-sparkles product-icon"></i>
                        <div class="product-name">Wink Private AllDev 1 Bln (Renew)</div>
                        <div class="product-price">Rp 25.000</div>
                        <button class="order-btn-card" onclick="openModal('Wink Private AllDev 1 Bln (Renew)', 25000, 'wink')">Order Now</button>
                    </div>
                </div>
            `;
        } else if (type === 'music') {
            sectionTitle.innerText = "MUSIC APPS";
            categoryContent.innerHTML = `
                <div class="sub-category-container">
                    <button class="sub-cat-btn active" onclick="filterSubCat('all', this)">Semua</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('applemusic', this)">Apple Music</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('spotify', this)">Spotify</button>
                </div>

                <div class="product-grid">
                    <div class="product-card sub-item-applemusic">
                        <i class="fa-solid fa-music product-icon"></i>
                        <div class="product-name">Apple Music Famplan 1Bln</div>
                        <div class="product-price">Rp 4.000</div>
                        <button class="order-btn-card" onclick="openModal('Apple Music Famplan 1Bln', 4000, 'applemusic')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-applemusic">
                        <i class="fa-solid fa-music product-icon"></i>
                        <div class="product-name">Apple Music Famplan 2Bln</div>
                        <div class="product-price">Rp 7.000</div>
                        <button class="order-btn-card" onclick="openModal('Apple Music Famplan 2Bln', 7000, 'applemusic')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-applemusic">
                        <i class="fa-solid fa-music product-icon"></i>
                        <div class="product-name">Apple Music Indplan 1Bln</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Apple Music Indplan 1Bln', 10000, 'applemusic')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-applemusic">
                        <i class="fa-solid fa-music product-icon"></i>
                        <div class="product-name">Apple Music Famhead 1Bln</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Apple Music Famhead 1Bln', 15000, 'applemusic')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-spotify">
                        <i class="fa-brands fa-spotify product-icon"></i>
                        <div class="product-name">Spotify Indplan 1Bln</div>
                        <div class="product-price">Rp 25.000</div>
                        <button class="order-btn-card" onclick="openModal('Spotify Indplan 1Bln', 25000, 'spotify')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-spotify">
                        <i class="fa-brands fa-spotify product-icon"></i>
                        <div class="product-name">Spotify Famplan 1Bln</div>
                        <div class="product-price">Rp 27.000</div>
                        <button class="order-btn-card" onclick="openModal('Spotify Famplan 1Bln', 27000, 'spotify')">Order Now</button>
                    </div>
                </div>
            `;
        } else if (type === 'streaming') {
            sectionTitle.innerText = "STREAMING APPS";
            categoryContent.innerHTML = `
                <div class="sub-category-container">
                    <button class="sub-cat-btn active" onclick="filterSubCat('all', this)">Semua</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('youtube', this)">YouTube</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('vidio', this)">Vidio</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('iqiyi', this)">iQiyi</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('loklok', this)">Loklok</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('mangotv', this)">MangoTV</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('netflix', this)">Netflix</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('bstation', this)">Bstation</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('catchplay', this)">Catchplay</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('disney', this)">Disney+</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('dramabox', this)">Dramabox</button>
                </div>

                <div class="product-grid">
                    <div class="product-card sub-item-youtube">
                        <i class="fa-brands fa-youtube product-icon"></i>
                        <div class="product-name">YouTube Famplan 1B</div>
                        <div class="product-price">Rp 3.000</div>
                        <button class="order-btn-card" onclick="openModal('YouTube Famplan 1B', 3000, 'youtube')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-youtube">
                        <i class="fa-brands fa-youtube product-icon"></i>
                        <div class="product-name">YouTube Famplan 2B</div>
                        <div class="product-price">Rp 5.000</div>
                        <button class="order-btn-card" onclick="openModal('YouTube Famplan 2B', 5000, 'youtube')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-youtube">
                        <i class="fa-brands fa-youtube product-icon"></i>
                        <div class="product-name">YouTube Indplan 1B Acc C</div>
                        <div class="product-price">Rp 5.000</div>
                        <button class="order-btn-card" onclick="openModal('YouTube Indplan 1B Acc C', 5000, 'youtube')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-youtube">
                        <i class="fa-brands fa-youtube product-icon"></i>
                        <div class="product-name">YouTube Indplan 1B Acc S</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('YouTube Indplan 1B Acc S', 10000, 'youtube')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-youtube">
                        <i class="fa-brands fa-youtube product-icon"></i>
                        <div class="product-name">YouTube Famhead 1B Acc C</div>
                        <div class="product-price">Rp 5.000</div>
                        <button class="order-btn-card" onclick="openModal('YouTube Famhead 1B Acc C', 5000, 'youtube')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-youtube">
                        <i class="fa-brands fa-youtube product-icon"></i>
                        <div class="product-name">YouTube Famhead 1B Acc S</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('YouTube Famhead 1B Acc S', 10000, 'youtube')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-youtube">
                        <i class="fa-brands fa-youtube product-icon"></i>
                        <div class="product-name">YouTube Mixplan 3B Acc C</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('YouTube Mixplan 3B Acc C', 15000, 'youtube')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-youtube">
                        <i class="fa-brands fa-youtube product-icon"></i>
                        <div class="product-name">YouTube Mixplan 3B Acc S</div>
                        <div class="product-price">Rp 20.000</div>
                        <button class="order-btn-card" onclick="openModal('YouTube Mixplan 3B Acc S', 20000, 'youtube')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-vidio">
                        <i class="fa-solid fa-tv product-icon"></i>
                        <div class="product-name">Vidio Mobile Sharing 2U 1Bln</div>
                        <div class="product-price">Rp 17.000</div>
                        <button class="order-btn-card" onclick="openModal('Vidio Mobile Sharing 2U 1Bln', 17000, 'vidio')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-vidio">
                        <i class="fa-solid fa-tv product-icon"></i>
                        <div class="product-name">Vidio Mobile Private 1Bln</div>
                        <div class="product-price">Rp 27.000</div>
                        <button class="order-btn-card" onclick="openModal('Vidio Mobile Private 1Bln', 27000, 'vidio')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-vidio">
                        <i class="fa-solid fa-tv product-icon"></i>
                        <div class="product-name">Vidio Alldev Sharing 1Bln</div>
                        <div class="product-price">Rp 25.000</div>
                        <button class="order-btn-card" onclick="openModal('Vidio Alldev Sharing 1Bln', 25000, 'vidio')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-vidio">
                        <i class="fa-solid fa-tv product-icon"></i>
                        <div class="product-name">Vidio Alldev Private 1Bln</div>
                        <div class="product-price">Rp 37.000</div>
                        <button class="order-btn-card" onclick="openModal('Vidio Alldev Private 1Bln', 37000, 'vidio')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-vidio">
                        <i class="fa-solid fa-tv product-icon"></i>
                        <div class="product-name">Vidio TV Private 1Thn</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Vidio TV Private 1Thn', 10000, 'vidio')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-iqiyi">
                        <i class="fa-solid fa-film product-icon"></i>
                        <div class="product-name">iQiyi Standar Sharing 1Bln</div>
                        <div class="product-price">Rp 7.000</div>
                        <button class="order-btn-card" onclick="openModal('iQiyi Standar Sharing 1Bln', 7000, 'iqiyi')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-iqiyi">
                        <i class="fa-solid fa-film product-icon"></i>
                        <div class="product-name">iQiyi Standar Sharing 1Thn</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('iQiyi Standar Sharing 1Thn', 15000, 'iqiyi')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-iqiyi">
                        <i class="fa-solid fa-film product-icon"></i>
                        <div class="product-name">iQiyi Premium Sharing 1Bln</div>
                        <div class="product-price">Rp 9.000</div>
                        <button class="order-btn-card" onclick="openModal('iQiyi Premium Sharing 1Bln', 9000, 'iqiyi')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-iqiyi">
                        <i class="fa-solid fa-film product-icon"></i>
                        <div class="product-name">iQiyi Premium Sharing 1Thn</div>
                        <div class="product-price">Rp 17.000</div>
                        <button class="order-btn-card" onclick="openModal('iQiyi Premium Sharing 1Thn', 17000, 'iqiyi')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-iqiyi">
                        <i class="fa-solid fa-film product-icon"></i>
                        <div class="product-name">iQiyi Standar Private 1Bln</div>
                        <div class="product-price">Rp 26.000</div>
                        <button class="order-btn-card" onclick="openModal('iQiyi Standar Private 1Bln', 26000, 'iqiyi')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-iqiyi">
                        <i class="fa-solid fa-film product-icon"></i>
                        <div class="product-name">iQiyi Premium Private 1Bln</div>
                        <div class="product-price">Rp 32.000</div>
                        <button class="order-btn-card" onclick="openModal('iQiyi Premium Private 1Bln', 32000, 'iqiyi')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-loklok">
                        <i class="fa-solid fa-play-circle product-icon"></i>
                        <div class="product-name">Loklok Basic Sharing 3U</div>
                        <div class="product-price">Rp 21.000</div>
                        <button class="order-btn-card" onclick="openModal('Loklok Basic Sharing 3U', 21000, 'loklok')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-loklok">
                        <i class="fa-solid fa-play-circle product-icon"></i>
                        <div class="product-name">Loklok Standar Sharing 3U</div>
                        <div class="product-price">Rp 28.000</div>
                        <button class="order-btn-card" onclick="openModal('Loklok Standar Sharing 3U', 28000, 'loklok')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-mangotv">
                        <i class="fa-solid fa-tv product-icon"></i>
                        <div class="product-name">MangoTV VIP Sharing 1Bln</div>
                        <div class="product-price">Rp 11.000</div>
                        <button class="order-btn-card" onclick="openModal('MangoTV VIP Sharing 1Bln', 11000, 'mangotv')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-mangotv">
                        <i class="fa-solid fa-tv product-icon"></i>
                        <div class="product-name">MangoTV VIP+ Sharing 1Bln</div>
                        <div class="product-price">Rp 20.000</div>
                        <button class="order-btn-card" onclick="openModal('MangoTV VIP+ Sharing 1Bln', 20000, 'mangotv')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-netflix">
                        <i class="fa-solid fa-video product-icon"></i>
                        <div class="product-name">Netflix 1User 1Bln</div>
                        <div class="product-price">Rp 35.000</div>
                        <button class="order-btn-card" onclick="openModal('Netflix 1User 1Bln', 35000, 'netflix')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-netflix">
                        <i class="fa-solid fa-video product-icon"></i>
                        <div class="product-name">Netflix Semiprivate 1Bln</div>
                        <div class="product-price">Rp 40.000</div>
                        <button class="order-btn-card" onclick="openModal('Netflix Semiprivate 1Bln', 40000, 'netflix')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-bstation">
                        <i class="fa-solid fa-play-circle product-icon"></i>
                        <div class="product-name">Bstation Sharing 1Bln</div>
                        <div class="product-price">Rp 6.000</div>
                        <button class="order-btn-card" onclick="openModal('Bstation Sharing 1Bln', 6000, 'bstation')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-bstation">
                        <i class="fa-solid fa-play-circle product-icon"></i>
                        <div class="product-name">Bstation Sharing 1Thn</div>
                        <div class="product-price">Rp 13.000</div>
                        <button class="order-btn-card" onclick="openModal('Bstation Sharing 1Thn', 13000, 'bstation')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-bstation">
                        <i class="fa-solid fa-play-circle product-icon"></i>
                        <div class="product-name">Bstation Private 1Bln</div>
                        <div class="product-price">Rp 30.000</div>
                        <button class="order-btn-card" onclick="openModal('Bstation Private 1Bln', 30000, 'bstation')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-catchplay">
                        <i class="fa-solid fa-film product-icon"></i>
                        <div class="product-name">Catchplay Sharing 1Bln</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Catchplay Sharing 1Bln', 10000, 'catchplay')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-catchplay">
                        <i class="fa-solid fa-film product-icon"></i>
                        <div class="product-name">Catchplay Sharing 1Thn</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Catchplay Sharing 1Thn', 15000, 'catchplay')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-disney">
                        <i class="fa-solid fa-tv product-icon"></i>
                        <div class="product-name">Disney+ Sharing 6U 1Bln</div>
                        <div class="product-price">Rp 20.000</div>
                        <button class="order-btn-card" onclick="openModal('Disney+ Sharing 6U 1Bln', 20000, 'disney')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-dramabox">
                        <i class="fa-solid fa-video product-icon"></i>
                        <div class="product-name">Dramabox Sharing 1Bln</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Dramabox Sharing 1Bln', 10000, 'dramabox')">Order Now</button>
                    </div>
                </div>
            `;
        } else if (type === 'other') {
            sectionTitle.innerText = "OTHER APPS";
            categoryContent.innerHTML = `
                <div class="product-grid">
                    <div class="product-card">
                        <i class="fa-solid fa-video product-icon"></i>
                        <div class="product-name">Zoom Pro 7 Hari</div>
                        <div class="product-price">Rp 5.000</div>
                        <button class="order-btn-card" onclick="openModal('Zoom Pro 7 Hari', 5000, 'zoom')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-video product-icon"></i>
                        <div class="product-name">Zoom Pro 14 Hari</div>
                        <div class="product-price">Rp 8.500</div>
                        <button class="order-btn-card" onclick="openModal('Zoom Pro 14 Hari', 8500, 'zoom')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-video product-icon"></i>
                        <div class="product-name">Zoom Pro 28 Hari</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Zoom Pro 28 Hari', 15000, 'zoom')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-gamepad product-icon"></i>
                        <div class="product-name">Cek Tanggal Pembuatan CC ML</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Cek Tanggal Pembuatan CC ML', 10000, 'mlchecker')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-gamepad product-icon"></i>
                        <div class="product-name">Cek Bind Acc ML</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Cek Bind Acc ML', 15000, 'mlchecker')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-gamepad product-icon"></i>
                        <div class="product-name">Find ID MLBB</div>
                        <div class="product-price">Rp 5.000</div>
                        <button class="order-btn-card" onclick="openModal('Find ID MLBB', 5.000, 'mlchecker')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-gamepad product-icon"></i>
                        <div class="product-name">Reset Password Moonton</div>
                        <div class="product-price">Rp 20.000</div>
                        <button class="order-btn-card" onclick="openModal('Reset Password Moonton', 20000, 'mlchecker')">Order Now</button>
                    </div>
                </div>
            `;
        } else if (type === 'nokos') {
            sectionTitle.innerText = "NOKOS VIRTUAL";
            categoryContent.innerHTML = `
                <div class="product-grid">
                    <div class="product-card">
                        <i class="fa-solid fa-sim-card product-icon"></i>
                        <div class="product-name">Nokwa Indo Fresh</div>
                        <div class="product-price">Rp 5.000</div>
                        <button class="order-btn-card" onclick="openModal('Nokwa Indo Fresh', 5000, 'nokos')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-sim-card product-icon"></i>
                        <div class="product-name">Nokwa Indo SV 3d-5d</div>
                        <div class="product-price">Rp 7.000</div>
                        <button class="order-btn-card" onclick="openModal('Nokwa Indo SV 3d-5d', 7000, 'nokos')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-sim-card product-icon"></i>
                        <div class="product-name">Nokwa Indo SV 10-15d</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Nokwa Indo SV 10-15d', 10000, 'nokos')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-sim-card product-icon"></i>
                        <div class="product-name">Nokwa Indo SV 20-30d</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Nokwa Indo SV 20-30d', 15000, 'nokos')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-sim-card product-icon"></i>
                        <div class="product-name">Nokwa Indo SV 50-60d</div>
                        <div class="product-price">Rp 20.000</div>
                        <button class="order-btn-card" onclick="openModal('Nokwa Indo SV 50-60d', 20000, 'nokos')">Order Now</button>
                    </div>
                    <div class="product-card">
                        <i class="fa-solid fa-wallet product-icon"></i>
                        <div class="product-name">Nokos E-Wallet</div>
                        <div class="product-price">Rp 3.000</div>
                        <button class="order-btn-card" onclick="openModal('Nokos E-Wallet', 3000, 'nokos')">Order Now</button>
                    </div>
                </div>
            `;
        } else if (type === 'sewabot') {
            sectionTitle.innerText = "SEWA BOT WHATSAPP";
            categoryContent.innerHTML = `
                <div class="sub-category-container">
                    <button class="sub-cat-btn active" onclick="filterSubCat('all', this)">Semua</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('sewa1b', this)">Sewa 1 Bulan</button>
                    <button class="sub-cat-btn" onclick="filterSubCat('perpanjang', this)">Perpanjang</button>
                </div>

                <div class="product-grid">
                    <div class="product-card sub-item-sewa1b">
                        <i class="fa-solid fa-robot product-icon"></i>
                        <div class="product-name">Lenwy (Nobel 4558) 1B</div>
                        <div class="product-price">Rp 7.000</div>
                        <button class="order-btn-card" onclick="openModal('Lenwy (Nobel 4558) 1B', 7000, 'sewabot')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-sewa1b">
                        <i class="fa-solid fa-robot product-icon"></i>
                        <div class="product-name">Merlyn (Nobel 7726) 1B</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Merlyn (Nobel 7726) 1B', 10000, 'sewabot')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-sewa1b">
                        <i class="fa-solid fa-robot product-icon"></i>
                        <div class="product-name">Lenwy x AM (Nobel 5399) 1B</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Lenwy x AM (Nobel 5399) 1B', 15000, 'sewabot')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-sewa1b">
                        <i class="fa-brands fa-telegram product-icon"></i>
                        <div class="product-name">AM via Tele (@alighttmotionbot) 1B</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('AM via Tele (@alighttmotionbot) 1B', 10000, 'sewabot')">Order Now</button>
                    </div>

                    <div class="product-card sub-item-perpanjang">
                        <i class="fa-solid fa-arrows-rotate product-icon"></i>
                        <div class="product-name">Perpanjang Lenwy (Nobel 4558)</div>
                        <div class="product-price">Rp 5.000</div>
                        <button class="order-btn-card" onclick="openModal('Perpanjang Lenwy (Nobel 4558)', 5000, 'sewabot')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-perpanjang">
                        <i class="fa-solid fa-arrows-rotate product-icon"></i>
                        <div class="product-name">Perpanjang Merlyn (Nobel 7726)</div>
                        <div class="product-price">Rp 8.000</div>
                        <button class="order-btn-card" onclick="openModal('Perpanjang Merlyn (Nobel 7726)', 8000, 'sewabot')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-perpanjang">
                        <i class="fa-solid fa-arrows-rotate product-icon"></i>
                        <div class="product-name">Perpanjang Lenwy x AM (Nobel 5399)</div>
                        <div class="product-price">Rp 15.000</div>
                        <button class="order-btn-card" onclick="openModal('Perpanjang Lenwy x AM (Nobel 5399)', 15000, 'sewabot')">Order Now</button>
                    </div>
                    <div class="product-card sub-item-perpanjang">
                        <i class="fa-solid fa-arrows-rotate product-icon"></i>
                        <div class="product-name">Perpanjang AM via Tele (@alighttmotionbot)</div>
                        <div class="product-price">Rp 10.000</div>
                        <button class="order-btn-card" onclick="openModal('Perpanjang AM via Tele (@alighttmotionbot)', 10000, 'sewabot')">Order Now</button>
                    </div>
                </div>
            `;
        }

        categoryContent.style.opacity = 1;
    }, 200); 
}

// Saat pertama kali dibuka, otomatis meload tab 'info' (Information)
document.addEventListener("DOMContentLoaded", () => {
    const infoBtn = document.querySelector(".cat-btn.active");
    if (infoBtn && typeof switchCategory === 'function') {
        switchCategory('info', infoBtn);
    }
});
