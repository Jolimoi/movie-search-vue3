import { shallowMount } from '@vue/test-utils'

import App from '@/ex6/components/App.vue'
//import Movie from '@/ex6/components/Movie.vue'

/**
 *
 * Dans cet exercice, nous avons implémenter la recherche via :
 * - Un apper à une API externe (movie-api.js)
 * - Un nouveau composant Search comportant un champ input pour saisir le texte de la recherche ainsi qu'un bouton submit. La validation du formulaire
 * entraîne l'émission d'un event qui est intercepté dans le composant App par :
 *     <Search @search="handleSearch" />
 *
 * Ecrire 3 tests :
 *  deux test dans le fichier testSearch.spec.js
 *    l'un qui vérifie que le click sur le formulaire envoie bien l'évenement search vers le parent
 *    l'autre qui vérifie que le texte dans l'input est bien celui envoyé lors de l'envoie de l'évenement search
 * un test dans ce fichier (testApp.spec.js) qui va :
 *  - Définir le mock de l'appel à movie-api
 *  - Simuler une validation du formulaire
 *  - Vérifie que les données des films envoyés par le mock de l'appel à movie-api sont bien affichés
 *
 *Tips :
 * Regarder l'exercice 2 pour reprendre l'initialisation des mocks
 * Simuler l'envoi du l'évenement lors de l'utilisation de ShallowMount sur le composant parent :
 *  await wrapper.findComponent(Search).trigger('search', 'my movie search')
 * Contrairement aux exercices d'avant, la méthode de movie-api renvoie une promesse :
 * Il faut donc utiliser flushPromises() (à importer - qui provient de vue-test-utils) après avoir émis l'évenement et la méthode pour mocker les données pour garantir que toutes
 * les promesses ont été résolues
 * devient mockResolvedValue(monObject)
 *
 * Bonus : Refaire le test de ce fichier en utilisant Mount à la place de ShallowMount et en vérifiant que les données passées par l'API sont bien affichées
 */
const factory = (options) => shallowMount(App, { ...options })

describe('Testing App component', () => {
  it('Testing app component', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })
})
