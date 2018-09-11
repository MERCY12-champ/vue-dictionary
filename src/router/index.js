import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '@/components/Introduction'
import GrammarNotes from '@/components/GrammarNotes'
import References from '@/components/References'
import WordList from '@/components/WordList'
import Word from '@/components/Word'

Vue.use(VueRouter)

const routes = [
  { path: '/introduction', component: Introduction },
  { path: '/grammar', component: GrammarNotes },
  { path: '/references', component: References },
  { path: '/wordlist', component: WordList },
  { path: '/word/:headword', component: Word }
]

export default new VueRouter({
  routes: routes
})
