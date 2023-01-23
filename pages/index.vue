<template lang="pug">
section
  FilterPanel(:filterArr="filters"  @change="handleFilter($event.target)")
  ul.product__list
    li(class="product__item" v-for="product of products" :key="product.id")
      nuxt-link(class="product__link"  :to="'/'+ product.id" )
        product-card(:catalogProduct="product" )
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import FilterPanel from "../components/FilterPanel.vue";
import { mapGetters } from "vuex";
export default {
  components: { ProductCard, FilterPanel },
  async fetch({ store }) {
    if (store.getters["products/products"].length === 0) {
      await store.dispatch("products/fetchProducts");
    }
  },
  data: () => ({
    filters: ["men's clothing", "women's clothing", "electronics", "jewelery"],
  }),
  computed: {
    ...mapGetters({
      getFilter: "products/filter",
      products: "products/products",
    }),
  },
  methods: {
    handleFilter(filterCheckbox) {
      let filterChecked;
      filterCheckbox.checked ? (filterChecked = true) : (filterChecked = false);
      // set "filter" value depending on selected/unselected filter's checkbox
      this.$store.commit(
        "products/setFilter",
        filterChecked ? filterCheckbox.id : ""
      );
      // set router depending on selected/unselected filter's checkbox
      this.$router.push(filterChecked ? `?category=${this.getFilter}` : "/");
      // set "products" value
      this.$store.dispatch("products/fetchProducts");
    },
  },
  mounted() {
    // set router depending on "filter" value
    this.$router.push(this.getFilter ? `?category=${this.getFilter}` : "/");
  },
};
</script>

<style lang="scss">
.product__list {
  margin: 0 auto;
  padding: 0 0 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, calc(25% - 30px)));
  gap: 60px 30px;
  list-style: none;
  .product__item {
    width: 100%;
  }
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
