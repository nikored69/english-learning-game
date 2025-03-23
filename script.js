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
    "art": "искусство",
    "criminal": "преступник",
    "special forces": "спецназ",
    "capital": "столица",
    "soldier": "военный",
    "war": "война",
    "artillery": "артиллерия",
    "doctor": "врач",
    "ambulance": "скорая помощь",
    "institute": "институт",
    "university": "университет",
    "mall": "торговый центр",
    "bridge": "мост",
    "tank": "танк",
    "enemy": "противник",
    "friend": "друг",
    "neighbor": "сосед",
    "guest": "гость",
    "host": "хозяин",
    "son": "сын",
    "daughter": "дочь",
    "father": "отец",
    "mom": "мама",
    "grandfather": "дедушка",
    "grandmother": "бабушка",
    "aunt": "тётя",
    "uncle": "дядя",
    "cousin (male)": "двоюродный брат",
    "cousin (female)": "двоюродная сестра",
    "whiskey": "виски",
    "wine": "вино",
    "cognac": "коньяк",
    "hairdresser": "парикмахер",
    "market": "рынок",
    "wheel": "колесо",
    "disk": "диск",
    "engine": "двигатель",
    "gasoline": "бензин",
    "diesel fuel": "солярка",
    "diesel": "дизель",
    "flying saucer": "летающая тарелка",
    "I don't know": "не знаю",
    "I know": "знаю",
    "why": "почему",
    "what for": "зачем",
    "what": "что",
    "who": "кто",
    "whom": "кого",
    "where": "где",
    "when": "когда",
    "today": "сегодня",
    "tomorrow": "завтра",
    "yesterday": "вчера",
    "day before yesterday": "позавчера",
    "year": "год",
    "day": "день",
    "week": "неделя",
    "century": "век",
    "month": "месяц",
    "era": "эра",
    "lemonade": "лимонад",
    "perfume": "парфюм",
    "cream": "крем",
    "shampoo": "шампунь",
    "baby food": "детское питание",
    "knife": "нож",
    "pistol": "пистолет",
    "rifle": "автомат",
    "soda": "сода",
    "water": "вода",
    "soap": "мыло",
    "wall": "стена",
    "roof": "крыша",
    "floor": "этаж",
    "agree": "согласен",
    "disagree": "не согласен",
    "drive": "ехать",
    "driver": "водитель",
    "painting": "картина",
    "napkin": "салфетка",
    "summer": "лето",
    "winter": "зима",
    "autumn": "осень",
    "want": "хочу",
    "look": "смотрю",
    "count": "считаю",
    "pants": "штаны",
    "jacket": "куртка",
    "photographer": "фотограф",
    "camera": "фотоаппарат",
    "operator": "оператор",
    "video camera": "видеокамера",
    "director": "режиссёр",
    "star": "звезда",
    "sand": "песок",
    "stone": "камень",
    "scissors": "ножницы",
    "paper": "бумага",
    "one": "один",
    "two": "два",
    "three": "три",
    "four": "четыре",
    "five": "пять",
    "six": "шесть",
    "seven": "семь",
    "eight": "восемь",
    "nine": "девять",
    "ten": "десять",
    "cafe": "кафе",
    "restaurant": "ресторан",
    "hotel": "гостиница",
    "sauna": "баня",
    "meat": "мясо",
    "fish": "рыба",
    "insects": "насекомые",
    "ocean": "океан",
    "sculpture": "скульптура",
    "gym": "тренажёрный зал",
    "cake": "торт",
    "waffle": "вафля",
    "cookie": "печенье",
    "syrup": "сироп",
    "milk": "молоко",
    "chocolate": "шоколад",
    "socks": "носки",
    "work": "работа",
    "many": "много",
    "apartment": "квартира",
    "door": "дверь",
    "icon": "икона",
    "factory": "завод",
    "machine": "станок",
    "machine gun": "пулемёт",
    "shotgun": "дробовик",
    "horror": "ужасы",
    "comedy": "комедия",
    "wedding": "свадьба",
    "bracelet": "браслет",
    "tattoo": "татуировка",
    "chain": "цепь",
    "event": "событие",
    "interview": "собеседование",
    "office": "офис",
    "paint": "краска",
    "traffic jam": "пробка",
    "word": "слово",
    "letter": "буква",
    "page": "страница",
    "stairs": "лестница",
    "shashlik": "шашлык",
    "salad": "салат",
    "vitamin": "витамин",
    "sky": "небо",
    "space": "космос",
    "question": "вопрос",
    "rocket": "ракета",
    "glove": "перчатка",
    "repair": "ремонт",
    "floors": "полы",
    "man": "мужчина",
    "woman": "женщина",
    "novel": "роман",
    "story": "рассказ",
    "poems": "стихи",
    "poet": "поэт",
    "president": "президент",
    "country": "страна",
    "city": "город",
    "village": "деревня"
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
