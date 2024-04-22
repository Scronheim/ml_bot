const https = require('https')

exports.API_URL = 'http://185.125.202.224:3000'
exports.WEB_URL = 'http://185.125.202.224'

exports.countryFlagsMapper = {
  Russia: '🇷🇺',
  Ukraine: '🇺🇦',
  Belarus: '🇧🇾',
  Kazakhstan: '🇰🇿',
  Slovakia: '🇸🇰',
  Germany: '🇩🇪',
  Poland: '🇵🇱',
  Sweden: '🇸🇪',
  Finland: '🇫🇮',
  UK: '🇬🇧󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿',
  'United States': '🇺🇸',
  'United Kingdom': '🇬🇧',
  'UK & Europe': '🇬🇧 🇪🇺󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿',
  'USA & Europe': '🇺🇸 🇪🇺󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿',
  'UK, Europe & US': '🇬🇧 🇪🇺 🇺🇸󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿',
  'USA & Canada': '🇺🇸 🇨🇦󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿',
  Europe: '🇪🇺',
  Norway: '🇳🇴',
  Venezuela: '🇻🇪',
  Netherlands: '🇳🇱',
  Italy: '🇮🇪',
  Israel: '🇮🇱',
  'Czech Republic': '🇨🇿',
  Czechoslovakia: '🇨🇿',
  Iceland: '🇮🇸',
  Japan: '🇯🇵',
  US: '🇺🇸',
  Canada: '🇨🇦',
  'New Zealand': '🇳🇿',
  Australia: '🇦🇺',
  Austria: '🇦🇹',
  Spain: '🇪🇸',
  Belgium: '🇧🇪',
  Switzerland: '🇨🇭',
  France: '🇫🇷',
  Greece: '🇬🇷',
  Unknown: '❓',
  Worldwide: '🌍',
  International: '🌍',
  Mexico: '🇲🇽',
  Honduras: '🇭🇳',
  Brazil: '🇧🇷',
  China: '🇨🇳',
  Bolivia: '🇧🇴',
  Ireland: '🇮🇪',
  Ecuador: '🇪🇨',
  Hungary: '🇭🇺',
  Philippines: '🇵🇭',
  Azerbaijan: '🇦🇿',
  Mongolia: '🇲🇳',
  Taiwan: '🇹🇼',
  India: '🇮🇳',
  Argentina: '🇦🇷',
  Chile: '🇨🇱',
  Colombia: '🇨🇴',
  Indonesia: '🇮🇩',
  'Korea, South': '🇰🇷',
  'Korea, North': '🇰🇵',
}

exports.bandStatus = {
  '': 'Не выбрано',
  1: 'Активны',
  2: 'В заморозке',
  3: 'Распались',
  4: 'Неизвестно',
  5: 'Сменили название',
  6: 'Спорно',
}

exports.bandStatusMapper = {
  '': 'Не выбрано',
  'Changed name': 'Сменили название',
  Active: 'Активны',
  'Split-up': 'Распались',
  Unknown: 'Неизвестно',
  'On hold': 'В заморозке',
  Disputed: 'Спорно',
}

exports.axiosOptions = {
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
  timeout: 3000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0'
  }
}

exports.worldSides = {
  "": "Не выбрано",
  scandinavia: 'Скандинавия',
  cis: 'СНГ',
  britishIslands: 'Британские острова',
  balkans: 'Балканы',
  africa: 'Африка',
  northAmerica: 'Северная Америка',
  southAmerica: 'Южная Америка',
  australia: 'Австралия',
  eastAsia: 'Восточная Азия',
}

