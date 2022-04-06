import MockDate from 'mockdate'

import * as tools from '@/ex11/helpers/tools'

describe('Testing tools', () => {
  beforeAll(() => {
    MockDate.set(new Date('1994-07-05'))
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('Given a release date less than one year, when calling hasLessThanOneYear, then return true', () => {
    const releaseDate = new Date('1994-01-01')

    expect(tools.hasLessThanOneYear(releaseDate)).toBe(true)
  })

  it('Given a release date more than one year, when calling hasLessThanOneYear, then return false', () => {
    const releaseDate = new Date('1991-02-20')
    expect(tools.hasLessThanOneYear(releaseDate)).toBe(false)
  })
})
