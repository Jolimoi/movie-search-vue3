import { flushPromises, shallowMount } from '@vue/test-utils'

import App from '@/ex10/components/App.vue'
import Movie from '@/ex10/components/Movie.vue'
import Search from '@/ex10/components/Search.vue'

import { searchMovies } from '@/ex10/services/movie-api'

jest.mock('@/ex10/services/movie-api', () => ({
  searchMovies: jest.fn(),
}))

const factory = (options) => shallowMount(App, { ...options })

/**
 * ////////////////   Dans le fichier testTools.spec.js  //////////////////////
 * Le projet a été modifié pour afficher Recent lorsque le film est de l'année en cours.
 *
 * La fonction hasLessThanOneYear dans le fichier tools.js, il nous faut simuler la date car nous utilisons new Date().
 *
 * Le prochain 1er janvier, 2022 ne sera plus l'année en cours et notre test échouera. Pour ne pas se baser sur le Date du système,
 * nous utiliserons MockDatequi.
 *
 * Il faut faut faire 2 tests
 * hasLessThanOneYear retourne true quand on lui passe une date antéreur par rapport au 05/07/1994 avec un laps de temps entre les deux
 * de moins d'un an
 * hasLessThanOneYear returne false quand l'écart entre les dates est plus grand qu'un an.
 */

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
