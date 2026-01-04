// JavaScript file

// Tarot card data with actual image paths from assets
const tarotCards = [
    {
        id: 0,
        name: "The Fool",
        image: "assets/the_fool.webp",
        meanings: {
            love: "A fresh start in love. Approach relationships with innocence and an open heart. Drop old prejudices.",
            money: "Seize new opportunities. Trust your instincts and take bold action. Don’t cling to past failures."
        },
        reversed_meanings: {
            love: "Impulsiveness and lack of direction. Slow down and be more thoughtful.",
            money: "Beware rash investments and decisions. Revisit fundamentals and make a plan."
        }
    },
    {
        id: 1,
        name: "The Magician",
        image: "assets/the magician.webp",
        meanings: {
            love: "Use your charm and capability to create the love you want. Act with confidence.",
            money: "Apply your skills and talents to build success. The tools are ready."
        },
        reversed_meanings: {
            love: "Watch for miscommunication and manipulation. Restore sincerity.",
            money: "Scattered focus and weak planning. Set priorities and improve execution."
        }
    },
    {
        id: 2,
        name: "The High Priestess",
        image: "assets/high priest.webp",
        meanings: {
            love: "Trust your intuition and inner voice. Hidden truths may surface.",
            money: "Use intuition and inner wisdom to decide. Hidden opportunities may appear."
        },
        reversed_meanings: {
            love: "Ignoring intuition; secrets and confusion. Don’t hide feelings; verify facts.",
            money: "Information asymmetry and vagueness. Decide based on data; validate."
        }
    },
    {
        id: 3,
        name: "The Empress",
        image: "assets/the empress.webp",
        meanings: {
            love: "Abundant, growing love. Nurture the relationship with warmth and creativity.",
            money: "A fertile period for growth. Create wealth through creative ideas."
        },
        reversed_meanings: {
            love: "Overprotection and dependence. Maintain healthy boundaries and self-care.",
            money: "Creative block and waste. Focus on efficiency and profitability."
        }
    },
    {
        id: 4,
        name: "The Emperor",
        image: "assets/the emperor.webp",
        meanings: {
            love: "Build a stable, structured relationship. Lead with care.",
            money: "Succeed through planning and systems. Use authority wisely."
        },
        reversed_meanings: {
            love: "Rigidity and overcontrol. Restore flexibility and mutual respect.",
            money: "Authoritarianism and excessive control. Delegate and improve structure."
        }
    },
    {
        id: 5,
        name: "The Hierophant",
        image: "assets/hierophant.webp",
        meanings: {
            love: "Seek traditional, steady bonds. Find a partner who shares your values.",
            money: "Follow established systems and rules. Seek a mentor’s advice."
        },
        reversed_meanings: {
            love: "Formalism and social pressure. Define your own rules as a couple.",
            money: "Clinging to outdated norms. Shift to innovation and practicality."
        }
    },
    {
        id: 6,
        name: "The Lovers",
        image: "assets/lovers.webp",
        meanings: {
            love: "True love and harmony await. A pivotal choice is at hand.",
            money: "Success through partnership and collaboration. Decide carefully."
        },
        reversed_meanings: {
            love: "Disharmony and indecision. Realign values and choose clearly.",
            money: "Cracks in partnerships. Clarify roles and agreements."
        }
    },
    {
        id: 7,
        name: "The Chariot",
        image: "assets/the chariot.webp",
        meanings: {
            love: "Will and resolve move love forward. Overcome obstacles and pursue your goals.",
            money: "Achieve goals with determination. Push through obstacles."
        },
        reversed_meanings: {
            love: "Impatience and control issues. Slow the pace and prioritize empathy.",
            money: "Confused direction; forcing progress. Redefine objectives."
        }
    },
    {
        id: 8,
        name: "Strength",
        image: "assets/strength.webp",
        meanings: {
            love: "Grow the relationship with inner strength and courage. Win hearts with gentle power.",
            money: "Endure challenges with patience. Succeed through calm persistence."
        },
        reversed_meanings: {
            love: "Emotional overwhelm; low self-esteem. Practice gentle restraint and self-compassion.",
            money: "Inconsistency and wobble. Restore routine and steadiness."
        }
    },
    {
        id: 9,
        name: "The Hermit",
        image: "assets/the hermit.webp",
        meanings: {
            love: "Time alone brings self-understanding. Use inner wisdom to develop the relationship.",
            money: "Solitude yields deep insight. Apply inner wisdom for success.",
        },
        reversed_meanings: {
            love: "Isolation and avoidance. Accept help and connection.",
            money: "Disconnection and dogmatism. Reconnect with mentors and data."
        }
    },
    {
        id: 10,
        name: "The Wheel of Fortune",
        image: "assets/the wheel.webp",
        meanings: {
            love: "The wheel turns. Embrace change and seize new chances.",
            money: "The wheel turns. Welcome change and grab new opportunities."
        },
        reversed_meanings: {
            love: "Unfavorable timing; stagnation. Wait flexibly for the tide to turn.",
            money: "Headwinds of luck; rising volatility. Diversify risk."
        }
    },
    {
        id: 11,
        name: "Justice",
        image: "assets/justice.webp",
        meanings: {
            love: "Build a fair, balanced relationship grounded in truth and honesty.",
            money: "Make fair, balanced decisions. Succeed with integrity."
        },
        reversed_meanings: {
            love: "Guard against unfairness and bias; speak from facts.",
            money: "Avoid rule-bending and distortion; strengthen transparency and accountability."
        }
    },
    {
        id: 12,
        name: "The Hanged Man",
        image: "assets/hanged man.webp",
        meanings: {
            love: "See the relationship from a new angle. Gain deeper love through sacrifice and patience.",
            money: "Shift perspective; insight comes through pause and patience."
        },
        reversed_meanings: {
            love: "Attachment and delay. Change your view and let go.",
            money: "The pause has lost meaning. Turn insight into action."
        }
    },
    {
        id: 13,
        name: "Death",
        image: "assets/death.webp",
        meanings: {
            love: "An ending leads to a new beginning. Accept change and find new love.",
            money: "Old methods end; new ones begin. Embrace change and seek fresh opportunities."
        },
        reversed_meanings: {
            love: "Resistance to change. Close chapters and prepare for a new start.",
            money: "Stagnation and clinging. Cut inefficiencies decisively."
        }
    },
    {
        id: 14,
        name: "Temperance",
        image: "assets/temperance.webp",
        meanings: {
            love: "Grow through balance and harmony. Achieve a perfect blend with patience and restraint.",
            money: "Create success through balance and harmony. Practice patience and moderation."
        },
        reversed_meanings: {
            love: "Imbalance and excess. Restore balance through tuning and compromise.",
            money: "Over-investing or overspending. Rebalance your portfolio."
        }
    },
    {
        id: 15,
        name: "The Devil",
        image: "assets/the devil.webp",
        meanings: {
            love: "Break free from temptation and obsession. Seek free, authentic love.",
            money: "Release material fixation; pursue true value. Freedom brings success."
        },
        reversed_meanings: {
            love: "Release obsession and dependency. Set healthy boundaries.",
            money: "Escape overspending and desire traps. Choose a minimalist strategy."
        }
    },
    {
        id: 16,
        name: "The Tower",
        image: "assets/the tower.webp",
        meanings: {
            love: "Sudden change and revelation. Dismantle old beliefs and find new love.",
            money: "Sudden upheaval and insight. Break old structures and find new success."
        },
        reversed_meanings: {
            love: "Avoiding conflict; delaying change. Small controlled breaks prevent bigger risks.",
            money: "Risk accumulation. Restructure gradually to soften shocks."
        }
    },
    {
        id: 17,
        name: "The Star",
        image: "assets/the star.webp",
        meanings: {
            love: "Hope and inspiration guide new love. Move toward your dreams.",
            money: "Hope and inspiration lead to success. Pursue your dreams."
        },
        reversed_meanings: {
            love: "Diminished hope and doubt. Prioritize recovery and self-care.",
            money: "Diluted goals; reality gap. Realign vision and check reality."
        }
    },
    {
        id: 18,
        name: "The Moon",
        image: "assets/the moon.webp",
        meanings: {
            love: "Use intuition and imagination to uncover hidden truths. Separate fantasy from reality.",
            money: "Use intuition and imagination to find hidden opportunities. Separate fantasy from reality."
        },
        reversed_meanings: {
            love: "Misunderstandings clear; truth emerges. Clarify feelings.",
            money: "Less uncertainty. Use data to clear the fog."
        }
    },
    {
        id: 19,
        name: "The Sun",
        image: "assets/the sun.webp",
        meanings: {
            love: "Bright, warm love awaits. Seek with confidence and optimism.",
            money: "Bright, warm success awaits. Pursue with confidence and optimism."
        },
        reversed_meanings: {
            love: "Over-optimism and fatigue. Recover simple joys.",
            money: "Burnout and reality check. Rest and reset."
        }
    },
    {
        id: 20,
        name: "Judgement",
        image: "assets/judgement.webp",
        meanings: {
            love: "Awakening and rebirth. Forgive the past and start anew in love.",
            money: "Awakening and revival. Forgive the past and begin a new success."
        },
        reversed_meanings: {
            love: "Self-doubt; need for forgiveness. Reconfirm the relationship’s calling.",
            money: "Avoiding decisions. Integrate learning and try again."
        }
    },
    {
        id: 21,
        name: "The World",
        image: "assets/the world.webp",
        meanings: {
            love: "Completion and fulfillment. Integrate experiences to realize perfect love.",
            money: "Completion and fulfillment. Integrate experiences to achieve lasting success."
        },
        reversed_meanings: {
            love: "Incomplete; stuck. Finish unfinished business.",
            money: "Unfinished projects. Complete through delivery and closure."
        }
    }
];

