import { mount } from '@vue/test-utils'

import Movie from '@/ex4/components/Movie.vue'

const factory = (options) => mount(Movie, { ...options })

describe('Testing App component', () => {
  it('Testing app component', () => {
    const wrapper = factory({ propsData: { movie: {} } })
    expect(wrapper.exists()).toBe(true)
  })
})
