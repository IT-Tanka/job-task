<template lang="pug">
section
  h1 Error 404
  nuxt-link(to="/") Products
</template>

<style scoped lang="scss">
  section {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding-top: 5rem;
    h1 {
      color: red;
      font-size: 25px;
    }
  }
</style>

