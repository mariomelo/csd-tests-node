const despertar = require('../events/despertar')

const INITIAL_HUMOR = 0
const WAKEUP = 1
const SNOOZE = 2

describe('Ao despertar, o desenvolvedor', () => {
  it('deve acordar bem disposto caso levante rapidamente', () => {
    let result = despertar.getOutcome(INITIAL_HUMOR, WAKEUP)

    expect(result).toEqual(2)
  })

  it('deve ficar de mau-humor caso ligue o soneca', () => {
    let result = despertar.getOutcome(INITIAL_HUMOR, SNOOZE)

    expect(result).toEqual(-2)
  })
})
