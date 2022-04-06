import MockDate from 'mockdate'

import * as tools from '@/ex10/helpers/tools'

describe('Testing tools', () => {
  beforeAll(() => {
    MockDate.set(new Date('1994-07-05'))
  })

  afterAll(() => {
    MockDate.reset()
  })
})
