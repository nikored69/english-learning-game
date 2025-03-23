// Telegram Web App инициализация
window.Telegram.WebApp.ready();

const words = {
    "hello": "привет",
    "bye": "пока",
    "table": "стол",
    "chair": "стул",
    "TV": "телевизор",
    "cinema": "кинотеатр",
    "movie": "фильм",
    "bed": "кровать",
    "house": "дом",
    "pillow": "подушка",
    "blanket": "одеяло",
    "kitchen": "кухня",
    "wardrobe": "шкаф",
    "computer": "компьютер",
    "shop": "магазин",
    "coffee": "кофе",
    "tea": "чай",
    "clock": "часы",
    "time": "время",
    "keyboard": "клавиатура",
    "mouse": "мышь",
    "bottle": "бутылка",
    "can": "банка",
    "energy drink": "энергетик",
    "battery": "батарейка",
    "weather": "погода",
    "good": "хорошо",
    "bad": "плохо",
    "terrible": "ужасно",
    "beautiful": "красивый",
    "ugly": "некрасивый",
    "phone": "телефон",
    "car": "машина",
    "book": "книга",
    "read": "читать",
    "photo": "фотография",
    "mug": "кружка",
    "kettle": "чайник",
    "weapon": "оружие",
    "build": "строить",
    "window": "окно",
    "garden": "огород",
    "gate": "ворота",
    "lamp": "фонарь",
    "sofa": "диван",
    "armchair": "кресло",
    "curtains": "занавески",
    "bathroom": "ванная комната",
    "sink": "раковина",
    "dishes": "посуда",
    "eat": "кушать",
    "watch": "смотреть",
    "hanger": "вешалка",
    "sneakers": "кроссовки",
    "slippers": "шлёпки",
    "T-shirt": "футболка",
    "hat": "шапка",
    "nose": "нос",
    "eyes": "глаза",
    "mouth": "рот",
    "leg": "нога",
    "football": "футбол",
    "hand": "рука",
    "cat": "кот",
    "dog": "собака",
    "cow": "корова",
    "goat": "коза",
    "pig": "свинья",
    "duck": "утка",
    "chicken": "курица",
    "shoot": "стрелять",
    "policeman": "полицейский",
    "mirror": "зеркало",
    "rider": "всадник",
    "plane": "самолёт",
    "helicopter": "вертолёт",
    "truck": "грузовик",
    "bill": "счёт",
    "table": "таблица",
    "ingredients": "ингредиенты",
    "rug": "коврик",
    "charger": "зарядное устройство",
    "laptop": "ноутбук",
    "throw": "плед",
    "camera": "камера",
    "bag": "сумка",
    "asphalt": "асфальт",
    "rain": "дождь",
    "lightning": "молния",
    "thunder": "гром",
    "puddle": "лужа",
    "snow": "снег",
    "sun": "солнце",
    "moon": "луна",
    "game": "игра",
    "play": "играть",
    "ball": "мяч",
    "puck": "шайба",
    "tennis": "теннис",
    "volleyball": "волейбол",
    "eggplant": "баклажан",
    "tomato": "помидор",
    "cucumber": "огурец",
    "apple": "яблоко",
    "pear": "груша",
    "carrot": "морковь",
    "beet": "свёкла",
    "potato": "картофель",
    "cartoon": "мультфильм",
    "music": "музыка",
    "radio": "радио",
    "bus": "автобус",
    "bus stop": "автобусная остановка",
    "backpack": "портфель",
    "vacuum": "пылесос",
    "car wash": "автомойка",
    "toothbrush": "зубная щётка",
    "toothpaste": "зубная паста",
    "raspberry": "малина",
    "cherry": "вишня",
    "cleaning": "уборка",
    "website": "сайт",
    "intelligence": "интеллект",
    "art": "искусство"
};

let level = 1;
let allWords = Object.entries(words); // Полный неизменяемый список слов
let currentPairs = {};
let selectedEng = null;
let timer;
let timeLeft;

const engContainer = document.getElementById('english-words');
const rusContainer = document.getElementById('russian-words');
const timerDisplay = document.getElementById('timer');
const feedback = document.getElementById('feedback');

function startLevel() {
    // Очищаем текущие пары перед началом уровня
    currentPairs = {};
    
    // Устанавливаем количество пар: 5 на первом уровне, +1 на каждом следующем
    const pairsCount = 5 + (level - 1);
    const shuffledWords = allWords.sort(() => 0.5 - Math.random()); // Всегда берём из полного списка
    currentPairs = Object.fromEntries(shuffledWords.slice(0, Math.min(pairsCount, allWords.length)));
    
    // Устанавливаем время: 20 сек на первом уровне, +4 сек на каждом следующем
    timeLeft = 20 + (level - 1) * 4;
    
    // Отображаем уровень, время и количество пар
    timerDisplay.textContent = `Level ${level} | Time: ${timeLeft} | Pairs: ${Object.keys(currentPairs).length}`;
    renderWords();
    
    // Запускаем таймер
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function renderWords() {
    engContainer.innerHTML = '';
    rusContainer.innerHTML = '';
    
    const engWords = Object.keys(currentPairs);
    const rusWords = Object.values(currentPairs).sort(() => 0.5 - Math.random());
    
    engWords.forEach((word, idx) => {
        const div = document.createElement('div');
        div.className = 'word-box';
        div.textContent = word;
        div.dataset.idx = idx;
        div.addEventListener('click', () => selectEnglish(idx));
        engContainer.appendChild(div);
    });
    
    rusWords.forEach((word, idx) => {
        const div = document.createElement('div');
        div.className = 'word-box';
        div.textContent = word;
        div.dataset.word = word;
        div.addEventListener('click', () => checkPair(word));
        rusContainer.appendChild(div);
    });
}

function selectEnglish(idx) {
    if (selectedEng !== null) {
        engContainer.children[selectedEng].classList.remove('selected');
    }
    selectedEng = idx;
    engContainer.children[idx].classList.add('selected');
}

function checkPair(rusWord) {
    if (selectedEng === null) return;
    
    const engWord = Object.keys(currentPairs)[selectedEng];
    if (currentPairs[engWord] === rusWord) {
        showFeedback('✅');
        delete currentPairs[engWord];
        // Не уменьшаем allWords, чтобы пары оставались случайными
        
        if (Object.keys(currentPairs).length === 0) {
            level++;
            showFeedback('RESPECT+', 'respect');
            setTimeout(startLevel, 1000);
        } else {
            renderWords();
        }
    } else {
        showFeedback('❌');
    }
    selectedEng = null;
}

function showFeedback(text, className = '') {
    feedback.textContent = text;
    feedback.className = className;
    feedback.style.display = 'block';
    setTimeout(() => feedback.style.display = 'none', 500);
}

function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Level ${level} | Time: ${timeLeft} | Pairs: ${Object.keys(currentPairs).length}`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        feedback.textContent = 'ПОТРАЧЕНО';
        feedback.className = 'lost';
        feedback.style.display = 'block';
        setTimeout(() => {
            feedback.style.display = 'none';
            startLevel();
        }, 2000);
    }
}

startLevel();
