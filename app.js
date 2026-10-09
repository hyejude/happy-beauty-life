const SUB_CATEGORIES = {

'기초': ['스킨, 토너', '세럼, 앰플', '크림', '팩', '기타'],

'베이스': ['선크림', '파운데이션', '파우더', 'BB', '기타'],

'색조': ['브로우', '마스카라', '아이라이너', '섀도우', '블러셔', '립', '쉐딩/하이라이터', '기타'],

'도구': ['브러쉬', '속눈썹', '기타']

};

const DEFAULT_IMAGES = {
  '스킨, 토너': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Toner',
  '세럼, 앰플': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Serum',
  '크림': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Cream',
  '팩': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Mask',
  '선크림': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Sun',
  '파운데이션': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Foundation',
  'BB': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=BB',
  '브로우': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Brow',
  '마스카라': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Mascara',
  '아이라이너': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Liner',
  '섀도우': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Shadow',
  '블러셔': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Blush',
  '립': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Lip',
  '쉐딩/하이라이터': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Highlight',
  '브러쉬': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Brush',
  '속눈썹': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Lash',
  '기타': 'https://placehold.co/100x100/f2f4f6/8b95a1?text=Cosmetic'
};

let vanityItems = JSON.parse(localStorage.getItem('hancowii_vanity_items')) || [
  { id: 'item_1', mainCat: '색조', subCat: '립', brand: '롬앤', name: '쥬시 래스팅 틴트', color: '25 베어 그레이프', imageUrl: '', status: '개봉', count: 1, tags: '쿨톤,데일리', memo: '여름 쿨톤 뮤트 추천', createdAt: Date.now() - 300000 },
  { id: 'item_2', mainCat: '색조', subCat: '블러셔', brand: '롬앤', name: '베일리 치크', color: '03 바닐라 베일', imageUrl: '', status: '개봉', count: 2, tags: '웜톤,데일리', memo: '', createdAt: Date.now() - 200000 },
  { id: 'item_3', mainCat: '기초', subCat: '스킨, 토너', brand: '토리든', name: '다이브인 저분자 히알루론산 토너', color: '', imageUrl: '', status: '미개봉', count: 1, tags: '수분,진정', memo: '올영 세일 쟁여템', createdAt: Date.now() - 100000 },
  { id: 'item_4', mainCat: '기초', subCat: '세럼, 앰플', brand: '스킨푸드', name: '로열허니 프로폴리스 엔리치 에센스', color: '', imageUrl: '', status: '개봉', count: 1, tags: '보습,영양', memo: '환절기 필수템', createdAt: Date.now() - 90000 },
  { id: 'item_5', mainCat: '기초', subCat: '크림', brand: 'AESTURA', name: '아토베리어365 크림', color: '', imageUrl: '', status: '미개봉', count: 2, tags: '장벽,무향', memo: '대용량 1+1 기획 쟁임', createdAt: Date.now() - 80000 },
  { id: 'item_6', mainCat: '베이스', subCat: '선크림', brand: '라운드랩', name: '자작나무 수분 선크림', color: '', imageUrl: '', status: '개봉', count: 1, tags: '촉촉,백탁없음', memo: '매일 쓰는 베이스 선크림', createdAt: Date.now() - 70000 },
  { id: 'item_7', mainCat: '베이스', subCat: '파운데이션', brand: '에스쁘아', name: '비글로우 쿠션 뉴클래스', color: '21호 바닐라', imageUrl: '', status: '개봉', count: 1, tags: '광채,세미글로우', memo: '리필 포함 구성', createdAt: Date.now() - 60000 },
  { id: 'item_8', mainCat: '색조', subCat: '섀도우', brand: '클리오', name: '프로 아이 팔레트', color: '12호 심플한 서울', imageUrl: '', status: '개봉', count: 1, tags: '뮤트,음영', memo: '데일리 음영 메이크업용', createdAt: Date.now() - 50000 },
  { id: 'item_9', mainCat: '색조', subCat: '브로우', brand: '베네피트', name: '프리사이슬량 브로우 펜슬', color: '3.5호', imageUrl: '', status: '미개봉', count: 1, tags: '슬림,정교', memo: '면세점 찬스 쟁임템', createdAt: Date.now() - 40000 },
  { id: 'item_10', mainCat: '색조', subCat: '마스카라', brand: '릴리바이레드', name: '나인투나인 서바이벌 마스카라', color: '01호 블랙', imageUrl: '', status: '개봉', count: 1, tags: '컬링,고정력', memo: '번짐 전혀 없음', createdAt: Date.now() - 30000 },
  { id: 'item_11', mainCat: '도구', subCat: '브러쉬', brand: '피카소', name: '컨투어 브러쉬', color: '', imageUrl: '', status: '개봉', count: 1, tags: '부드러움,발색최고', memo: '노란기 없는 섀딩 브러쉬', createdAt: Date.now() - 20000 }
];

let wishItems = JSON.parse(localStorage.getItem('hancowii_wish_items')) || [
  { id: 'wish_1', mainCat: '색조', subCat: '립', brand: '어뮤즈', name: '듀 틴트', color: '06 파파야 코랄', wishLevel: 3, originalPrice: 20000, gongeungPrice: '1만퍼센트 고능가', platform: '올영', wishCondition: '새제품', wishEdition: '기획 (툴,증정,1+1)', wishSpecialTag: '고능가라끌림', imageUrl: '', memo: '올영 세일 노리기', createdAt: Date.now() - 150000 },
  { id: 'wish_2', mainCat: '기초', subCat: '세럼, 앰플', brand: '넘버즈인', name: '3번 결글로우 세럼', color: '', wishLevel: 2, originalPrice: 24000, gongeungPrice: '1만 원대 중반', platform: '올영', wishCondition: '새제품', wishEdition: '기획 (툴,증정,1+1)', wishSpecialTag: '세럼으로샤워가능', imageUrl: '', memo: '피부 결 개선 극찬템', createdAt: Date.now() - 140000 },
  { id: 'wish_3', mainCat: '색조', subCat: '섀도우', brand: '3CE', name: '멀티 아이 컬러 팔레트', color: '오버테이크', wishLevel: 3, originalPrice: 38000, gongeungPrice: '2만 원대 후반', platform: '공홈', wishCondition: '새제품', wishEdition: '일반', wishSpecialTag: '드볼', imageUrl: '', memo: '웜톤 필수 음영 팔레트', createdAt: Date.now() - 130000 },
  { id: 'wish_4', mainCat: '베이스', subCat: '파운데이션', brand: '바비브라운', name: '스킨 세럼 파운데이션', color: '샌드', wishLevel: 1, originalPrice: 85000, gongeungPrice: '면세 찬스 5만 원대', platform: '면세', wishCondition: '새제품', wishEdition: '일반', wishSpecialTag: '고능가라끌림', imageUrl: '', memo: '고급스러운 윤광 표현', createdAt: Date.now() - 120000 },
  { id: 'wish_5', mainCat: '색조', subCat: '블러셔', brand: '퓌', name: '푸딩팟', color: '마이', wishLevel: 2, originalPrice: 22000, gongeungPrice: '1만 원대 초반', platform: '직잭', wishCondition: '새제품', wishEdition: '기획 (툴,증정,1+1)', wishSpecialTag: '고능가라끌림', imageUrl: '', memo: '입술이랑 볼 같이 쓰기 좋음', createdAt: Date.now() - 110000 },
  { id: 'wish_6', mainCat: '기초', subCat: '크림', brand: '키엘', name: '울트라 페이셜 크림', color: '', wishLevel: 3, originalPrice: 45000, gongeungPrice: '대용량 3만 원대', platform: '면세', wishCondition: '미개봉', wishEdition: '한정', wishSpecialTag: '쓰고있는건데가격굿=쟁김', imageUrl: '', memo: '겨울철 최강 수분크림', createdAt: Date.now() - 100000 },
  { id: 'wish_7', mainCat: '색조', subCat: '립', brand: '입생로랑', name: '삐앙 틴트', color: '610호', wishLevel: 1, originalPrice: 52000, gongeungPrice: '3만 원대 후반', platform: '면세', wishCondition: '새제품', wishEdition: '일반', wishSpecialTag: '기획이갖고싶어엉엉', imageUrl: '', memo: '누드 톤 MLBB 끝판왕', createdAt: Date.now() - 90000 },
  { id: 'wish_8', mainCat: '베이스', subCat: '선크림', brand: '셀퓨전씨', name: '레이저 익스트림 선스크린', color: '', wishLevel: 2, originalPrice: 32000, gongeungPrice: '1+1 1만 원대', platform: '올영', wishCondition: '새제품', wishEdition: '기획 (툴,증정,1+1)', wishSpecialTag: '쓰고있는건데가격굿=쟁김', imageUrl: '', memo: '피부과 추천 순한 선크림', createdAt: Date.now() - 80000 },
  { id: 'wish_9', mainCat: '도구', subCat: '브러쉬', brand: '필리밀리', name: 'V컷 파운데이션 브러쉬', color: '', wishLevel: 1, originalPrice: 15000, gongeungPrice: '9천 원대', platform: '올영', wishCondition: '새제품', wishEdition: '일반', wishSpecialTag: '금액채우기용으로고민', imageUrl: '', memo: '결 자국 없는 파데 브러쉬', createdAt: Date.now() - 70000 },
  { id: 'wish_10', mainCat: '색조', subCat: '쉐딩/하이라이터', brand: '디어달리아', name: '페탈 글로우 하이라이터', color: '선셋', wishLevel: 2, originalPrice: 28000, gongeungPrice: '1만 원대 후반', platform: '공홈', wishCondition: '새제품', wishEdition: '일반', wishSpecialTag: '드볼', imageUrl: '', memo: '자연스러운 영롱 광채', createdAt: Date.now() - 60000 }
];

let wishSpecialTags = JSON.parse(localStorage.getItem('hancowii_wish_special_tags')) || [
  '세럼으로샤워가능', '쓰고있는건데가격굿=쟁김', '기획이갖고싶어엉엉',
  '금액채우기용으로고민', '드볼', '고능가라끌림', '다써감', '기타'
];
let scheduleEvents = JSON.parse(localStorage.getItem('hancowii_schedule_events')) || [];
let scheduleCalendarMonth = new Date();
let homeCalendarMonth = new Date();
let scheduleRangeStart = '';
let scheduleRangeEnd = '';
let consumptionMonth = new Date();
let homeMonthPickerOpen = false;
let consumptionMonthPickerOpen = false;
let homeMixSuggestionDate = '';
let homeMixSuggestion = null;

let categoryMigrated = false;
vanityItems.forEach(item => { if (item.subCat === '하이라이터') { item.subCat = '쉐딩/하이라이터'; categoryMigrated = true; } });
wishItems.forEach(item => { if (item.subCat === '하이라이터') { item.subCat = '쉐딩/하이라이터'; categoryMigrated = true; } });
if (categoryMigrated) {
  localStorage.setItem('hancowii_vanity_items', JSON.stringify(vanityItems));
  localStorage.setItem('hancowii_wish_items', JSON.stringify(wishItems));
}

let currentTab = '내 화장대';
const savedDarkMode = localStorage.getItem('hancowii_dark_mode');
let darkMode = savedDarkMode === null
  ? localStorage.getItem('hancowii_monochrome_mode') === 'true'
  : savedDarkMode === 'true';
let currentMainCat = '전체';
let currentSubCat = '전체';
let currentStatusFilter = '전체';
let searchQuery = '';
let currentMixType = '립';
let currentMixCount = 2;
let activeColorTypeGroup = '';
let visibleItemLimit = 10;
let onlyFavorites = false;
let onlyThisWeek = false;

