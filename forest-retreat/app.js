// Global State
let currentLang = 'ko'; // Default language is Korean

// Room Data Repository for Forest Sanctuary
const ROOM_DATA = {
    "ko": {
        "forest-suite": {
            type: "suite",
            name: "디럭스 포레스트 스위트",
            price: 550, // 550,000원
            size: "55 m²",
            view: "원시림 & 숲 전망",
            occupancy: "2인",
            beds: "킹베드 1개",
            image: "../assets/room1.png",
            summary: "전면 유리창을 통해 숲의 사계절을 품을 수 있는 단층 구조의 아늑한 친환경 스위트룸입니다.",
            description: "수제 가구와 천연 패브릭으로 마감된 포레스트 스위트는 자연과의 완전한 합일을 선사합니다. 개별 데크에서 새소리를 들으며 아침을 맞이하고, 원목 장작 벽난로 옆에서 차를 마시며 차분하게 내면을 돌보는 시간을 가져보세요.",
            amenities: [
                "개별 삼림욕 데크",
                "수제 목재 가구 및 벽난로",
                "천연 유기농 린넨 베딩",
                "바스 앤 바디웍스 아로마 배스 세트",
                "일리카페 프리미엄 에스프레소 머신",
                "웰컴 허브 티 어메니티"
            ]
        },
        "canopy-villa": {
            type: "villa",
            name: "캐노피 글래스 빌라",
            price: 780, // 780,000원
            size: "82 m²",
            view: "소나무 캐노피 & 하늘 전망",
            occupancy: "2인",
            beds: "킹베드 1개",
            image: "../assets/room2.png",
            summary: "270도 파노라마 글래스 천장을 통해 밤하늘의 은하수를 바로 바라볼 수 있는 독채형 빌라입니다.",
            description: "지상에서 공중으로 띄워 지은 특별한 건축 구조물로, 마치 숲속 캐노피 위에 떠 있는 듯한 해방감을 줍니다. 270도 글래스 돔 지붕을 열어 밤바람을 느끼고, 프라이빗 욕조에서 숲 향기를 음미하며 힐링해 보십시오.",
            amenities: [
                "270도 파노라마 글래스 돔 천장",
                "아웃도어 황동 온천 스파 욕조",
                "스마트 홈 루버 셔터 시스템",
                "천체 망원경 & 별자리 지도",
                "프리미엄 웰컴 유기농 스낵 바스켓",
                "다이닝 전용 VIP 좌석 보장"
            ]
        },
        "spa-villa": {
            type: "villa",
            name: "산추어리 스파 빌라",
            price: 980, // 980,000원
            size: "110 m²",
            view: "계곡 & 숲 파노라마 뷰",
            occupancy: "3인",
            beds: "킹베드 1개 + 데이베드 1개",
            image: "../assets/room3.png",
            summary: "천연 온천수 자쿠지와 편백나무 건식 사우나가 객실 내에 완비된 궁극의 웰니스 빌라입니다.",
            description: "완벽하게 격리된 독채형 스파 빌라로, 2단으로 구성된 야외 프라이빗 목재 데크와 지하 800m 직수 천연 온천 자쿠지, 편백나무 사우나를 갖추고 있습니다. 전담 버틀러 서비스를 통해 맞춤형 힐링 리추얼을 지원합니다.",
            amenities: [
                "지하 직수 개인 온천 자쿠지",
                "개별 편백나무 건식 사우나",
                "대리석 스탠딩 욕조 & 스톤 테라피 세트",
                "아웃도어 마사지 전용 데크 베드",
                "1:1 매칭 웰니스 버틀러 케어",
                "웰컴 샴페인 & 캐비아 플레이트"
            ]
        }
    },
    "en": {
        "forest-suite": {
            type: "suite",
            name: "Deluxe Forest Suite",
            price: 550,
            size: "55 m²",
            view: "Ancient Forest View",
            occupancy: "2 Guests",
            beds: "1 King Bed",
            image: "../assets/room1.png",
            summary: "A cozy, eco-friendly single-level suite designed to embrace the forest forest forest four seasons.",
            description: "Crafted with hand-carved local timber and natural linen textures, the Forest Suite is a serene refuge for inner peace. Enjoy the morning birdsong from your private deck, and relax beside the wood-burning fireplace with warm organic teas.",
            amenities: [
                "Private Forest Bathing Deck",
                "Handcrafted Timber Furniture & Fireplace",
                "Organic Linen Bedding Collection",
                "Aroma Bath Therapy Selection",
                "Illy Espresso Coffee System",
                "Bespoke Welcome Tea Ritual"
            ]
        },
        "canopy-villa": {
            type: "villa",
            name: "Canopy Glass Villa",
            price: 780,
            size: "82 m²",
            view: "Pine Canopy & Sky View",
            occupancy: "2 Guests",
            beds: "1 King Bed",
            image: "../assets/room2.png",
            summary: "A freestanding villa featuring a 270-degree glass dome roof for panoramic starlight stargazing.",
            description: "Built on elevated columns above the ground, this architectural masterpiece gives you the feeling of floating in the forest canopy. Draw back the motorized shades under the glass dome and soak in the outdoor copper tub filled with clean geothermal mineral water.",
            amenities: [
                "270-degree Panoramic Glass Dome",
                "Outdoor Copper Mineral Tub",
                "Motorized Shades & Smart Controls",
                "Stargazing Telescope & Star Chart",
                "Pre-filled Organic Minibar Basket",
                "Priority Restaurant Table Reservations"
            ]
        },
        "spa-villa": {
            type: "villa",
            name: "Sanctuary Spa Villa",
            price: 980,
            size: "110 m²",
            view: "Valley & Panorama Forest View",
            occupancy: "3 Guests",
            beds: "1 King Bed + 1 Daybed",
            image: "../assets/room3.png",
            summary: "The ultimate wellness sanctuary featuring an in-villa geothermal hot spring jacuzzi and cedar sauna.",
            description: "A completely secluded stand-alone villa. It features a private double-tier outdoor deck with a private hot spring jacuzzi fed directly by deep aquifers, a private cedar dry sauna, and a bespoke butler service designed to coordinate your wellness programs.",
            amenities: [
                "Private Deep-Aquifer Hot Spring Jacuzzi",
                "In-villa Cedar Wood Dry Sauna",
                "Basalt Soaking Tub & Massage Stone Kit",
                "Massage Table Deck Space",
                "1:1 Dedicated Butler Service",
                "Welcome Champagne & Caviar Platter"
            ]
        }
    }
};

