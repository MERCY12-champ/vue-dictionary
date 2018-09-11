<template>
  <div id="word-list">
    <h1> Word List </h1>
    <ul>
      <li v-for="category in categories" :key="category.name">
        <h3 class="alert alert-primary">{{ category.name }}</h3>
        <ul class="list-group">
          <li v-for="word in category.words" :key="word.headword" class="list-group-item list-group-item-action">
            <router-link :to="`/word/${ word.headword }`">
              <div class="row">
                <div class="col-md-4">{{ word.headword }}</div>
                <div class="col-md-4">{{ word.tag_translation }}</div>
                <div class="col-md-4">{{ word.eng_translation }}</div>
              </div>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'wordlist',
  data () {
    return {
      lastUpdate: '',
      categories: [
        {
          name: 'Tools',
          words: [
            {
              headword: 'tarem',
              tag_translation: 'patalim',
              eng_translation: 'blade'
            },
            {
              headword: 'piko',
              tag_translation: 'piko',
              eng_translation: 'adze'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
li {
  list-style: none;
}
</style>
