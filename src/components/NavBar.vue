<template>
  <nav class="navbar navbar-expand-lg">
    <div class="d-flex flex-grow-1">
      <a class="navbar-brand" href="#">
        <img src="@/assets/download.png" alt="logo" />
      </a>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
      <ul class="navbar-nav ms-auto flex-nowrap">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="link">Home</router-link>
        </li>
        <li class="nav-item dropdown-list">
          <a class="link" href="#">Categories</a>
          <ul class="dropdown-content">
            <li>
              <router-link :to="{ name: 'CategoryView' }"
                >Our Categories</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'AddCategory' }"
                >Add Categories</router-link
              >
            </li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown-list">
          <a class="link">Products</a>
          <ul class="dropdown-content">
            <li>
              <router-link :to="{ name: 'ProductsView' }"
                >Our Products</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'AddProduct' }"
                >Add Products</router-link
              >
            </li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown-list">
          <a class="link" href="#">Accounts</a>
          <ul class="dropdown-content">
            <li>
              <router-link v-if="!token" :to="{ name: 'SigninpView' }"
                >Sign In</router-link
              >
            </li>
            <li>
              <router-link v-if="!token" :to="{ name: 'SignupView' }"
                >Sign Up</router-link
              >
            </li>
            <li>
              <router-link v-if="token" :to="{ name: 'WishList' }"
                >Wishlist</router-link
              >
            </li>
            <li>
              <a href="" v-if="token" @click="signout">Sign Out</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="link" href="#">Contact Us</a>
        </li>
        <li class="nav-item cart">
          <router-link class="link" :to="{ name: 'CartView' }"
            ><font-awesome-icon
              icon="fa-solid fa-cart-shopping"
              size="xl"
              :style="{ color: '#6f42c1' }"
            />
            <span class="cart-num">{{ cartCount }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      token: null,
    };
  },
  props: ["cartCount"],
  methods: {
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      this.$emit("resetCartCount");
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
};
</script>
<style lang="scss">
.navbar {
  background-color: #fff;
  padding: 0 20px !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  a {
    text-decoration: none !important;
    outline: none !important;
  }
  .navbar-brand {
    img {
      height: auto;
      max-width: 145px;
    }
  }
  .cart-num {
    background-color: #fff;
    color: #6f42c1;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    font-size: 15px;
    margin-left: 10px;
    top: -9px;
  }
  .nav-item {
    padding-right: 14px;
    line-height: 80px;
    position: relative;
    padding-right: 14px;
    margin-right: 12px;
    margin-left: 17px;
    font-weight: 500;
    text-transform: capitalize;
    .link {
      position: relative;
      color: #333;
      font-weight: 600;
      font-size: 18px;
      transition: 400ms;
      transition: 0.4s;
    }
    .link:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -32.5px;
      height: 2px;
      width: 0%;
      background: #6f42c1;
      transition: 0.4s;
      transform: translateY(-50%);
      left: auto;
      left: 0;
    }
  }
  .nav-item:hover {
    .link:after {
      width: 100%;
    }
    .link {
      color: #6f42c1;
    }
  }
  .dropdown-list:hover:before {
    opacity: 0;
    background: #6f42c1;
  }
  .dropdown-list:hover:after {
    background: #6f42c1;
  }
  .dropdown-list:before {
    content: "";
    position: absolute;
    right: 3px;
    top: 44.5%;
    height: 10px;
    width: 2px;
    background: #333;
    transition: all 0.3s ease-in;
    margin-top: 0;
  }
  .dropdown-list:after {
    content: "";
    position: absolute;
    top: 40px;
    right: -1px;
    height: 2px;
    width: 10px;
    background: #333;
    transition: all 0.3s ease-in;
    margin-top: 0;
  }
}
.dropdown-content {
  position: absolute;
  text-align: left;
  min-width: 210px;
  margin: 0;
  padding: 0;
  list-style: none;
  left: 0;
  top: 101%;
  z-index: 9;
  transition: all 0.4s ease;
  background-color: #fff;
  display: none;
  li {
    color: #333;
    display: block;
    margin-left: 0;
    line-height: 22px;
    font-size: 15px;
    border-bottom: 1px solid #f5f5f5;
    transition: all 0.4s ease;
    a {
      display: block;
      padding: 10px 15px;
      white-space: nowrap;
      color: #333;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.4s ease;
      position: relative;
    }
  }
  li:hover {
    background: #ebebeb;
    a {
      color: #6f42c1;
      padding: 10px 20px 10px 20px;
    }
  }
}
.nav-item:hover > .dropdown-content {
  display: block;
}
.cart-list {
  position: absolute;
  top: 30px;
  right: 30px;
}
</style>
