<template lang="pug">
section
  h2.product-header
    nuxt-link(class="product-header__link" to="/") Products >
    span.product-header__name {{ product.title }}
  div.product
    div.product__image
      img(:src="product.image" alt="" class="product__img")
    div.product__content
      p.product__description {{ product.description }}
      span.product__description Price: {{ product.price }}$
      span.product__description Category: {{ product.category }}
      span.product__description Rate: {{ product.rating.rate }}</span>
      span.product__description Count: {{ product.rating.count }}
</template>

<script>
export default {
  layout: 'empty',
  validate({ params }) {
    return (/^\d+$/.test(params.id) && params.id<=20);
  },
  async fetch({ store, params }) {
    await store.dispatch("products/fetchProduct", params.id);
  },
  computed: {
    product() {
      return this.$store.getters["products/product"];
    },
  },
  mounted(){
    window.addEventListener("load", () => localStorage.removeItem("filter-name"));
  }
};
</script>

<style lang="scss">
$product-header-color:darkblue;
$product-hover-link-color:lightblue;
.product {
  display: flex;
  justify-content: center;
  align-items: top;
  padding: 50px 20px;
  gap: 70px;
  &__image {
  max-width: 400px;
  width: 100%;
  flex-shrink: 1;
  }
  &__img {
  display: block;
  width: 100%;
  object-fit: contain;
  }
  &__content {
  flex-shrink: 4;
  padding-top: 10px;
  max-width: 600px;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  }
}
.product-header {
  color:$product-header-color;
  margin-top: 50px;
  &__name{
  font-size: 25px;
  line-height: 25px;
  font-weight: bold;
  padding: 30px;
  }
  &__link{
  font-size:20px;
  text-transform: uppercase;
  transition: color 0.5s;
    &:hover{
    color: $product-hover-link-color;
    }
  }
}
@media (max-width: 768px) {
  .product {
    flex-wrap: wrap;
  }
}
</style>