let kodeokRules = localStorage.getItem('hancowii_kodeok_rules') || `《고능만이 살길-!!》

1. 펄블 쳐다도 보지 않는다 - 데일리로 쓰기 어려움
2. 가네다만 취급할것
3. 고능이라고 난리난것만 산다 그냥 할인된 가격이 아니라 이 가격이면 진짜 잘 샀다 싶은 조건을 노린다
4. 고능은 언젠가 오니 구매를 참아야한다 위시여도 고능일때만 살것 지금 안 사면 손해라는 생각 금지 온고잉 제품이면 특히 더 좋은 할인/쿠폰/당근 기회가 오 수 있음
5. 득템할 기회도 언젠가 온다. 그것도 고능으로. 한정, 단독, 품절 지금만 살 수 있는 FOMO에 휘둘리지 않는다. 당근까지 포함에서 나중에 더 좋은 조건으로 득템할 기회가 온다
6. 있을거 다 있는 상태면 꽁결만 생각한다 싸다고 무조건 사지 않는다
7. 코덕 취미 자체를 없애지 않는다 화장품을 사는 즐거움 자체가 취미니까 무조건 노바이가 목표는 아니다
8. 구매는 쉽고 재판매는 어렵다 나중에 다 짐이다
9. 하나 쓰는데도 ㅈㄴ 오래 걸린다 되도록이면 쟁이지 말자
10. 금액 채울때 같은 색으로 사지 않기 되도록이면 다양하게 한 색은 한 개만
11. 있잘쓰 - 이미 가진게 많은 행복한 나, 있는 제품을 활용하면 더욱 행복해진다`;

    const tabConfig = {

    '내 화장대': { badge: '내 화장대', subtitle: '있잘쓰! 있는거 잘 쓰자', icon: 'fa-pump-soap' },

    '위시': { badge: '위시', subtitle: '갖고 싶은게 생겼어요', icon: 'fa-heart' },

    '홈': { badge: '홈', subtitle: '행복한 코덕 생활을 위하여', icon: 'fa-house' },

    '소비 기록': { badge: '소비 기록', subtitle: 'lim 고능소비를 향해', icon: 'fa-receipt' },

    '마이 페이지': { badge: '마이 페이지', subtitle: '내 정보 및 설정', icon: 'fa-user' }

    };

    updateSubCategoryTabs();

    switchTab('홈');
    document.getElementById('app-shell').classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
    document.getElementById('app-shell').style.visibility = 'visible';

    window.addEventListener('click', (e) => {

    if (!e.target.closest('.more-menu-container')) {

    document.querySelectorAll('[id^="menu-"]').forEach(el => el.classList.add('hidden'));

    }

    });

    const listContainer = document.getElementById('vanity-list-container');

    listContainer.addEventListener('scroll', () => {

    if ((currentTab === '내 화장대' || currentTab === '위시') && (listContainer.scrollTop + listContainer.clientHeight) >= listContainer.scrollHeight - 50) {

    const currentList = currentTab === '내 화장대' ? getFilteredVanityItems() : getFilteredWishItems();

    if (visibleItemLimit < currentList.length) {

    visibleItemLimit += 10;

    if (currentTab === '내 화장대') renderVanity(true);

    else renderWish(true);

    }

    }

    });

    function toggleDarkMode() {
      darkMode = !darkMode;
      localStorage.setItem('hancowii_dark_mode', String(darkMode));
      document.getElementById('app-shell').classList.toggle('dark-mode', darkMode);
      document.body.classList.toggle('dark-mode', darkMode);
      updateDarkModeControl();
    }

    function updateDarkModeControl() {
      const status = document.getElementById('dark-mode-status');
      const track = document.getElementById('dark-mode-switch');
      const knob = document.getElementById('dark-mode-knob');
      if (!status || !track || !knob) return;
      status.innerText = darkMode ? '밤' : '낮';
      track.classList.toggle('bg-toss-blue', darkMode);
      track.classList.toggle('bg-toss-grey4', !darkMode);
      knob.classList.toggle('translate-x-4', darkMode);
      knob.classList.toggle('translate-x-0', !darkMode);
    }

    function saveToStorage() {

    localStorage.setItem('hancowii_vanity_items', JSON.stringify(vanityItems));

    localStorage.setItem('hancowii_wish_items', JSON.stringify(wishItems));

    homeMixSuggestionDate = '';

    }

    function saveKodeokRules(val) {

    kodeokRules = val;

    localStorage.setItem('hancowii_kodeok_rules', val);

    showToast('코덕 n계명이 저장되었습니다!');

    }

    function showToast(message) {

    const toast = document.getElementById('toast');

    toast.innerText = message;

    toast.classList.remove('opacity-0', 'pointer-events-none');

    toast.classList.add('opacity-100');

    setTimeout(() => {

    toast.classList.remove('opacity-100');

    toast.classList.add('opacity-0', 'pointer-events-none');

    }, 2000);

    }

    function switchTab(tabName) {

    currentTab = tabName;

    visibleItemLimit = 10;

    const cfg = tabConfig[tabName];

    document.getElementById('header-badge').innerText = cfg.badge;

    document.getElementById('header-subtitle').innerText = cfg.subtitle;

    ['내 화장대', '위시', '홈', '소비 기록', '마이 페이지'].forEach(t => {

    const btn = document.getElementById(`nav-btn-${t}`);

    if (t === tabName) {

    btn.className = 'flex flex-col items-center gap-1 py-1 px-3 text-toss-blue transition';

    btn.querySelector('span').className = 'text-[10px] font-bold';

    } else {

    btn.className = 'flex flex-col items-center gap-1 py-1 px-3 text-toss-grey3 hover:text-toss-dark transition';

    btn.querySelector('span').className = 'text-[10px] font-semibold';

    }

    });

    const floatAddBtn = document.getElementById('floating-add-btn');

    if (tabName === '내 화장대' || tabName === '위시') {

    floatAddBtn.classList.remove('hidden');

    } else {

    floatAddBtn.classList.add('hidden');

    }

    renderCurrentView();

    }

    function renderCurrentView() {

    const filterSection = document.getElementById('vanity-filter-section');
    document.getElementById('new-filter-btn').classList.toggle('hidden', currentTab !== '내 화장대');

    const listContainer = document.getElementById('vanity-list-container');

    const emptyState = document.getElementById('empty-state');

    const otherContent = document.getElementById('other-tab-content');

    const mixActionButtons = document.getElementById('mix-action-buttons');

    const statusFilterWrap = document.getElementById('status-filter-wrap');

    if (currentTab === '내 화장대' || currentTab === '위시') {

    filterSection.classList.remove('hidden');

    listContainer.classList.remove('hidden');

    emptyState.classList.add('hidden');

    otherContent.classList.add('hidden');

    if (currentTab === '내 화장대') {
      if (mixActionButtons) mixActionButtons.classList.remove('hidden');
      if (statusFilterWrap) statusFilterWrap.classList.remove('hidden');
      renderVanity();
    } else {
      if (mixActionButtons) mixActionButtons.classList.add('hidden');
      if (statusFilterWrap) statusFilterWrap.classList.add('hidden');
      renderWish();
    }

    } else {

    filterSection.classList.add('hidden');

    listContainer.classList.add('hidden');

    emptyState.classList.add('hidden');

    otherContent.classList.remove('hidden');

    if (currentTab === '홈') {
      renderHomeTab();
    } else if (currentTab === '소비 기록') {
      renderConsumptionTab();
    } else if (currentTab === '마이 페이지') {
      renderMyPageTab();
    }

    }

    }

    function selectMainCategory(cat) {

    currentMainCat = cat;

    currentSubCat = '전체';

    visibleItemLimit = 10;

    updateSubCategoryTabs();

    if (currentTab === '내 화장대') renderVanity();

    else renderWish();

    }

    function selectSubCategory(subCat) {

    currentSubCat = subCat;

    visibleItemLimit = 10;

    if (currentTab === '내 화장대') renderVanity();

    else renderWish();

    }

    function setStatusFilter(status) {

    currentStatusFilter = status;

    visibleItemLimit = 10;

    document.querySelectorAll('.status-tab').forEach(btn => {

    if (btn.innerText === status) {

    btn.className = 'status-tab px-2.5 py-1 rounded-lg text-[11px] font-bold transition bg-white text-toss-dark shadow-2xs';

    } else {

    btn.className = 'status-tab px-2.5 py-1 rounded-lg text-[11px] font-bold transition text-toss-grey2';

    }

    });

    if (currentTab === '내 화장대') renderVanity();

    else renderWish();

    }

    function updateSubCategoryTabs() {

    const container = document.getElementById('sub-cat-container');

    container.innerHTML = '';

    const mainTabs = document.querySelectorAll('.main-tab');

    mainTabs.forEach(btn => {

    if (btn.innerText === currentMainCat) {

    btn.className = 'main-tab px-3.5 py-1.5 rounded-xl text-xs font-bold transition shrink-0 bg-toss-dark text-white';

    } else {

    btn.className = 'main-tab px-3.5 py-1.5 rounded-xl text-xs font-bold transition shrink-0 bg-toss-grey5 text-toss-grey2 hover:text-toss-dark';

    }

    });

    let subs = ['전체'];

    if (currentMainCat !== '전체' && SUB_CATEGORIES[currentMainCat]) {

    subs = ['전체', ...SUB_CATEGORIES[currentMainCat]];

    }

    subs.forEach(sub => {

    const isSelected = currentSubCat === sub;

    const btn = document.createElement('button');

    btn.onclick = () => selectSubCategory(sub);

    btn.className = `px-3 py-1 rounded-lg text-[11px] font-semibold transition shrink-0 ${       isSelected ? 'bg-toss-blue text-white shadow-2xs' : 'bg-toss-grey5 text-toss-grey2 hover:text-toss-dark'     }`;

    btn.innerText = sub;

    container.appendChild(btn);

    });

    }

    function handleSearch(val) {

    searchQuery = val.trim();

    visibleItemLimit = 10;

    const clearBtn = document.getElementById('search-clear-btn');

    if (searchQuery) clearBtn.classList.remove('hidden');

    else clearBtn.classList.add('hidden');

    if (currentTab === '내 화장대') renderVanity();

    else renderWish();

    }

    function clearSearch() {

    document.getElementById('search-input').value = '';

    searchQuery = '';

    document.getElementById('search-clear-btn').classList.add('hidden');

    if (currentTab === '내 화장대') renderVanity();

    else renderWish();

    }

    function isAddedThisWeek(item) {
      if (!item.createdAt) return false;
      const now = new Date();
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const daysSinceMonday = (start.getDay() + 6) % 7;
      start.setDate(start.getDate() - daysSinceMonday);
      return Number(item.createdAt) >= start.getTime() && Number(item.createdAt) <= now.getTime();
    }

    function toggleFavoriteFilter() {
      onlyFavorites = !onlyFavorites;
      const button = document.getElementById('favorite-filter-btn');
      button.className = onlyFavorites ? 'px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#FFF3F0] text-toss-blue' : 'px-2.5 py-1 rounded-lg text-[11px] font-bold text-toss-grey2 bg-toss-grey5';
      button.innerText = onlyFavorites ? '♥ 찜한 것만' : '♡ 찜만 보기';
      renderCurrentView();
    }

    function toggleNewFilter() {
      onlyThisWeek = !onlyThisWeek;
      const button = document.getElementById('new-filter-btn');
      button.className = onlyThisWeek ? 'px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#FFF3F0] text-toss-blue' : 'px-2.5 py-1 rounded-lg text-[11px] font-bold text-toss-grey2 bg-toss-grey5';
      renderCurrentView();
    }

    function toggleFavorite(id, isWish = false) {
      const list = isWish ? wishItems : vanityItems;
      const item = list.find(entry => entry.id === id);
      if (!item) return;
      item.favorite = !item.favorite;
      saveToStorage();
      renderCurrentView();
    }

    function toggleShadowBlushRoles() {
      const enabled = document.getElementById('form-shadow-blush').checked;
      document.getElementById('form-shadow-blush-roles-wrap').classList.toggle('hidden', !enabled);
    }

    function confirmStartedUsing(id, nextState) {
      const item = vanityItems.find(entry => entry.id === id);
      if (!item) return;
      const modal = document.getElementById('result-modal');
      document.getElementById('result-modal-icon').className = 'w-14 h-14 rounded-3xl bg-toss-blue/10 text-toss-blue flex items-center justify-center text-xl mx-auto mb-3';
      document.getElementById('result-modal-icon').innerHTML = nextState ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-rotate-left"></i>';
      document.getElementById('result-modal-title').innerText = nextState ? '사용 시작으로 표시할까요?' : '사용 시작 표시를 취소할까요?';
      document.getElementById('result-modal-content').innerText = `${item.brand} ${item.name}`;
      document.getElementById('result-modal-actions').innerHTML = `<button onclick="closeResultModal()" class="px-4 py-2 rounded-xl bg-toss-grey5 text-toss-grey2 font-bold text-xs">돌아가기</button><button onclick="setStartedUsing('${id}', ${nextState})" class="px-4 py-2 rounded-xl bg-toss-blue text-white font-bold text-xs">${nextState ? '표시하기' : '취소하기'}</button>`;
      modal.classList.remove('hidden');
      setTimeout(() => { modal.classList.remove('opacity-0'); modal.querySelector('div.transform').classList.remove('scale-95'); }, 10);
    }

    function setStartedUsing(id, startedUsing) {
      const item = vanityItems.find(entry => entry.id === id);
      if (!item) return;
      item.startedUsing = startedUsing;
      saveToStorage();
      closeResultModal();
      renderCurrentView();
      showToast(startedUsing ? '사용 시작으로 표시했어요.' : '사용 시작 표시를 취소했어요.');
    }

    function setTypeSelectOptions(selectId, placeholder, values) {
      const select = document.getElementById(selectId);
      const previous = select.value;
      select.innerHTML = `<option value="">${placeholder}</option>${values.map(value => `<option>${value}</option>`).join('')}`;
      select.value = values.includes(previous) ? previous : '';
    }

    function refreshWishSpecialTagOptions(selectedValue = '') {
      const select = document.getElementById('form-wish-special-tag');
      if (!select) return;
      const values = [...new Set([...wishSpecialTags, selectedValue].filter(Boolean))];
      select.innerHTML = values.map(value => `<option value="${String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')}">${String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;')}</option>`).join('');
      select.value = selectedValue && values.includes(selectedValue) ? selectedValue : (wishSpecialTags[0] || '');
    }

    function openWishSpecialTagManager() {
      const modal = document.getElementById('result-modal');
      document.getElementById('result-modal-icon').className = 'w-14 h-14 rounded-3xl bg-toss-blue/10 text-toss-blue flex items-center justify-center text-xl mx-auto mb-3';
      document.getElementById('result-modal-icon').innerHTML = '<i class="fa-solid fa-tags"></i>';
      document.getElementById('result-modal-title').innerText = '위시 특이사항 관리';
      const content = document.getElementById('result-modal-content');
      content.innerHTML = `<div class="text-left space-y-2"><p class="text-[11px] text-toss-grey2 mb-3">위시 등록/수정에서 선택할 특이사항을 관리할 수 있어요.</p><div class="flex gap-2"><input id="new-wish-special-tag" class="min-w-0 flex-1 h-9 px-3 rounded-xl bg-white text-toss-dark text-xs border border-toss-grey4 outline-none focus:ring-2 focus:ring-toss-blue/50" placeholder="새 특이사항"><button onclick="addWishSpecialTag()" class="px-3 rounded-xl bg-toss-blue text-white text-xs font-bold">추가</button></div><div class="space-y-2 mt-3">${wishSpecialTags.map((tag, index) => `<div class="flex gap-2"><input id="wish-special-tag-${index}" value="${String(tag).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')}" class="min-w-0 flex-1 h-9 px-3 rounded-xl bg-toss-grey5 text-toss-dark text-xs border-none outline-none"><button onclick="renameWishSpecialTag(${index})" class="px-2 rounded-lg bg-toss-grey5 text-toss-grey2 text-[10px] font-bold">저장</button><button onclick="deleteWishSpecialTag(${index})" class="px-2 rounded-lg bg-toss-grey5 text-toss-grey2 text-[10px] font-bold">삭제</button></div>`).join('')}</div></div>`;
      document.getElementById('result-modal-actions').innerHTML = `<button onclick="closeResultModal()" class="px-5 py-2.5 rounded-xl bg-toss-blue text-white font-bold text-xs w-full">닫기</button>`;
      modal.classList.remove('hidden');
      setTimeout(() => { modal.classList.remove('opacity-0'); modal.querySelector('div.transform').classList.remove('scale-95'); }, 10);
    }

    function persistWishSpecialTags() {
      localStorage.setItem('hancowii_wish_special_tags', JSON.stringify(wishSpecialTags));
      refreshWishSpecialTagOptions(document.getElementById('form-wish-special-tag')?.value || '');
      openWishSpecialTagManager();
    }

    function addWishSpecialTag() {
      const input = document.getElementById('new-wish-special-tag');
      const value = input.value.trim();
      if (!value || wishSpecialTags.includes(value)) { showToast(value ? '이미 있는 특이사항이에요.' : '특이사항을 입력해주세요.'); return; }
      wishSpecialTags.push(value);
      persistWishSpecialTags();
    }

    function renameWishSpecialTag(index) {
      const value = document.getElementById(`wish-special-tag-${index}`).value.trim();
      if (!value || (wishSpecialTags.includes(value) && wishSpecialTags[index] !== value)) { showToast(value ? '이미 있는 특이사항이에요.' : '특이사항을 입력해주세요.'); return; }
      const previous = wishSpecialTags[index];
      wishSpecialTags[index] = value;
      wishItems.forEach(item => { if (item.wishSpecialTag === previous) item.wishSpecialTag = value; });
      saveToStorage();
      persistWishSpecialTags();
    }

    function deleteWishSpecialTag(index) {
      if (wishSpecialTags.length <= 1) { showToast('특이사항은 최소 한 개 필요해요.'); return; }
      wishSpecialTags.splice(index, 1);
      persistWishSpecialTags();
    }

    function updateFormCategoryOptions() {
      const sub = document.getElementById('form-sub-cat').value;
      const isLip = sub === '립';
      const isBlushOrShadow = sub === '블러셔' || sub === '섀도우';
      document.getElementById('form-lip-roles-wrap').classList.toggle('hidden', !isLip);
      document.getElementById('form-shadow-blush-wrap').classList.toggle('hidden', sub !== '섀도우');
      document.getElementById('form-blush-roles-wrap').classList.toggle('hidden', sub !== '블러셔');
      document.getElementById('form-color-type-wrap').classList.toggle('hidden', !isLip && !isBlushOrShadow);
      const typeGroup = isLip ? 'lip' : 'cheek';
      if (activeColorTypeGroup !== typeGroup) {
        if (isLip) {
          setTypeSelectOptions('form-formula', '제품 종류', ['립스틱', '틴트', '립글로스', '립밤', '립라이너', '립오일']);
          setTypeSelectOptions('form-finish', '마무리', ['매트', '벨벳', '세미매트', '촉촉', '글로시']);
        } else {
          setTypeSelectOptions('form-formula', '제형', ['크림', '가루', '리퀴드', '스틱', '젤', '쿠션']);
          setTypeSelectOptions('form-finish', '마무리', ['매트', '새틴', '글로우']);
        }
        setTypeSelectOptions('form-shimmer', '펄감', ['무펄', '쉬머', '글리터']);
        activeColorTypeGroup = typeGroup;
      }
      toggleShadowBlushRoles();
    }

    function updateOpenedCountFromStatus() {
      const count = Math.max(1, Number(document.getElementById('form-count').value || 1));
      const status = document.getElementById('form-status').value;
      const openedInput = document.getElementById('form-opened-count');
      openedInput.max = count;
      if (status === '개봉') openedInput.value = count;
      else if (status === '미개봉') openedInput.value = 0;
      else openedInput.value = Math.min(count, Number(openedInput.value || 0));
    }

    function getFilteredVanityItems() {

    return vanityItems.filter(item => {

    const matchMain = currentMainCat === '전체' || item.mainCat === currentMainCat;

    const matchSub = currentSubCat === '전체' || item.subCat === currentSubCat;

    const openCount = Number.isFinite(Number(item.openedCount)) ? Number(item.openedCount) : (item.status === '개봉' ? Number(item.count || 1) : 0);
    const totalCount = Number(item.count || 1);
    const matchStatus = currentStatusFilter === '전체' || (currentStatusFilter === '개봉' ? openCount > 0 : openCount < totalCount);
    const matchFavorite = !onlyFavorites || Boolean(item.favorite);
    const matchWeek = !onlyThisWeek || isAddedThisWeek(item);
    const matchSearch = !searchQuery ||

    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||

    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||

    (item.color && item.color.toLowerCase().includes(searchQuery.toLowerCase())) ||

    (item.tags && item.tags.toLowerCase().includes(searchQuery.toLowerCase())) ||

    (item.memo && item.memo.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchMain && matchSub && matchStatus && matchFavorite && matchWeek && matchSearch;

    });

    }

    function getFilteredWishItems() {

    return wishItems.filter(item => {

    const matchMain = currentMainCat === '전체' || item.mainCat === currentMainCat;

    const matchSub = currentSubCat === '전체' || item.subCat === currentSubCat;
    const matchFavorite = !onlyFavorites || Boolean(item.favorite);

    const matchSearch = !searchQuery ||

    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||

    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||

    (item.color && item.color.toLowerCase().includes(searchQuery.toLowerCase())) ||

    (item.platform && item.platform.toLowerCase().includes(searchQuery.toLowerCase())) ||

    (item.memo && item.memo.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchMain && matchSub && matchFavorite && matchSearch;

    });

    }

    function renderVanity() {

    const container = document.getElementById('vanity-list-container');

    const emptyState = document.getElementById('empty-state');

    const filtered = getFilteredVanityItems();

    const countLabel = document.getElementById('filter-count-label');

    let targetName = currentMainCat;

    if (currentSubCat !== '전체') targetName = `${currentMainCat} > ${currentSubCat}`;

    countLabel.innerHTML = `${targetName} <span class="text-toss-blue font-bold">${filtered.length}개</span>`;

    container.innerHTML = '';

    if (filtered.length === 0) {

    emptyState.classList.remove('hidden');

    emptyState.classList.add('flex');

    return;

    }

    emptyState.classList.remove('flex');

    emptyState.classList.add('hidden');

    const itemsToRender = filtered.slice(0, visibleItemLimit);

    itemsToRender.forEach(item => {

    const card = document.createElement('div');

    card.className = 'bg-white rounded-2xl p-4 border border-toss-grey4/60 shadow-toss-card flex items-start gap-3.5 relative';

    const imgSrc = item.imageUrl || DEFAULT_IMAGES[item.subCat] || DEFAULT_IMAGES['기타'];
    const tagsHtml = item.tags ? item.tags.split(',').map(t => `<span class="px-2 py-0.5 bg-toss-grey5 text-toss-grey2 rounded-md text-[10px] font-semibold">${t.trim()}</span>`).join('') : '';
    const totalCount = Math.max(1, Number(item.count || 1));
    const openedCount = Number.isFinite(Number(item.openedCount)) ? Math.min(totalCount, Math.max(0, Number(item.openedCount))) : (item.status === '개봉' ? totalCount : 0);
    const statusLabel = openedCount === totalCount ? '개봉' : openedCount === 0 ? '미개봉' : `${openedCount}개 개봉 · ${totalCount - openedCount}개 미개봉`;
    const metadataBadges = [item.discontinued ? '단종' : '', item.renewed ? '리뉴얼' : '', item.hasRefill ? '리필 보유' : '', item.shadowBlush ? '블러셔 겸용' : '', item.expiryDate ? `유통기한 ${item.expiryDate}` : ''].filter(Boolean).map(label => `<span class="px-2 py-0.5 bg-toss-grey5 text-toss-grey2 rounded-md text-[10px] font-semibold">${label}</span>`).join('');
    const colorTypeLine = [item.formula, item.finish, item.shimmer].filter(Boolean).join(' · ');

    card.innerHTML = `
      <div class="w-16 h-16 rounded-xl bg-toss-grey5 overflow-hidden shrink-0 border border-toss-grey4/40 flex items-center justify-center relative">
        <img src="${imgSrc}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/100x100/f2f4f6/8b95a1?text=Cosmetic'" />
      </div>
      <div class="flex-1 min-w-0 pr-6">
        <div class="flex items-center gap-1.5 mb-0.5">
          <span class="text-[11px] font-bold text-toss-blue">${item.brand}</span>
          <span class="text-[10px] text-toss-grey3">•</span>
          <span class="text-[10px] font-semibold text-toss-grey2">${item.subCat}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <h3 class="text-xs font-bold text-toss-dark truncate">${item.name}</h3>
          ${item.count > 1 ? `<span class="px-1.5 py-0.5 bg-toss-blue/10 text-toss-blue rounded text-[10px] font-bold shrink-0">x${item.count}</span>` : ''}
        </div>
        ${item.color ? `<p class="text-[11px] font-medium text-toss-grey2 mt-0.5">🎨 ${item.color}</p>` : ''}
        ${colorTypeLine ? `<p class="text-[10px] text-toss-grey3 mt-1">${colorTypeLine}</p>` : ''}

        <div class="flex items-center gap-1.5 mt-2 flex-wrap">
          <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${openedCount === totalCount ? 'bg-emerald-50 text-emerald-600' : openedCount === 0 ? 'bg-amber-50 text-amber-600' : 'bg-indigo-50 text-indigo-600'}">${statusLabel}</span>
          ${tagsHtml}
          ${metadataBadges}
        </div>
        ${item.memo ? `<p class="text-[11px] text-toss-grey3 mt-2 italic truncate">📝 ${item.memo}</p>` : ''}
        ${onlyThisWeek && isAddedThisWeek(item) && !item.startedUsing ? `<button onclick="confirmStartedUsing('${item.id}', true)" class="mt-2 px-2.5 py-1 rounded-lg bg-[#FFF3F0] text-toss-blue text-[10px] font-bold">오늘부터 써보기</button>` : ''}
        ${onlyThisWeek && isAddedThisWeek(item) && item.startedUsing ? `<div class="mt-2 flex items-center gap-2"><span class="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-[10px] font-bold">✓ 사용 시작됨</span><button onclick="confirmStartedUsing('${item.id}', false)" class="text-[10px] font-semibold text-toss-grey3">되돌리기</button></div>` : ''}
      </div>
      <button onclick="toggleFavorite('${item.id}')" class="absolute bottom-3 right-3 text-lg ${item.favorite ? 'text-rose-500' : 'text-toss-grey3'}" aria-label="찜">${item.favorite ? '♥' : '♡'}</button>

      <!-- More Action Menu -->
      <div class="absolute top-3 right-3 more-menu-container">
        <button onclick="toggleCardMenu(event, '${item.id}')" class="w-7 h-7 rounded-lg text-toss-grey3 hover:bg-toss-grey5 flex items-center justify-center transition">
          <i class="fa-solid fa-ellipsis-vertical text-xs"></i>
        </button>
        <div id="menu-${item.id}" class="hidden absolute right-0 top-8 w-28 bg-white rounded-xl shadow-toss-modal border border-toss-grey4/60 py-1.5 z-20">
          <button onclick="editVanityItem('${item.id}')" class="w-full text-left px-3 py-1.5 text-xs font-semibold text-toss-dark hover:bg-toss-grey5 transition flex items-center gap-1.5">
            <i class="fa-solid fa-pen text-[10px]"></i> 수정
          </button>
          <button onclick="deleteVanityItem('${item.id}')" class="w-full text-left px-3 py-1.5 text-xs font-semibold text-rose-500 hover:bg-rose-50 transition flex items-center gap-1.5">
            <i class="fa-solid fa-trash text-[10px]"></i> 삭제
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);

    });

    }

    function renderWish() {

    const container = document.getElementById('vanity-list-container');

    const emptyState = document.getElementById('empty-state');

    const filtered = getFilteredWishItems();

    const countLabel = document.getElementById('filter-count-label');

    let targetName = currentMainCat;

    if (currentSubCat !== '전체') targetName = `${currentMainCat} > ${currentSubCat}`;

    countLabel.innerHTML = `${targetName} <span class="text-toss-blue font-bold">${filtered.length}개</span>`;

    container.innerHTML = '';

    if (filtered.length === 0) {

    emptyState.classList.remove('hidden');

    emptyState.classList.add('flex');

    return;

    }

    emptyState.classList.remove('flex');

    emptyState.classList.add('hidden');

    const itemsToRender = filtered.slice(0, visibleItemLimit);

    itemsToRender.forEach(item => {

    const card = document.createElement('div');

    card.className = 'bg-white rounded-2xl p-4 border border-toss-grey4/60 shadow-toss-card flex items-start gap-3.5 relative';

    const imgSrc = item.imageUrl || DEFAULT_IMAGES[item.subCat] || DEFAULT_IMAGES['기타'];
    const wishLevel = item.wishLevel || 2;

    let levelBadgeClass = 'bg-toss-grey5 text-toss-grey2';
    let levelText = '2단계·언젠가 살 거임';
    let levelIcon = 'fa-heart';
    if (wishLevel === 1) {
      levelBadgeClass = 'bg-slate-100 text-slate-600';
      levelText = '1단계·관심 있음';
      levelIcon = 'fa-regular fa-heart';
    } else if (wishLevel === 2) {
      levelBadgeClass = 'bg-sky-50 text-sky-600';
      levelText = '2단계·언젠가 살 거임';
      levelIcon = 'fa-solid fa-heart';
    } else if (wishLevel === 3) {
      levelBadgeClass = 'bg-[#FFF3F0] text-toss-blue font-bold animate-pulse';
      levelText = '3단계·지금 사야 함 🔥';
      levelIcon = 'fa-solid fa-fire';
    }

    card.innerHTML = `
      <div class="w-16 h-16 rounded-xl bg-toss-grey5 overflow-hidden shrink-0 border border-toss-grey4/40 flex items-center justify-center relative">
        <img src="${imgSrc}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/100x100/f2f4f6/8b95a1?text=Wish'" />
      </div>
      <div class="flex-1 min-w-0 pr-6">
        <div class="flex items-center gap-1.5 mb-0.5">
          <span class="text-[11px] font-bold text-toss-blue">${item.brand}</span>
          <span class="text-[10px] text-toss-grey3">•</span>
          <span class="text-[10px] font-semibold text-toss-grey2">${item.subCat}</span>
        </div>
        <h3 class="text-xs font-bold text-toss-dark truncate">${item.name}</h3>
        ${item.color ? `<p class="text-[11px] font-medium text-toss-grey2 mt-0.5">🎨 ${item.color}</p>` : ''}

        <div class="flex items-center gap-1.5 mt-2 flex-wrap">
          <span class="px-2 py-0.5 ${levelBadgeClass} rounded-md text-[10px] flex items-center gap-1"><i class="${levelIcon} text-[9px]"></i>${levelText}</span>
          <span class="px-2 py-0.5 bg-toss-grey5 text-toss-grey2 rounded-md text-[10px] font-semibold">정가: ${Number(item.originalPrice || 0).toLocaleString()}원</span>
          <span class="px-2 py-0.5 bg-amber-50 text-amber-600 rounded-md text-[10px] font-bold">고능가: ${item.gongeungPrice || '-'}</span>
        </div>
        ${item.memo ? `<p class="text-[11px] text-toss-grey3 mt-2 italic truncate">📝 ${item.memo}</p>` : ''}
      </div>
      <button onclick="toggleFavorite('${item.id}', true)" class="absolute bottom-3 right-3 text-lg ${item.favorite ? 'text-rose-500' : 'text-toss-grey3'}" aria-label="찜">${item.favorite ? '♥' : '♡'}</button>

      <!-- More Action Menu -->
      <div class="absolute top-3 right-3 more-menu-container">
        <button onclick="toggleCardMenu(event, '${item.id}')" class="w-7 h-7 rounded-lg text-toss-grey3 hover:bg-toss-grey5 flex items-center justify-center transition">
          <i class="fa-solid fa-ellipsis-vertical text-xs"></i>
        </button>
        <div id="menu-${item.id}" class="hidden absolute right-0 top-8 w-28 bg-white rounded-xl shadow-toss-modal border border-toss-grey4/60 py-1.5 z-20">
          <button onclick="editWishItem('${item.id}')" class="w-full text-left px-3 py-1.5 text-xs font-semibold text-toss-dark hover:bg-toss-grey5 transition flex items-center gap-1.5">
            <i class="fa-solid fa-pen text-[10px]"></i> 수정
          </button>
          <button onclick="deleteWishItem('${item.id}')" class="w-full text-left px-3 py-1.5 text-xs font-semibold text-rose-500 hover:bg-rose-50 transition flex items-center gap-1.5">
            <i class="fa-solid fa-trash text-[10px]"></i> 삭제
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);

    });

    }

    function toggleCardMenu(e, id) {

    e.stopPropagation();

    document.querySelectorAll('[id^="menu-"]').forEach(el => {

    if (el.id !== `menu-${id}`) el.classList.add('hidden');

    });

    const menu = document.getElementById(`menu-${id}`);

    menu.classList.toggle('hidden');

    }

    // Modal Add / Edit

    function openAddModal() {

    const modal = document.getElementById('add-modal');

    const title = document.getElementById('modal-form-title');

    const smartBox = document.getElementById('smart-import-box');

    const wishFields = document.getElementById('wish-exclusive-fields');

    const vanityRow = document.getElementById('form-vanity-status-row');

    const standardRow = document.getElementById('form-standard-row');
    const vanityExtraFields = document.getElementById('form-vanity-extra-fields');

    document.getElementById('edit-item-id').value = '';

    document.getElementById('vanity-form').reset();
    document.getElementById('form-opened-count').value = '1';
    document.getElementById('form-status').value = '개봉';
    document.querySelectorAll('input[name="form-lip-role"], input[name="form-blush-role"], input[name="form-shadow-blush-role"]').forEach(input => input.checked = false);
    document.getElementById('form-shadow-blush').checked = false;
    document.getElementById('form-formula').value = '';
    document.getElementById('form-finish').value = '';
    document.getElementById('form-shimmer').value = '';

    refreshWishSpecialTagOptions();
    if (currentTab === '위시') {

    title.innerText = '위시 상품 등록';

    smartBox.classList.remove('hidden');

    wishFields.classList.remove('hidden');
    vanityExtraFields.classList.add('hidden');
    document.getElementById('form-lip-roles-wrap').classList.add('hidden');
    document.getElementById('form-shadow-blush-wrap').classList.add('hidden');

    vanityRow.classList.add('hidden');

    standardRow.classList.remove('grid-cols-3');

    standardRow.classList.add('grid-cols-2');

    document.getElementById('form-count-wrap').classList.add('hidden');

    setWishLevel(2);

    } else {

    title.innerText = '화장품 등록';

    smartBox.classList.remove('hidden');

    wishFields.classList.add('hidden');
    vanityExtraFields.classList.remove('hidden');

    vanityRow.classList.remove('hidden');

    standardRow.classList.remove('grid-cols-2');

    standardRow.classList.add('grid-cols-3');

    document.getElementById('form-count-wrap').classList.remove('hidden');

    }

    onFormMainCatChange();

    modal.classList.remove('hidden');

    setTimeout(() => {

    modal.classList.remove('opacity-0');

    modal.querySelector('div.transform').classList.remove('translate-y-full');

    }, 10);

    }

    function closeAddModal() {

    const modal = document.getElementById('add-modal');

    modal.classList.add('opacity-0');

    modal.querySelector('div.transform').classList.add('translate-y-full');

    setTimeout(() => {

    modal.classList.add('hidden');

    }, 300);

    }

    let addModalGesture = null;
    document.getElementById('add-modal').addEventListener('pointerdown', event => {
      addModalGesture = { x: event.clientX, y: event.clientY, startedInside: Boolean(event.target.closest('#vanity-form')) };
    });
    document.getElementById('add-modal').addEventListener('pointerup', event => {
      if (addModalGesture && addModalGesture.startedInside && event.target.id === 'add-modal' && (Math.abs(event.clientX - addModalGesture.x) > 12 || Math.abs(event.clientY - addModalGesture.y) > 12)) {
        document.getElementById('add-modal').dataset.ignoreBackdropClick = 'true';
      }
      addModalGesture = null;
    });

    function handleBackdropClick(e, modalId) {
    if (modalId === 'add-modal' && e.target.id === modalId && e.currentTarget.dataset.ignoreBackdropClick === 'true') {
      e.currentTarget.dataset.ignoreBackdropClick = 'false';
      return;
    }
    if (e.target.id === modalId) {

    if (modalId === 'add-modal') closeAddModal();

    else if (modalId === 'mix-config-modal') closeMixConfigModal();

    else if (modalId === 'result-modal') closeResultModal();

    }

    }

    function setWishLevel(lvl) {

    document.getElementById('form-wish-level').value = lvl;

    [1, 2, 3].forEach(n => {

    const btn = document.getElementById(`wish-level-btn-${n}`);

    if (n === lvl) {

    btn.className = 'py-2.5 px-2 rounded-xl border-2 border-toss-blue bg-[#FFF3F0] text-toss-blue font-bold text-[11px] transition text-center leading-snug shadow-2xs';

    } else {

    btn.className = 'py-2.5 px-2 rounded-xl border border-toss-grey4 bg-white text-toss-grey2 font-semibold text-[11px] transition text-center leading-snug';

    }

    });

    }

    function onFormMainCatChange() {

    const mainCat = document.getElementById('form-main-cat').value;

    const subCatSelect = document.getElementById('form-sub-cat');

    subCatSelect.innerHTML = '';

    const subs = SUB_CATEGORIES[mainCat] || ['기타'];

    subs.forEach(sub => {

    const opt = document.createElement('option');

    opt.value = sub;

    opt.innerText = sub;

    subCatSelect.appendChild(opt);

    });
    updateFormCategoryOptions();

    }

    function runSmartImport() {
      const val = document.getElementById('smart-import-input').value.trim();
      if (!val) { showToast('브랜드와 제품명이 포함된 상품명을 입력해주세요.'); return; }
      if (/^https?:\/\//i.test(val)) {
        showToast('상품 링크는 직접 읽을 수 없어요. 상품명과 옵션 텍스트를 붙여넣어 주세요.');
        return;
      }
      const cleanedVal = val.replace(/\[[^\]]*\]/g, ' ').replace(/\([^)]*(?:증정|사은품)[^)]*\)/gi, ' ').replace(/\s+\d+\s*Colors?\b/gi, ' ').replace(/\s+/g, ' ').trim();
      const knownBrands = ['롬앤','rom&nd','힌스','hince','토리든','스킨푸드','에스쁘아','클리오','라운드랩','라운드 랩','넘버즈인','3ce','바비브라운','퓌','키엘','셀퓨전씨','필리밀리','베네피트','릴리바이레드','어뮤즈','입생로랑','디어달리아','에뛰드','페리페라','헤라','정샘물','맥','나스','샤넬','랑콤','아누아','닥터지','바이오더마','에스티 로더','이니스프리','디올','메이크업포에버','톰포드'];
      const lower = cleanedVal.toLowerCase();
      const matchedBrand = knownBrands.sort((a,b) => b.length-a.length).find(candidate => lower.includes(candidate.toLowerCase()));
      const brand = matchedBrand || cleanedVal.split(/\s+/)[0];
      const brandIndex = matchedBrand ? lower.indexOf(matchedBrand.toLowerCase()) : 0;
      const afterBrand = cleanedVal.slice(brandIndex + brand.length).replace(/^[\s·|,:：-]+/, '').trim();
      if (!afterBrand) { showToast('제품명이 없어요. 브랜드와 제품명을 함께 입력해주세요.'); return; }
      const tokens = afterBrand.split(/[|,，\n]/).map(part => part.trim()).filter(Boolean);
      const productText = tokens[0] || afterBrand;
      const shadeSource = tokens.slice(1).join(' ') || productText;
      const shadeMatch = shadeSource.match(/(?:#?\d{1,3}\s*호\s*[^,|]*)|(?:#?\d{1,3}\s*(?:베어|코랄|로즈|브라운|핑크|그레이프|누드|레드|피치|모브|샌드|바닐라)[^,|]*)|(?:[가-힣A-Za-z]+\s*(?:베이지|코랄|로즈|브라운|핑크|그레이프|누드|레드))/i);
      const productName = shadeMatch && productText.includes(shadeMatch[0]) ? productText.replace(shadeMatch[0], '').trim() : productText;
      document.getElementById('form-brand').value = brand;
      document.getElementById('form-name').value = productName || productText;
      if (shadeMatch) document.getElementById('form-color').value = shadeMatch[0].trim();

      const textToClassify = `${cleanedVal} ${productText}`.toLowerCase();
      const rules = [
        [/립|틴트|립스틱|립글로스|립밤|립펜슬|lipstick|lip gloss|lip tint/, '색조', '립'],
        [/블러셔|블러쉬|치크|blush|cheek/, '색조', '블러셔'],
        [/섀도우|아이섀도|아이 팔레트|아이팔레트|eyeshadow/, '색조', '섀도우'],
        [/마스카라|mascara/, '색조', '마스카라'],
        [/아이라이너|라이너|eyeliner/, '색조', '아이라이너'],
        [/브로우|아이브로우|눈썹/, '색조', '브로우'],
        [/하이라이터|쉐딩|컨투어|highlight|contour/, '색조', '쉐딩/하이라이터'],
        [/파우더|팩트|powder/, '베이스', '파우더'],
        [/쿠션|파운데이션|foundation|bb크림/, '베이스', '파운데이션'],
        [/선크림|선스크린|sunscreen/, '베이스', '선크림'],
        [/토너|스킨|toner/, '기초', '스킨, 토너'],
        [/세럼|앰플|에센스|serum/, '기초', '세럼, 앰플'],
        [/크림|cream/, '기초', '크림'],
        [/마스크팩|시트팩|팩/, '기초', '팩'],
        [/브러쉬|브러시|brush/, '도구', '브러쉬'],
        [/속눈썹|래쉬|lash/, '도구', '속눈썹']
      ];
      const category = rules.find(([pattern]) => pattern.test(textToClassify));
      if (category) {
        const mainSelect = document.getElementById('form-main-cat');
        mainSelect.value = category[1];
        onFormMainCatChange();
        document.getElementById('form-sub-cat').value = category[2];
        updateFormCategoryOptions();
      }
      showToast(category ? `상품 정보와 ${category[1]} > ${category[2]} 분류를 채웠어요. 확인해주세요.` : '상품명에서 정보를 채웠어요. 분류는 직접 선택해주세요.');
    }

    function handleFormSubmit(e) {

    e.preventDefault();

    const editId = document.getElementById('edit-item-id').value;

    const mainCat = document.getElementById('form-main-cat').value;

    const subCat = document.getElementById('form-sub-cat').value;

    const brand = document.getElementById('form-brand').value.trim();

    const name = document.getElementById('form-name').value.trim();

    const color = document.getElementById('form-color').value.trim();

    const imageUrl = document.getElementById('form-image-url').value.trim();

    const memo = document.getElementById('form-memo').value.trim();

    const isWish = currentTab === '위시';

    if (isWish) {

    const wishLevel = parseInt(document.getElementById('form-wish-level').value || '2', 10);

    const originalPrice = parseInt(document.getElementById('form-original-price').value || '0', 10);

    const gongeungPrice = document.getElementById('form-gongeung-price').value.trim();

    const platform = document.getElementById('form-platform').value;

    const wishCondition = document.getElementById('form-wish-condition').value;

    const wishEdition = document.getElementById('form-wish-edition').value;

    const wishSpecialTag = document.getElementById('form-wish-special-tag').value;
    const lipRoles = subCat === '립' ? [...document.querySelectorAll('input[name="form-lip-role"]:checked')].map(input => input.value) : [];

    if (editId) {
      const idx = wishItems.findIndex(i => i.id === editId);
      if (idx !== -1) {
        wishItems[idx] = {
          ...wishItems[idx],
          mainCat, subCat, brand, name, color, imageUrl, memo,
          wishLevel, originalPrice, gongeungPrice, platform, wishCondition, wishEdition, wishSpecialTag, lipRoles
        };
        showToast('위시 상품 정보가 수정되었습니다');
      }
    } else {
      const newItem = {
        id: 'wish_' + Date.now(),
        mainCat, subCat, brand, name, color, imageUrl, memo,
        wishLevel, originalPrice, gongeungPrice, platform, wishCondition, wishEdition, wishSpecialTag, lipRoles,
        createdAt: Date.now()
      };
      wishItems.unshift(newItem);
      showToast('새 위시 상품이 등록되었습니다');
    }
    saveToStorage();
    closeAddModal();
    renderWish();

    } else {

    const count = Math.max(1, parseInt(document.getElementById('form-count').value || '1', 10));
    const openedCount = Math.min(count, Math.max(0, parseInt(document.getElementById('form-opened-count').value || '0', 10)));
    const status = openedCount === count ? '개봉' : openedCount === 0 ? '미개봉' : '혼합';
    const shadowBlush = document.getElementById('form-shadow-blush').checked;
    const lipRoles = subCat === '립' ? [...document.querySelectorAll('input[name="form-lip-role"]:checked')].map(input => input.value) : [];
    const blushRoles = subCat === '블러셔' ? [...document.querySelectorAll('input[name="form-blush-role"]:checked')].map(input => input.value) : [];
    const shadowBlushRoles = subCat === '섀도우' && shadowBlush ? [...document.querySelectorAll('input[name="form-shadow-blush-role"]:checked')].map(input => input.value) : [];
    const isColorProduct = subCat === '블러셔' || subCat === '섀도우';
    const formula = isColorProduct ? document.getElementById('form-formula').value : '';
    const finish = isColorProduct ? document.getElementById('form-finish').value : '';
    const shimmer = isColorProduct ? document.getElementById('form-shimmer').value : '';
    const expiryDate = document.getElementById('form-expiry-date').value;
    const discontinued = document.getElementById('form-discontinued').value === 'true';
    const renewed = document.getElementById('form-renewed').checked;
    const hasRefill = document.getElementById('form-has-refill').checked;

    const customTagsInput = document.getElementById('form-tags').value.trim();

    const allTags = customTagsInput ? customTagsInput.split(',').map(s => s.trim()).filter(Boolean).join(',') : '';

    if (editId) {
      const idx = vanityItems.findIndex(i => i.id === editId);
      if (idx !== -1) {
        vanityItems[idx] = {
          ...vanityItems[idx],
          mainCat, subCat, brand, name, color, imageUrl, status, count, openedCount, lipRoles, blushRoles, shadowBlushRoles, expiryDate, discontinued, renewed, hasRefill, shadowBlush, formula, finish, shimmer,
          tags: allTags, memo
        };
        showToast('화장품 정보가 수정되었습니다');
      }
    } else {
      const newItem = {
        id: 'item_' + Date.now(),
        mainCat, subCat, brand, name, color, imageUrl, status, count, openedCount, lipRoles, blushRoles, shadowBlushRoles, expiryDate, discontinued, renewed, hasRefill, shadowBlush, formula, finish, shimmer,
        tags: allTags, memo,
        createdAt: Date.now()
      };
      vanityItems.unshift(newItem);
      showToast('새 화장품이 등록되었습니다');
    }
    saveToStorage();
    closeAddModal();
    renderVanity();

    }

    }

    function editVanityItem(id) {

    const item = vanityItems.find(i => i.id === id);

    if (!item) return;

    openAddModal();

    document.getElementById('modal-form-title').innerText = '화장품 수정';

    document.getElementById('edit-item-id').value = item.id;

    document.getElementById('form-main-cat').value = item.mainCat;

    onFormMainCatChange();

    document.getElementById('form-sub-cat').value = item.subCat;
    updateFormCategoryOptions();

    document.getElementById('form-brand').value = item.brand;

    document.getElementById('form-name').value = item.name;

    document.getElementById('form-color').value = item.color || '';

    document.getElementById('form-count').value = item.count || 1;
    const totalCount = Math.max(1, Number(item.count || 1));
    document.getElementById('form-opened-count').value = item.openedCount ?? (item.status === '개봉' ? totalCount : 0);
    document.getElementById('form-expiry-date').value = item.expiryDate || '';
    document.getElementById('form-discontinued').value = String(Boolean(item.discontinued));
    document.getElementById('form-renewed').checked = Boolean(item.renewed);
    document.getElementById('form-has-refill').checked = Boolean(item.hasRefill);
    document.getElementById('form-shadow-blush').checked = Boolean(item.shadowBlush);
    document.querySelectorAll('input[name="form-lip-role"]').forEach(input => input.checked = (item.lipRoles || []).includes(input.value));
    document.querySelectorAll('input[name="form-blush-role"]').forEach(input => input.checked = (item.blushRoles || []).includes(input.value));
    document.querySelectorAll('input[name="form-shadow-blush-role"]').forEach(input => input.checked = (item.shadowBlushRoles || []).includes(input.value));
    document.getElementById('form-formula').value = item.formula || '';
    document.getElementById('form-finish').value = item.finish || '';
    document.getElementById('form-shimmer').value = item.shimmer || '';
    toggleShadowBlushRoles();

    document.getElementById('form-image-url').value = item.imageUrl || '';

    document.getElementById('form-status').value = item.status || (Number(item.openedCount || 0) === totalCount ? '개봉' : Number(item.openedCount || 0) === 0 ? '미개봉' : '혼합');

    document.getElementById('form-tags').value = item.tags || '';

    document.getElementById('form-memo').value = item.memo || '';

    }

    function editWishItem(id) {

    const item = wishItems.find(i => i.id === id);

    if (!item) return;

    openAddModal();

    document.getElementById('modal-form-title').innerText = '위시 상품 수정';

    document.getElementById('edit-item-id').value = item.id;

    document.getElementById('form-main-cat').value = item.mainCat;

    onFormMainCatChange();

    document.getElementById('form-sub-cat').value = item.subCat;
    updateFormCategoryOptions();

    document.getElementById('form-brand').value = item.brand;

    document.getElementById('form-name').value = item.name;

    document.getElementById('form-color').value = item.color || '';

    setWishLevel(item.wishLevel || 2);

    document.getElementById('form-original-price').value = item.originalPrice || '';

    document.getElementById('form-gongeung-price').value = item.gongeungPrice || '';

    document.getElementById('form-platform').value = item.platform || '공홈';

    document.getElementById('form-wish-condition').value = item.wishCondition || '새제품';

    document.getElementById('form-wish-edition').value = item.wishEdition || '일반';

    refreshWishSpecialTagOptions(item.wishSpecialTag || '');
    document.getElementById('form-wish-special-tag').value = item.wishSpecialTag || '기타';
    document.querySelectorAll('input[name="form-lip-role"]').forEach(input => { input.checked = (item.lipRoles || []).includes(input.value); });

    document.getElementById('form-image-url').value = item.imageUrl || '';

    document.getElementById('form-memo').value = item.memo || '';

    }

    function deleteVanityItem(id) {

    openDeleteConfirmModal(() => {

    vanityItems = vanityItems.filter(i => i.id !== id);

    saveToStorage();

    renderVanity();

    showToast('항목이 삭제되었습니다');

    });

    }

    function deleteWishItem(id) {

    openDeleteConfirmModal(() => {

    wishItems = wishItems.filter(i => i.id !== id);

    saveToStorage();

    renderWish();

    showToast('위시 항목이 삭제되었습니다');

    });

    }

    function openDeleteConfirmModal(onConfirm) {

    const modal = document.getElementById('result-modal');

    const icon = document.getElementById('result-modal-icon');

    const title = document.getElementById('result-modal-title');

    const content = document.getElementById('result-modal-content');

    const actions = document.getElementById('result-modal-actions');

    icon.className = 'w-14 h-14 rounded-3xl bg-rose-50 text-rose-500 flex items-center justify-center text-xl mx-auto mb-3';

    icon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';

    title.innerText = '정말 삭제하시겠습니까?';

    content.innerText = '삭제된 항목은 복구할 수 없습니다.';

    actions.innerHTML =     `<button onclick="closeResultModal()" class="px-4 py-2 rounded-xl bg-toss-grey5 text-toss-grey2 font-bold text-xs hover:bg-toss-grey4 transition">취소</button>     <button id="confirm-del-btn" class="px-4 py-2 rounded-xl bg-rose-500 text-white font-bold text-xs hover:bg-rose-600 transition">삭제</button>`  ;

    document.getElementById('confirm-del-btn').onclick = () => {

    closeResultModal();

    onConfirm();

    };

    modal.classList.remove('hidden');

    setTimeout(() => {

    modal.classList.remove('opacity-0');

    modal.querySelector('div.transform').classList.remove('scale-95');

    }, 10);

    }

    function closeResultModal() {

    const modal = document.getElementById('result-modal');

    modal.classList.add('opacity-0');

    modal.querySelector('div.transform').classList.add('scale-95');

    setTimeout(() => { modal.classList.add('hidden'); }, 300);

    }

    function openMixConfigModal(type) {

    currentMixType = type;

    currentMixCount = 2;

    document.getElementById('mix-config-title').innerText = `${type} 섞발 꿀조합 설정`;

    updateMixCountBtns();

    const modal = document.getElementById('mix-config-modal');

    modal.classList.remove('hidden');

    setTimeout(() => {

    modal.classList.remove('opacity-0');

    modal.querySelector('div.transform').classList.remove('scale-95');

    }, 10);

    }

    function closeMixConfigModal() {

    const modal = document.getElementById('mix-config-modal');

    modal.classList.add('opacity-0');

    modal.querySelector('div.transform').classList.add('scale-95');

    setTimeout(() => { modal.classList.add('hidden'); }, 300);

    }

    function setMixCount(cnt) {

    currentMixCount = cnt;

    updateMixCountBtns();

    }

    function updateMixCountBtns() {

    const desc = document.getElementById('mix-config-desc');
    if (currentMixType === '립') {
      const roles = {2: '베이스 · 포인트', 3: '립펜슬 · 베이스 · 포인트', 4: '립펜슬 · 베이스 · 포인트'};
      desc.innerText = `${currentMixCount}개 조합: ${roles[currentMixCount]}`;
    } else {
      const roles = {
        2: '베이스 · 포인트',
        3: '베이스 · 포인트',
        4: '베이스 · 포인트'
      };
      desc.innerText = `${currentMixCount}개 조합: ${roles[currentMixCount]}`;
    }

    [2, 3, 4].forEach(n => {

    const btn = document.getElementById(`mix-btn-${n}`);

    if (n === currentMixCount) {

    btn.className = 'py-3 rounded-2xl border-2 border-toss-blue bg-[#FFF3F0] text-toss-blue font-bold text-xs transition';

    } else {

    btn.className = 'py-3 rounded-2xl border-2 border-toss-grey4 bg-white text-toss-grey2 font-bold text-xs transition';

    }

    });

    }

    function executeMixRecommendation(isReroll = false) {
      if (!isReroll) closeMixConfigModal();
      const modal = document.getElementById('result-modal');
      const icon = document.getElementById('result-modal-icon');
      const title = document.getElementById('result-modal-title');
      const content = document.getElementById('result-modal-content');
      const actions = document.getElementById('result-modal-actions');
      icon.className = 'w-14 h-14 rounded-3xl bg-toss-blue/10 text-toss-blue flex items-center justify-center text-xl mx-auto mb-3';
      icon.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i>';
      title.innerText = `${currentMixType} 꿀조합 추천 결과`;
      if (currentMixType === '립') {
        const patterns = currentMixCount === 2
          ? [['베이스', '포인트']]
          : currentMixCount === 3
            ? [['립펜슬', '베이스', '포인트']]
            : [['립펜슬', '베이스', '포인트', '포인트'], ['립펜슬', '베이스', '베이스', '포인트']].sort(() => Math.random() - 0.5);
        const remaining = vanityItems.filter(item => item.subCat === '립' && Array.isArray(item.lipRoles) && item.lipRoles.length).sort(() => Math.random() - 0.5);
        let chosen = null;
        for (const slots of patterns) {
          const selection = [];
          const assign = index => {
            if (index === slots.length) return true;
            for (const candidate of remaining) {
              if (selection.includes(candidate) || !candidate.lipRoles.includes(slots[index])) continue;
              selection.push(candidate);
              if (assign(index + 1)) return true;
              selection.pop();
            }
            return false;
          };
          if (assign(0)) { chosen = { slots, selection }; break; }
        }
        if (!chosen) {
          content.innerText = `선택한 역할(립펜슬, 베이스, 포인트)을 맡을 수 있는 립 제품이 충분하지 않아요. 립 제품을 수정해 각 역할을 지정해주세요.`;
        } else {
          content.innerHTML = `<div class="space-y-2 text-left bg-toss-grey5 p-3 rounded-2xl">${chosen.selection.map((item, index) => `<div class="text-xs font-semibold text-toss-dark">✨ ${chosen.slots[index]}: <span class="text-toss-blue">${item.brand}</span> ${item.name} ${item.color ? '('+item.color+')' : ''}</div>`).join('')}</div>`;
        }
      } else {
        const patterns = currentMixCount === 2
          ? [['베이스', '포인트']]
          : currentMixCount === 3
            ? [['베이스', '포인트', '포인트'], ['베이스', '베이스', '포인트']].sort(() => Math.random() - 0.5)
            : [['베이스', '베이스', '베이스', '포인트'], ['베이스', '베이스', '포인트', '포인트'], ['베이스', '포인트', '포인트', '포인트']].sort(() => Math.random() - 0.5);
        const pool = vanityItems.filter(item => item.subCat === '블러셔' || (item.subCat === '섀도우' && item.shadowBlush));
        const candidates = [...pool].sort(() => Math.random() - 0.5);
        let selection = null;
        for (const pattern of patterns) {
          const chosen = [];
          const assignRole = index => {
            if (index === pattern.length) return true;
            for (const item of candidates) {
              if (chosen.some(entry => entry.item.id === item.id)) continue;
              const roles = item.subCat === '섀도우' ? (item.shadowBlushRoles || []) : (item.blushRoles || []);
              if (!roles.includes(pattern[index])) continue;
              chosen.push({ item, role: pattern[index] });
              if (assignRole(index + 1)) return true;
              chosen.pop();
            }
            return false;
          };
          if (assignRole(0)) { selection = chosen; break; }
        }
        if (!selection) {
          content.innerText = `선택한 조합 역할을 채울 블러셔가 충분하지 않아요. 블러셔와 블러셔 겸용 섀도우의 등록/수정에서 베이스 또는 포인트 역할을 지정해주세요.`;
        } else {
          content.innerHTML = `<div class="space-y-2 text-left bg-toss-grey5 p-3 rounded-2xl">${selection.map(({item, role}) => {
            const label = role;
            const sourceLabel = item.subCat === '섀도우' ? ' (섀도우)' : '';
            return `<div class="text-xs font-semibold text-toss-dark">✨ ${label}: <span class="text-toss-blue">${item.brand}</span> ${item.name}${sourceLabel} ${item.color ? '('+item.color+')' : ''}</div>`;
          }).join('')}</div>`;
        }
      }
      actions.innerHTML = `<button onclick="executeMixRecommendation(true)" class="px-4 py-2.5 rounded-xl bg-toss-grey5 text-toss-grey2 font-bold text-xs"><i class="fa-solid fa-rotate-right mr-1"></i>다른 조합</button><button onclick="closeResultModal()" class="px-5 py-2.5 rounded-xl bg-toss-blue text-white font-bold text-xs hover:bg-[#E05555] transition flex-1">확인</button>`;
      modal.classList.remove('hidden');
      setTimeout(() => { modal.classList.remove('opacity-0'); modal.querySelector('div.transform').classList.remove('scale-95'); }, 10);
    }

    function openBackupModal() {

    const modal = document.getElementById('result-modal');

    const icon = document.getElementById('result-modal-icon');

    const title = document.getElementById('result-modal-title');

    const content = document.getElementById('result-modal-content');

    const actions = document.getElementById('result-modal-actions');

    icon.className = 'w-14 h-14 rounded-3xl bg-toss-grey5 text-toss-dark flex items-center justify-center text-xl mx-auto mb-3';

    icon.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i>';

    title.innerText = '데이터 백업 및 복구';

    content.innerHTML = '<p class="text-xs text-toss-grey2 mb-3">화장대, 위시, 소비 기록, 홈 일정과 코덕 규칙까지 백업할 수 있어요. 파일로 저장하거나 백업 파일을 선택해 복구하세요.</p><label class="inline-flex items-center px-3 py-2 mb-2 rounded-xl bg-toss-grey5 text-toss-grey2 text-[10px] font-bold cursor-pointer">백업 파일 선택<input type="file" accept=".json,application/json" onchange="loadBackupFile(event)" class="hidden"></label><textarea id="backup-json-box" class="w-full h-28 p-2.5 rounded-xl bg-toss-grey5 text-[9px] font-mono border border-toss-grey4 outline-none resize-none"></textarea>';
    document.getElementById('backup-json-box').value = JSON.stringify(createBackupData());

    actions.innerHTML = `<button onclick="restoreBackupData()" class="px-3 py-2 rounded-xl bg-toss-grey5 text-toss-dark font-bold text-[10px] hover:bg-toss-grey4 transition">불러오기 적용</button><button onclick="downloadBackupFile()" class="px-3 py-2 rounded-xl bg-toss-grey5 text-toss-dark font-bold text-[10px] hover:bg-toss-grey4 transition">파일로 백업</button><button onclick="closeResultModal()" class="px-4 py-2 rounded-xl bg-toss-blue text-white font-bold text-xs hover:bg-[#E05555] transition">닫기</button>`;

    modal.classList.remove('hidden');

    setTimeout(() => {

    modal.classList.remove('opacity-0');

    modal.querySelector('div.transform').classList.remove('scale-95');

    }, 10);

    }

    function createBackupData() {
      return {
        version: 2,
        createdAt: new Date().toISOString(),
        vanity: vanityItems,
        wish: wishItems,
        consumption: JSON.parse(localStorage.getItem('hancowii_consumption_items') || JSON.stringify([
          { id: 'con_1', title: '올영 세일 쟁임 (토너 외 2건)', date: '2026-09-17', store: '올리브영', originalPrice: 15000, amount: 3000 },
          { id: 'con_2', title: '면세점 찬스 립 틴트', date: '2026-09-13', store: '신라면세점', originalPrice: 20000, amount: 5000 }
        ])),
        schedules: scheduleEvents,
        kodeokRules,
        wishSpecialTags
      };
    }

    function downloadBackupFile() {
      const file = new Blob([JSON.stringify(createBackupData(), null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = url;
      link.download = `행코위-백업-${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      URL.revokeObjectURL(url);
      showToast('백업 파일을 저장했어요.');
    }

    async function loadBackupFile(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      try {
        const backupText = await file.text();
        const parsed = JSON.parse(backupText);
        if (!Array.isArray(parsed.vanity) || !Array.isArray(parsed.wish)) throw new Error('invalid backup');
        document.getElementById('backup-json-box').value = backupText;
        showToast('백업 파일을 불러왔어요. 적용 버튼을 눌러 복구하세요.');
      } catch (error) {
        showToast('올바른 행코위 백업 파일이 아니에요.');
      }
    }

    function restoreBackupData() {

    try {

    const val = document.getElementById('backup-json-box').value;

    const parsed = JSON.parse(val);

    if (Array.isArray(parsed.vanity) && Array.isArray(parsed.wish)) {

    vanityItems = parsed.vanity;

    wishItems = parsed.wish;
    if (parsed.version >= 2) {
      scheduleEvents = Array.isArray(parsed.schedules) ? parsed.schedules : [];
      wishSpecialTags = Array.isArray(parsed.wishSpecialTags) ? parsed.wishSpecialTags : wishSpecialTags;
      kodeokRules = typeof parsed.kodeokRules === 'string' ? parsed.kodeokRules : kodeokRules;
      localStorage.setItem('hancowii_schedule_events', JSON.stringify(scheduleEvents));
      localStorage.setItem('hancowii_wish_special_tags', JSON.stringify(wishSpecialTags));
      localStorage.setItem('hancowii_kodeok_rules', kodeokRules);
      localStorage.setItem('hancowii_consumption_items', JSON.stringify(Array.isArray(parsed.consumption) ? parsed.consumption : []));
    }

    saveToStorage();

    closeResultModal();

    renderCurrentView();

    showToast(parsed.version >= 2 ? '전체 데이터를 복구했어요.' : '화장대와 위시 데이터를 복구했어요.');

    } else {

    showToast('올바르지 않은 백업 데이터 형식입니다.');

    }

    } catch (e) {

    showToast('JSON 파싱 오류가 발생했습니다.');

    }

    }

    function escapeHomeText(value) {
      return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function getDailyMixSuggestion(force = false) {
      const now = new Date();
      const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      if (!force && homeMixSuggestionDate === todayKey) return homeMixSuggestion;
      const randomItem = items => items[Math.floor(Math.random() * items.length)];
      const makePair = (bases, points) => {
        const pairs = bases.flatMap(base => points.filter(point => point.id !== base.id).map(point => [base, point]));
        return pairs.length ? randomItem(pairs) : null;
      };
      const lipBases = vanityItems.filter(item => item.subCat === '립' && Array.isArray(item.lipRoles) && item.lipRoles.includes('베이스'));
      const lipPoints = vanityItems.filter(item => item.subCat === '립' && Array.isArray(item.lipRoles) && item.lipRoles.includes('포인트'));
      const blushPool = vanityItems.filter(item => item.subCat === '블러셔' || (item.subCat === '섀도우' && item.shadowBlush));
      const blushBases = blushPool.filter(item => (item.subCat === '섀도우' ? item.shadowBlushRoles || [] : item.blushRoles || []).includes('베이스'));
      const blushPoints = blushPool.filter(item => (item.subCat === '섀도우' ? item.shadowBlushRoles || [] : item.blushRoles || []).includes('포인트'));
      homeMixSuggestionDate = todayKey;
      homeMixSuggestion = { lip: makePair(lipBases, lipPoints), blush: makePair(blushBases, blushPoints) };
      return homeMixSuggestion;
    }

    function rerollHomeMix() {
      getDailyMixSuggestion(true);
      renderHomeTab();
    }

    function openUnopenedProductsModal() {
      const products = vanityItems.map(item => {
        const count = Math.max(1, Number(item.count || 1));
        const opened = Number.isFinite(Number(item.openedCount)) ? Math.min(count, Math.max(0, Number(item.openedCount))) : (item.status === '개봉' ? count : 0);
        return { item, unopened: Math.max(0, count - opened) };
      }).filter(entry => entry.unopened > 0).sort((a, b) => Number(a.item.createdAt || 0) - Number(b.item.createdAt || 0)).slice(0, 10);
      const modal = document.getElementById('result-modal');
      document.getElementById('result-modal-icon').className = 'w-14 h-14 rounded-3xl bg-toss-blue/10 text-toss-blue flex items-center justify-center text-xl mx-auto mb-3';
      document.getElementById('result-modal-icon').innerHTML = '<i class="fa-solid fa-box-open"></i>';
      document.getElementById('result-modal-title').innerText = '미개봉 제품';
      document.getElementById('result-modal-content').innerHTML = products.length
        ? `<div class="max-h-[55vh] overflow-y-auto space-y-2 text-left">${products.map(({ item, unopened }) => `<div class="flex items-center justify-between gap-2 rounded-xl bg-toss-grey5 px-3 py-2"><div class="min-w-0"><p class="truncate text-[10px] font-semibold text-toss-blue">${escapeHomeText(item.brand)} · ${escapeHomeText(item.subCat)}</p><p class="truncate text-xs font-bold text-toss-dark">${escapeHomeText(item.name)}</p></div><span class="shrink-0 text-[10px] font-bold text-toss-grey2">미개봉 ${unopened}개</span></div>`).join('')}</div>`
        : '<p class="py-4 text-xs text-toss-grey2">미개봉 제품이 없어요.</p>';
      document.getElementById('result-modal-actions').innerHTML = '<button onclick="closeResultModal()" class="w-full px-5 py-2.5 rounded-xl bg-toss-blue text-white font-bold text-xs">닫기</button>';
      modal.classList.remove('hidden');
      setTimeout(() => { modal.classList.remove('opacity-0'); modal.querySelector('div.transform').classList.remove('scale-95'); }, 10);
    }

    function openKodeokRulesModal() {
      const modal = document.getElementById('result-modal');
      document.getElementById('result-modal-icon').className = 'w-14 h-14 rounded-3xl bg-toss-blue/10 text-toss-blue flex items-center justify-center text-xl mx-auto mb-3';
      document.getElementById('result-modal-icon').innerHTML = '<i class="fa-solid fa-note-sticky"></i>';
      document.getElementById('result-modal-title').innerText = '코덕 n계명';
      document.getElementById('result-modal-content').innerHTML = '<textarea id="kodeok-modal-textarea" class="w-full h-64 p-3 bg-toss-grey5 rounded-xl text-xs font-medium text-toss-dark border border-toss-grey4 outline-none resize-none leading-relaxed text-left"></textarea>';
      document.getElementById('kodeok-modal-textarea').value = kodeokRules;
      document.getElementById('result-modal-actions').innerHTML = '<button onclick="closeResultModal()" class="px-4 py-2.5 rounded-xl bg-toss-grey5 text-toss-grey2 font-bold text-xs">닫기</button><button onclick="saveKodeokRules(document.getElementById(\'kodeok-modal-textarea\').value); closeResultModal()" class="px-5 py-2.5 rounded-xl bg-toss-blue text-white font-bold text-xs">저장</button>';
      modal.classList.remove('hidden');
      setTimeout(() => { modal.classList.remove('opacity-0'); modal.querySelector('div.transform').classList.remove('scale-95'); }, 10);
    }

    function renderHomeTab() {

    const container = document.getElementById('other-tab-content');
    const today = new Date();
    const displayMonth = homeCalendarMonth;
    const monthStart = new Date(displayMonth.getFullYear(), displayMonth.getMonth(), 1);
    const monthDays = new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 0).getDate();
    const calendarCellCount = Math.ceil((monthStart.getDay() + monthDays) / 7) * 7;
    const calendarHtml = Array.from({ length: calendarCellCount }, (_, index) => {
      const date = index - monthStart.getDay() + 1;
      const previousMonthDays = new Date(displayMonth.getFullYear(), displayMonth.getMonth(), 0).getDate();
      if (date < 1) return `<div class="py-2 text-toss-grey3">${previousMonthDays + date}</div>`;
      if (date > monthDays) return `<div class="py-2 text-toss-grey3">${date - monthDays}</div>`;
      const dateKey = `${displayMonth.getFullYear()}-${String(displayMonth.getMonth() + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
      const isToday = dateKey === `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      const dayEvents = scheduleEvents.filter(event => event.startDate <= dateKey && event.endDate >= dateKey);
      const highlightedEvent = dayEvents[0];
      const continuesToNextDay = highlightedEvent && highlightedEvent.endDate > dateKey && index % 7 !== 6 && date < monthDays;
      const startsToday = highlightedEvent && highlightedEvent.startDate === dateKey;
      const endsToday = highlightedEvent && highlightedEvent.endDate === dateKey;
      const barEdges = `${startsToday ? 'rounded-l-full' : 'rounded-l-none'} ${endsToday || !continuesToNextDay ? 'rounded-r-full' : 'rounded-r-none'}`;
      const startsVisibleSegment = highlightedEvent && (startsToday || (date === 1 && highlightedEvent.startDate < dateKey));
      const eventEndDate = highlightedEvent ? new Date(`${highlightedEvent.endDate}T00:00:00`) : null;
      const visibleDate = new Date(`${dateKey}T00:00:00`);
      const daysUntilEnd = eventEndDate ? Math.max(0, Math.round((eventEndDate - visibleDate) / 86400000)) : 0;
      const segmentDays = Math.min(daysUntilEnd, 6 - (index % 7), monthDays - date) + 1;
      const safeEventTitle = highlightedEvent ? highlightedEvent.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;') : '';
      return `<div class="min-h-[50px] py-1 relative ${startsVisibleSegment ? 'z-20' : ''} ${isToday ? 'font-bold' : 'text-toss-dark font-medium'}"><span class="relative z-10 ${isToday ? 'inline-flex w-5 h-5 items-center justify-center rounded-full bg-toss-blue text-white' : ''}">${date}</span><span class="block h-[10px]"></span>${highlightedEvent ? `<span class="absolute left-0 right-0 top-[32px] h-4 bg-amber-300/90 ${barEdges}" title="${safeEventTitle}"></span>${startsVisibleSegment ? `<span class="absolute left-0 top-[32px] z-20 h-4 overflow-hidden px-1 text-[8px] leading-4 whitespace-nowrap text-amber-950 font-bold ${barEdges}" style="width:${segmentDays * 100}%" title="${safeEventTitle}">${safeEventTitle}</span>` : ''}` : ''}${dayEvents.length > 1 ? `<span class="relative z-10 block text-[8px] text-toss-grey3">+${dayEvents.length - 1}</span>` : ''}</div>`;
    }).join('');
    const totalUnopened = vanityItems.reduce((total, item) => {
      const count = Math.max(1, Number(item.count || 1));
      const opened = Number.isFinite(Number(item.openedCount)) ? Math.min(count, Math.max(0, Number(item.openedCount))) : (item.status === '개봉' ? count : 0);
      return total + Math.max(0, count - opened);
    }, 0);
    const unopenedSuggestion = [...vanityItems].filter(item => {
      const count = Math.max(1, Number(item.count || 1));
      const opened = Number.isFinite(Number(item.openedCount)) ? Math.min(count, Math.max(0, Number(item.openedCount))) : (item.status === '개봉' ? count : 0);
      return count > opened && !item.startedUsing;
    }).sort((a, b) => Number(a.createdAt || 0) - Number(b.createdAt || 0))[0];
    const records = JSON.parse(localStorage.getItem('hancowii_consumption_items') || JSON.stringify([
      { date: '2026-09-17', amount: 3000 }, { date: '2026-09-13', amount: 5000 }
    ]));
    const currentMonthKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    const previousMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const previousMonthKey = `${previousMonthDate.getFullYear()}-${String(previousMonthDate.getMonth() + 1).padStart(2, '0')}`;
    const homeMonthSpend = records.filter(item => (item.date || '').startsWith(currentMonthKey)).reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const previousMonthSpend = records.filter(item => (item.date || '').startsWith(previousMonthKey)).reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const spendingDifference = homeMonthSpend - previousMonthSpend;
    const spendingComparison = spendingDifference === 0 ? '지난달과 같아요' : `지난달보다 ${Math.abs(spendingDifference).toLocaleString()}원 ${spendingDifference < 0 ? '덜' : '더'} 썼어요`;
    const highWishCount = wishItems.filter(item => Number(item.wishLevel) === 3).length;
    const midWishCount = wishItems.filter(item => Number(item.wishLevel) === 2).length;
    const lowWishCount = wishItems.filter(item => Number(item.wishLevel) === 1).length;
    const mixSuggestions = getDailyMixSuggestion();
    const renderHomeMixLine = (label, items) => `<div class="flex items-center gap-2 py-1"><span class="w-12 shrink-0 text-[10px] font-bold text-toss-grey2">${label}</span><span class="min-w-0 truncate text-[10px] font-semibold text-toss-dark">${items ? items.map(item => `<span class="text-toss-blue">${escapeHomeText(item.brand)} ${escapeHomeText(item.name)}</span>`).join('<span class="text-toss-dark"> + </span>') : '역할 지정 제품 없음'}</span></div>`;
    const mixHtml = `<div class="divide-y divide-toss-grey4/60">${renderHomeMixLine('립', mixSuggestions.lip)}${renderHomeMixLine('블러셔', mixSuggestions.blush)}</div><div class="mt-1 flex items-center justify-between"><span class="text-[9px] text-toss-grey3">베이스·포인트 역할 제품으로 추천해요</span><button onclick="rerollHomeMix()" class="shrink-0 px-2 py-1 rounded-lg bg-toss-grey5 text-toss-grey2 text-[10px] font-bold">다른 조합</button></div>`;
    const dashboardHtml = `
      <section class="space-y-3">
        <div class="bg-[#FFF3F0] rounded-2xl p-4 border border-toss-blue/10 shadow-toss-card">
          <h2 class="text-sm font-bold text-toss-dark">💄 오늘은 있는 거 잘 쓰는 날</h2>
          <div class="mt-3 rounded-xl bg-white/80 p-3">
            <div class="flex items-center justify-between border-b border-toss-grey4/60 pb-1"><span class="text-[10px] font-bold text-toss-dark">🧴 미개봉 제품 | 이번 주에 하나 열어볼까요?</span><button onclick="openUnopenedProductsModal()" class="flex items-center gap-1 text-sm font-bold text-toss-blue"><span>${totalUnopened}</span><span class="text-toss-dark">개</span><i class="fa-solid fa-chevron-right text-[9px]"></i></button></div>
            ${unopenedSuggestion ? `<div class="mt-2 flex items-center justify-between gap-2 px-2 py-1.5"><p class="min-w-0 flex-1 truncate text-xs font-bold text-toss-grey2">${escapeHomeText(unopenedSuggestion.brand)} ${escapeHomeText(unopenedSuggestion.name)}</p><button onclick="confirmStartedUsing('${unopenedSuggestion.id}', true)" class="shrink-0 px-2.5 py-1 rounded-lg bg-toss-blue text-white text-[10px] font-bold">오늘부터 써보기</button></div>` : `<p class="mt-2 text-[10px] text-toss-grey2">${totalUnopened ? '남은 미개봉 제품도 사용 시작으로 표시했어요.' : '미개봉 제품을 잘 쓰고 있어요.'}</p>`}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <button onclick="switchTab('소비 기록')" class="text-left bg-white rounded-2xl p-3 border border-toss-grey4/60 shadow-toss-card">
            <span class="flex h-5 items-center justify-between border-b border-toss-grey4/60 pb-1 text-[10px] leading-none font-bold text-toss-grey2"><span class="inline-flex h-4 items-center gap-1"><span class="inline-flex h-4 w-3 items-center justify-center">💸</span>${today.getMonth() + 1}월 소비</span><i class="fa-solid fa-chevron-right text-[9px]"></i></span>
            <strong class="mt-1 block text-sm text-toss-dark"><span class="text-toss-blue">${homeMonthSpend.toLocaleString()}</span>원</strong>
            <span class="mt-0.5 block truncate text-[9px] text-toss-blue">${spendingComparison}</span>
          </button>
          <button onclick="switchTab('위시')" class="text-left bg-white rounded-2xl p-3 border border-toss-grey4/60 shadow-toss-card">
            <span class="flex h-5 items-center justify-between border-b border-toss-grey4/60 pb-1 text-[10px] leading-none font-bold text-toss-grey2"><span class="inline-flex h-4 items-center gap-1"><span class="inline-flex h-4 w-3 items-center justify-center">❤️</span>위시 리스트</span><i class="fa-solid fa-chevron-right text-[9px]"></i></span>
            <span class="mt-1 flex min-h-[32px] items-center justify-center gap-1 whitespace-nowrap text-center text-[9px] font-semibold text-toss-grey2"><span>1단계 <b class="text-toss-blue">${lowWishCount}</b><span class="text-toss-dark">개</span></span><span>/</span><span>2단계 <b class="text-toss-blue">${midWishCount}</b><span class="text-toss-dark">개</span></span><span>/</span><span>3단계 <b class="text-toss-blue">${highWishCount}</b><span class="text-toss-dark">개</span></span></span>
          </button>
        </div>
        <div class="bg-white rounded-2xl p-3 border border-toss-grey4/60 shadow-toss-card">
          <div class="mb-1 flex items-center gap-1.5"><i class="fa-solid fa-wand-magic-sparkles text-toss-blue text-[10px]"></i><span class="text-[10px] font-bold text-toss-grey2">오늘의 섞발</span></div>
          ${mixHtml}
        </div>
      </section>`;
    container.innerHTML = `

    <div class="space-y-4">

    ${dashboardHtml}

    <div class="bg-white rounded-2xl p-4 border border-toss-grey4/60 shadow-toss-card">

    <div class="flex items-center justify-between mb-3">

    <div class="flex items-center gap-2 w-full">
      <div class="relative flex items-center gap-2">
        <h3 class="text-sm font-bold text-toss-dark flex items-center gap-2"><i class="fa-solid fa-calendar-alt text-toss-blue"></i></h3>
        <div class="relative">${renderMonthPicker('home', displayMonth, homeMonthPickerOpen)}</div>
      </div>
      <button onclick="goToCurrentCalendarMonth()" class="ml-auto px-2 h-7 rounded-lg bg-toss-grey5 text-toss-grey2 text-[10px] font-bold">오늘</button>
    </div>

    </div>

    <div class="grid grid-cols-7 gap-x-0 gap-y-1 text-center text-xs">
    <div class="font-bold text-rose-500 py-1">일</div><div class="font-bold text-toss-grey2 py-1">월</div><div class="font-bold text-toss-grey2 py-1">화</div><div class="font-bold text-toss-grey2 py-1">수</div><div class="font-bold text-toss-grey2 py-1">목</div><div class="font-bold text-toss-grey2 py-1">금</div><div class="font-bold text-toss-blue py-1">토</div>
    ${calendarHtml}
    </div>
      </div>

      <div class="bg-white rounded-2xl p-4 border border-toss-grey4/60 shadow-toss-card">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-sm font-bold text-toss-dark flex items-center gap-2">
            <i class="fa-solid fa-calendar-days text-toss-blue"></i> 코덕 플래너
          </h3>
          <button onclick="openScheduleModal()" class="px-2.5 py-1.5 rounded-lg bg-toss-grey5 text-toss-grey2 text-[10px] font-bold">일정 추가</button>
        </div>
        <div class="p-3 bg-toss-grey5 rounded-xl text-xs text-toss-grey2 space-y-2">
          ${scheduleEvents.length ? [...scheduleEvents].sort((a, b) => a.startDate.localeCompare(b.startDate)).map(event => { const daysUntil = Math.ceil((new Date(`${event.startDate}T00:00:00`) - new Date(today.getFullYear(), today.getMonth(), today.getDate())) / 86400000); const ddayLabel = daysUntil === 0 ? 'D-DAY' : daysUntil > 0 ? `D-${daysUntil}` : `D+${Math.abs(daysUntil)}`; return `<div class="flex items-center justify-between gap-2 font-semibold"><button onclick="openScheduleModal('${event.id}')" class="min-w-0 flex-1 text-left"><span class="block truncate text-toss-dark">${event.title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</span><span class="block mt-0.5 text-[10px] text-toss-grey3">${event.startDate.slice(5).replace('-', '/')} ~ ${event.endDate.slice(5).replace('-', '/')} <b class="ml-1 text-toss-blue">${ddayLabel}</b></span></button><button onclick="deleteScheduleEvent('${event.id}')" class="shrink-0 px-2 py-1 text-[10px] text-toss-grey3">삭제</button></div>`; }).join('') : '<p class="text-center text-[11px] text-toss-grey3 py-2">등록된 일정이 없어요.</p>'}
        </div>
      </div>

    </div>

    `;

    }

    function goToCurrentCalendarMonth() {
      homeCalendarMonth = new Date();
      homeMonthPickerOpen = false;
      renderHomeTab();
    }

    function renderMonthPicker(type, selectedDate, isOpen) {
      const label = `${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월`;
      const currentYear = new Date().getFullYear();
      const firstYear = Math.min(currentYear - 20, selectedDate.getFullYear());
      const lastYear = Math.max(currentYear + 10, selectedDate.getFullYear());
      const yearOptions = Array.from({ length: lastYear - firstYear + 1 }, (_, index) => firstYear + index)
        .map(year => `<option value="${year}" ${year === selectedDate.getFullYear() ? 'selected' : ''}>${year}년</option>`).join('');
      const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1)
        .map(month => `<option value="${month - 1}" ${month - 1 === selectedDate.getMonth() ? 'selected' : ''}>${month}월</option>`).join('');
      return `<button onclick="toggleMonthPicker('${type}')" class="h-7 px-2 rounded-lg bg-toss-grey5 text-toss-dark text-xs font-bold">${label} <i class="fa-solid fa-chevron-${isOpen ? 'up' : 'down'} ml-1 text-[9px] text-toss-grey3"></i></button>${isOpen ? `<div class="absolute left-0 top-full z-30 mt-2 w-52 rounded-2xl bg-white p-3 shadow-toss-modal border border-toss-grey4/60"><div class="grid grid-cols-2 gap-2"><select onchange="setMonthPickerValue('${type}', 'year', this.value)" class="month-picker-select h-9 w-full px-2 rounded-lg bg-toss-grey5 text-xs font-semibold text-toss-dark">${yearOptions}</select><select onchange="setMonthPickerValue('${type}', 'month', this.value)" class="month-picker-select h-9 w-full px-2 rounded-lg bg-toss-grey5 text-xs font-semibold text-toss-dark">${monthOptions}</select></div></div>` : ''}`;
    }

    function toggleMonthPicker(type) {
      if (type === 'home') {
        homeMonthPickerOpen = !homeMonthPickerOpen;
        renderHomeTab();
      } else {
        consumptionMonthPickerOpen = !consumptionMonthPickerOpen;
        renderConsumptionTab();
      }
    }

    function setMonthPickerValue(type, part, value) {
      const date = type === 'home' ? homeCalendarMonth : consumptionMonth;
      const year = part === 'year' ? Number(value) : date.getFullYear();
      const month = part === 'month' ? Number(value) : date.getMonth();
      const selectedDate = new Date(year, month, 1);
      if (type === 'home') {
        homeCalendarMonth = selectedDate;
        homeMonthPickerOpen = false;
        renderHomeTab();
      } else {
        consumptionMonth = selectedDate;
        consumptionMonthPickerOpen = false;
        renderConsumptionTab();
      }
    }

    function goToCurrentMonth(type) {
      if (type === 'home') {
        homeCalendarMonth = new Date();
        homeMonthPickerOpen = false;
        renderHomeTab();
      } else {
        consumptionMonth = new Date();
        consumptionMonthPickerOpen = false;
        renderConsumptionTab();
      }
    }

    function openScheduleModal(editId = '') {
      const event = scheduleEvents.find(item => item.id === editId) || {};
      scheduleRangeStart = event.startDate || '';
      scheduleRangeEnd = event.endDate || '';
      scheduleCalendarMonth = event.startDate ? new Date(`${event.startDate}T00:00:00`) : new Date();
      const modal = document.getElementById('result-modal');
      document.getElementById('result-modal-icon').className = 'w-14 h-14 rounded-3xl bg-toss-blue/10 text-toss-blue flex items-center justify-center text-xl mx-auto mb-3';
      document.getElementById('result-modal-icon').innerHTML = '<i class="fa-solid fa-calendar-days"></i>';
      document.getElementById('result-modal-title').innerText = editId ? '일정 수정' : '일정 등록';
      document.getElementById('result-modal-content').innerHTML = `<div class="max-h-[65vh] overflow-y-auto space-y-3 text-left"><label class="block text-[11px] font-bold text-toss-grey2">일정 이름<input id="schedule-title" value="${(event.title || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')}" placeholder="예: 올리브영 세일" class="mt-1 w-full h-10 px-3 rounded-xl bg-toss-grey5 text-toss-dark text-xs border-none outline-none focus:ring-2 focus:ring-toss-blue/50"></label><div id="schedule-date-picker"></div></div>`;
      renderScheduleDatepicker();
      document.getElementById('result-modal-actions').innerHTML = `<button onclick="closeResultModal()" class="px-4 py-2.5 rounded-xl bg-toss-grey5 text-toss-grey2 font-bold text-xs">취소</button><button onclick="saveScheduleEvent('${editId}')" class="px-5 py-2.5 rounded-xl bg-toss-blue text-white font-bold text-xs">저장</button>`;
      modal.classList.remove('hidden');
      setTimeout(() => { modal.classList.remove('opacity-0'); modal.querySelector('div.transform').classList.remove('scale-95'); }, 10);
    }

    function formatScheduleDate(dateString) {
      if (!dateString) return '선택';
      const [year, month, day] = dateString.split('-');
      return `${year}.${month}.${day}`;
    }

    function renderScheduleDatepicker() {
      const container = document.getElementById('schedule-date-picker');
      if (!container) return;
      const year = scheduleCalendarMonth.getFullYear();
      const month = scheduleCalendarMonth.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const days = new Date(year, month + 1, 0).getDate();
      const today = new Date();
      const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      const cells = Array.from({ length: firstDay }, () => '<span></span>');
      for (let day = 1; day <= days; day++) {
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isSelected = dateKey === scheduleRangeStart || dateKey === scheduleRangeEnd;
        const isInRange = scheduleRangeStart && scheduleRangeEnd && dateKey > scheduleRangeStart && dateKey < scheduleRangeEnd;
        const isToday = dateKey === todayKey;
        const hasCompleteRange = Boolean(scheduleRangeStart && scheduleRangeEnd);
        const rangeEdge = hasCompleteRange && isSelected
          ? (scheduleRangeStart === scheduleRangeEnd ? 'rounded-lg' : dateKey === scheduleRangeStart ? 'rounded-l-lg' : 'rounded-r-lg')
          : !hasCompleteRange && isSelected ? 'rounded-full' : '';
        const classes = hasCompleteRange && (isSelected || isInRange)
          ? `bg-amber-200 text-amber-950 font-bold ${rangeEdge}`
          : isSelected
            ? 'bg-toss-blue text-white font-bold rounded-full'
            : isToday
              ? 'border border-toss-blue text-toss-blue font-bold rounded-full'
              : 'text-toss-dark font-medium hover:bg-white rounded-full';
        cells.push(`<button type="button" onclick="selectScheduleDate('${dateKey}')" class="w-full h-9 text-xs ${classes}">${day}</button>`);
      }
      const monthLabel = `${year}년 ${month + 1}월`;
      const stepLabel = scheduleRangeStart && scheduleRangeEnd ? '' : scheduleRangeStart ? '종료일을 선택하세요' : '시작일을 선택하세요';
      container.innerHTML = `<div class="rounded-2xl bg-toss-grey5 p-3"><div class="flex items-center justify-between mb-2"><button type="button" onclick="changeScheduleCalendarMonth(-1)" class="w-8 h-8 rounded-full text-toss-grey2 hover:bg-white" aria-label="이전 달"><i class="fa-solid fa-chevron-left text-[10px]"></i></button><span class="text-xs font-bold text-toss-dark">${monthLabel}</span><button type="button" onclick="changeScheduleCalendarMonth(1)" class="w-8 h-8 rounded-full text-toss-grey2 hover:bg-white" aria-label="다음 달"><i class="fa-solid fa-chevron-right text-[10px]"></i></button></div><div class="grid grid-cols-7 gap-y-1 text-center"><span class="py-1 text-[10px] font-bold text-rose-500">일</span><span class="py-1 text-[10px] font-bold text-toss-grey2">월</span><span class="py-1 text-[10px] font-bold text-toss-grey2">화</span><span class="py-1 text-[10px] font-bold text-toss-grey2">수</span><span class="py-1 text-[10px] font-bold text-toss-grey2">목</span><span class="py-1 text-[10px] font-bold text-toss-grey2">금</span><span class="py-1 text-[10px] font-bold text-toss-blue">토</span>${cells.join('')}</div></div><div class="grid grid-cols-2 gap-2 mt-2"><div class="rounded-xl bg-toss-grey5 px-3 py-2"><span class="block text-[9px] font-bold text-toss-grey3">시작일</span><span class="text-[11px] font-bold text-toss-dark">${formatScheduleDate(scheduleRangeStart)}</span></div><div class="rounded-xl bg-toss-grey5 px-3 py-2"><span class="block text-[9px] font-bold text-toss-grey3">종료일</span><span class="text-[11px] font-bold text-toss-dark">${formatScheduleDate(scheduleRangeEnd)}</span></div></div><p class="mt-1 h-3 text-[9px] text-toss-grey3">${stepLabel || '&nbsp;'}</p>`;
    }

    function changeScheduleCalendarMonth(offset) {
      scheduleCalendarMonth = new Date(scheduleCalendarMonth.getFullYear(), scheduleCalendarMonth.getMonth() + offset, 1);
      renderScheduleDatepicker();
    }

    function selectScheduleDate(dateKey) {
      if (!scheduleRangeStart || scheduleRangeEnd) {
        scheduleRangeStart = dateKey;
        scheduleRangeEnd = '';
      } else if (dateKey < scheduleRangeStart) {
        scheduleRangeStart = dateKey;
      } else {
        scheduleRangeEnd = dateKey;
      }
      renderScheduleDatepicker();
    }

    function saveScheduleEvent(editId = '') {
      const title = document.getElementById('schedule-title').value.trim();
      const startDate = scheduleRangeStart;
      const endDate = scheduleRangeEnd || scheduleRangeStart;
      if (!title || !startDate || !endDate) { showToast('일정 이름과 시작일, 종료일을 입력해주세요.'); return; }
      if (endDate < startDate) { showToast('종료일은 시작일보다 빠를 수 없어요.'); return; }
      if (editId) {
        const index = scheduleEvents.findIndex(item => item.id === editId);
        if (index !== -1) scheduleEvents[index] = { ...scheduleEvents[index], title, startDate, endDate };
      } else scheduleEvents.push({ id: `schedule_${Date.now()}`, title, startDate, endDate });
      localStorage.setItem('hancowii_schedule_events', JSON.stringify(scheduleEvents));
      closeResultModal();
      renderHomeTab();
      showToast(editId ? '일정을 수정했어요.' : '일정을 등록했어요.');
    }

    function deleteScheduleEvent(id) {
      openDeleteConfirmModal(() => {
        scheduleEvents = scheduleEvents.filter(item => item.id !== id);
        localStorage.setItem('hancowii_schedule_events', JSON.stringify(scheduleEvents));
        renderHomeTab();
        showToast('일정을 삭제했어요.');
      });
    }

    function renderConsumptionTab() {

    const container = document.getElementById('other-tab-content');

    let consumptionItems = JSON.parse(localStorage.getItem('hancowii_consumption_items')) || [

    { id: 'con_1', title: '올영 세일 쟁임 (토너 외 2건)', date: '2026-09-17', store: '올리브영', originalPrice: 15000, amount: 3000 },

    { id: 'con_2', title: '면세점 찬스 립 틴트', date: '2026-09-13', store: '신라면세점', originalPrice: 20000, amount: 5000 }

    ];

    const selectedYearMonth = `${consumptionMonth.getFullYear()}-${String(consumptionMonth.getMonth() + 1).padStart(2, '0')}`;
    const monthlyConsumptionItems = consumptionItems.filter(item => (item.date || '').startsWith(selectedYearMonth));
    const totalAmount = monthlyConsumptionItems.reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    window.openAddConsumptionModal = function(editId = null) {

    const modal = document.getElementById('result-modal');

    const icon = document.getElementById('result-modal-icon');

    const title = document.getElementById('result-modal-title');

    const content = document.getElementById('result-modal-content');

    const actions = document.getElementById('result-modal-actions');

    let targetItem = { title: '', date: new Date().toISOString().split('T')[0], store: '올영', originalPrice: '', amount: '' };
    if (editId) {
      const found = consumptionItems.find(i => i.id === editId);
      if (found) targetItem = found;
    }

    icon.className = 'w-14 h-14 rounded-3xl bg-toss-blue/10 text-toss-blue flex items-center justify-center text-xl mx-auto mb-3';
    icon.innerHTML = '<i class="fa-solid fa-receipt"></i>';
    title.innerText = editId ? '소비 기록 수정' : '소비 기록';

    const purchasePlatforms = ['공홈', '올영', '직잭', '무신사', '에이블리', '당근', '면세', '직구', '현지'];
    if (targetItem.store && !purchasePlatforms.includes(targetItem.store)) purchasePlatforms.push(targetItem.store);
    const platformOptions = purchasePlatforms.map(platform => `<option value="${platform.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')}" ${targetItem.store === platform ? 'selected' : ''}>${platform.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</option>`).join('');

    content.innerHTML = `
      <div class="space-y-3 text-left">
        <div>
          <label class="text-xs font-bold text-toss-grey1 block mb-1">소비 내역명 *</label>
          <input type="text" id="con-form-title" value="${targetItem.title}" placeholder="예: 올영 세일 쟁임" class="w-full h-11 px-3 rounded-xl bg-toss-grey5 text-toss-dark text-xs font-medium border-none outline-none focus:ring-2 focus:ring-toss-blue/50">
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-xs font-bold text-toss-grey1 block mb-1">정가 (원)</label>
            <input type="number" id="con-form-original" value="${targetItem.originalPrice || ''}" placeholder="예: 10000" class="w-full h-11 px-3 rounded-xl bg-toss-grey5 text-toss-dark text-xs font-medium border-none outline-none focus:ring-2 focus:ring-toss-blue/50">
          </div>
          <div>
            <label class="text-xs font-bold text-toss-grey1 block mb-1">실결 *</label>
            <input type="number" id="con-form-amount" value="${targetItem.amount}" placeholder="예: 2000" class="w-full h-11 px-3 rounded-xl bg-toss-grey5 text-toss-dark text-xs font-medium border-none outline-none focus:ring-2 focus:ring-toss-blue/50">
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-xs font-bold text-toss-grey1 block mb-1">플랫폼</label>
            <select id="con-form-store" class="w-full h-11 px-3 rounded-xl bg-toss-grey5 text-toss-dark text-xs font-semibold border-none outline-none focus:ring-2 focus:ring-toss-blue/50">${platformOptions}</select>
          </div>
          <div>
            <label class="text-xs font-bold text-toss-grey1 block mb-1">날짜</label>
            <input type="date" id="con-form-date" value="${targetItem.date}" class="w-full h-11 px-3 rounded-xl bg-toss-grey5 text-toss-dark text-xs font-medium border-none outline-none focus:ring-2 focus:ring-toss-blue/50">
          </div>
        </div>
      </div>
    `;

    actions.innerHTML = `
      <button onclick="closeResultModal()" class="px-4 py-2 rounded-xl bg-toss-grey5 text-toss-grey2 font-bold text-xs hover:bg-toss-grey4 transition">취소</button>
      <button onclick="saveConsumptionRecord('${editId || ''}')" class="px-4 py-2 rounded-xl bg-toss-blue text-white font-bold text-xs hover:bg-[#E05555] transition">저장하기</button>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.querySelector('div.transform').classList.remove('scale-95');
    }, 10);

    };

    window.saveConsumptionRecord = function(editId) {

    const titleVal = document.getElementById('con-form-title').value.trim();

    const originalVal = document.getElementById('con-form-original').value.trim();

    const amountVal = document.getElementById('con-form-amount').value.trim();

    const storeVal = document.getElementById('con-form-store').value;

    const dateVal = document.getElementById('con-form-date').value;

    if (!titleVal || !amountVal) {
      showToast('내역명과 실제 결제 금액을 입력해주세요!');
      return;
    }

    const recordData = {
      title: titleVal,
      originalPrice: originalVal ? Number(originalVal) : 0,
      amount: Number(amountVal),
      store: storeVal || '기타',
      date: dateVal || new Date().toISOString().split('T')[0]
    };

    if (editId) {
      consumptionItems = consumptionItems.map(item => item.id === editId ? { ...item, ...recordData } : item);
      showToast('소비 기록이 수정되었습니다');
    } else {
      const newItem = {
        id: 'con_' + Date.now(),
        ...recordData
      };
      consumptionItems.unshift(newItem);
      showToast('새 소비 기록이 등록되었습니다');
    }

    localStorage.setItem('hancowii_consumption_items', JSON.stringify(consumptionItems));
    closeResultModal();
    renderConsumptionTab();

    };

    window.deleteConsumptionRecord = function(id) {

    consumptionItems = consumptionItems.filter(i => i.id !== id);

    localStorage.setItem('hancowii_consumption_items', JSON.stringify(consumptionItems));

    showToast('소비 기록이 삭제되었습니다');

    renderConsumptionTab();

    };

    let listHtml = '';

    monthlyConsumptionItems.forEach(item => {

    let savingBadgeHtml = '';

    const orig = Number(item.originalPrice || 0);

    const amt = Number(item.amount || 0);

    if (orig > 0 && orig > amt) {

    const savingRate = Math.round(((orig - amt) / orig) * 100);

    savingBadgeHtml = `<span class="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md text-[10px] font-bold">정가 ${orig.toLocaleString()}원 → 실결 ${amt.toLocaleString()}원 (${savingRate}% 절약)</span>`;

    } else {

    savingBadgeHtml = `<span class="text-[10px] text-toss-grey3 font-semibold">실결 ${amt.toLocaleString()}원</span>`;

    }

    listHtml += `
      <div class="p-3 bg-toss-grey5 rounded-xl relative group space-y-1.5">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs font-bold text-toss-dark">${item.title}</p>
            <p class="text-[10px] text-toss-grey2">${item.date} • ${item.store}</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-toss-blue">-${amt.toLocaleString()}원</span>
            <div class="flex items-center gap-1">
              <button onclick="openAddConsumptionModal('${item.id}')" class="text-toss-grey3 hover:text-toss-dark text-[11px] px-1"><i class="fa-solid fa-pen"></i></button>
              <button onclick="deleteConsumptionRecord('${item.id}')" class="text-rose-400 hover:text-rose-600 text-[11px] px-1"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
        <div>
          ${savingBadgeHtml}
        </div>
      </div>
    `;

    });

    container.innerHTML = `

    <div class="space-y-4">

    <div class="bg-white rounded-2xl p-5 border border-toss-grey4/60 shadow-toss-card text-center space-y-2">

    <div class="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2"><div class="justify-self-start"><div class="relative">${renderMonthPicker('consumption', consumptionMonth, consumptionMonthPickerOpen)}</div></div><span class="justify-self-center text-xs font-semibold text-toss-grey2">총 소비 금액</span><button onclick="goToCurrentMonth('consumption')" class="justify-self-end px-2 h-7 rounded-lg bg-toss-grey5 text-toss-grey2 text-[10px] font-bold">오늘</button></div>

    <h2 class="text-2xl font-bold text-toss-dark">${totalAmount.toLocaleString()}원</h2>

    <p class="text-[11px] text-toss-blue font-medium">고능 소비 달성률 85% 🔥</p>

    </div>

      <div class="bg-white rounded-2xl p-4 border border-toss-grey4/60 shadow-toss-card space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-xs font-bold text-toss-dark">고능 소비 내역</h3>
          <button onclick="openAddConsumptionModal()" class="px-3 py-1.5 bg-toss-blue text-white rounded-xl text-xs font-bold hover:bg-[#E05555] transition flex items-center gap-1 shadow-2xs">
            <i class="fa-solid fa-plus text-[10px]"></i> 기록 추가
          </button>
        </div>
        <div class="space-y-2">
          ${listHtml || '<p class="text-xs text-toss-grey3 text-center py-4">등록된 소비 기록이 없어요.</p>'}
        </div>
      </div>
    </div>

    `;

    }

    function renderMyPageTab() {

    const container = document.getElementById('other-tab-content');

    container.innerHTML = `

    <div class="space-y-4">

    <div class="bg-white rounded-2xl p-5 border border-toss-grey4/60 shadow-toss-card flex items-center gap-4">

    <div class="w-14 h-14 rounded-full bg-toss-blue/10 text-toss-blue flex items-center justify-center text-xl font-bold">

    💄

    </div>

    <div>

    <h3 class="text-sm font-bold text-toss-dark">행복한 코덕</h3>

    <p class="text-xs text-toss-grey2 mt-0.5">있잘쓰 만렙 코덕 회원님</p>

    </div>

    </div>

      <div class="bg-white rounded-2xl p-4 border border-toss-grey4/60 shadow-toss-card divide-y divide-toss-grey4/60">
        <button onclick="showToast('준비 중인 기능입니다')" class="w-full py-3 text-left text-xs font-semibold text-toss-dark flex items-center justify-between">
          <span>내 퍼스널 컬러 설정</span>
          <i class="fa-solid fa-chevron-right text-toss-grey3 text-[10px]"></i>
        </button>
        <button onclick="openBackupModal()" class="w-full py-3 text-left text-xs font-semibold text-toss-dark flex items-center justify-between">
          <span>데이터 백업 및 복구</span>
          <i class="fa-solid fa-chevron-right text-toss-grey3 text-[10px]"></i>
        </button>
        <button onclick="toggleDarkMode()" class="w-full py-3 text-left text-xs font-semibold text-toss-dark flex items-center justify-between">
          <span>낮/밤 모드</span>
          <span class="flex items-center gap-2"><span id="dark-mode-status" class="text-[10px] text-toss-grey3">낮</span><span id="dark-mode-switch" class="relative h-5 w-9 rounded-full bg-toss-grey4 transition-colors"><span id="dark-mode-knob" class="absolute left-0.5 top-0.5 h-4 w-4 translate-x-0 rounded-full bg-white shadow-sm transition-transform"></span></span></span>
        </button>
        <button onclick="openWishSpecialTagManager()" class="w-full py-3 text-left text-xs font-semibold text-toss-dark flex items-center justify-between">
          <span>위시 특이사항 관리</span>
          <i class="fa-solid fa-chevron-right text-toss-grey3 text-[10px]"></i>
        </button>
        <button onclick="showToast('앱 버전 v1.2.0')" class="w-full py-3 text-left text-xs font-semibold text-toss-dark flex items-center justify-between">
          <span>앱 버전 정보</span>
          <span class="text-xs text-toss-grey3 font-medium">v1.2.0</span>
        </button>
      </div>
    </div>

    `;

    updateDarkModeControl();

    }
