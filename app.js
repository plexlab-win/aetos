// Global State
let currentLang = 'ko'; // Default language is Korean

// Room Data Repository in both languages
const ROOM_DATA = {
    "ko": {
        "skyfinity-penthouse": {
            name: "스카이피니티 펜트하우스",
            price: 1200, // base price in USD (multiplied by 1000 for KRW: 1,200,000원)
            size: "145 m²",
            view: "파노라마 오션뷰 & 야외 온수 스파",
            occupancy: "4인 (최대 6인)",
            beds: "킹베드 2개",
            image: "assets/room3.png",
            summary: "해안 절벽 최고층에서 바다와 완벽한 조화를 이루는 아웃도어 인피니티 스파 펜트하우스입니다.",
            description: "해안 절벽 최고층에 위치하여 수평선과 마주하는 독보적인 조망을 자랑합니다. 야외 인피니티 온수 자쿠지 풀과 전용 선베드 데크가 있으며, 프리미엄 빔프로젝터 홈 시어터 시스템이 완비되어 오감을 만족시키는 프라이빗 휴식을 제공합니다.",
            amenities: [
                "야외 프라이빗 인피니티 온수 자쿠지",
                "다이슨 수퍼소닉 헤어케어 세트",
                "천연 린넨 패브릭 & 필로우 에디션",
                "하만카돈 프리미엄 오디오 시스템",
                "시그니처 미니바 & 와인 셀러 서비스",
                "스카이피니티 클럽 라운지 프리패스"
            ]
        },
        "cliff-pool-villa": {
            name: "치엘로 클리프 풀빌라",
            price: 1800, // 1,800,000원
            size: "185 m²",
            view: "절벽 위 개인 인피니티 온수풀 & 석양 파이어핏",
            occupancy: "4인 (최대 6인)",
            beds: "킹베드 2개",
            image: "assets/room2.png",
            summary: "절벽 위에 펼쳐진 12m 길이의 개인 온수 인피니티 풀과 로맨틱한 석양 파이어핏을 품은 독채 빌라입니다.",
            description: "깎아지른 해안 절벽 위에 프라이빗하게 들어선 프리미엄 독채 풀빌라입니다. 12m 길이의 개인 사계절 온수 풀, 따스한 온기를 전하는 야외 파이어핏 에어리어, 유리 온실 스타일의 티 파빌리온이 자연과의 일체감을 더해줍니다.",
            amenities: [
                "12m 프라이빗 사계절 온수 인피니티 풀",
                "야외 석양 파이어핏 & 소파 라운지",
                "티 하우스 파빌리온 & 프리미엄 다도 세트",
                "친환경 바이오 에탄올 난로",
                "몰튼 브라운 친환경 어메니티 패키지",
                "체크인 전담 버틀러 컨시어지 서비스"
            ]
        },
        "presidential-pool-villa": {
            name: "프레지덴셜 오션 풀빌라",
            price: 3500, // 3,500,000원
            size: "310 m²",
            view: "파노라마 오션뷰 & 20m 개인 온수 수영장",
            occupancy: "6인 (최대 8인)",
            beds: "킹베드 3개",
            image: "assets/room1.png",
            summary: "에이토스 하우스의 최고 품격을 상징하는 310m² 규모의 최상위 오션프런트 독채 풀빌라입니다.",
            description: "해안선과 맞닿은 가장 완벽한 위치에 설계된 독채형 플래그십 빌라입니다. 20m 길이의 거대한 개인 온수 풀과 천연 암반 온천 스파, 바베큐 파티가 가능한 오션 테라스를 갖추고 있어 대가족 혹은 소규모 프라이빗 파티에 최상의 품격을 전합니다.",
            amenities: [
                "20m 오션프런트 사계절 개인 온수풀",
                "천연 지열 암반 온천 야외 스파 욕조",
                "최고급 야외 주방 & 카바나 테라스",
                "전용 웰니스 필라테스 & 요가 스튜디오",
                "프리미엄 웰컴 오가닉 캐비아 & 샴페인",
                "1:1 전담 버틀러 밀착 케어 서비스"
            ]
        }
    },
    "en": {
        "skyfinity-penthouse": {
            name: "Skyfinity Penthouse",
            price: 1200,
            size: "145 m²",
            view: "Panoramic Ocean View & Outdoor Heated Spa",
            occupancy: "4 Guests (Max 6)",
            beds: "2 King Beds",
            image: "assets/room3.png",
            summary: "Perched on the highest cliffside tier with a private outdoor infinity jacuzzi and bespoke design.",
            description: "Located on the highest level of our cliffside resort, the Skyfinity Penthouse offers an unmatched ocean panorama. Complete with a private outdoor heated jacuzzi and sunbed deck, and a state-of-the-art projector home theater, it provides an exquisite private retreat.",
            amenities: [
                "Private Outdoor Heated Infinity Jacuzzi",
                "Dyson Supersonic Haircare Suite",
                "Custom Linen Fabrics & Pillow Collection",
                "Harman Kardon Premium Sound System",
                "Bespoke Minibar & Curated Wine Cellar",
                "Complimentary Skyfinity Lounge Pass"
            ]
        },
        "cliff-pool-villa": {
            name: "Cielo Cliff Pool Villa",
            price: 1800,
            size: "185 m²",
            view: "Cliffside Infinity Heated Pool & Sunset Firepit",
            occupancy: "4 Guests (Max 6)",
            beds: "2 King Beds",
            image: "assets/room2.png",
            summary: "Suspended over the cliff edge with a 12m private heated pool and cozy sunset firepit seating.",
            description: "A breathtaking villa built along the rugged cliffside. Cielo features a 12m long private all-season heated infinity pool, an outdoor bio-ethanol firepit lounge, and a glass-enclosed tea pavilion, making it the perfect sanctuary for sunset contemplation.",
            amenities: [
                "12m Private All-Season Heated Infinity Pool",
                "Outdoor Sunset Firepit & Lounge Area",
                "Tea Pavilion & Premium Tea Brewing Kit",
                "Eco-Friendly Bio-Ethanol Fireplace",
                "Molton Brown Eco-Luxury Amenities",
                "Personalized Check-in & Butler Concierge"
            ]
        },
        "presidential-pool-villa": {
            name: "Presidential Ocean Pool Villa",
            price: 3500,
            size: "310 m²",
            view: "Panoramic Oceanfront & 20m Private Heated Pool",
            occupancy: "6 Guests (Max 8)",
            beds: "3 King Beds",
            image: "assets/room1.png",
            summary: "The pinnacle of Aetos House. An expansive 310m² estate featuring a 20m private heated pool.",
            description: "The crown jewel of our resort, situated right at the ocean's edge. This signature estate features a massive 20m private heated pool, a geothermal stone spa tub, a professional outdoor kitchen, and an oceanfront cabana deck. Designed to deliver absolute privacy and ultimate luxury.",
            amenities: [
                "20m Oceanfront Private Heated Pool",
                "Geothermal Rock Mineral Spa Tub",
                "Chef's Outdoor Kitchen & Cabana Deck",
                "Private Wellness Pilates & Yoga Studio",
                "Welcome Premium Caviar & Champagne Service",
                "24/7 Dedicated Bespoke Butler Service"
            ]
        }
    }
};

