<template>
  <div class="footer">
    <div class="overlay">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-6">
            <h4>Get to Know Us</h4>
            <a href="">About Us</a>
            <a href="">Android App</a>
            <a href="">iOS App</a>
          </div>
          <div class="col-md-6">
            <h4>Connect With Us</h4>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterPage",
  setup() {},
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  min-height: 300px;
  height: 100%;
  position: relative;
  background: url("../assets/footer.jpeg") no-repeat;
  background-size: cover;
  background-position: top;
  margin-top: 50px;
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
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .mb {
      margin-bottom: 20px;
    }
    h4 {
      margin-bottom: 20px;
      font-size: 22px;
    }
    a {
      text-decoration: none;
      outline: none;
      line-height: 2;
      display: block;
      transition: all 400ms;
    }
    a:hover {
      color: #fff;
    }
  }
}
</style>
