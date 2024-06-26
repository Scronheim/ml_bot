const { RegularMenu, RadioMenu } = require('telegraf-menu')

const { randomFilters, worldSidesFilters, countriesFilters, genreFilters, subGenreFilters, bandStatusFilters } = require('../filters')
const { formatSelectedFilters } = require('../utils/helpers')
const { answerWithBand, queryRandomBand } = require('../callbackQuery')

function initRandomMenu(ctx) {
  return new RegularMenu(
    {
      action: 'random',
      message: formatSelectedFilters(ctx),
      filters: randomFilters,
      replaceable: true,
      menuGetter: (menuCtx) => menuCtx.session.keyboardMenu,
      menuSetter: (menuCtx, menu) => menuCtx.session.keyboardMenu = menu,
      onChange(changeCtx, state) {
        switch (state) {
          case 'worldSide':
            return initWorldSidesMenu(changeCtx)
          case 'genre':
            return initGenreMenu(changeCtx)
          case 'status':
            return initStatusMenu(changeCtx)
          case 'searchRandomBand':
            return searchRandomBand(changeCtx)
          case 'clearRandomFilter':
            return clearRandomFilter(changeCtx)
        }
      },
    },
  ).sendMenu(ctx)
}

function initStatusMenu(ctx) {
  return new RadioMenu(
    {
      action: 'status',
      message: 'Выберите статус группы',
      filters: bandStatusFilters,
      replaceable: true,
      state: ctx.session.bandStatus,
      menuGetter: (menuCtx) => menuCtx.session.keyboardMenu,
      menuSetter: (menuCtx, menu) => menuCtx.session.keyboardMenu = menu,
      beforeChange(changeCtx, bandStatus) {
        bandStatus === 'clearStatusFilter' ? changeCtx.session.bandStatus = '' : changeCtx.session.bandStatus = bandStatus
      },
      onChange(submitCtx) {
        initRandomMenu(submitCtx)
      },
    },
  ).sendMenu(ctx)
}

function initWorldSidesMenu(ctx) {
  return new RadioMenu(
    {
      action: 'worldSide',
      message: 'Выберите регион для уточнения страны',
      filters: worldSidesFilters,
      replaceable: true,
      state: ctx.session.worldSide,
      menuGetter: (menuCtx) => menuCtx.session.keyboardMenu,
      menuSetter: (menuCtx, menu) => menuCtx.session.keyboardMenu = menu,
      beforeChange(changeCtx, worldSide) {
        if (worldSide === 'clearCountryFilter') {
          changeCtx.session.worldSide = ''
          changeCtx.session.country = ''
        } else {
          changeCtx.session.worldSide = worldSide
        }
      },
      onChange(submitCtx, worldSide) {
        if (worldSide !== 'clearCountryFilter') initCountryMenu(submitCtx)
        else initRandomMenu(submitCtx)
      },
    },
  ).sendMenu(ctx)
}

function initCountryMenu(ctx) {
  return new RadioMenu(
    {
      action: 'country',
      message: 'Выберите страну',
      filters: countriesFilters[ctx.session.worldSide],
      replaceable: true,
      state: ctx.session.country,
      menuGetter: (menuCtx) => menuCtx.session.keyboardMenu,
      menuSetter: (menuCtx, menu) => menuCtx.session.keyboardMenu = menu,
      beforeChange(changeCtx, country) {
        changeCtx.session.country = country
      },
      onChange(submitCtx) {
        initRandomMenu(submitCtx)
      },
    },
  ).sendMenu(ctx)
}

function initGenreMenu(ctx) {
  return new RadioMenu(
    {
      action: 'genre',
      message: 'Выберите жанр',
      filters: genreFilters,
      replaceable: true,
      state: ctx.session.genre,
      menuGetter: (menuCtx) => menuCtx.session.keyboardMenu,
      menuSetter: (menuCtx, menu) => menuCtx.session.keyboardMenu = menu,
      beforeChange(changeCtx, genre) {
        if (genre !== 'clearGenreFilter') {
          changeCtx.session.genre = genre
        } else {
          changeCtx.session.genre = ''
          changeCtx.session.subGenre = ''
        }
      },
      onChange(submitCtx, genre) {
        if (genre !== 'clearGenreFilter') initSubGenreMenu(submitCtx)
        else initRandomMenu(submitCtx)
      },
    },
  ).sendMenu(ctx)
}

function initSubGenreMenu(ctx) {
  return new RadioMenu(
    {
      action: 'genre',
      message: 'Выберите суб жанр',
      filters: subGenreFilters[ctx.session.genre],
      replaceable: true,
      state: ctx.session.subGenre,
      menuGetter: (menuCtx) => menuCtx.session.keyboardMenu,
      menuSetter: (menuCtx, menu) => menuCtx.session.keyboardMenu = menu,
      beforeChange(changeCtx, subGenre) {
        changeCtx.session.subGenre = subGenre
      },
      onChange(submitCtx) {
        initRandomMenu(submitCtx)
      },
    },
  ).sendMenu(ctx)
}

async function searchRandomBand(ctx) {
  const randomBand = await queryRandomBand(ctx)

  await answerWithBand(ctx, randomBand)

  await ctx.answerCbQuery()
}



function clearRandomFilter(ctx) {
  ctx.session.worldSide = ''
  ctx.session.country = ''
  ctx.session.genre = ''
  ctx.session.subGenre = ''
  ctx.session.bandStatus = ''
  initRandomMenu(ctx)
}


exports.initRandomMenu = initRandomMenu
exports.initWorldSidesMenu = initWorldSidesMenu
exports.initCountryMenu = initCountryMenu
exports.initGenreMenu = initGenreMenu
exports.initSubGenreMenu = initSubGenreMenu
exports.initStatusMenu = initStatusMenu
exports.clearRandomFilter = clearRandomFilter
exports.searchRandomBand = searchRandomBand