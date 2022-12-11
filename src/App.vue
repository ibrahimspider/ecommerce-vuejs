<template>
  <nav-bar :cartCount="cartCount" @resetCartCount="resetCartCount" />
  <router-view
    v-if="categorys && products"
    :baseUrl="baseUrl"
    :categorys="categorys"
    :products="products"
    @fetchData="fetchData"
  ></router-view>
  <!--footer-->
  <FooterPage />
</template>
<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  data() {
    return {
      baseUrl: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categorys: null,
      cartCount: 0,
      token: null,
    };
  },
  components: { NavBar, FooterPage },
  methods: {
    async fetchData() {
      // api call to get the category
      await axios
        .get(this.baseUrl + "category/")
        .then((res) => {
          this.categorys = res.data;
        })
        .catch((err) => console.log("err", err));

      // api call to get the products
      await axios
        .get(this.baseUrl + "product/")
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log("err", err));

      // fetch cart items if token is paresnt logged in
      if (this.token) {
        axios
          .get(`${this.baseUrl}cart/?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.cartCount = result.cartItems.length;
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  a {
    outline: none;
    text-decoration: none;
  }
}
</style>
