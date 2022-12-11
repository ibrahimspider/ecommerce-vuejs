<template>
  <div class="box text-center shadow">
    <div class="img">
      <img class="img" :src="category.imageUrl" />
    </div>
    <div class="info">
      <router-link :to="{ name: 'ListCategory', params: { id: category.id } }">
        <h3 class="title">{{ category.categoryName }}</h3>
      </router-link>
      <p>{{ category.description }}</p>
      <router-link
        :to="{ name: 'EditCategory', params: { id: category.id } }"
        v-show="$route.name == 'CategoryView'"
      >
        <button class="btn btn-warning">Edit</button>
      </router-link>
    </div>
  </div>
</template>
<script>
//const axios = require("axios");

export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {},
};
</script>
<style lang="scss" scoped>
.box {
  background: #fff;
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 20px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  min-height: 340px;
  .img {
    position: relative;
    overflow: hidden;
    max-height: 150px;
    img {
      width: 100%;
      min-width: 100%;
      min-height: 150px;
      height: 100%;
      transition: transform 0.6s;
      background: #ddd;
    }
    a {
      color: #000;
    }
  }
  .img:hover {
    img {
      transform: scale(1.1);
    }
  }
  .info {
    padding: 0 20px;
    p {
      color: #6f6f6f;
      font-size: 15px;
    }
  }
  .title {
    margin: 0;
    padding: 10px;
    color: #3e2c6a;
    font-size: 20px;
  }
}
</style>
