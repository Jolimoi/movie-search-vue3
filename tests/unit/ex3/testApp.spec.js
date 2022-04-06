import { mount } from '@vue/test-utils'

import App from '@/ex3/components/App.vue'

import moviesService from '@/ex3/services/movies.js'

jest.mock('@/ex3/services/movies.js', () => ({
  getMovies: jest.fn(),
}))

const factory = (options) => mount(App, { ...options })

describe('Testing App component', () => {
  /** Initialisation du mock qui va nous permettre de renvoyer l'objet que l'on veut comme si il provenait du fichier servives/movies.js */

  beforeAll(() => {})

  beforeEach(() => {
    moviesService.getMovies.mockReturnValue([]) // Définition d'un tableau retour vide par defaut
  })

  afterEach(() => {
    jest.resetAllMocks() // Reset des mocks pour éviter des effets de bords entre les tests
  })

  afterAll(() => {
    jest.restoreAllMocks() // Restore des mocks pour les remettre complètement à 0
  })

  /**
   * Pour définir le remplacement, il faut utiliser :
   *  moviesService.getMovies.mockReturnValue(TableauVoulu)
   *
   * But : Faire passer tous les tests
   */

  it('Testing app component', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('Given movie with a title, when the App component is mounted, then the title is displayed', async () => {
    const wrapper = await factory()

    expect(wrapper.find('[data-test="title-movie"]').text()).toBe('Devoxx')
  })

  it('Given a movie with a year, when the App component is mounted, then the year is displayed', async () => {
    const wrapper = await factory()

    expect(wrapper.find('[data-test="year-movie"]').text()).toBe('2018')
  })

  it('Given a movie with year containing a -, when the App component is mounted, then the year is displayed and -Now is added', async () => {
    const wrapper = await factory()

    expect(wrapper.find('[data-test="year-movie"]').text()).toBe('2016–Now')
  })
  it('Given a movie with a title, when the component is mounted, then first image alt contains the name of the film', async () => {
    const wrapper = await factory()

    expect(wrapper.find('[data-test="image-movie"]').attributes('alt')).toContain('Devoxx2')
  })

  it('Given a movie with a title, when the component is mounted, then first image source is img of the movie', async () => {
    const wrapper = await factory()

    expect(wrapper.find('[data-test="image-movie"]').attributes('src')).toBe('http://poster.url')
  })
})
