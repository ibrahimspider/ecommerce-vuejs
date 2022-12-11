<template>
  <div class="container">
    <div class="text-center">
      <h1>Wishlist</h1>
    </div>
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6"
        v-for="product of products"
        :key="product.id"
      >
        <ProductBox :product="product"></ProductBox>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ProductBox from "@/components/ProductBox.vue";

export default {
  props: ["baseUrl"],
  data() {
    return {
      token: null,
      products: null,
    };
  },
  components: {
    ProductBox,
  },
  methods: {
    fetchWishlist() {
      axios
        .get(`${this.baseUrl}wishlist/${this.token}`)
        .then((data) => {
          this.products = data.data;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchWishlist();
  },
};
</script>
<style lang="scss" scoped>
h1 {
  padding-top: 110px;
  padding-bottom: 40px;
}
</style>
