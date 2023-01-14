<template lang="pug">
section
  FilterPanel(:filterArr="filters"  @change="handleFilter($event.target)")
  ul.product__list
    li(class="product__item" v-for="product of products" :key="product.id")
      a(class="product__link" href="#"  @click.prevent="openProduct(product)")
        product-card(:catalogProduct="product")
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import FilterPanel from "../components/FilterPanel.vue";
export default {
  components: { ProductCard, FilterPanel },
  async fetch({ store }) {
    if (store.getters["products/products"].length === 0 ) {
      await store.dispatch("products/fetchProducts");
    }
  },
  data: () => ({
    filters:["men's clothing","women's clothing", "electronics", "jewelery"],
  }),
  computed: {
    products() {
      return this.$store.getters["products/products"];
    },
  },
  methods: {
    openProduct(product) {
      this.$router.push("/" + product.id);
    },
    handleFilter(filterCheckbox){
      let filterChecked=false;
      if (filterCheckbox.checked)
      {
        filterChecked= true;
        document.querySelectorAll(".filter-panel__input").forEach(el=>{
          if (el.checked && el!=filterCheckbox) el.checked=!el.checked;
        });
      }
      this.$store.commit("products/setFilter", filterChecked? filterCheckbox.id:'');
      this.$router.push(filterChecked? `?category=${this.$store.getters["products/filter"]}`:'/');
      this.$store.dispatch("products/fetchProducts", filterChecked? `category/${this.$store.getters["products/filter"]}`:'');
    },
  },
  mounted(){
    this.$router.push(this.$store.getters["products/filter"]? `?category=${this.$store.getters["products/filter"]}`:'/');
    if (this.$store.getters["products/filter"]){
      document.getElementById(`${this.$store.getters["products/filter"]}`).checked=true;
      }
      else {
        document.querySelectorAll(".filter-panel__input").forEach(el => el.checked=false);
      }
  }
};
</script>

<style>
.product__list {
  margin: 0 auto;
  padding: 0 0 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px,calc(25% - 30px)));
  gap: 60px 30px;
  list-style: none;
}
.product__item{
  width:100%;
}
@media (max-width: 1000px) {
  .product__list {
    grid-template-columns: repeat(
      auto-fit,
      minmax(100px, calc(33.3333333333% - 15px))
    );
    gap: 30px 20px;
  }
}
@media (max-width: 768px) {
  .product__list {
    grid-template-columns: repeat(auto-fit, minmax(100px, calc(50% - 15px)));
  }
}
@media (max-width: 467px) {
  .product__list {
    grid-template-columns: 100%;
  }
}
</style>
