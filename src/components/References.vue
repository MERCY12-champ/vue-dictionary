<template>
  <div>
    <h1>References</h1>
    <ul id="reference-list">
      <li v-for="(reference, index) in references" :key="index">
        {{ reference.authors }} ({{ reference.year }}). {{ reference.title }}.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'references',
  data () {
    return {
      references: [
        {
          authors: 'Perez, J. & Lim, A.',
          year: 2000,
          title: 'An Apple A Day Keeps The * Away'
        },
        {
          authors: 'Uy, K. & Cruz, B.',
          year: 1996,
          title: 'Talo Ng Maagap Ang Masipag'
        },
        {
          authors: 'Apollo, L. & Reyes, C.',
          year: 2002,
          title: 'Isang Kahig, Maraming Tuka'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