// Attach reversed meanings directly into tarotCards
tarotCards.forEach((c) => {
  switch (c.name) {
    case 'The Fool':
      c.meanings.reversedLove = 'Impulsiveness and lack of direction. Slow down and be thoughtful.';
      c.meanings.reversedMoney = 'Beware rash investments and decisions. Revisit fundamentals and plan.';
      break;
    case 'The Magician':
      c.meanings.reversedLove = 'Guard against manipulation and distorted communication. Restore sincerity.';
      c.meanings.reversedMoney = 'Poor planning and scattered energy. Set priorities and improve execution.';
      break;
    case 'The High Priestess':
      c.meanings.reversedLove = 'Ignoring intuition; secrets and confusion. Share feelings and verify facts.';
      c.meanings.reversedMoney = 'Information gaps and ambiguity. Use data-driven decisions and validation.';
      break;
    case 'The Empress':
      c.meanings.reversedLove = 'Overprotection and dependence. Healthy boundaries and self-care matter.';
      c.meanings.reversedMoney = 'Creative stagnation and waste. Focus on efficiency and profitability.';
      break;
    case 'The Emperor':
      c.meanings.reversedLove = 'Rigidity and overcontrol. Restore flexibility and mutual respect.';
      c.meanings.reversedMoney = 'Authoritarianism and overcontrol. Delegate and improve structures.';
      break;
    case 'The Hierophant':
      c.meanings.reversedLove = 'Formalism and pressure of convention. Create your own rules together.';
      c.meanings.reversedMoney = 'Outdated norms. Shift toward innovation and practicality.';
      break;
    case 'The Lovers':
      c.meanings.reversedLove = 'Disharmony and indecision. Realign values and choose clearly.';
      c.meanings.reversedMoney = 'Partnership cracks. Clarify roles and agreements.';
      break;
    case 'The Chariot':
      c.meanings.reversedLove = 'Impatience and control fixation. Adjust pace and prioritize empathy.';
      c.meanings.reversedMoney = 'Direction confusion; over-pushing. Redefine goals.';
      break;
    case 'Strength':
      c.meanings.reversedLove = 'Emotional overflow and low self-worth. Gentle restraint and self-compassion.';
      c.meanings.reversedMoney = 'Lack of consistency. Restore routine and steadiness.';
      break;
    case 'The Hermit':
      c.meanings.reversedLove = 'Isolation and avoidance. Allow help and connection.';
      c.meanings.reversedMoney = 'Disconnection and dogmatism. Reconnect with mentors and data.';
      break;
    case 'The Wheel of Fortune':
      c.meanings.reversedLove = 'Unfavorable timing and stagnation. Wait flexibly for the shift.';
      c.meanings.reversedMoney = 'Headwinds of luck; rising volatility. Diversify risk.';
      break;
    case 'Justice':
      c.meanings.reversedLove = 'Unfairness and bias. Speak from facts and share responsibility.';
      c.meanings.reversedMoney = 'Rule violations and distortion. Strengthen transparency and compliance.';
      break;
    case 'The Hanged Man':
      c.meanings.reversedLove = 'Attachment and delay. Shift perspective and let go.';
      c.meanings.reversedMoney = 'The pause has lost meaning. Turn insight into action.';
      break;
    case 'Death':
      c.meanings.reversedLove = 'Resistance to change. Finish and prepare for a new start.';
      c.meanings.reversedMoney = 'Stagnation and regret. Cut inefficiencies decisively.';
      break;
    case 'Temperance':
      c.meanings.reversedLove = 'Imbalance and excess. Restore balance through tuning and compromise.';
      c.meanings.reversedMoney = 'Over-investing or overspending. Rebalance the portfolio.';
      break;
    case 'The Devil':
      c.meanings.reversedLove = 'Release obsession and dependency. Reset boundaries.';
      c.meanings.reversedMoney = 'Break free from overspending and desire traps. Minimalist strategy.';
      break;
    case 'The Tower':
      c.meanings.reversedLove = 'Avoiding conflict; delayed change. Use small breaks to prevent big risks.';
      c.meanings.reversedMoney = 'Risk is building up. Restructure gradually.';
      break;
    case 'The Star':
      c.meanings.reversedLove = 'Lowered hope and doubt. Recovery and self-care first.';
      c.meanings.reversedMoney = 'Goals diluted. Realign vision and check reality.';
      break;
    case 'The Moon':
      c.meanings.reversedLove = 'Misunderstandings resolve; truth appears. Clarify emotions.';
      c.meanings.reversedMoney = 'Uncertainty decreases. Clear the fog with data.';
      break;
    case 'The Sun':
      c.meanings.reversedLove = 'Over-optimism and fatigue. Recover simple joys.';
      c.meanings.reversedMoney = 'Burnout and reality check. Rest and reset.';
      break;
    case 'Judgement':
      c.meanings.reversedLove = 'Self-doubt; need for forgiveness. Reconfirm the relationship’s calling.';
      c.meanings.reversedMoney = 'Avoiding decisions. Integrate learning and try again.';
      break;
    case 'The World':
      c.meanings.reversedLove = 'Incomplete and stuck. Resolve unfinished endings.';
      c.meanings.reversedMoney = 'Projects incomplete. Finish through delivery and closure.';
      break;
    default:
      c.meanings.reversedLove = 'Reversed: realign the relationship slowly.';
      c.meanings.reversedMoney = 'Reversed: manage risk conservatively.';
  }
});

