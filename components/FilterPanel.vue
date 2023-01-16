<template lang="pug">
div.filter-panel
  span.filter-panel__title FilterBy:
  list.filter-panel__list
    li(v-for="filter in filterArr" :key="filter.filterArr" class="filter-panel__item" )
      input(class="filter-panel__input" @change="$emit('change', $event)" type="checkbox" :id="filter")
      label(:for="filter") {{ filter }}
</template>

<script>
export default {
  name: "FilterPanel",
  props: {
    filterArr: {},
  },
  emits: ["change"],
};
</script>

<style lang="scss">
.filter-panel {
  margin-bottom: 30px;
  font-size: 20px;
  display: flex;
  padding: 20px;
  gap: 30px;
  flex-wrap: wrap;
  &__title{
    display:block;
    width:100%;
  }
  &__input {
    height: 25px;
    width: 25px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap:30px;
    justify-content: flex-start;
    align-items: center;
  }
  &__item {
    display: flex;
    gap: 15px;
  }
}
</style>
