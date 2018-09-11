<template>
  <div id="word" class="main">
    <section class="jumbotron text-center">
      <div class="headword display-3">{{ word.headword }}</div>
      <div class="sub">
        <span class="part-of-speech">{{ word.speech }}</span>
        |
        <span class="pronunciation">{{ word.pronunciation }}</span>
      </div>
    </section>

    <section>
      <div class="section-title">
        Definition
      </div>
      <ul>
        <li v-for="translation in word.translations" :key="translation.language">
          <div class="row">
            <div class="col-2">
              {{ translation.language }}
            </div>
            <div class="col-10">
              {{ translation.definition }}
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section>
      <div class="section-title">
        In A Sentence
      </div>
      <ul>
        <li v-for="sentence in word.sentences" :key="sentence.language">
          <div class="row">
            <div class="col-md-2">
              {{ sentence.language }}
            </div>
            <div class="col-md-10">
              {{ sentence.definition }}
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
require('@/assets/css/bootstrap.min.css')

export default {
  name: 'word',
  data () {
    return {
      word: {}
    }
  },
  created: function () {
    // should fetch data from db
    // this object acts as the db
    const words = {
      tarem: {
        headword: 'tarem',
        speech: 'noun',
        pronunciation: 'ta-rem',
        translations: [
          {
            language: 'Tagalog',
            definition: 'patalim'
          },
          {
            language: 'English',
            definition: 'blade; arrow'
          }
        ],
        sentences: [
          {
            language: 'Tagalog',
            definition: 'Kumakain ako ng patalim sa agahan.'
          },
          {
            language: 'English',
            definition: 'I eat blades for breakfast.'
          }
        ]
      },
      piko: {
        headword: 'piko',
        speech: 'noun',
        pronunciation: 'pi-ko',
        translations: [
          {
            language: 'Tagalog',
            definition: 'daras / piko'
          },
          {
            language: 'English',
            definition: '-'
          }
        ],
        sentences: [
          {
            language: 'Tagalog',
            definition: 'Walang silbi ang pikong ito.'
          },
          {
            language: 'English',
            definition: 'This thing is useless.'
          }
        ]
      }
    }

    // Get dict entry of the headword
    const paramHeadword = this.$route.params.headword
    this.word = words[paramHeadword]
  }
}
</script>

<style scoped>
section {
  padding: 15px 60px;
}

li {
  list-style: none;
}

section .section-title {
  background: #ddd;
  padding: 8px;
  margin-bottom: 10px;
}

.part-of-speech {
  font-style: italic;
}
</style>
