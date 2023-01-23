export const state = () => ({
  products: [],
  product:{},
  filter:'',
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setProduct(state, product) {
    state.product = product;
  },
  setFilter(state, filter) {
    state.filter = filter;
  },
};

export const actions = {
  async fetchProducts({getters, commit }) {
    const products = await this.$axios.$get(getters.filter?`category/${getters.filter}`:``);
    commit("setProducts", products);
  },
  async fetchProduct({ commit }, productId) {
    const product = await this.$axios.$get(`${productId}`);
    commit("setProduct", product);
  },
};

export const getters = {
  products: (s) => s.products,
  product: (s) => s.product,
  filter: (s) => s.filter
};
