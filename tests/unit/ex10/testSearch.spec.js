import { shallowMount } from '@vue/test-utils'

import Search from '@/ex10/components/Search'

const factory = (options) => shallowMount(Search, { ...options })

const SearchObj = {
  launchSearch: (wrapper, text) => {
    if (text !== undefined) wrapper.find('[data-test="search-text"]').setValue(text)
    wrapper.find('[data-test="search"]').trigger('click')
  },
  getValueEmitted: (wrapper) => {
    return wrapper.emitted('search')
  },
}
describe('Test Search component', () => {
  it('Search mounted', () => {
    const wrapper = factory()

    expect(wrapper.exists()).toBe(true)
  })

  it('Given the Search, when clicking on search button, then event is emmitted with the text', () => {
    const wrapper = factory()

    SearchObj.launchSearch(wrapper)
    expect(SearchObj.getValueEmitted(wrapper)).toEqual([['']])
  })

  it('Given the Search of Batman, when clicking on search button, then event is emmitted with the text', () => {
    const wrapper = factory()

    SearchObj.launchSearch(wrapper, 'Batman')
    expect(SearchObj.getValueEmitted(wrapper)).toEqual([['Batman']])
  })
})
