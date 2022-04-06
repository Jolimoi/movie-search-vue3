import { shallowMount } from '@vue/test-utils'

import Movie from '@/ex5/components/Movie.vue'

describe('Testing App component', () => {
  const factory = (options) => shallowMount(Movie, { ...options })

  it('Given movie with a title, when the App component is mounted, then the title is displayed', async () => {
    const wrapper = await factory({
      propsData: {
        movie: {
          Title: 'Devoxx'
        },
      },
    })

    expect(wrapper.find('[data-test="title-movie"]').text()).toContain('Devoxx')
  })

  it('Given a movie with a year, when the App component is mounted, then the year is displayed', async () => {
    const wrapper = await factory({
      propsData: {
        movie: {
          Year: '2022',
        },
      },
    })

    expect(wrapper.find('[data-test="year-movie"]').text()).toBe('2022')
  })

  it('Given a movie with year containing a -, when the App component is mounted, then the year is displayed and -Now is added', async () => {
    const wrapper = await factory({
      propsData: {
        movie: {
          Year: '2022–',
        },
      },
    })

    expect(wrapper.find('[data-test="year-movie"]').text()).toBe('2022–Now')
  })
})
