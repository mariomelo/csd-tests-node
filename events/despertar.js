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
  if (user_choice === 3) console.log('ra')
  if (user_choice === 1)
    return {
      result: 2,
      message:
        '135 milissegundos. O despertador não toca mais. 2,3 segundos e você está de pé após um rápido movimento de kung-fu. O horário não é aquele que você está acostumado a acordar, mas você se adapta imediatamente, como água.',
    }
  else
    return {
      result: -2,
      message:
        'Sua trépida mão esquerda tenta em vão calar o smartphone, mas a insônia consumiu o melhor de suas habilidades motoras. As memórias da noite chuvosa de domingo são turvas, mas o sabor amargo de bile e azia constante antecipam como será essa longa segunda-feira.',
    }
}

module.exports = {
  title: 'O Despertar de um programador',
  initialText:
    'São 6:15 da manhã de uma segunda-feira. Enquanto os primeiros raios de sol começam a trespassar a persiana metálica na janela seu despertador dá início à sinfonia do desespero em um crescendo insuportável. Nesse momento, você:',
  getOptions,
  getOutcome,
}