// UI Translations dictionary
const TRANSLATIONS = {
    "ko": {
        "nav-about": "브랜드 철학",
        "nav-rooms": "객실 안내",
        "nav-experiences": "특별한 여정",
        "nav-reserve": "실시간 예약",
        "btn-book": "예약하기",
        "hero-tagline": "The Art of Stillness",
        "hero-title": "AETOS HOUSE",
        "hero-subtitle": "거대한 침묵 속에서 온전한 감각을 일깨우는 시간,<br>절벽 위 프라이빗 독채 빌라에서 펼쳐지는 가장 숭고한 쉼의 예술.",
        "hero-explore": "자세히 보기",
        "label-checkin": "체크인",
        "label-checkout": "체크아웃",
        "label-guests": "인원 선택",
        "label-room-select": "객실 선택",
        "btn-check-avail": "예약 가능 여부 확인",
        "about-tag": "Philosophy",
        "about-title": "바다와 절벽,<br>그 사이 완벽한 침묵",
        "about-desc1": "에이토스 하우스는 복잡한 일상을 등지고 거대한 자연의 고요함에 기대어 쉴 수 있는 단 하나의 시크릿 리조트입니다. 우리가 정의하는 럭셔리는 화려하게 채우는 것이 아닌, 불필요한 모든 것을 완벽히 비우는 것이며 비움으로써 일어나는 감각의 회복을 의미합니다.",
        "about-desc2": "독채 풀빌라에서 느껴지는 고요한 숨소리와, 잔잔한 바람 소리, 파도 소리만이 온전히 당신의 시간을 메우는 기적 같은 휴식을 직접 직조해 보십시오.",
        "philosophical-quote": "“Experience the absolute privilege of quiet.”",
        "rooms-tag": "Suites & Villas",
        "rooms-title": "시그니처 프라이빗 스페이스",
        "rooms-subtitle": "모든 객실은 독채형 구조로 구성되어 독보적인 프라이버시를 보장합니다. 천연 원목과 천연석, 통유리를 통해 들어오는 아름다운 조망을 품고 있습니다.",
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
        "exp-title": "오감으로 채우는 여정",
        "exp-subtitle": "미장센 예술에 가까운 파인 다이닝과, 고유한 질감과 향기를 담은 테라피 세션을 통해 신체와 정신의 우아한 대칭을 경험해 보세요.",
        "exp1-tag": "Fine Dining",
        "exp1-title": "더 파빌리온 (The Pavilion)",
        "exp1-desc": "수평선 너머로 저무는 석양을 배경으로, 유기농 식재료와 명장 셰프가 빚어내는 파인 다이닝 요리를 제공합니다. 리조트에서 엄선한 한정 페어링 와인 컬렉션을 갖추고 있습니다.",
        "exp1-hours": "Dinner: 18:00 - 22:30",
        "exp2-tag": "SWIMMING POOL",
        "exp2-title": "스카이피니티 & 치엘로 온수풀",
        "exp2-desc": "절벽 위에 수평선과 연결되도록 정교하게 배치된 야외 온수 수영장입니다. 노을이 가라앉는 시간에 카바나에서 로맨틱한 파도 소리를 들으며 온전한 해방감을 경험해 보십시오.",
        "exp2-hours": "Operating: 09:00 - 22:00",
        "exp3-tag": "Wellness & Ritual",
        "exp3-title": "아난다 스파 리추얼 (Ananda Spa)",
        "exp3-desc": "시그니처 아로마와 은은한 허브 티의 풍미, 가만히 감아쥐는 스톤 리추얼을 통해 바쁜 일상에서 지쳤던 감정과 근육을 완전히 이완해 주는 웰니스 치유 세션입니다.",
        "exp3-hours": "Spa Hours: 08:00 - 21:00",
        "aest-tag": "Aesthetic Moments",
        "aest-title": "고요함이 머무는 찰나의 흔적들",
        "aest-desc": "에이토스 하우스의 완성도는 눈에 잘 띄지 않는 아주 작은 가구의 비례, 패브릭의 감촉, 공간에 스며든 바람의 양으로 결정됩니다. 오직 이곳에서만 마주할 수 있는 우아한 순간들입니다.",
        "reserve-tag": "Reservations",
        "reserve-title": "여정의 시작",
        "reserve-subtitle": "객실과 예약 기간을 자유롭게 설정하여 견적 및 가상 예약을 완성해 보세요.",
        "form-title": "예약 정보 입력",
        "label-room-type": "객실 타입",
        "form-subhead-addons": "추가 혜택 및 옵션",
        "addon-spa-name": "아난다 온천 스파 패스",
        "addon-spa-price": "+₩70,000 / 1인",
        "addon-dining-name": "노을 카바나 바베큐 세트",
        "addon-dining-price": "+₩150,000 / 1회 세팅",
        "addon-transfer-name": "하이브리드 SUV 공항 픽업 서비스",
        "addon-transfer-price": "+₩90,000 (편도 정액)",
        "form-subhead-contact": "예약자 연락처 정보",
        "label-name": "예약자 성함",
        "label-phone": "연락처",
        "label-requests": "특별 요청 사항 (선택)",
        "btn-request-book": "예약하기",
        "summary-title": "예약 정보 요약",
        "addon-spa-short": "아난다 스파 패스",
        "addon-dining-short": "카바나 바베큐",
        "addon-transfer-short": "공항 SUV 서비스",
        "summary-tax-label": "친환경 부담금 및 세금 (10%)",
        "summary-total-label": "예상 결제 금액",
        "summary-cancel-policy": "24시간 전 무료 취소 가능. 현장 결제.",
        "load-title": "객실 예약 가능 여부 확인 중...",
        "load-desc": "에이토스 하우스의 최고급 친환경 안식처를 확보하고 있습니다.",
        "success-title": "RESERVATION CONFIRMED",
        "success-subtitle": "고귀한 쉼의 여정이 확정되었습니다.",
        "receipt-code-label": "예약 확정 코드",
        "receipt-status-label": "예약 상태",
        "receipt-status-val": "확정됨",
        "receipt-room-label": "객실 타입",
        "receipt-price-label": "총 결제 예정 금액",
        "btn-new-reserve": "새로 예약하기",
        "btn-save-receipt": "영수증 저장",
        "footer-tagline": "가장 평화롭고 고요한 시간, 거대하고 정교하게 조율된 오아시스 에이토스 하우스.",
        "footer-explore-title": "메뉴",
        "footer-info-title": "고객지원",
        "footer-contact-title": "문의 및 연락처",
        "policy-directions": "오시는 길",
        "policy-privacy": "개인정보 처리방침",
        "policy-terms": "이용약관"
    },
    "en": {
        "nav-about": "Philosophy",
        "nav-rooms": "Suites & Villas",
        "nav-experiences": "Experiences",
        "nav-reserve": "Reservations",
        "btn-book": "Book Now",
        "hero-tagline": "The Art of Stillness",
        "hero-title": "AETOS HOUSE",
        "hero-subtitle": "Time to awaken your senses in complete silence,<br>the most sublime art of rest unfolding in a private cliffside villa.",
        "hero-explore": "Explore",
        "label-checkin": "Check-in",
        "label-checkout": "Check-out",
        "label-guests": "Guests",
        "label-room-select": "Select Suite",
        "btn-check-avail": "Check Availability",
        "about-tag": "Philosophy",
        "about-title": "Perfect Silence,<br>Between Sea and Cliff",
        "about-desc1": "AETOS HOUSE is a secret resort designed for those looking to escape the complexities of daily life and lean into the vast silence of nature. The luxury we define is not about grand additions, but rather the perfect emptying of the unnecessary, which facilitates the recovery of our senses.",
        "about-desc2": "We invite you to weave your own miracle of rest, where only the quiet breathing of the wind, the gentle ocean air, and the waves fill your time.",
        "philosophical-quote": "“Experience the absolute privilege of quiet.”",
        "rooms-tag": "Suites & Villas",
        "rooms-title": "Signature Private Spaces",
        "rooms-subtitle": "Each villa features a detached layout ensuring unmatched privacy, detailed with natural wood, raw stone, and expansive floor-to-ceiling ocean views.",
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
        "exp-title": "A Journey of Five Senses",
        "exp-subtitle": "Experience elegant alignment of mind and body through Michelin-standard dining and bespoke aroma therapy rituals.",
        "exp1-tag": "Fine Dining",
        "exp1-title": "The Pavilion",
        "exp1-desc": "Dine against the backdrop of a setting sun sinking past the horizon, featuring organic produce, masterfully styled dishes, and a select cellar collection.",
        "exp1-hours": "Dinner: 18:00 - 22:30",
        "exp2-tag": "SWIMMING POOL",
        "exp2-title": "Skyfinity & Cielo Heated Pools",
        "exp2-desc": "All-season outdoor heated swimming pools precisely situated along the cliffside to merge with the horizon. Enjoy cocktails in our private cabanas.",
        "exp2-hours": "Operating: 09:00 - 22:00",
        "exp3-tag": "Wellness & Ritual",
        "exp3-title": "Ananda Spa Ritual",
        "exp3-desc": "A wellness healing session designed to completely release daily tension, utilizing signature essential oils, custom herbal teas, and a gentle hot stone massage.",
        "exp3-hours": "Spa Hours: 08:00 - 21:00",
        "aest-tag": "Aesthetic Moments",
        "aest-title": "Traces of Silence",
        "aest-desc": "The perfection of Aetos House is defined by unseen details: the precise proportions of custom furniture, the texture of organic linen, and the breeze sweeping through the spaces.",
        "reserve-tag": "Reservations",
        "reserve-title": "Begin Your Stay",
        "reserve-subtitle": "Set your desired dates and room option to create your personalized stay simulation.",
        "form-title": "Reservation Details",
        "label-room-type": "Suites Option",
        "form-subhead-addons": "Enhancements",
        "addon-spa-name": "Ananda Hot Spring Spa Pass",
        "addon-spa-price": "+$70 / guest",
        "addon-dining-name": "Sunset Cabana BBQ Set",
        "addon-dining-price": "+$150 / setting",
        "addon-transfer-name": "Hybrid SUV Airport Transfer",
        "addon-transfer-price": "+$90 flat fee",
        "form-subhead-contact": "Contact Information",
        "label-name": "Full Name",
        "label-phone": "Phone Number",
        "label-requests": "Special Requests (Optional)",
        "btn-request-book": "Confirm Reservation",
        "summary-title": "Reservation Summary",
        "addon-spa-short": "Ananda Spa Pass",
        "addon-dining-short": "Cabana BBQ",
        "addon-transfer-short": "SUV Transfer Service",
        "summary-tax-label": "Levy & Tax (10%)",
        "summary-total-label": "Estimated Total",
        "summary-cancel-policy": "24-hour cancellation flexibility. Pay upon arrival.",
        "load-title": "Verifying Villa Availability...",
        "load-desc": "Securing your private oceanfront villa at Aetos House.",
        "success-title": "RESERVATION CONFIRMED",
        "success-subtitle": "Your sublime journey of rest has been secured.",
        "receipt-code-label": "CONFIRMATION CODE",
        "receipt-status-label": "STATUS",
        "receipt-status-val": "RESERVED",
        "receipt-room-label": "SANCTUARY",
        "receipt-price-label": "Total Estimated Price",
        "btn-new-reserve": "New Reservation",
        "btn-save-receipt": "Save Receipt",
        "footer-tagline": "Aetos House & Resort. Designed for Luxury Reference Site.",
        "footer-explore-title": "Navigations",
        "footer-info-title": "Information",
        "footer-contact-title": "Location & Contact",
        "policy-directions": "Directions",
        "policy-privacy": "Privacy Policy",
        "policy-terms": "Terms of Service"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // --- STICKY HEADER ---
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // --- MOBILE DRAWER MENU ---
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileOverlay = document.getElementById("mobile-menu-overlay");
    const mobileClose = document.getElementById("mobile-menu-close");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    const openMenu = () => {
        mobileOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        mobileOverlay.classList.remove("open");
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
        if (lang === 'ko') {
            document.title = "AETOS HOUSE — The Art of Stillness";
            document.getElementById("seo-meta-desc").setAttribute("content", "바다와 절벽 사이 완벽한 고요를 담은 리조트 에이토스 하우스. 프라이빗 온수 인피니티 풀빌라에서 당신만의 특별한 힐링 여정을 계획해 보세요.");
            document.getElementById("og-title-tag").setAttribute("content", "AETOS HOUSE — The Art of Stillness");
            document.getElementById("og-desc-tag").setAttribute("content", "거대한 침묵 속에서 온전한 감각을 일깨우는 시간, 절벽 위 프라이빗 독채 풀빌라에서 펼쳐지는 가장 숭고한 쉼의 예술.");
        } else {
            document.title = "AETOS HOUSE — The Art of Stillness";
            document.getElementById("seo-meta-desc").setAttribute("content", "Aetos House, a sanctuary of absolute silence between sea and cliff. Plan your healing journey in a private heated infinity pool villa.");
            document.getElementById("og-title-tag").setAttribute("content", "AETOS HOUSE — The Art of Stillness");
            document.getElementById("og-desc-tag").setAttribute("content", "Time to awaken your senses in complete silence, private cliffside pool villas.");
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
        // Rooms
        const quickRoom = document.getElementById("quick-room");
        const bookRoom = document.getElementById("book-room");
        
        const rooms = ROOM_DATA[currentLang];
        const roomOptsHTML = `
            <option value="skyfinity-penthouse">${rooms["skyfinity-penthouse"].name} (${currentLang === 'ko' ? '₩1,200,000' : '$1,200'}${currentLang === 'ko' ? '/1박' : '/night'})</option>
            <option value="cliff-pool-villa">${rooms["cliff-pool-villa"].name} (${currentLang === 'ko' ? '₩1,800,000' : '$1,800'}${currentLang === 'ko' ? '/1박' : '/night'})</option>
            <option value="presidential-pool-villa">${rooms["presidential-pool-villa"].name} (${currentLang === 'ko' ? '₩3,500,000' : '$3,500'}${currentLang === 'ko' ? '/1박' : '/night'})</option>
        `;

        if (quickRoom) {
            const currentVal = quickRoom.value;
            quickRoom.innerHTML = roomOptsHTML;
            if (currentVal && rooms[currentVal]) quickRoom.value = currentVal;
        }

        if (bookRoom) {
            const currentVal = bookRoom.value;
            bookRoom.innerHTML = roomOptsHTML;
            if (currentVal && rooms[currentVal]) bookRoom.value = currentVal;
        }

        // Guests
        const quickGuests = document.getElementById("quick-guests");
        const bookGuests = document.getElementById("book-guests");

        const quickGuestsHTML = currentLang === 'ko' ? `
            <option value="1">1명</option>
            <option value="2" selected>2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
            <option value="6">6명</option>
        ` : `
            <option value="1">1 Guest</option>
            <option value="2" selected>2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="6">6 Guests</option>
        `;

        const bookGuestsHTML = currentLang === 'ko' ? `
            <option value="1">성인 1인</option>
            <option value="2" selected>성인 2인</option>
            <option value="3">성인 3인</option>
            <option value="4">성인 4인</option>
            <option value="6">성인 6인</option>
            <option value="8">성인 8인</option>
        ` : `
            <option value="1">1 Adult</option>
            <option value="2" selected>2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
            <option value="6">6 Adults</option>
            <option value="8">8 Adults</option>
        `;

        if (quickGuests) {
            const currentVal = quickGuests.value;
            quickGuests.innerHTML = quickGuestsHTML;
            if (currentVal) quickGuests.value = currentVal;
        }

        if (bookGuests) {
            const currentVal = bookGuests.value;
            bookGuests.innerHTML = bookGuestsHTML;
            if (currentVal) bookGuests.value = currentVal;
        }
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

    // --- RENDER ROOM CARDS ---
    const renderRoomCards = () => {
        const grid = document.getElementById("rooms-cards-grid");
        if (!grid) return;
        grid.innerHTML = "";
        
        const rooms = ROOM_DATA[currentLang];
        Object.keys(rooms).forEach(id => {
            const room = rooms[id];
            const card = document.createElement("article");
            card.className = "room-card";
            card.id = `room-card-${id.split('-')[0]}`;
            
            // Local currency formatting: KO gets ₩ and price*1000, EN gets $
            const formattedPrice = currentLang === 'ko' 
                ? `₩${(room.price * 1000).toLocaleString()}` 
                : `$${room.price}`;
            const perNight = currentLang === 'ko' ? '/1박' : '/night';
            
            const specsText = currentLang === 'ko' 
                ? `<li><i class="fa-solid fa-arrows-left-right"></i> ${room.size}</li>
                   <li><i class="fa-solid fa-mountain"></i> ${room.view}</li>
                   <li><i class="fa-solid fa-user"></i> ${room.occupancy}</li>`
                : `<li><i class="fa-solid fa-arrows-left-right"></i> ${room.size}</li>
                   <li><i class="fa-solid fa-mountain"></i> ${room.view}</li>
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
                selectRoomAndScroll(roomId);
            });
        });
    };

    // --- ROOM DETAILS MODAL ---
    const modal = document.getElementById("room-modal");
    const modalClose = document.getElementById("room-modal-close");
    const modalCloseAction = document.getElementById("modal-close-action");
    const modalBookAction = document.getElementById("modal-book-action");
    let currentSelectedRoomId = "skyfinity-penthouse";

    const openModal = (roomId) => {
        const data = ROOM_DATA[currentLang][roomId];
        if (!data) return;

        currentSelectedRoomId = roomId;
        document.getElementById("modal-room-name").textContent = data.name;
        
        // Currency formatting
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
        modal.classList.remove("open");
        document.body.style.overflow = "";
    };

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalCloseAction) modalCloseAction.addEventListener("click", closeModal);

    // Modal select & book button
    if (modalBookAction) {
        modalBookAction.addEventListener("click", () => {
            selectRoomAndScroll(currentSelectedRoomId);
            closeModal();
        });
    }

    const selectRoomAndScroll = (roomId) => {
        const roomSelect = document.getElementById("book-room");
        if (roomSelect) {
            roomSelect.value = roomId;
            // Trigger select event manually to update pricing panel
            roomSelect.dispatchEvent(new Event("change"));
        }
        
        // Scroll to reservation
        const reserveSection = document.getElementById("reservation");
        if (reserveSection) {
            reserveSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // --- INTERACTIVE RESERVATION SIMULATOR ---
    const bookCheckin = document.getElementById("book-checkin");
    const bookCheckout = document.getElementById("book-checkout");
    const bookGuests = document.getElementById("book-guests");
    const bookRoom = document.getElementById("book-room");
    
    // Add-on checkboxes
    const addSpa = document.getElementById("add-spa");
    const addDining = document.getElementById("add-dining");
    const addTransfer = document.getElementById("add-transfer");

    // Summary Card elements
    const summaryRoomImg = document.getElementById("summary-room-img");
    const summaryRoomTitle = document.getElementById("summary-room-title");
    const summaryDisplayDates = document.getElementById("summary-display-dates");
    const summaryDisplayGuests = document.getElementById("summary-display-guests");
    
    // Summary Price breakdown rows
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
    
    // Set min date limits to prevent past selections
    if (bookCheckin) bookCheckin.min = formatDateString(today);
    
    // Dynamic minimum checkout date restriction
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
        if (!bookRoom) return;
        const roomId = bookRoom.value || "skyfinity-penthouse";
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

        // Dining cost: 150 USD / 150,000 KRW flat rate per stay (1회 세팅)
        let totalDiningCost = 0;
        if (addDining && addDining.checked) {
            totalDiningCost = 150 * currencyMultiplier;
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

    // --- QUICK BOOKING FORM BRIDGE ---
    const quickForm = document.getElementById("quick-booking-form");
    const quickCheckin = document.getElementById("quick-checkin");
    const quickCheckout = document.getElementById("quick-checkout");
    const quickGuests = document.getElementById("quick-guests");
    const quickRoom = document.getElementById("quick-room");

    // Initialize quick form defaults
    if (quickCheckin) {
        quickCheckin.value = formatDateString(today);
        quickCheckin.min = formatDateString(today);
        
        quickCheckin.addEventListener("change", () => {
            const dateVal = new Date(quickCheckin.value);
            const next = new Date(dateVal);
            next.setDate(next.getDate() + 1);
            if (quickCheckout) {
                quickCheckout.min = formatDateString(next);
                if (new Date(quickCheckout.value) <= dateVal) {
                    quickCheckout.value = formatDateString(next);
                }
            }
        });
    }
    
    if (quickCheckout) quickCheckout.value = formatDateString(tomorrow);

    if (quickForm) {
        quickForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Transfer data to main reservation form
            if (bookCheckin && quickCheckin) bookCheckin.value = quickCheckin.value;
            if (bookCheckout && quickCheckout) bookCheckout.value = quickCheckout.value;
            if (bookGuests && quickGuests) bookGuests.value = quickGuests.value;
            if (bookRoom && quickRoom) bookRoom.value = quickRoom.value;

            // Force recalculation
            calculatePricing();

            // Scroll down
            const reserveSection = document.getElementById("reservation");
            if (reserveSection) {
                reserveSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

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

    // Initialize Page with Default Language (Korean)
    updateLanguage('ko');
});
