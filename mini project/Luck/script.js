const fortuneMessages = {
    total: [
        "오늘은 정말 좋은 날입니다! 모든 일이 순조롭게 진행될 것입니다.",
        "조금 신중하게 행동해야 할 날입니다. 서두르지 마세요.",
        "행운이 가득한 하루입니다. 새로운 기회를 놓치지 마세요.",
        "평온한 하루가 될 것입니다. 마음을 가다듬고 차분히 보내세요.",
        "도전적인 하루입니다. 용기를 가지고 임해보세요.",
        "예상치 못한 행운이 찾아올 수 있는 특별한 날입니다.",
        "주변 사람들과의 소통이 중요한 하루입니다.",
        "창의적인 아이디어가 떠오를 수 있는 영감의 날입니다.",
        "과거의 노력이 인정받을 수 있는 성과의 날입니다.",
        "새로운 시작을 위한 완벽한 타이밍입니다."
    ],
    business: [
        "사업에서 큰 성과를 거둘 수 있는 날입니다.",
        "동료들과의 협력이 중요한 하루입니다.",
        "새로운 아이디어가 떠오를 수 있는 창의적인 날입니다.",
        "기존 프로젝트를 정리하고 마무리하기 좋은 날입니다.",
        "네트워킹에 집중하면 좋은 결과를 얻을 수 있습니다.",
        "고객과의 만남에서 긍정적인 반응을 받을 수 있습니다.",
        "새로운 비즈니스 파트너십을 고려해볼 좋은 기회입니다.",
        "기존 업무 방식을 개선할 수 있는 인사이트를 얻을 수 있습니다.",
        "경쟁사와의 차별화 전략을 세우기 좋은 날입니다.",
        "장기적인 사업 계획을 수립하기에 적합한 날입니다."
    ],
    love: [
        "로맨틱한 만남이 기다리고 있는 날입니다.",
        "기존 관계가 더욱 깊어질 수 있는 좋은 기회입니다.",
        "솔직한 대화가 중요한 하루입니다.",
        "새로운 인연을 만날 수 있는 행운의 날입니다.",
        "자신을 사랑하는 마음이 더욱 중요해지는 날입니다.",
        "소중한 사람과의 특별한 순간을 만들 수 있는 날입니다.",
        "과거의 상처를 치유할 수 있는 치유의 시간입니다.",
        "상대방의 마음을 더 깊이 이해할 수 있는 날입니다.",
        "사랑의 감정이 더욱 깊어지는 마법 같은 하루입니다.",
        "자신의 매력을 발견하고 발전시킬 수 있는 날입니다."
    ],
    money: [
        "재물운이 매우 좋은 날입니다. 투자나 저축을 고려해보세요.",
        "예상치 못한 수입이 생길 수 있는 행운의 날입니다.",
        "현재 자산을 정리하고 관리하기 좋은 날입니다.",
        "절약의 중요성을 깨닫게 되는 날입니다.",
        "장기적인 재정 계획을 세우기 좋은 날입니다.",
        "새로운 수입원을 발견할 수 있는 기회의 날입니다.",
        "현명한 투자 결정을 내릴 수 있는 날입니다.",
        "재정적 안정성을 높일 수 있는 좋은 타이밍입니다.",
        "돈에 대한 긍정적인 마인드를 가질 수 있는 날입니다.",
        "재정적 목표를 달성하기 위한 중요한 단계를 밟을 수 있는 날입니다."
    ]
};

function showFortune() {
    const birthDate = document.getElementById('birthDate').value;
    
    if (!birthDate) {
        alert('생년월일을 선택해주세요!');
        return;
    }

    // 생년월일을 기반으로 한 간단한 운세 생성
    const date = new Date(birthDate);
    const today = new Date();
    const seed = date.getFullYear() + date.getMonth() + date.getDate() + 
                today.getFullYear() + today.getMonth() + today.getDate();

    // 각 운세 카테고리별로 메시지와 별점 생성
    const fortunes = {
        total: generateFortune(seed, 'total'),
        business: generateFortune(seed + 1, 'business'),
        love: generateFortune(seed + 2, 'love'),
        money: generateFortune(seed + 3, 'money')
    };

    // 결과 표시
    document.getElementById('total-fortune').textContent = fortunes.total.message;
    document.getElementById('total-stars').textContent = '★'.repeat(fortunes.total.stars);

    document.getElementById('business-fortune').textContent = fortunes.business.message;
    document.getElementById('business-stars').textContent = '★'.repeat(fortunes.business.stars);

    document.getElementById('love-fortune').textContent = fortunes.love.message;
    document.getElementById('love-stars').textContent = '★'.repeat(fortunes.love.stars);

    document.getElementById('money-fortune').textContent = fortunes.money.message;
    document.getElementById('money-stars').textContent = '★'.repeat(fortunes.money.stars);

    // 페이지 전환
    document.getElementById('input-page').style.display = 'none';
    document.getElementById('result-page').classList.add('show');
}

function generateFortune(seed, category) {
    // 간단한 난수 생성
    const x = Math.sin(seed) * 10000;
    const random = x - Math.floor(x);
    
    const messages = fortuneMessages[category];
    const messageIndex = Math.floor(random * messages.length);
    const stars = Math.floor(random * 5) + 1; // 1-5 별점

    return {
        message: messages[messageIndex],
        stars: stars
    };
}

function goBack() {
    document.getElementById('result-page').classList.remove('show');
    document.getElementById('input-page').style.display = 'block';
    document.getElementById('birthDate').value = '';
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 오늘 날짜를 기본값으로 설정
    document.getElementById('birthDate').valueAsDate = new Date();
}); 