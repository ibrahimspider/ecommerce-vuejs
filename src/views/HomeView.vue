<template>
  <!-- Start Header -->
  <div class="home">
    <div class="overlay">
      <div class="container text-center">
        <div class="info">
          <h2 class="header-title">Start Shoping</h2>
          <p>
            Simple Coding Market is for educational purposes only. It can be
            used by developers to learn about developing an ecommerce
            application complete with backend and frontend for Web and Android
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- end Header -->
  <!-- Start Top Categories -->
  <div class="container top-categories">
    <h3 class="title">Top Categories</h3>
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6"
        v-for="index in this.categorySize"
        :key="index"
      >
        <CategoryBox :category="categorys[index - 1]" />
      </div>
    </div>
  </div>
  <!-- end Top Categories -->
  <!-- Start Top product -->
  <div class="container top-product">
    <h3 class="title">Top Product</h3>
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6"
        v-for="index in this.productSize"
        :key="index"
      >
        <ProductBox :product="products[index - 1]" />
      </div>
    </div>
  </div>
  <!-- end Top product -->
</template>

<script>
import CategoryBox from "@/components/CategoryPage.vue";
import ProductBox from "@/components/ProductBox.vue";

export default {
  name: "HomeView",
  components: { CategoryBox, ProductBox },
  props: ["categorys", "products"],
  data: () => ({
    Currency: " EGP",
    categorySize: 0,
    productSize: 0,
  }),
  mounted() {
    this.categorySize = Math.min(8, this.categorys.length);
    this.productSize = Math.min(12, this.products.length);
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("../assets/header.jpeg") no-repeat;
  background-size: cover;
  background-position: top;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(110 0 255 / 40%);
    .info {
      max-width: 600px;
      padding: 30px 20px;
      margin: auto;
      margin-top: 80px;
    }
    .header-title {
      color: #e6e6e6;
      font-weight: bolder;
      font-size: 40px;
    }
    p {
      line-height: 1.9;
      color: #a5a5a5;
    }
  }
}
.top-categories {
  padding-top: 50px;
  padding-bottom: 50px;
}
.title {
  font-weight: bolder;
  text-align: center;
  max-width: 400px;
  margin: auto;
  background-color: #6f42c1;
  margin-bottom: 50px;
  padding: 10px 0;
  color: #fff;
  border-radius: 5px;
  border: 2px solid #6f42c1;
  transition: all 400ms;
}
.title:hover {
  background-color: #fff;
  color: #6f42c1;
}
.top-product {
  padding-top: 30px;
  padding-bottom: 50px;
}
</style>
