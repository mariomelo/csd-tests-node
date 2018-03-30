const traffic_helper = require('../utils/traffic_helper')

const getOptions = function() {
  return [
    {
      id: 1,
      description: 'Retirar o fusca 83 da garagem',
    },
    {
      id: 2,
      description: 'Pegar o ônibus, já que o metrô está novamente de greve',
    },
  ]
}

const getOutcome = function(humor, user_choice) {
  //if(traffic_helper.isJammed())
}

module.exports = {
  title: 'O ataque dos carros',
  initialText:
    'São 7h30. O trânsito reflete o caos em cada gota da garoa, e a brisa úmida que sopra por baixo de seu crachá tem cheiro de engarrafamento. Você olha para sua garagem e opta por:',
  getOptions,
  getOutcome,
}