// Ensure schema matches requested shape: reversed_meanings: { love, money }
tarotCards.forEach((c) => {
  if (!c.reversed_meanings) {
    c.reversed_meanings = {
      love: c.meanings.reversedLove || '',
      money: c.meanings.reversedMoney || ''
    };
  }
});

// Game state
let selectedFortuneType = null;
let drawnCards = []; // entries: { card, reversed }
let currentCardIndex = 0;

// DOM elements
const drawBtn = document.getElementById('drawBtn');
const confirmBtn = document.getElementById('confirmBtn');
const restartBtn = document.getElementById('restartBtn');
const fortuneBtns = document.querySelectorAll('.fortune-btn');
const drawnCardsContainer = document.getElementById('drawnCards');
const resultCardsContainer = document.getElementById('resultCards');
const interpretationText = document.getElementById('interpretationText');
const fortuneTypeTitle = document.getElementById('fortuneTypeTitle');
const fortuneSelection = document.getElementById('fortuneSelection');
const remainingCounter = document.getElementById('remainingCounter');

// Event listeners
drawBtn.addEventListener('click', drawCard);
confirmBtn.addEventListener('click', showResults);
restartBtn.addEventListener('click', restartGame);

fortuneBtns.forEach(btn => {
    btn.addEventListener('click', () => selectFortuneType(btn.dataset.fortune));
});

