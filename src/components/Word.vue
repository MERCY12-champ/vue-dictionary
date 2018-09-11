<template>
  <div id="word">

    <section class="main">
      <div class="headword">{{ word.headword }}</div>
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
          <span class="language">
            {{ translation.language }}
          </span>
          <span class="definition">
            {{ translation.definition }}
          </span>
        </li>
      </ul>
    </section>

    <section>
      <div class="section-title">
        In A Sentence
      </div>
      <ul>
        <li v-for="sentence in word.sentences" :key="sentence.language">
          <span class="language">
            {{ sentence.language }}
          </span>
          <span class="sentence">
            {{ sentence.definition }}
          </span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
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
            definition: 'I eat blade for breakfast.'
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

section .section-title {
  background: #ddd;
  padding: 8px;
}

.main {
  text-align: center;
}

.headword {
  font-size: 300%;
}

.sub {
  font-size: 150%;
}

.part-of-speech {
  font-style: italic;
}

.definition,
.sentence {
  margin-left: 50px;
}

</style>
