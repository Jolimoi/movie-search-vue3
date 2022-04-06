import { flushPromises, mount } from '@vue/test-utils'

import App from '@/ex4/components/App.vue'

import * as moviesService from '@/ex4/services/movies.js'

jest.mock('@/ex4/services/movies.js', () => ({
  getMovies: jest.fn(),
}))
/**
 * But : Dans cette exercice, nous avons créer un nouveau composant Movie pour pouvoir tester plus facilement notre code.
 *
 * 1. Inspecter le code source de l'exercice 4 pour bien voir la différence entre Movie.vue et App.vue
 * 2. Essayer de lancer les tests
 * 3. Remplacer dans la ligne ci-dessous (ne pas oublier de modifier aussi l'import) mount par shallowMount
 * 4. Essayer de lancer les tests
 * 5. Fixer les tests en déplacement les tests liés à l'affichage des films dans le fichier testMovie.spec.js
 * 6. Ajouter un test dans ce fichier permettant de vérifier qu'au moins un composant Movie est présent - utilisation de findComponent(Movie)
 */
const factory = (options) => mount(App, { ...options })

describe('Testing App component', () => {
  beforeAll(() => {})

  beforeEach(() => {
    moviesService.getMovies.mockReturnValue()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('Testing app component', async () => {
    const wrapper = await factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('Given movie with a title, when the App component is mounted, then the title is displayed', async () => {
    moviesService.getMovies.mockReturnValue([
      {
        Title: 'Devoxx',
      },
    ])

    const wrapper = await factory()

    expect(wrapper.find('[data-test="title-movie"]').text()).toBe('Devoxx')
  })

  it('Given a movie with a year, when the App component is mounted, then the year is displayed', async () => {
    moviesService.getMovies.mockReturnValue([
      {
        Year: '2018',
      },
    ])

    const wrapper = await factory()

    expect(wrapper.find('[data-test="year-movie"]').text()).toBe('2018')
  })

  it('Given a movie with year containing a -, when the App component is mounted, then the year is displayed and -Now is added', async () => {
    moviesService.getMovies.mockReturnValue([
      {
        Year: '2016–',
      },
    ])

    const wrapper = await factory()

    expect(wrapper.find('[data-test="year-movie"]').text()).toBe('2016–Now')
  })

  it('Given a movie with a title, when the component is mounted, then first image alt contains the name of the film', async () => {
    moviesService.getMovies.mockReturnValue([
      {
        Title: 'Devoxx',
      },
    ])
    const wrapper = await factory()

    expect(wrapper.find('[data-test="image-movie"]').attributes('alt')).toContain('Devoxx')
  })

  it('Given a movie with a title, when the component is mounted, then first image source is img of the movie', async () => {
    moviesService.getMovies.mockReturnValue([
      {
        Poster: 'http://poster.url',
      },
    ])

    const wrapper = await factory()

    expect(wrapper.find('[data-test="image-movie"]').attributes('src')).toBe('http://poster.url')
  })
})
