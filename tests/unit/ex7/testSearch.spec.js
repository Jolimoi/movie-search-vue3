import { shallowMount } from '@vue/test-utils'

import Search from '@/ex7/components/Search'

const factory = (options) => shallowMount(Search, { ...options })

describe('Test Search component', () => {
  it('Search mounted', () => {
    const wrapper = factory()

    expect(wrapper.exists()).toBe(true)
  })

  it('Given the Search, when clicking on search button, then event is emmitted with the text', () => {
    const wrapper = factory()
    wrapper.find('[data-test="search"]').trigger('click')

    expect(wrapper.emitted('search')).toEqual([['']])
  })

  it('Given the Search of Batman, when clicking on search button, then event is emmitted with the text', () => {
    const wrapper = factory()
    wrapper.find('[data-test="search-text"]').setValue('Batman')
    wrapper.find('[data-test="search"]').trigger('click')

    expect(wrapper.emitted('search')).toEqual([['Batman']])
  })
})
