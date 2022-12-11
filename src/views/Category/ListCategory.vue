<template>
  <div class="container">
    <div class="text-center">
      <h3 class="title">{{ category.categoryName }}</h3>
      <h4>{{ msg }}</h4>
    </div>
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6"
        v-for="product of category.products"
        :key="product.id"
      >
        <ProductBox :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from "@/components/ProductBox.vue";

export default {
  props: ["categorys"],
  data() {
    return {
      category: {},
      id: null,
      msg: "",
    };
  },
  components: {
    ProductBox,
  },
  methods: {},
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categorys.find((category) => category.id == this.id);
    if (this.category.products.length == 0) {
      this.msg = "no products found";
    } else if (this.category.products.length == 1) {
      this.msg = "only 1 products found";
    } else {
      this.msg = this.category.products.length + " products found";
    }
  },
};
</script>
<style lang="scss" scoped>
.title {
  margin-top: 110px;
  color: #563d7c;
}
h4 {
  color: #686868;
  margin-bottom: 40px;
  font-size: 22px;
  font-weight: 300;
}
</style>