// UI Translations dictionary
const TRANSLATIONS = {
    "ko": {
        "nav-about": "브랜드 철학",
        "nav-rooms": "객실 안내",
        "nav-dining": "다이닝",
        "nav-wellness": "웰니스 온천",
        "nav-reserve": "실시간 예약",
        "btn-book": "예약하기",
        "hero-tagline": "GRAND AETOS FOREST RETREAT",
        "hero-title": "태고의 숲 속에서,<br class=\"desktop-br\">온전한 나와 마주하는 시간.",
        "hero-subtitle": "그랜드 에이토스는 깊은 소나무 숲속에 조용히 안겨 자연 지열 온천수와 오가닉 식재료, 그리고 치유의 리추얼을 통해 바쁜 현대인의 감각을 복원하는 프리미엄 웰니스 휴양지입니다.",
        "hero-explore": "자세히 보기",
        "label-checkin": "체크인",
        "label-checkout": "체크아웃",
        "label-guests": "인원 선택",
        "label-room-select": "객실 선택",
        "btn-check-avail": "예약 가능 여부 확인",
        "about-tag": "Philosophy",
        "about-title": "대자연과의 교감,<br class=\"desktop-br\">그것이 최상의 호사입니다.",
        "about-desc1": "그랜드 에이토스는 단순한 휴식을 넘어 몸과 마음의 우아한 대칭을 지탱하고자 설계되었습니다. 우리는 산속 나무 한 그루를 훼손하지 않기 위해 수십 번 설계를 변경했으며, 친환경 목조 공법과 지하 800미터 깊이의 지열 온천수를 순환하는 청정 에너지 리사이클을 구현했습니다.",
        "about-desc2": "피톤치드 향이 은은히 감도는 숲의 그늘과 새들의 날갯짓 소리, 노천 온천에서 피어오르는 따스한 안개가 당신의 온전한 쉼을 완성해 드립니다.",
        "philosophical-quote": "“Restore the elegant symmetry of your mind and body.”",
        "rooms-tag": "Suites & Villas",
        "rooms-title": "자연을 품은 프라이빗 스위트",
        "rooms-subtitle": "지형에 스며들듯 설계된 단 3개의 독채형 객실만을 프라이빗하게 운영합니다. 전면 통유리와 천연 편백나무 마감으로 숲과의 경계를 허물었습니다.",
        "modal-tag": "객실 세부 정보",
        "modal-subhead-specs": "객실 사양",
        "modal-subhead-amenities": "기본 포함 어메니티",
        "spec-size": "크기:",
        "spec-view": "전망:",
        "spec-occ": "최대 인원:",
        "spec-beds": "침대:",
        "btn-back-list": "목록으로",
        "btn-select-book": "선택 및 예약",
        "exp-tag": "Gastronomy & Wellness",
        "exp-title": "자연이 주는 깊은 울림",
        "exp-subtitle": "유기농 야채 정원에서 엄선한 가스트로노미 다이닝과 대자연 속 웰니스 온천을 통해 지친 세포 하나하나를 일깨워 보십시오.",
        "exp1-tag": "Gastronomy",
        "exp1-title": "글래스하우스 가든 다이닝",
        "exp1-desc": "공중에 띄워 지은 투명한 유리 온실 레스토랑에서 매일 수확하는 친환경 채소와 숲속 허브, 제철 특산물로 만들어진 건강한 다이닝 코스를 선보입니다.",
        "exp1-hours": "Dinner: 18:00 - 22:00",
        "exp2-tag": "SWIMMING POOL",
        "exp2-title": "포레스트 히티드 온천풀",
        "exp2-desc": "피톤치드가 뿜어 나오는 소나무 캐노피 아래에서, 38도의 천연 온천수로 가득 찬 야외 온수풀에서 사계절 내내 온전한 쉼을 만끽하십시오.",
        "exp2-hours": "Operating: 09:00 - 21:00",
        "exp3-tag": "Wellness & Spa",
        "exp3-title": "아난다 리추얼 온천 스파",
        "exp3-desc": "숙련된 스파 마스터의 따뜻한 현무암 리추얼 세션과 오가닉 허브 티, 잔잔한 명상 호흡이 어우러진 시그니처 바디 힐링 스파 프로그램입니다.",
        "exp3-hours": "Spa Hours: 08:00 - 21:00",
        "aest-tag": "Aesthetic Moments",
        "aest-title": "평온함이 깃드는 찰나의 순간들",
        "aest-desc": "그랜드 에이토스의 아침 안개, 찻잔 위로 번지는 은은한 향기, 바람이 흔드는 소나무 소리까지. 이곳의 모든 순간은 오직 당신을 위해 조율되어 있습니다.",
        "reserve-tag": "Reservations",
        "reserve-title": "여정의 시작",
        "reserve-subtitle": "날짜와 객실을 선택하여 숲속 힐링을 위한 견적을 즉시 확인하고 예약을 확정하세요.",
        "form-title": "예약 정보 입력",
        "label-room-type": "객실 타입",
        "form-subhead-addons": "추가 혜택 및 옵션",
        "addon-spa-name": "아난다 온천 스파 패스",
        "addon-spa-price": "+₩70,000 / 1인",
        "addon-dining-name": "글래스하우스 다이닝 석식",
        "addon-dining-price": "+₩120,000 / 1인 / 1박",
        "addon-transfer-name": "하이브리드 SUV 공항 픽업 서비스",
        "addon-transfer-price": "+₩90,000 (편도 정액)",
        "form-subhead-contact": "예약자 연락처 정보",
        "label-name": "예약자 성함",
        "label-phone": "연락처",
        "label-requests": "특별 요청 사항 (선택)",
        "btn-request-book": "예약 확정하기",
        "summary-title": "예약 정보 요약",
        "addon-spa-short": "온천 스파 패스",
        "addon-dining-short": "글래스하우스 석식",
        "addon-transfer-short": "공항 SUV 서비스",
        "summary-tax-label": "친환경 부담금 및 세금 (10%)",
        "summary-total-label": "예상 결제 금액",
        "summary-cancel-policy": "24시간 전 무료 취소 가능. 현장 결제.",
        "load-title": "객실 예약 가능 여부 확인 중...",
        "load-desc": "그랜드 에이토스의 숲속 온천 빌라를 조회하고 있습니다.",
        "success-title": "RESERVATION CONFIRMED",
        "success-subtitle": "고귀한 쉼의 여정이 확정되었습니다.",
        "receipt-code-label": "예약 확정 코드",
        "receipt-status-label": "예약 상태",
        "receipt-status-val": "확정됨",
        "receipt-room-label": "객실 타입",
        "receipt-price-label": "총 결제 예정 금액",
        "btn-new-reserve": "새로 예약하기",
        "btn-save-receipt": "영수증 저장",
        "footer-tagline": "가장 평화롭고 고요한 시간, 거대하고 정교하게 조율된 오아시스 그랜드 에이토스.",
        "footer-explore-title": "NAVIGATIONS",
        "footer-info-title": "INFORMATION",
        "footer-contact-title": "LOCATION & CONTACT",
        "policy-directions": "오시는 길",
        "policy-privacy": "개인정보 처리방침",
        "policy-terms": "서비스 이용약관",
        "policy-press": "프레스 킷",
        "footer-nav-dining": "파인 다이닝",
        "footer-nav-spa": "웰니스 스파",
        "footer-designed": "DESIGNED FOR LUXURY REFERENCE SITE",
        "footer-addr-val": "남해군 남면 해안 절벽로 123 (오션 비스타)"
    },
    "en": {
        "nav-about": "Philosophy",
        "nav-rooms": "Suites & Villas",
        "nav-dining": "Dining",
        "nav-wellness": "Wellness Spa",
        "nav-reserve": "Reservations",
        "btn-book": "Book Now",
        "hero-tagline": "GRAND AETOS FOREST RETREAT",
        "hero-title": "Deep in the forest,<br class=\"desktop-br\">meet your authentic self.",
        "hero-subtitle": "Nestled gently within an ancient pine forest, Grand Aetos restores your vital senses through direct aquifer spa baths, organic degustations, and therapeutic spa rituals.",
        "hero-explore": "Explore More",
        "label-checkin": "Check-in",
        "label-checkout": "Check-out",
        "label-guests": "Guests",
        "label-room-select": "Select Suite",
        "btn-check-avail": "Check Availability",
        "about-tag": "Philosophy",
        "about-title": "Connecting with Wild Nature,<br class=\"desktop-br\">The Ultimate Indulgence.",
        "about-desc1": "Grand Aetos is designed to sustain the elegant symmetry of your mind and body. We modified our layout dozens of times to protect every ancient tree on the mountain, achieving clean geothermal water circulation and a carbon-neutral timber structure.",
        "about-desc2": "The deep scent of phytoncide from the forest canopy, the quiet wingbeats of mountain birds, and the warm mists from outdoor hot springs will cradle your restoration.",
        "philosophical-quote": "“Restore the elegant symmetry of your mind and body.”",
        "rooms-tag": "Suites & Villas",
        "rooms-title": "Forest Sanctuaries",
        "rooms-subtitle": "We operate only three exclusive detached suites. Floor-to-ceiling panoramic glass walls and clean cypress wood finishes dissolve all barriers between indoors and the forest canopy.",
        "modal-tag": "Sanctuary Details",
        "modal-subhead-specs": "Sanctuary Specifications",
        "modal-subhead-amenities": "Included Comforts",
        "spec-size": "Size:",
        "spec-view": "View:",
        "spec-occ": "Max Occupancy:",
        "spec-beds": "Beds:",
        "btn-back-list": "Back to List",
        "btn-select-book": "Select & Book",
        "exp-tag": "Gastronomy & Wellness",
        "exp-title": "Resonance of the Forest",
        "exp-subtitle": "Rejuvenate every cell with gastronomy menus sourced directly from our bio-gardens and mineral thermal baths.",
        "exp1-tag": "Gastronomy",
        "exp1-title": "Botanical Glasshouse Dining",
        "exp1-desc": "Dine inside our glass greenhouse restaurant suspended high in the trees, featuring healthy farm-to-table courses crafted from organic vegetables and forest herbs.",
        "exp1-hours": "Dinner: 18:00 - 22:00",
        "exp2-tag": "SWIMMING POOL",
        "exp2-title": "Forest Heated Mineral Pool",
        "exp2-desc": "Enjoy peace beneath the towering pines in our outdoor geothermal pool heated to a perfect 38°C all year round.",
        "exp2-hours": "Operating: 09:00 - 21:00",
        "exp3-tag": "Wellness & Spa",
        "exp3-title": "Ananda Ritual Hot Spring Spa",
        "exp3-desc": "A signature body healing program incorporating basalt hot stone massages, organic herbal teas, and meditative breathing guided by spa masters.",
        "exp3-hours": "Spa Hours: 08:00 - 21:00",
        "aest-tag": "Aesthetic Moments",
        "aest-title": "Traces of Silence",
        "aest-desc": "The morning mist of Grand Aetos, the scent rising from your teacup, the wind rustling the pines. Every moment is calibrated for your peace.",
        "reserve-tag": "Reservations",
        "reserve-title": "Begin Your Stay",
        "reserve-subtitle": "Select your desired dates and room option to create your personalized stay simulation.",
        "form-title": "Reservation Details",
        "label-room-type": "Suites Option",
        "form-subhead-addons": "Enhancements",
        "addon-spa-name": "Ananda Hot Spring Spa Pass",
        "addon-spa-price": "+$70 / guest",
        "addon-dining-name": "Glasshouse Dinner Dining",
        "addon-dining-price": "+$120 / guest / night",
        "addon-transfer-name": "Hybrid SUV Airport Transfer",
        "addon-transfer-price": "+$90 flat fee",
        "form-subhead-contact": "Contact Information",
        "label-name": "Full Name",
        "label-phone": "Phone Number",
        "label-requests": "Special Requests (Optional)",
        "btn-request-book": "Confirm Reservation",
        "summary-title": "Reservation Summary",
        "addon-spa-short": "Ananda Spa Pass",
        "addon-dining-short": "Glasshouse Dinner",
        "addon-transfer-short": "SUV Transfer Service",
        "summary-tax-label": "Eco-Resort Levy & Tax (10%)",
        "summary-total-label": "Estimated Total",
        "summary-cancel-policy": "24-hour cancellation flexibility. Pay upon arrival.",
        "load-title": "Verifying Villa Availability...",
        "load-desc": "Securing your private forest retreat at Grand Aetos.",
        "success-title": "RESERVATION CONFIRMED",
        "success-subtitle": "Your sublime journey of rest has been secured.",
        "receipt-code-label": "CONFIRMATION CODE",
        "receipt-status-label": "STATUS",
        "receipt-status-val": "RESERVED",
        "receipt-room-label": "SANCTUARY",
        "receipt-price-label": "Total Estimated Price",
        "btn-new-reserve": "New Reservation",
        "btn-save-receipt": "Save Receipt",
        "footer-tagline": "Grand Aetos Resort & Spa. Designed for Luxury Reference Site.",
        "footer-explore-title": "NAVIGATIONS",
        "footer-info-title": "INFORMATION",
        "footer-contact-title": "LOCATION & CONTACT",
        "policy-directions": "Directions",
        "policy-privacy": "Privacy Policy",
        "policy-terms": "Terms of Service",
        "policy-press": "Press Kit",
        "footer-nav-dining": "Fine Dining",
        "footer-nav-spa": "Wellness Spa",
        "footer-designed": "DESIGNED FOR LUXURY REFERENCE SITE",
        "footer-addr-val": "Cliffside Ocean Vista, South Coast, Korea"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // --- SMART HEADER (Auto-hide on Scroll Down, Show on Scroll Up) ---
    let lastScrollY = window.scrollY;
    const header = document.getElementById("main-header");
    
    if (header) {
        window.addEventListener("scroll", () => {
            const currentScrollY = window.scrollY;
            
            // Sticky Header shrink
            if (currentScrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
            
            // Auto-hide trigger
            if (currentScrollY > 150) {
                if (currentScrollY > lastScrollY) {
                    header.classList.add("header-hidden");
                } else {
                    header.classList.remove("header-hidden");
                }
            } else {
                header.classList.remove("header-hidden");
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // --- MOBILE DRAWER MENU ---
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileOverlay = document.getElementById("mobile-menu-overlay");
    const mobileClose = document.getElementById("mobile-menu-close");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    const openMenu = () => {
        if (mobileOverlay) mobileOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        if (mobileOverlay) mobileOverlay.classList.remove("open");
        document.body.style.overflow = "";
    };

    if (mobileToggle) mobileToggle.addEventListener("click", openMenu);
    if (mobileClose) mobileClose.addEventListener("click", closeMenu);
    mobileLinks.forEach(link => link.addEventListener("click", closeMenu));

    // --- SCROLL ANIMATIONS (Intersection Observer) ---
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- LANGUAGE SWITCHER CONTROLLER ---
    const langSwitchers = document.querySelectorAll(".lang-switcher");

    const updateLanguage = (lang) => {
        currentLang = lang;
        document.documentElement.lang = lang;

        // 1. Update Title tag & SEO meta
        const metaDesc = document.getElementById("seo-meta-desc");
        if (lang === 'ko') {
            document.title = "GRAND AETOS — Forest Retreat & Wellness";
            if (metaDesc) metaDesc.setAttribute("content", "태고의 소나무 숲속에서 누리는 천연 온천 스파 리포트 그랜드 에이토스. 웰니스 요가, 지열 자쿠지가 완비된 독채 빌라 예약을 조율해 보세요.");
        } else {
            document.title = "GRAND AETOS — Forest Retreat & Wellness";
            if (metaDesc) metaDesc.setAttribute("content", "Grand Aetos, an eco-wellness hot spring resort deep in the pine forest. Indulge in private heated jacuzzis, custom therapy, and organic gastronomy.");
        }

        // 2. Translate static elements using data-i18n
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
                el.innerHTML = TRANSLATIONS[lang][key];
            }
        });

        // 3. Update Input placeholders
        const nameInput = document.getElementById("book-name");
        const phoneInput = document.getElementById("book-phone");
        const requestInput = document.getElementById("book-requests");

        if (nameInput) nameInput.placeholder = lang === 'ko' ? "홍길동" : "John Doe";
        if (phoneInput) phoneInput.placeholder = lang === 'ko' ? "010-1234-5678" : "+82 (0)10-1234-5678";
        if (requestInput) requestInput.placeholder = lang === 'ko' ? "베개 취향, 알레르기 유무, 픽업 시간 기재..." : "Pillow preferences, dietary requirements, allergen notices...";

        // 4. Update Dropdowns (Rooms & Guests)
        populateDropdowns();

        // 5. Render Room Cards dynamically
        renderRoomCards();

        // 6. Active state of lang switch buttons
        document.querySelectorAll(".lang-btn").forEach(btn => {
            if (btn.getAttribute("data-lang") === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // 7. Re-calculate pricing breakdown
        calculatePricing();
    };

    const populateDropdowns = () => {
        const bookRoom = document.getElementById("book-room");
        if (!bookRoom) return; // Only run on reservation page
        
        const rooms = ROOM_DATA[currentLang];
        const roomOptsHTML = `
            <option value="forest-suite">${rooms["forest-suite"].name} (${currentLang === 'ko' ? '₩550,000' : '$550'}${currentLang === 'ko' ? '/1박' : '/night'})</option>
            <option value="canopy-villa">${rooms["canopy-villa"].name} (${currentLang === 'ko' ? '₩780,000' : '$780'}${currentLang === 'ko' ? '/1박' : '/night'})</option>
            <option value="spa-villa">${rooms["spa-villa"].name} (${currentLang === 'ko' ? '₩980,000' : '$980'}${currentLang === 'ko' ? '/1박' : '/night'})</option>
        `;

        const currentVal = bookRoom.value;
        bookRoom.innerHTML = roomOptsHTML;
        if (currentVal && rooms[currentVal]) bookRoom.value = currentVal;

        // Guests
        const bookGuests = document.getElementById("book-guests");
        if (!bookGuests) return;
        const bookGuestsHTML = currentLang === 'ko' ? `
            <option value="1">성인 1인</option>
            <option value="2" selected>성인 2인</option>
            <option value="3">성인 3인</option>
            <option value="4">성인 4인</option>
        ` : `
            <option value="1">1 Adult</option>
            <option value="2" selected>2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
        `;

        const currentGVal = bookGuests.value;
        bookGuests.innerHTML = bookGuestsHTML;
        if (currentGVal) bookGuests.value = currentGVal;
    };

    // Attach click listener to Lang switchers
    langSwitchers.forEach(switcher => {
        switcher.addEventListener("click", (e) => {
            const clickedBtn = e.target.closest(".lang-btn");
            if (clickedBtn) {
                const targetLang = clickedBtn.getAttribute("data-lang");
                updateLanguage(targetLang);
            }
        });
    });

    // --- ROOM FILTERING & CARDS RENDER ---
    let activeFilter = 'all';
    const filterButtons = document.querySelectorAll(".filter-btn");

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                filterButtons.forEach(b => b.classList.remove("active"));
                e.target.classList.add("active");
                activeFilter = e.target.getAttribute("data-filter");
                renderRoomCards();
            });
        });
    }

    const renderRoomCards = () => {
        const grid = document.getElementById("rooms-cards-grid");
        if (!grid) return; // Only runs on rooms page
        grid.innerHTML = "";
        
        const rooms = ROOM_DATA[currentLang];
        Object.keys(rooms).forEach(id => {
            const room = rooms[id];
            
            // Filter match
            if (activeFilter !== 'all' && room.type !== activeFilter) {
                return;
            }

            const card = document.createElement("article");
            card.className = "room-card reveal";
            card.id = `room-card-${id}`;
            
            const formattedPrice = currentLang === 'ko' 
                ? `₩${(room.price * 1000).toLocaleString()}` 
                : `$${room.price}`;
            const perNight = currentLang === 'ko' ? '/1박' : '/night';
            
            const specsText = currentLang === 'ko' 
                ? `<li><i class="fa-solid fa-arrows-left-right"></i> ${room.size}</li>
                   <li><i class="fa-solid fa-tree"></i> ${room.view}</li>
                   <li><i class="fa-solid fa-user"></i> ${room.occupancy}</li>`
                : `<li><i class="fa-solid fa-arrows-left-right"></i> ${room.size}</li>
                   <li><i class="fa-solid fa-tree"></i> ${room.view}</li>
                   <li><i class="fa-solid fa-user"></i> Max ${room.occupancy}</li>`;
            
            const btnDiscover = currentLang === 'ko' ? '객실 상세 보기' : 'Discover Suite';
            const btnBook = currentLang === 'ko' ? '객실 예약' : 'Book Suite';

            card.innerHTML = `
                <div class="room-img-container">
                     <div class="room-img" style="background-image: url('${room.image}');"></div>
                     <div class="room-price-tag">${formattedPrice}<span class="per-night">${perNight}</span></div>
                </div>
                <div class="room-card-content">
                     <h3 class="room-name">${room.name}</h3>
                     <p class="room-summary">${room.summary}</p>
                     <ul class="room-quick-amenities">
                         ${specsText}
                     </ul>
                     <div class="room-actions-row">
                          <button class="btn btn-outline btn-sm discover-room-btn" data-room="${id}">${btnDiscover}</button>
                          <button class="btn btn-primary btn-sm book-room-shortcut-btn" data-room="${id}">${btnBook}</button>
                     </div>
                </div>
            `;
            grid.appendChild(card);
            revealObserver.observe(card); // Re-observe new element
        });

        // Re-attach listeners to dynamic buttons
        document.querySelectorAll(".discover-room-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const roomId = e.target.getAttribute("data-room");
                openModal(roomId);
            });
        });

        document.querySelectorAll(".book-room-shortcut-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const roomId = e.target.getAttribute("data-room");
                selectRoomAndRedirect(roomId);
            });
        });
    };

    // --- ROOM DETAILS MODAL ---
    const modal = document.getElementById("room-modal");
    const modalClose = document.getElementById("room-modal-close");
    const modalCloseAction = document.getElementById("modal-close-action");
    const modalBookAction = document.getElementById("modal-book-action");
    let currentSelectedRoomId = "forest-suite";

    const openModal = (roomId) => {
        if (!modal) return;
        const data = ROOM_DATA[currentLang][roomId];
        if (!data) return;

        currentSelectedRoomId = roomId;
        document.getElementById("modal-room-name").textContent = data.name;
        
        const priceValStr = currentLang === 'ko' 
            ? `₩${(data.price * 1000).toLocaleString()} / 1박` 
            : `$${data.price} / night`;
        document.getElementById("modal-room-price").textContent = priceValStr;
        
        document.getElementById("modal-room-desc").textContent = data.description;
        document.getElementById("modal-room-size").textContent = data.size;
        document.getElementById("modal-room-view").textContent = data.view;
        document.getElementById("modal-room-occupancy").textContent = data.occupancy;
        document.getElementById("modal-room-beds").textContent = data.beds;
        document.getElementById("modal-room-image").style.backgroundImage = `url('${data.image}')`;

        // Render amenities list
        const listContainer = document.getElementById("modal-room-amenities");
        listContainer.innerHTML = "";
        data.amenities.forEach(amenity => {
            const li = document.createElement("li");
            li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${amenity}`;
            listContainer.appendChild(li);
        });

        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        if (modal) modal.classList.remove("open");
        document.body.style.overflow = "";
    };

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalCloseAction) modalCloseAction.addEventListener("click", closeModal);

    // Modal select & book button
    if (modalBookAction) {
        modalBookAction.addEventListener("click", () => {
            selectRoomAndRedirect(currentSelectedRoomId);
            closeModal();
        });
    }

    const selectRoomAndRedirect = (roomId) => {
        // Since we are in a multi-page setup, checking if reserve.html is current
        const bookRoom = document.getElementById("book-room");
        if (bookRoom) {
            bookRoom.value = roomId;
            bookRoom.dispatchEvent(new Event("change"));
            document.getElementById("reservation").scrollIntoView({ behavior: "smooth" });
        } else {
            // Redirect to reserve.html with query parameter
            window.location.href = `reserve.html?room=${roomId}`;
        }
    };

    // Check for query parameters on loading reserve.html
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedRoom = urlParams.get('room');
    if (preselectedRoom && document.getElementById("book-room")) {
        setTimeout(() => {
            const bookRoom = document.getElementById("book-room");
            if (bookRoom && ROOM_DATA[currentLang][preselectedRoom]) {
                bookRoom.value = preselectedRoom;
                bookRoom.dispatchEvent(new Event("change"));
            }
        }, 100);
    }

    // --- INTERACTIVE RESERVATION SIMULATOR ---
    const bookCheckin = document.getElementById("book-checkin");
    const bookCheckout = document.getElementById("book-checkout");
    const bookGuests = document.getElementById("book-guests");
    const bookRoom = document.getElementById("book-room");
    
    const addSpa = document.getElementById("add-spa");
    const addDining = document.getElementById("add-dining");
    const addTransfer = document.getElementById("add-transfer");

    const summaryRoomImg = document.getElementById("summary-room-img");
    const summaryRoomTitle = document.getElementById("summary-room-title");
    const summaryDisplayDates = document.getElementById("summary-display-dates");
    const summaryDisplayGuests = document.getElementById("summary-display-guests");
    
    const priceLabelNights = document.getElementById("price-label-nights");
    const priceValueNights = document.getElementById("price-value-nights");
    
    const rowSpaCost = document.getElementById("row-spa-cost");
    const valSpaCost = document.getElementById("val-spa-cost");
    
    const rowDiningCost = document.getElementById("row-dining-cost");
    const valDiningCost = document.getElementById("val-dining-cost");
    
    const rowTransferCost = document.getElementById("row-transfer-cost");
    const valTransferCost = document.getElementById("val-transfer-cost");

    const priceValueTax = document.getElementById("price-value-tax");
    const priceValueTotal = document.getElementById("price-value-total");

    // Set Default Dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const formatDateString = (date) => {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    if (bookCheckin) bookCheckin.value = formatDateString(today);
    if (bookCheckout) bookCheckout.value = formatDateString(tomorrow);
    if (bookCheckin) bookCheckin.min = formatDateString(today);
    
    if (bookCheckin) {
        bookCheckin.addEventListener("change", () => {
            const checkinDate = new Date(bookCheckin.value);
            const nextDay = new Date(checkinDate);
            nextDay.setDate(nextDay.getDate() + 1);
            if (bookCheckout) {
                bookCheckout.min = formatDateString(nextDay);
                if (new Date(bookCheckout.value) <= checkinDate) {
                    bookCheckout.value = formatDateString(nextDay);
                }
            }
            calculatePricing();
        });
    }

    if (bookCheckout) bookCheckout.addEventListener("change", calculatePricing);

    // Calculate Pricing function
    function calculatePricing() {
        if (!bookRoom) return; // Only runs on reserve.html
        const roomId = bookRoom.value || "forest-suite";
        const room = ROOM_DATA[currentLang][roomId];
        if (!room) return;

        // Update preview image & title
        if (summaryRoomImg) summaryRoomImg.style.backgroundImage = `url('${room.image}')`;
        if (summaryRoomTitle) summaryRoomTitle.textContent = room.name;

        // Calculate nights
        const checkinDate = bookCheckin ? new Date(bookCheckin.value) : today;
        const checkoutDate = bookCheckout ? new Date(bookCheckout.value) : tomorrow;
        const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
        
        let nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (isNaN(nights) || nights < 1) nights = 1;

        // Format date displays
        const dateOptions = currentLang === 'ko' 
            ? { year: 'numeric', month: 'long', day: 'numeric' }
            : { month: 'short', day: 'numeric', year: 'numeric' };
        
        const dateLoc = currentLang === 'ko' ? 'ko-KR' : 'en-US';
        if (summaryDisplayDates) {
            summaryDisplayDates.textContent = `${checkinDate.toLocaleDateString(dateLoc, dateOptions)} – ${checkoutDate.toLocaleDateString(dateLoc, dateOptions)}`;
        }

        // Guests count
        const guests = bookGuests ? (parseInt(bookGuests.value) || 2) : 2;
        if (summaryDisplayGuests) {
            summaryDisplayGuests.textContent = currentLang === 'ko' 
                ? `${guests}명` 
                : `${guests} Guest${guests > 1 ? 's' : ''}`;
        }

        // Multiply values by 1000 for realistic Korean Won amounts
        const currencyMultiplier = currentLang === 'ko' ? 1000 : 1;
        const currencySymbol = currentLang === 'ko' ? '₩' : '$';

        // Calculate charges
        const baseRate = room.price * currencyMultiplier;
        const totalBaseRoom = baseRate * nights;

        const rateStr = currentLang === 'ko' ? '객실 총액' : 'Room Rate';
        const nightsStr = currentLang === 'ko' ? `${nights}박` : `${nights} night${nights > 1 ? 's' : ''}`;
        
        if (priceLabelNights) priceLabelNights.textContent = `${rateStr} (${currencySymbol}${baseRate.toLocaleString()} x ${nightsStr})`;
        if (priceValueNights) priceValueNights.textContent = `${currencySymbol}${totalBaseRoom.toLocaleString()}`;

        // SPA cost: 70 USD / 70,000 KRW per guest
        let totalSpaCost = 0;
        if (addSpa && addSpa.checked) {
            totalSpaCost = 70 * currencyMultiplier * guests;
            if (rowSpaCost) rowSpaCost.style.display = "flex";
            if (valSpaCost) valSpaCost.textContent = `${currencySymbol}${totalSpaCost.toLocaleString()}`;
        } else {
            if (rowSpaCost) rowSpaCost.style.display = "none";
        }

        // Dining cost: 120 USD / 120,000 KRW per guest per night
        let totalDiningCost = 0;
        if (addDining && addDining.checked) {
            totalDiningCost = 120 * currencyMultiplier * guests * nights;
            if (rowDiningCost) rowDiningCost.style.display = "flex";
            if (valDiningCost) valDiningCost.textContent = `${currencySymbol}${totalDiningCost.toLocaleString()}`;
        } else {
            if (rowDiningCost) rowDiningCost.style.display = "none";
        }

        // Airport transfer cost: 90 USD / 90,000 KRW flat
        let totalTransferCost = 0;
        if (addTransfer && addTransfer.checked) {
            totalTransferCost = 90 * currencyMultiplier;
            if (rowTransferCost) rowTransferCost.style.display = "flex";
            if (valTransferCost) valTransferCost.textContent = `${currencySymbol}${totalTransferCost.toLocaleString()}`;
        } else {
            if (rowTransferCost) rowTransferCost.style.display = "none";
        }

        // Subtotal, tax & grand total
        const subtotal = totalBaseRoom + totalSpaCost + totalDiningCost + totalTransferCost;
        const tax = subtotal * 0.10; // 10% levy
        const total = subtotal + tax;

        if (priceValueTax) priceValueTax.textContent = `${currencySymbol}${Math.floor(tax).toLocaleString()}`;
        if (priceValueTotal) priceValueTotal.textContent = `${currencySymbol}${Math.floor(total).toLocaleString()}`;

        return {
            roomName: room.name,
            checkinStr: checkinDate.toLocaleDateString(dateLoc, { year: 'numeric', month: 'long', day: 'numeric' }),
            checkoutStr: checkoutDate.toLocaleDateString(dateLoc, { year: 'numeric', month: 'long', day: 'numeric' }),
            totalFormatted: `${currencySymbol}${Math.floor(total).toLocaleString()}`
        };
    }

    // Attach listeners to input fields
    if (bookRoom) bookRoom.addEventListener("change", calculatePricing);
    if (bookGuests) bookGuests.addEventListener("change", calculatePricing);
    if (addSpa) addSpa.addEventListener("change", calculatePricing);
    if (addDining) addDining.addEventListener("change", calculatePricing);
    if (addTransfer) addTransfer.addEventListener("change", calculatePricing);

    // --- BOOKING FORM SUBMISSION & SUCCESS VIEW ---
    const mainBookingForm = document.getElementById("main-booking-form");
    const flowContainer = document.getElementById("booking-flow-container");
    const loadingPanel = document.getElementById("booking-loading-panel");
    const successPanel = document.getElementById("booking-success-panel");

    const receiptConfCode = document.getElementById("receipt-conf-code");
    const receiptGuestName = document.getElementById("receipt-guest-name");
    const receiptRoomName = document.getElementById("receipt-room-name");
    const receiptCheckin = document.getElementById("receipt-checkin");
    const receiptCheckout = document.getElementById("receipt-checkout");
    const receiptTotalCost = document.getElementById("receipt-total-cost");
    const successDisclaimer = document.getElementById("receipt-success-disclaimer");

    if (mainBookingForm) {
        mainBookingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Trigger pricing calculate one final time
            const finalCalculations = calculatePricing();
            const guestName = document.getElementById("book-name").value;
            const guestPhone = document.getElementById("book-phone").value;

            // Hide form & show loader
            if (flowContainer) flowContainer.style.display = "none";
            if (loadingPanel) loadingPanel.style.display = "flex";

            // Generate random confirmation code
            const codeNum = Math.floor(1000 + Math.random() * 9000);
            const chars = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
            const codeChar = chars[Math.floor(Math.random() * chars.length)];
            const confirmationCode = `AURA-${codeNum}-${codeChar}`;

            // Simulate network latency (2 seconds)
            setTimeout(() => {
                if (loadingPanel) loadingPanel.style.display = "none";
                if (successPanel) successPanel.style.display = "block";

                // Populate receipt data
                if (receiptConfCode) receiptConfCode.textContent = confirmationCode;
                if (receiptGuestName) receiptGuestName.textContent = guestName;
                if (receiptRoomName) receiptRoomName.textContent = finalCalculations.roomName;
                if (receiptCheckin) receiptCheckin.textContent = finalCalculations.checkinStr;
                if (receiptCheckout) receiptCheckout.textContent = finalCalculations.checkoutStr;
                if (receiptTotalCost) receiptTotalCost.textContent = finalCalculations.totalFormatted;

                // Localized success disclaimer
                if (successDisclaimer) {
                    if (currentLang === 'ko') {
                        successDisclaimer.innerHTML = `입력하신 연락처(<span>${guestPhone}</span>)로 컨시어지가 24시간 이내에 직접 디테일 플래닝을 위해 개별 전화를 드립니다. 결제는 퇴실 시 진행됩니다.`;
                    } else {
                        successDisclaimer.innerHTML = `Our concierge will call you directly at <span>${guestPhone}</span> within 24 hours to assist with your personalized stay planning. Payment will be processed at checkout.`;
                    }
                }

                // Scroll success panel into view
                const reserveSection = document.getElementById("reservation");
                if (reserveSection) {
                    reserveSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 2000);
        });
    }

    // Success Screen Reset button
    const successResetBtn = document.getElementById("success-reset-btn");
    if (successResetBtn) {
        successResetBtn.addEventListener("click", () => {
            if (mainBookingForm) mainBookingForm.reset();
            
            if (bookCheckin) bookCheckin.value = formatDateString(today);
            if (bookCheckout) bookCheckout.value = formatDateString(tomorrow);
            
            calculatePricing();

            if (successPanel) successPanel.style.display = "none";
            if (flowContainer) flowContainer.style.display = "grid";

            const reserveSection = document.getElementById("reservation");
            if (reserveSection) {
                reserveSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // Save Receipt Simulator
    const successDownloadBtn = document.getElementById("success-download-btn");
    if (successDownloadBtn) {
        successDownloadBtn.addEventListener("click", () => {
            window.print();
        });
    }

    // --- HOME PAGE SLIDER ---
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }, 5000);
    }

    // --- CUSTOM CURSOR TRACKER ---
    const cursor = document.getElementById("custom-cursor");
    const cursorDot = document.getElementById("custom-cursor-dot");
    
    if (cursor && cursorDot) {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        
        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });
        
        const tick = () => {
            cursorX += (mouseX - cursorX) * 0.12;
            cursorY += (mouseY - cursorY) * 0.12;
            
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            
            requestAnimationFrame(tick);
        };
        tick();
        
        // Hover effects for standard elements
        const hoverables = document.querySelectorAll("a, button, select, input, textarea, .lang-btn, .checkmark, .filter-btn");
        hoverables.forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursor.classList.add("hover");
            });
            el.addEventListener("mouseleave", () => {
                cursor.classList.remove("hover");
            });
        });
        
        // Hover effects for cards/images
        const cardHoverables = document.querySelectorAll(".room-card, .experience-card, .asymmetric-img-main, .asymmetric-img-sub, .aesthetic-img-item");
        cardHoverables.forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursor.classList.add("view-hover");
            });
            el.addEventListener("mouseleave", () => {
                cursor.classList.remove("view-hover");
            });
        });
    }

    // Initialize Page with Default Language (Korean)
    updateLanguage('ko');
});
