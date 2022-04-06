import { shallowMount } from '@vue/test-utils'

import App from '@/ex5/components/App.vue'
import Movie from '@/ex5/components/Movie.vue'

const factory = (options) => shallowMount(App, { ...options })

/**
 *
 * Ceci est la correction de l'exercice 4 vous pouvez passer à l'exercice 6 :)
 *
 */
describe('Testing App component', () => {
  it('Testing app component', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('Given a moive, when the component is mounted, then a Component Movie should exist', async () => {
    const wrapper = await factory()

    expect(wrapper.findComponent(Movie).exists()).toBe(true)
  })
})
