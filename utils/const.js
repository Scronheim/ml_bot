const https = require('https')

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
}

exports.bandStatusMapper = {
  'Changed name': 'Сменили название',
  Active: 'Активны',
  'Split-up': 'Распались',
  Unknown: 'Неизвестно',
  'On hold': 'В заморозке',
}

exports.axiosOptions = {
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
  timeout: 3000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 YaBrowser/24.1.0.0 Safari/537.36'
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
}

exports.countries = {
  "": "Не выбрано",
  RU: 'Россия',
  UA: 'Украина',
  BY: 'Беларусь',
  AZ: 'Азербайджан',
  KZ: 'Казахстан',
  MD: 'Молдавия',
  NO: 'Норвегия',
  SE: 'Швеция',
  FI: 'Финляндия',
  GB: 'Соединенное королевство',
  IE: 'Ирландия',
  AL: 'Албания',
  BG: 'Болгария',
  BA: 'Босния и Герцеговина',
  GR: 'Греция',
  RO: 'Румыния',
  MK: 'Северная Македония',
  RS: 'Сербия',
  SI: 'Словения',
  TR: 'Турция',
  HR: 'Хорватия',
  ME: 'Черногория',
  DZ: 'Алжир',
  AO: 'Ангола',
  BJ: 'Бенин',
  BW: 'Ботсвана',
  BF: 'Буркина Фасо',
  BI: 'Бурунди',
  CM: 'Камерун',
  CF: 'Центральноафриканская Республика',
  TD: 'Чад',
  KM: 'Комора',
  DJ: 'Джибути',
  EG: 'Египет',
  CD: 'Демократическая республика Конго',
  CG: 'Республика Конг',
  GQ: 'Экваториальная Гвинея',
  AU: 'Австралия',
  CA: 'Канада',
  US: 'США',
  MX: 'Мексика',
  AR: 'Аргентина',
  BO: 'Боливия',
  BR: 'Бразилия',
  VE: 'Венесуэла',
  GY: 'Гайана',
  CO: 'Колумбия',
  PY: 'Парагвай',
  PE: 'Перу',
  SR: 'Суринам',
  UY: 'Уругвай',
  FK: 'Фолклендские острова',
  GF: 'Гвиана (Франция)',
  CL: 'Чили',
  EC: 'Эквадор',
  GS: 'Южная Георгия и Южные Сандвичевы Острова (Великобритания)',
  CN: 'Китай',
  JP: 'Япония',
  MN: 'Монголия',
  KP: 'Северная Корея',
  KR: 'Южная Корея',
  TW: 'Тайвань',
}