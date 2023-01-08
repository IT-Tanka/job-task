<template lang="pug">
ul.nav
  li.nav__item
    nuxt-link(exact no-prefetch active-class="active" to="/" class="nav__link") Products
  li.nav__item
    nuxt-link(active-class="active" to="/about" class="nav__link") About us

</template>

<style lang="scss">
.nav{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:50px;
  list-style: none;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  margin: 23px auto;

  &__link{
    color:grey;
    transition:color 0.5s;

    &:hover{
      color:blue;
    }
  }
  .active{
    color:darkblue;
  }
}
</style>
