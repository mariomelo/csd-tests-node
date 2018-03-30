const getOptions = function() {
  return [
    {
      id: 1,
      description: 'Levanta Imediatamente sem nem mesmo se espreguiçar',
    },
    {
      id: 2,
      description: 'Liga a função soneca e volta a dormir por só mais 9 minutos',
    },
  ]
}

const getOutcome = function(humor, user_choice) {
  if (user_choice === 1) return 2
  else return -2
}

module.exports = {
  title: 'O Despertar de um programador',
  initialText:
    'São 6:15 da manhã de uma segunda-feira. Enquanto os primeiros raios de sol começam a trespassar a persiana metálica na janela seu despertador dá início à sinfonia do desespero em um crescendo insuportável. Nesse momento, você:',
  getOptions,
  getOutcome,
}
