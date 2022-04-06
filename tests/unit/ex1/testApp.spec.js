import { mount } from '@vue/test-utils'

import App from '@/ex1/components/App.vue'

describe('Testing App component', () => {
  it('Testing app component', async () => {
    const wrapper = await mount(App)

    expect(wrapper.exists()).toBe(true)
  })

  /**
   * Ecrire les tests suivants :
   *
   * Le titre Joker du film est affiché
   * L'année 2019 est affichée
   * La source de l'image est https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg
   * Le champ alt de l'image contient Joker
   *
   * Tips :
   * Structure du test :
   * 
   * it('nom de mon test'), async ()=> {
        const wrapper = await mount(App) //Wrapper contient le composant App
   * })
   *
   *
   * wrapper.find('[data-test="title-movie"]').text() => Permet de sélectionner le texte de l'élement ayant l'attribute data-test='title-movie'
   *
   * expect(value).toBe(expected)
   * expect(value).toContain(expected)
   *
   * 
   * Pour lancer les tests :
   * npm run test:ex1
   * 
   * Pour lacer l'application 
   * npm run serve:ex1
   */


})
