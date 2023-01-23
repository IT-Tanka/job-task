<template lang="pug">
.filter-panel
  span.filter-panel__title FilterBy:
  ul.filter-panel__list
    li(v-for="filter in filterArr" :key="filter.filterArr" class="filter-panel__item" )
      input(ref="checkbox" :checked="storeFilter? filter == storeFilter: false" class="filter-panel__input" @change="resetCheckboxes($event.target);$emit('change', $event)" type="checkbox" :id="filter")
      label(:for="filter") {{ filter }}
</template>

<script>
export default {
  name: "FilterPanel",
  props: {
    filterArr: {},
  },
  emits: ["change"],
  methods:{
    resetCheckboxes(chosenCheckbox){
      // reset all filter's checkboxes except the selected one
      this.$refs.checkbox.forEach(el=>{
          if (el.checked && el!=chosenCheckbox) el.checked=!el.checked;
      });
    }
  },
  computed:{
    storeFilter(){
      return this.$store.getters["products/filter"]
    }
  },
};
</script>

<style scoped lang="scss">
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
