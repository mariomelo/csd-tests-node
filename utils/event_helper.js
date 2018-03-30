const colors = require('colors')
const prompt = require('prompt')

const getUserInput = event => {
  return new Promise(resolve => {
    let max_option = -1,
      min_option = 1000

    prompt.message = 'Escolha uma opção'.cyan
    event.getOptions().forEach(option => {
      min_option = option.id > min_option ? min_option : option.id
      max_option = option.id < max_option ? max_option : option.id
    })

    prompt.start()
    prompt.get(
      [{name: 'option', required: true, type: 'number', description: `[${min_option}-${max_option}]`}],
      (error, result) => {
        if (result) resolve(result.option)
        else console.log(error.red)
      }
    )
  })
}

const goOn = () => {
  return new Promise(resolve => {
    prompt.message = 'Continue'
    prompt.start()
    prompt.get([{name: 'go', required: false, description: 'Pressione ENTER para continuar'}], () => resolve())
  })
}

module.exports = {
  show: async (index, event, humor) => {
    console.log('')
    console.log('')
    console.log('')
    console.log(`Capítulo ${index}: ${event.title}`.bold.blue)
    console.log('======================================================================'.bold.green.dim)
    console.log('')
    console.log(event.initialText.white.bold)
    console.log('')

    event.getOptions().forEach(option => {
      console.log(`${option.id}: ${option.description}`)
    })

    console.log('')

    let user_choice = await getUserInput(event)

    let outcome = event.getOutcome(humor, user_choice)
    let new_humor = humor + outcome.result

    console.log('')
    console.log(outcome.message.bold)
    console.log('')
    console.log(`Humor atual: ${new_humor.toString().extenso()}`.bold)
    console.log('')

    await goOn()

    return new_humor
  },
}
