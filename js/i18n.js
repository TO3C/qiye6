// 流云智炬科技 qiye6 - 中英文双语切换系统

// 翻译内容
const translations = {
    zh: {
        // 页面元信息
        pageTitle: '流云智炬科技 | 科技守护生态，智慧创造未来',
        pageDescription: '流云智炬科技 - 专注于智慧环境监测、绿色能源、生态农业、碳中和管理的高科技企业',
        
        // 导航
        navTechnology: '核心技术',
        navSolutions: '解决方案',
        navNews: '新闻动态',
        navCases: '成功案例',
        navContact: '联系我们',
        ctaButton: '立即咨询',
        
        // Hero 区域
        heroBadge: '生态科技领航者',
        heroTitle: '流云智炬科技',
        heroSlogan: '科技守护生态，智慧创造未来',
        heroDescription: '专注于智慧环境监测、绿色能源、生态农业、碳中和管理的高科技企业，为全球可持续发展提供创新解决方案',
        heroCta1: '探索解决方案',
        heroCta2: '联系我们',
        
        // 统计数据
        stat1: '万吨碳减排',
        stat2: '平方公里监测',
        stat3: '家企业客户',
        stat4: '项技术专利',
        
        // 核心技术
        techBadge: 'CORE TECHNOLOGY',
        techTitle: '核心技术',
        techSubtitle: '四大生态科技领域，构建绿色发展新生态',
        
        techCard1Title: '智慧环境监测',
        techCard1Desc: '运用物联网、AI和大数据技术，实现空气、水质、土壤等环境要素的实时监测与智能分析，为生态保护提供科学决策依据',
        techCard1Tag1: '空气质量监测',
        techCard1Tag2: '水质分析',
        techCard1Tag3: '土壤检测',
        
        techCard2Title: '绿色能源方案',
        techCard2Desc: '提供太阳能、风能、储能等清洁能源系统集成方案，助力企业实现能源结构转型，降低碳排放，提升能源使用效率',
        techCard2Tag1: '太阳能系统',
        techCard2Tag2: '风能利用',
        techCard2Tag3: '储能技术',
        
        techCard3Title: '生态农业科技',
        techCard3Desc: '通过精准农业、智慧温室、水肥一体化等技术，提高农业生产效率，减少资源消耗，实现农业可持续发展',
        techCard3Tag1: '精准农业',
        techCard3Tag2: '智慧温室',
        techCard3Tag3: '南繁种业',
        
        techCard4Title: '碳中和管理平台',
        techCard4Desc: '提供碳足迹核算、碳资产管理、碳交易等一体化解决方案，帮助企业实现碳中和目标，参与碳市场交易',
        techCard4Tag1: '碳足迹追踪',
        techCard4Tag2: '碳资产管理',
        techCard4Tag3: '碳交易',
        
        // 解决方案
        solutionBadge: 'SOLUTIONS',
        solutionTitle: '解决方案',
        solutionSubtitle: '为不同行业提供定制化生态科技解决方案',
        
        solution1Title: '企业环保方案',
        solution1Desc: '为企业提供ESG咨询、环保合规、绿色供应链等一站式环保解决方案',
        
        solution2Title: '政府生态监测',
        solution2Desc: '为政府部门提供区域环境监测、生态评估、环保大数据平台等服务',
        
        solution3Title: '农业智慧升级',
        solution3Desc: '助力农业现代化转型，提供智慧农业系统集成、精准种植、溯源管理等方案',
        
        solution4Title: '城市绿色规划',
        solution4Desc: '参与城市生态规划，提供绿色建筑、海绵城市、生态修复等规划设计服务',
        
        // 新闻动态
        newsBadge: 'NEWS & INSIGHTS',
        newsTitle: '新闻动态',
        newsSubtitle: '最新资讯、政策解读、行业洞察',
        
        newsTagPolicy: '政策解读',
        newsTagCompany: '公司动态',
        newsTagIndustry: '行业洞察',
        
        news1Title: '国家发布碳达峰碳中和最新政策，生态科技企业迎来新机遇',
        news1Desc: '国务院发布《关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见》，明确提出推动绿色低碳发展...',
        
        news2Title: '流云智炬科技荣获"2023年度绿色发展创新企业"称号',
        news2Desc: '凭借在智慧环境监测和碳中和管理领域的创新成果，公司荣获行业权威奖项，技术实力获业界认可...',
        
        news3Title: '2024年全球生态科技发展趋势：AI赋能环境监测成新热点',
        news3Desc: '人工智能技术在环境监测领域的应用日益广泛，从数据采集到分析预测，AI正在重塑生态科技行业...',
        
        newsViewAll: '查看全部新闻',
        
        // 成功案例
        casesBadge: 'SUCCESS CASES',
        casesTitle: '成功案例',
        casesSubtitle: '携手合作伙伴，共创绿色未来',
        
        case1Title: '某大型制造企业碳中和项目',
        case1Desc: '帮助客户实现年减排10万吨二氧化碳，能源使用效率提升35%',
        
        case2Title: '海南省生态监测网络建设',
        case2Desc: '建设覆盖全省的环境监测网络，实现空气质量实时监测与预警',
        
        case3Title: '南繁种业智慧农业项目',
        case3Desc: '为种业基地提供智慧温室和水肥一体化系统，节水40%，增产25%',
        
        partnersTitle: '合作伙伴',
        
        // 联系我们
        contactBadge: 'CONTACT US',
        contactTitle: '联系我们',
        contactSubtitle: '期待与您合作，共同构建绿色可持续的未来',
        
        addressLabel: '公司地址',
        addressValue: '海南省三亚市崖州湾科技城创新产业园A座',
        phoneLabel: '联系电话',
        emailLabel: '电子邮箱',
        
        formName: '您的姓名',
        formPhone: '联系电话',
        formEmail: '电子邮箱',
        formMessage: '咨询内容',
        formSubmit: '提交咨询'
    },
    
    en: {
        // Page Meta
        pageTitle: 'Liuyun Zhiju Technology | Technology Guards Ecology, Wisdom Creates Future',
        pageDescription: 'Liuyun Zhiju Technology - A high-tech enterprise focusing on smart environmental monitoring, green energy, eco-agriculture, and carbon neutral management',
        
        // Navigation
        navTechnology: 'Technology',
        navSolutions: 'Solutions',
        navNews: 'News',
        navCases: 'Cases',
        navContact: 'Contact',
        ctaButton: 'Contact Us',
        
        // Hero Section
        heroBadge: 'Eco-Tech Leader',
        heroTitle: 'Liuyun Zhiju Technology',
        heroSlogan: 'Technology Guards Ecology, Wisdom Creates Future',
        heroDescription: 'A high-tech enterprise focusing on smart environmental monitoring, green energy, eco-agriculture, and carbon neutral management, providing innovative solutions for global sustainable development',
        heroCta1: 'Explore Solutions',
        heroCta2: 'Contact Us',
        
        // Stats
        stat1: '10K+ Tons CO₂ Reduced',
        stat2: '1,000+ km² Monitored',
        stat3: '200+ Enterprise Clients',
        stat4: '50+ Tech Patents',
        
        // Core Technology
        techBadge: 'CORE TECHNOLOGY',
        techTitle: 'Core Technology',
        techSubtitle: 'Four major eco-technology fields, building a new green ecosystem',
        
        techCard1Title: 'Smart Environmental Monitoring',
        techCard1Desc: 'Using IoT, AI, and big data technologies to achieve real-time monitoring and intelligent analysis of air, water quality, and soil, providing scientific decision-making basis for ecological protection',
        techCard1Tag1: 'Air Quality',
        techCard1Tag2: 'Water Analysis',
        techCard1Tag3: 'Soil Testing',
        
        techCard2Title: 'Green Energy Solutions',
        techCard2Desc: 'Providing integrated clean energy system solutions including solar, wind, and energy storage, helping enterprises achieve energy transition, reduce carbon emissions, and improve energy efficiency',
        techCard2Tag1: 'Solar Systems',
        techCard2Tag2: 'Wind Energy',
        techCard2Tag3: 'Energy Storage',
        
        techCard3Title: 'Eco-Agricultural Technology',
        techCard3Desc: 'Through precision agriculture, smart greenhouses, and water-fertilizer integration technologies, improving agricultural production efficiency, reducing resource consumption, and achieving sustainable agriculture',
        techCard3Tag1: 'Precision Agri',
        techCard3Tag2: 'Smart Greenhouse',
        techCard3Tag3: 'Seed Industry',
        
        techCard4Title: 'Carbon Neutral Platform',
        techCard4Desc: 'Providing integrated solutions for carbon footprint accounting, carbon asset management, and carbon trading, helping enterprises achieve carbon neutrality goals and participate in carbon markets',
        techCard4Tag1: 'Carbon Tracking',
        techCard4Tag2: 'Asset Management',
        techCard4Tag3: 'Carbon Trading',
        
        // Solutions
        solutionBadge: 'SOLUTIONS',
        solutionTitle: 'Solutions',
        solutionSubtitle: 'Customized eco-technology solutions for different industries',
        
        solution1Title: 'Enterprise Eco Solutions',
        solution1Desc: 'Providing one-stop environmental solutions including ESG consulting, compliance, and green supply chain for enterprises',
        
        solution2Title: 'Government Eco Monitoring',
        solution2Desc: 'Providing regional environmental monitoring, ecological assessment, and environmental big data platforms for government agencies',
        
        solution3Title: 'Smart Agriculture Upgrade',
        solution3Desc: 'Assisting agricultural modernization with smart agriculture system integration, precision planting, and traceability management',
        
        solution4Title: 'Urban Green Planning',
        solution4Desc: 'Participating in urban ecological planning, providing green buildings, sponge cities, and ecological restoration planning services',
        
        // News
        newsBadge: 'NEWS & INSIGHTS',
        newsTitle: 'News & Insights',
        newsSubtitle: 'Latest news, policy interpretation, industry insights',
        
        newsTagPolicy: 'Policy',
        newsTagCompany: 'Company',
        newsTagIndustry: 'Industry',
        
        news1Title: 'China Releases Latest Carbon Peak and Carbon Neutrality Policy, Eco-Tech Enterprises Welcome New Opportunities',
        news1Desc: 'The State Council issued the "Opinions on Comprehensively, Accurately, and Comprehensively Implementing New Development Concepts to Achieve Carbon Peak and Carbon Neutrality", clearly proposing to promote green and low-carbon development...',
        
        news2Title: 'Liuyun Zhiju Technology Won the "2023 Green Development Innovation Enterprise" Award',
        news2Desc: 'With innovative achievements in smart environmental monitoring and carbon neutral management, the company won authoritative industry awards and gained recognition for its technical strength...',
        
        news3Title: '2024 Global Eco-Tech Trends: AI-Enabled Environmental Monitoring Becomes New Hotspot',
        news3Desc: 'The application of artificial intelligence technology in environmental monitoring is becoming increasingly widespread, from data collection to analysis and prediction, AI is reshaping the eco-tech industry...',
        
        newsViewAll: 'View All News',
        
        // Cases
        casesBadge: 'SUCCESS CASES',
        casesTitle: 'Success Cases',
        casesSubtitle: 'Partnering for a greener future',
        
        case1Title: 'Carbon Neutrality Project for Large Manufacturing Enterprise',
        case1Desc: 'Helped client achieve annual reduction of 100,000 tons of CO₂ emissions, with energy efficiency improved by 35%',
        
        case2Title: 'Hainan Province Eco-Monitoring Network Construction',
        case2Desc: 'Built a province-wide environmental monitoring network, achieving real-time air quality monitoring and early warning',
        
        case3Title: 'Nanfan Seed Industry Smart Agriculture Project',
        case3Desc: 'Provided smart greenhouses and water-fertilizer integration systems for seed base, saving 40% water and increasing yield by 25%',
        
        partnersTitle: 'Partners',
        
        // Contact
        contactBadge: 'CONTACT US',
        contactTitle: 'Contact Us',
        contactSubtitle: 'Looking forward to cooperating with you to build a green and sustainable future',
        
        addressLabel: 'Address',
        addressValue: 'Building A, Innovation Industrial Park, Yazhou Bay Science and Technology City, Sanya, Hainan',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        
        formName: 'Your Name',
        formPhone: 'Phone Number',
        formEmail: 'Email Address',
        formMessage: 'Message',
        formSubmit: 'Send Inquiry'
    }
};

