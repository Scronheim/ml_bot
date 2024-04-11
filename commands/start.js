const { searchBand } = require('./searchBand')
const { searchBandAlbum } = require('./searchAlbum')
const { answerWithAlbum } = require('../callbackQuery')

exports.start = async (ctx) => {
  const request = ctx.update.message.text.split('/start ')[1]
  if (request) {
    const temp = request.split('__')
    const bandName = temp[0].replaceAll('_', ' ')
    let albumName = ''
    if (temp[1]) {
      albumName = request.split('__')[1].replaceAll('_', ' ')
    }
    if (bandName && !albumName) {
      ctx.update.message.text = bandName
      return await searchBand(ctx)
    } else if (bandName && albumName) {
      const { data } = await searchBandAlbum(bandName, albumName)
      const searchedAlbum = data.aaData[0]
      const albumId = searchedAlbum[1].split('">')[0].split('/').pop()
      return await answerWithAlbum(ctx, albumId)
    }
  }
  return ctx.reply('Введите название группы, что бы получить информацию')
}
