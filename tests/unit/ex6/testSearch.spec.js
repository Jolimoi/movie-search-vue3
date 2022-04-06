import { shallowMount } from '@vue/test-utils'

import Search from '@/ex6/components/Search'

const factory = (options) => shallowMount(Search, { ...options })
/**
 *
 * Deux tests à écrire :
 *    l'un qui vérifie que le click sur le formulaire envoie bien l'évenement search vers le parent
 *    l'autre qui vérifie que le texte dans l'input est bien celui envoyé lors de l'envoie de l'évenement search
 *
 *
 * Tips :
 * Interagir avec le formulaire : https://test-utils.vuejs.org/guide/essentials/forms.html#setting-element-values
 * Tester le contenu de l'évènement search : https://test-utils.vuejs.org/guide/essentials/forms.html#triggering-events
 */
describe('Test Search component', () => {
  it('Search mounted', () => {
    const wrapper = factory()

    expect(wrapper.exists()).toBe(true)
  })
})