// 当前语言
currentLang = localStorage.getItem('language') || 'zh';

// 初始化语言
function initLanguage() {
    // 设置按钮状态
    updateLangButtons();
    
    // 应用翻译
    applyTranslations();
}

// 切换语言
function switchLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // 更新按钮状态
    updateLangButtons();
    
    // 应用翻译
    applyTranslations();
    
    // 更新页面标题
    document.title = translations[lang].pageTitle;
    
    // 更新 meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', translations[lang].pageDescription);
    }
}

// 更新语言按钮状态
function updateLangButtons() {
    const btnZh = document.getElementById('btnZh');
    const btnEn = document.getElementById('btnEn');
    
    if (btnZh && btnEn) {
        if (currentLang === 'zh') {
            btnZh.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnZh.classList.remove('active');
            btnEn.classList.add('active');
        }
    }
    
    // 更新移动端按钮
    const mobileBtns = document.querySelectorAll('.mobile-menu .lang-btn');
    mobileBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === (currentLang === 'zh' ? '中' : 'EN')) {
            btn.classList.add('active');
        }
    });
}

// 应用翻译
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            // 如果是 input 或 textarea，更新 placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.getAttribute('placeholder')) {
                    element.setAttribute('placeholder', translations[currentLang][key]);
                }
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
});