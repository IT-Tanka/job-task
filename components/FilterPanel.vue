<template lang="pug">
div.filter-panel
  span.filter-panel__title FilterBy:
  div(v-for="filter in filterArr" :key="filter.filterArr" class="filter-panel__by" )
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
  &__by {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
