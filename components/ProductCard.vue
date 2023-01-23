<template lang="pug">
.product-card
  h2.product-card__title  {{ catalogProduct.title }}
    p(@click.prevent="openDescription($event)" class="product-card__description") {{ catalogProduct.description }}
  img(:src="catalogProduct.image" alt="" class="product-card__img")
  span.product-card__price {{ catalogProduct.price }}$
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    catalogProduct: {},
  },
  methods: {
    openDescription(event) {
      event.stopPropagation();
      event.target.classList.toggle("open");
    },
  },
};
</script>

<style scoped lang="scss">
$bg-card-color:white;
$border-card-color:rgba(0, 0, 0, 0.373);
$active-link-color:darkblue;
$hover-link-color:blue;
$bg-color:#f0fdff;
$shadow-color:rgba(13, 2, 0, 0.37);
.product-card {
  background-color: $bg-card-color;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  border: 1px solid $border-card-color;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
  height: 440px;
  transition: all 0.8s;
  &:hover {
  box-shadow: 2px 15px 20px 2px $shadow-color;
  }
  &__img {
    display: block;
    margin: auto;
    max-width: 140px;
    width: 100%;
    object-fit: contain;
  }
  &__title {
    position: relative;
    font-size: 16px;
  }
  &__description {
    max-width:100%;
    position: absolute;
    z-index:2;
    font-size: 16px;
    font-weight: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px 5px 1px 3px;
    transition: all 0.5s;
  }
  &__description:hover {
    color: $hover-link-color;
  }
  .open {
    color:$active-link-color;
    -webkit-line-clamp: unset;
    background-color: $bg-color;
    height: fit-content;
    max-height: 300px;
    overflow:scroll;
  }
}
</style>
