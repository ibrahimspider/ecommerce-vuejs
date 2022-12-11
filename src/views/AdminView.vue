<template>
  <div class="body">
    <div class="container">
      <div class="box shadow">
        <router-link :to="{ name: 'CategoryView' }">
          <button type="button" class="btn btn-warning">Admin Categorys</button>
        </router-link>
        <router-link :to="{ name: 'ProductsView' }">
          <button type="button" class="btn btn-warning">Admin Products</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
}
.box {
  max-width: 600px;
  background: #42b983;
  border-radius: 10px;
  padding: 50px 20px;
  margin: auto;
  a {
    outline: none;
    text-decoration: none;
    display: block;
    margin-bottom: 20px;
  }
  .btn {
    display: block;
    width: 90%;
    margin: auto;
    padding: 10px 0;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    color: #111 !important;
  }
  a:last-child {
    margin-bottom: 0;
  }
}
</style>
