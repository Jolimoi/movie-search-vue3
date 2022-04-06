import { mount } from '@vue/test-utils'

import App from '@/ex2/components/App.vue'

/**
 * Cette methode est utilisé pour facilité la création de notre wrapper dans les IT.
 */
const factory = (options) => mount(App, { ...options })

describe('Testing App component', () => {
  it('Testing app component', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('Given movie with a title, when the App component is mounted, then the title is displayed', async () => {
    const wrapper = await factory()

    expect(wrapper.find('[data-test="title-movie"]').text()).toBe('Joker')
  })

  it('Given a movie with a year, when the App component is mounted, then the year is displayed', async () => {
    const wrapper = await factory()

    expect(wrapper.find('[data-test="year-movie"]').text()).toBe('2019')
  })

  it('Given a movie with a title, when the component is mounted, then first image alt contains the name of the film', async () => {
    const wrapper = await factory()

    expect(wrapper.find('[data-test="image-movie"]').attributes('alt')).toContain('Joker')
  })

  it('Given a movie with a title, when the component is mounted, then first image source is img of the movie', async () => {
    const wrapper = await factory()

    expect(wrapper.find('[data-test="image-movie"]').attributes('src')).toBe(
      'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
    )
  })

  /**
   * Dans mon composant App j'ai :
   *  <p data-test="year-movie">{{ movie.Year }}<span v-if="isNotFinished(movie)">Now</span></p>
 et
     isNotFinished(movie) {
      return !!(movie.Year && movie.Year.match('–$'))
    },

   * Ainsi, si le champ Year de mon film finit par – (attention c'est un tiret large), alors le composant ajoute Now à la suite de movie.Year

    Comment peut on le tester ?

    //Presentation//
   */
})
