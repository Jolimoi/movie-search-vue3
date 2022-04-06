import { flushPromises, shallowMount } from '@vue/test-utils'

import App from '@/ex9/components/App.vue'
import Movie from '@/ex9/components/Movie.vue'
import Search from '@/ex9/components/Search.vue'

import { searchMovies } from '@/ex9/services/movie-api'

/**
 * Maintenant nous allons voir pour tester et mock des dates
 * Vous pouvez aller dans le dossier ex10 afin de trouver le code à jours
 *
 */
jest.mock('@/ex9/services/movie-api', () => ({
  searchMovies: jest.fn(),
}))

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

  it('Given a search, when the search api return an error, then the error message is printed to the user', async () => {
    const wrapper = await factory()

    searchMovies.mockRejectedValue(new Error('Async error'))

    await wrapper.findComponent(Search).trigger('search', 'my movie search')

    await flushPromises()

    expect(wrapper.find("[data-test='error']").text()).toBe('Error: Async error')
  })
})