exports.genres = {
  "": "Не выбрано",
  blackMetal: 'Black metal',
  deathMetal: 'Death metal',
  doomMetal: 'Doom metal',
  thrashMetal: 'Thrash metal',
  heavyMetal: 'Heavy metal',
  powerMetal: 'Power metal',
  atmosphericBlack: 'Atmospheric black',
  melodicBlack: 'Melodic black',
  symphonicBlack: 'Symphonic black',
  postBlack: 'Post-black',
  rawBlack: 'Raw black',
  deathMetal: 'Death metal',
  atmosphericDeath: 'Atmospheric death',
  melodicDeath: 'Melodic death',
  symphonicDeath: 'Symphonic death',
  progressiveDeath: 'Progressive death',
  technicalDeath: 'Technical death',
  depressiveBlack: 'Depressive black',
  trueBlack: 'True black',
  slammingDeath: 'Slam',
  brutalDeath: 'Brutal death',
  atmosphericDoom: 'Atmospheric doom',
  funeralDoom: 'Funeral doom',
  doomDeath: 'Doom death',
  melodicDoom: 'Melodic doom',
  gothicMetal: 'Gothic metal',
  gothicRock: 'Gothic rock',
  heavyMetal: 'Heavy metal',
  powerMetal: 'Power metal',
}

exports.countries = {
  "": "Не выбрано",
  Russia: 'Россия',
  Ukraine: 'Украина',
  Belarus: 'Беларусь',
  Azerbaijan: 'Азербайджан',
  Kazakhstan: 'Казахстан',
  Kyrgyzstan: 'Кыргызстан',
  Tajikistan: 'Таджикистан',
  Uzbekistan: 'Узбекистан',
  Moldavia: 'Молдавия',
  Norway: 'Норвегия',
  Sweden: 'Швеция',
  Finland: 'Финляндия',
  'United Kingdom': 'Соединенное королевство',
  Ireland: 'Ирландия',
  Albania: 'Албания',
  Bulgaria: 'Болгария',
  'Bosnia and Herzegovina': 'Босния и Герцеговина',
  Greece: 'Греция',
  Romania: 'Румыния',
  'North Macedonia': 'Северная Македония',
  Serbia: 'Сербия',
  Slovenia: 'Словения',
  Türkiye: 'Турция',
  Croatia: 'Хорватия',
  Montenegro: 'Черногория',
  Algeri: 'Алжир',
  Angola: 'Ангола',
  Benin: 'Бенин',
  Botswana: 'Ботсвана',
  'Burkina Faso': 'Буркина Фасо',
  Burundi: 'Бурунди',
  Cameroon: 'Камерун',
  'Central African Republic': 'Центральноафриканская Республика',
  Chad: 'Чад',
  Comoros: 'Комора',
  Djibouti: 'Джибути',
  Egypt: 'Египет',
  'Congo, Democratic Republic of': 'Демократическая республика Конго',
  'Congo, Republic of': 'Республика Конго',
  'Equatorial Guinea': 'Экваториальная Гвинея',
  Australia: 'Австралия',
  Canada: 'Канада',
  'United States': 'США',
  Mexico: 'Мексика',
  Argentina: 'Аргентина',
  Bolivia: 'Боливия',
  Brazil: 'Бразилия',
  Venezuela: 'Венесуэла',
  Guyana: 'Гайана',
  Colombia: 'Колумбия',
  Paraguay: 'Парагвай',
  Peru: 'Перу',
  Suriname: 'Суринам',
  Uruguay: 'Уругвай',
  'Folkland Isnlands': 'Фолклендские острова',
  'French Guiana': 'Гвиана (Франция)',
  Chile: 'Чили',
  Ecuador: 'Эквадор',
  'South Georgia & South Sandwich Islands': 'Южная Георгия и Южные Сандвичевы Острова (Великобритания)',
  China: 'Китай',
  Japan: 'Япония',
  Mongolia: 'Монголия',
  'North Korea': 'Северная Корея',
  'South Korea': 'Южная Корея',
  Taiwan: 'Тайвань',
}

exports.TIMEOUT_ERROR = 'Сайт не ответил вовремя. Попробуйте ещё раз'