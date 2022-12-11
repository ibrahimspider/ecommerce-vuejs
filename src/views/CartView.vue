<template>
  <div class="container">
    <h2>Shopping cart</h2>
    <div
      class="cart-items shadow"
      v-for="cartItem in cartItems"
      :key="cartItem.id"
    >
      <div class="row">
        <div class="col-md-5">
          <div class="image">
            <img :src="cartItem.product.imageURL" alt="" />
          </div>
        </div>
        <div class="col-md-7">
          <h5 class="name">
            <router-link
              :to="{ name: 'ShowDetails', params: { id: cartItem.product.id } }"
            >
              {{ cartItem.product.name }}
            </router-link>
          </h5>
          <p class="price">
            {{ cartItem.product.price }}
            <span>{{ Currency }}</span>
          </p>
          <div class="d-flex flex-row justify-content-between">
            <div class="col-md-6 col-6 p-0">
              <div class="input-group-prepend">
                <span class="input-group-text">Quantity</span>
                <input
                  type="number"
                  class="form-control"
                  v-model="cartItem.quantity"
                />
              </div>
            </div>
            <div class="col-md-6 col-6 p-0">
              <p class="total-price">
                Total Price:
                <span>
                  {{ cartItem.product.price * cartItem.quantity }}
                  {{ Currency }}
                </span>
              </p>
            </div>
          </div>
          <a class="btn" @click="deleteItem(cartItem.id)"> Remove From Cart </a>
        </div>
      </div>
    </div>
    <div class="total-cost">
      <h5>
        Total : {{ totalCost.toFixed(2)
        }}<span>
          {{ Currency }}
        </span>
      </h5>
      <button class="btn">Confirm Order</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      cartItems: [],
      token: null,
      totalCost: 0,
      Currency: "EGP",
    };
  },
  props: ["baseUrl"],
  methods: {
    // fetch all items in cart
    ListCartItems() {
      axios
        .get(`${this.baseUrl}cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartItems = result.cartItems;
          this.totalCost = result.totalCost;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    deleteItem(itemId) {
      axios
        .delete(`${this.baseUrl}cart/delete/${itemId}/?token=${this.token}`)
        .then((res) => {
          if (res.status == 200) {
            this.$router.go(0);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.ListCartItems();
  },
};
</script>
<style lang="scss" scoped>
h2 {
  padding-top: 20px;
  padding-bottom: 50px;
  text-align: center;
}
.total-cost {
  padding: 20px 0;
  text-align: right;
  border-top: 1px solid #ddd;
  margin-top: 45px;
  h5 {
    color: #484848;
    font-weight: 700;
    span {
      display: inline-block;
      padding-left: 5px;
      color: #e82e00;
      font-weight: normal;
      font-size: 16px;
    }
  }
  .btn {
    margin-top: 10px;
    background-color: #6f42c1;
    color: #fff;
  }
}
.cart-items {
  max-width: 740px;
  margin: auto;
  margin-bottom: 20px;
  padding: 30px 20px;
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    overflow: hidden;
    min-height: 200px;
    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
      transition: all 500ms;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
  h5 > a {
    margin-bottom: 10px;
    font-size: 20px;
    color: #a100e8;
    font-weight: bolder;
  }
  .price {
    font-size: 20px;
    font-weight: bolder;
    span {
      display: inline-block;
      padding-left: 3px;
      color: #e82e00;
      font-weight: normal;
      font-size: 16px;
    }
  }
  .total-price {
    font-size: 15px;
    font-weight: bolder;
    padding-top: 5px;
    text-align: right;
    span {
      display: inline-block;
      padding-left: 3px;
      color: #e82e00;
      font-weight: normal;
      font-size: 14px;
    }
  }
  .form-control {
    width: 60px;
    display: inline-block;
    border: none;
  }
  .input-group-text {
    display: inline-block;
    background: #6f42c1;
    border: none;
    color: #fff;
  }
  .btn {
    transition: all 300ms;
    background: red;
    color: #fff;
    margin-top: 40px;
  }
  .btn:hover {
    background: #fe2929;
    margin-left: 5px;
  }
}
</style>
