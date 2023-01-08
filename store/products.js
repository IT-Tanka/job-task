export const state = () => ({
  products: [],
  product:{},
});

export const mutations = {
  setproducts(state, products) {
    state.products = products;
  },
  setproduct(state, product) {
    state.product = product;
  },
};

export const actions = {
  async fetchProducts({ commit }, param = "") {
    const products = await this.$axios.$get( `${param}`);
    commit("setproducts", products);
  },
  async fetchProduct({ commit }, param = "1") {
    const product = await this.$axios.$get(`${param}`);
    commit("setproduct", product);
  },
};

export const getters = {
  products: (s) => s.products,
  product: (s) => s.product,
};
