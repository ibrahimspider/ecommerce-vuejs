<template>
  <div class="details">
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-4 col-12">
          <div class="img"><img :src="product.imageURL" /></div>
        </div>
        <div class="col-md-6 col-12">
          <h4>{{ product.name }}</h4>
          <h5>{{ category.categoryName }}</h5>
          <h6>
            {{ product.price }}
            <span>{{ Currency }}</span>
          </h6>
          <p>{{ product.description }}</p>
          <div class="d-flex flex-row justify-content-between">
            <div class="input-group col-md-3 col-4 p-0">
              <div class="input-group-prepend">
                <span class="input-group-text">Quantity</span>
              </div>
              <input type="number" class="form-control" v-model="quantity" />
            </div>
            <div class="input-group col-md-3 col-4 p-0">
              <button class="btn" @click="addToCaart">{{ addToCart }}</button>
            </div>
          </div>
          <div class="features pt-3">
            <h5>Features</h5>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Officia quas, officiis eius magni error magnam voluptatem</li>
              <li>
                nesciunt quod! Earum voluptatibus quaerat dolorem doloribus
              </li>
              <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
              <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
            </ul>
          </div>
          <div class="hr"></div>
          <div class="btn-box">
            <button class="btn" @click="addToWishlist">{{ wishList }}</button>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </div>
</template>
<script>
const swal = require("sweetalert");
import axios from "axios";

export default {
  data() {
    return {
      product: {},
      category: {},
      quantity: 1,
      Currency: "EGP",
      wishList: "Add To Wishlist",
      addToCart: "Add To Cart",
    };
  },
  props: ["products", "baseUrl", "categorys"],
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categorys.find(
      (category) => category.id == this.product.categoryId
    );
    this.token = localStorage.getItem("token");
  },
  methods: {
    addToWishlist() {
      if (!this.token) {
        //user is not logged in
        //show some error
        swal({
          text: "please log in to add item in wishlist",
          icon: "error",
        });
        return;
      }
      // add item to wishlist
      axios
        .post(`${this.baseUrl}wishlist/add?token=${this.token}`, {
          id: this.product.id,
        })
        .then((res) => {
          if (res.status === 201) {
            this.wishList = "Added To Wishlist";
            swal({
              title: "Good job!",
              text: "Added To Wishlist successfully",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    // add to cart
    addToCaart() {
      if (!this.token) {
        //user is not logged in
        //show some error
        swal({
          text: "please log in to add item in cart",
          icon: "error",
        });
        return;
      }
      // add to cart
      axios
        .post(`${this.baseUrl}cart/add?token=${this.token}`, {
          productId: this.id,
          quantity: this.quantity,
        })
        .then((res) => {
          if (res.status === 201) {
            this.wishList = "Added To Wishlist";
            swal({
              title: "Good job!",
              text: "produc added in Cart",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.details {
  padding-top: 120px;
  padding-bottom: 50px;
  .hr {
    width: 70%;
    margin: 20px auto;
    margin-top: 30px;
    height: 1px;
    background: #6f42c1;
  }
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    overflow: hidden;
    min-height: 200px;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    transition: all 500ms;
  }
  img:hover {
    transform: scale(1.1);
  }
  h4 {
    margin-bottom: 10px;
    font-weight: bolder;
    font-size: 25px;
    color: #a100e8;
  }
  h5 {
    color: #878585;
    font-size: 18px;
  }
  h6 {
    font-size: 20px;
    span {
      display: inline-block;
      padding-left: 3px;
      color: #e82e00;
      font-weight: normal;
      font-size: 16px;
    }
  }
  p {
    color: #555;
  }
  .features {
    h5 {
      color: #111;
      font-weight: bolder;
    }
    ul {
      list-style: none;
      padding: 0;
      padding-left: 10px;
    }
    li {
      line-height: 2;
      color: #d471ff;
      position: relative;
      padding-left: 20px;
      transition: all 300ms;
    }
    li:hover {
      color: #a100e8;
      padding-left: 25px;
    }
    li::after {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #a100e8;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 43%;
    }
  }
  .addto-cart {
    margin-left: 20px;
  }
  .btn {
    background: #6f42c1;
    color: #fff;
    transition: all 300ms;
    border: 1.5px solid #6f42c1;
  }
  .btn:hover {
    background: #fff;
    color: #6f42c1;
  }
}
</style>