function setDefaultFortuneIfNone() {
    if (!selectedFortuneType) {
        selectFortuneType('love');
    }
}

// Fortune type selection
function selectFortuneType(fortuneType) {
    selectedFortuneType = fortuneType;
    fortuneBtns.forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.fortune === fortuneType) btn.classList.add('selected');
    });
    updateConfirmButtonState();
}

function updateConfirmButtonState() {
    confirmBtn.disabled = !(drawnCards.length === 3 && !!selectedFortuneType);
}

function updateRemainingCounter() {
    const remaining = Math.max(0, 3 - drawnCards.length);
    remainingCounter.textContent = `Cards remaining: ${remaining}`;
}

// Draw a single card
function drawCard() {
    if (drawnCards.length >= 3) return;
    
    // Get random card that hasn't been drawn yet
    let availableCards = tarotCards.filter(card => 
        !drawnCards.some(drawn => drawn.card.id === card.id)
    );
    
    if (availableCards.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const selectedCard = availableCards[randomIndex];
    // 50% chance reversed
    const isReversed = Math.random() < 0.5;
    
    // Add to drawn cards
    drawnCards.push({ card: selectedCard, reversed: isReversed });
    
    // Create wrapper element containing the card and its name
    const drawnItem = createCardElement(selectedCard, isReversed, drawnCards.length - 1);
    drawnCardsContainer.appendChild(drawnItem);
    
    // Animate card appearance
    const innerCard = drawnItem.querySelector('.card');
        setTimeout(() => {
        innerCard.classList.add('drawing');
    }, 100);
    
    // Update deck appearance
    updateDeckAppearance();
    updateRemainingCounter();
    
    // If finished drawing all 3, reveal fortune selection
    if (drawnCards.length === 3) {
        drawBtn.disabled = true;
        if (fortuneSelection.classList.contains('hidden')) {
            fortuneSelection.classList.remove('hidden');
            // default select love when selection appears
            setDefaultFortuneIfNone();
        }
        updateConfirmButtonState();
    }
}

// Create card element with actual image and name label
function createCardElement(card, isReversed, index) {
    // Wrapper for layout and name
    const wrapper = document.createElement('div');
    wrapper.className = 'drawn-card' + (isReversed ? ' reversed' : '');

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.cardId = card.id;
    
    // Card back
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    // Card front with actual image
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    
    const cardImage = document.createElement('img');
    cardImage.src = encodeURI(card.image);
    cardImage.alt = card.name + (isReversed ? ' (Reversed)' : '');
    cardImage.style.width = '100%';
    cardImage.style.height = '100%';
    cardImage.style.objectFit = 'cover';
    cardImage.style.borderRadius = '12px';
    
    cardFront.appendChild(cardImage);
    
    cardDiv.appendChild(cardBack);
    cardDiv.appendChild(cardFront);

    // Name label
    const nameEl = document.createElement('div');
    nameEl.className = 'card-name';
    nameEl.textContent = card.name + (isReversed ? ' (Reversed)' : '');
    
    wrapper.appendChild(cardDiv);
    wrapper.appendChild(nameEl);
    
    // Removed badge per request; visual handled via background tint in CSS
    
    // Flip card after animation and reveal the name
    setTimeout(() => {
        cardDiv.classList.add('flipped');
        nameEl.classList.add('show');
    }, 800 + (index * 200));
    
    return wrapper;
}

// Update deck appearance as cards are drawn
function updateDeckAppearance() {
    const deck = document.getElementById('deck');
    const remainingCards = Math.max(0, 3 - drawnCards.length);

    // Always keep deck visible
    deck.innerHTML = '';

    for (let i = 0; i < Math.max(remainingCards, 1); i++) {
        const deckBack = document.createElement('div');
        deckBack.className = 'deck-back';
        deckBack.style.top = (i * 3) + 'px';
        deckBack.style.left = (i * 3) + 'px';
        deckBack.style.zIndex = (3 - i);
        deck.appendChild(deckBack);
    }

    // Toggle disabled visual state when no cards remain
    if (remainingCards === 0) {
        deck.classList.add('disabled');
    } else {
        deck.classList.remove('disabled');
    }
}

// Show results page
function showResults() {
    if (drawnCards.length !== 3 || !selectedFortuneType) return;
    
    // Update fortune type title
    const fortuneTypeText = selectedFortuneType === 'love' ? 'Love' : 'Money';
    fortuneTypeTitle.textContent = fortuneTypeText;
    
    // Display result cards
    displayResultCards();
    
    // Generate and display interpretation
    generateInterpretation();
    
    // Switch to page 2
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
}

// Display result cards
function displayResultCards() {
    resultCardsContainer.innerHTML = '';
    
    drawnCards.forEach(entry => {
        const { card, reversed } = entry;
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card' + (reversed ? ' reversed' : '');
        
        resultCard.innerHTML = `
            <img src="${encodeURI(card.image)}" alt="${card.name}${reversed ? ' (Reversed)' : ''}">
            <h4>${card.name}</h4>
        `; // Removed badge; reversed is indicated by overlay & rotation
        
        resultCardsContainer.appendChild(resultCard);
    });
}

// Helper: create a short snippet from a meaning
function getShortMeaning(text) {
    const trimmed = text.replace(/\s+/g, ' ').trim();
    // Try to take first sentence; fallback to first 40 chars
    const firstSentence = trimmed.split(/[.!?\n]/)[0];
    const candidate = firstSentence && firstSentence.length > 0 ? firstSentence : trimmed;
    return candidate.length > 42 ? candidate.slice(0, 42) + '…' : candidate;
}

// Generate fortune interpretation (concise, non-duplicative)
function generateInterpretation() {
    const type = selectedFortuneType;
    const label = type === 'love' ? 'Love' : 'Money';
    const [e1, e2, e3] = drawnCards; // {card, reversed}

    let html = '';
    html += `<strong>${label} Overall Reading</strong><br><br>`;
    html += `This spread is <em>${e1.card.name}${e1.reversed ? ' (R)' : ''}</em>, <em>${e2.card.name}${e2.reversed ? ' (R)' : ''}</em>, <em>${e3.card.name}${e3.reversed ? ' (R)' : ''}</em>. `;

    const m1 = e1.reversed ? e1.card.reversed_meanings[type] : e1.card.meanings[type];
    const m2 = e2.reversed ? e2.card.reversed_meanings[type] : e2.card.meanings[type];
    const m3 = e3.reversed ? e3.card.reversed_meanings[type] : e3.card.meanings[type];

    html += `${e1.card.name}${e1.reversed ? ' (reversed)' : ''} opens with "${getShortMeaning(m1)}", `;
    html += `${e2.card.name}${e2.reversed ? ' (reversed)' : ''} continues with "${getShortMeaning(m2)}", `;
    html += `and ${e3.card.name}${e3.reversed ? ' (reversed)' : ''} concludes with "${getShortMeaning(m3)}".`;

    html += `<br><br><strong>Guidance</strong><br>`;
    if (type === 'love') {
        html += `Favor calm conversations and mature choices over sudden emotion. Start one small action today or within a week.`;
    } else {
        html += `Prefer risk management and focus over reckless expansion. Choose one concrete action to execute today or within a week.`;
    }

    interpretationText.innerHTML = html;
}

// Restart game
function restartGame() {
    // Reset game state
    selectedFortuneType = null;
    drawnCards = [];
    currentCardIndex = 0;
    
    // Reset UI
    drawnCardsContainer.innerHTML = '';
    fortuneBtns.forEach(btn => btn.classList.remove('selected'));
    drawBtn.disabled = false; // allow drawing immediately
    confirmBtn.disabled = true;
    
    // Reset deck
    const deck = document.getElementById('deck');
    deck.innerHTML = `
        <div class="deck-back"></div>
        <div class="deck-back"></div>
        <div class="deck-back"></div>
    `;
    deck.style.display = 'block';
    
    // Hide fortune selection
    if (!fortuneSelection.classList.contains('hidden')) {
        fortuneSelection.classList.add('hidden');
    }

    // Switch back to page 1
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page1').classList.add('active');
    updateRemainingCounter();
}

// Initialize the game
function initGame() {
    // Preload all card images for smooth transitions
    tarotCards.forEach(card => {
        const img = new Image();
        img.src = encodeURI(card.image);
    });
    
    // Set initial button states
    drawBtn.disabled = false;
    // do not show selection yet; default will be applied when it appears
    updateConfirmButtonState();
    updateRemainingCounter();
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame);
