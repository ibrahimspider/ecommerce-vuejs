<template>
  <div class="container">
    <div class="text-center">
      <h1>Our Products</h1>
    </div>
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6"
        v-for="product in products"
        :key="product.id"
      >
        <ProductBox :product="product"></ProductBox>
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from "@/components/ProductBox.vue";
export default {
  props: ["products"],
  data() {
    return {};
  },
  components: {
    ProductBox,
  },
};
</script>
<style lang="scss" scoped>
h1 {
  padding-top: 90px;
  padding-bottom: 30px;
}
</style>
