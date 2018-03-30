const colors = require('colors')
const DeveloperDay = [require('./events/despertar'), require('./events/cafe')]
const {show} = require('./utils/event_helper')

const start = async () => {
  console.log('Iniciando o dia de testes do CSD')
  let humor = 10

  let index = 1
  for (var event of DeveloperDay) {
    humor = await show(index, event, humor)
    index++
  }

  console.log('-----------------------------------------------'.rainbow)
  console.log(`Humor final: ${humor}`.red.bold)
  console.log('-----------------------------------------------'.rainbow)
}

start()
