import { flushPromises, shallowMount } from '@vue/test-utils'

import App from '@/ex7/components/App.vue'
import Movie from '@/ex7/components/Movie.vue'
import Search from '@/ex7/components/Search.vue'

import { searchMovies } from '@/ex7/services/movie-api'

jest.mock('@/ex7/services/movie-api', () => ({
  searchMovies: jest.fn(),
}))
/**
 *
 * Faire en sorte que la méthode d'appel à l'API renvoie une erreur
 * Tester que le message d'erreur est bien affiché dans le composant App
 *
 * Tips :
 * https://jestjs.io/docs/mock-function-api -ne pas utiliser mockResolvedValue
 *
 */
const factory = (options) => shallowMount(App, { ...options })

describe('Testing App component', () => {
  beforeAll(() => {})

  beforeEach(() => {
    searchMovies.mockResolvedValue()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })
  it('Testing app component', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('Given the component mounted the api return a movie, when event search is emitted , then a Component Movie should exist', async () => {
    const wrapper = await factory()

    searchMovies.mockResolvedValue([
      {
        x: 1,
      },
    ])

    await wrapper.findComponent(Search).trigger('search', 'my movie search')

    await flushPromises()

    expect(wrapper.findComponent(Movie).exists()).toBe(true)
  })
})
