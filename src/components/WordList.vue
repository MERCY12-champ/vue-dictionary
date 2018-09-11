<template>
  <div id="word-list">
    <ul>
      <li v-for="word in words" :key="word.headword">
        <router-link :to="`/word/${ word.headword }`">
          <span class="word">{{ word.headword }}</span>
          <span class="word">{{ word.tag_translation }}</span>
          <span class="word">{{ word.eng_translation }}</span>
        </router-link>
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
  }
}
</script>

<style scoped>
.word {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
