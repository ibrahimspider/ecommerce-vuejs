<template>
  <div class="box">
    <div class="image-box">
      <div class="overlay">
        <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }"
          >Show Details</router-link
        >
      </div>
      <img class="img" :src="product.imageURL" alt="card image" />
    </div>
    <div class="info">
      <h5>{{ product.name }}</h5>
      <span>{{ product.price }}</span>
      <p>{{ product.description }}</p>
      <router-link
        :to="{ name: 'EditProduct', params: { id: product.id } }"
        v-show="$route.name == 'ProductsView'"
      >
        <button class="btn btn-warning">Edit</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductBox",
  props: ["product"],
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  padding-bottom: 40px;
  min-height: 400px;
  overflow: hidden;
}
.info {
  padding: 0 15px;
  .btn {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  h5 {
    padding-top: 20px;
  }
  p {
    font-size: 13px;
    color: #555;
  }
  a {
    text-decoration: none;
    outline: none;
  }
}
.image-box {
  position: relative;
  width: 100%;
  height: 200px;
  display: block;
  background-color: #ddd;
  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 0;
    transition: all 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    a {
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      text-decoration: none;
      outline: none;
      background: rgba(2, 0, 5, 0.6);
      padding: 10px 20px;
      border-radius: 50px;
      display: inline-block;
      transition: all 300ms;
    }
    a:hover {
      background: #0060ff;
    }
  }
  .img {
    width: 100%;
    height: 100%;
  }
}
.image-box:hover {
  .overlay {
    height: 100%;
  }
}
</style>
