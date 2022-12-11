<template>
  <div class="signin">
    <div class="container">
      <div class="text-center">
        <h3>Sign In</h3>
      </div>
      <div class="form-box shadow">
        <form @submit="signin">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              required
            />
          </div>
          <button type="submit" class="btn">Sign In</button>
        </form>
        <div class="hr"></div>
        <div class="text-center">
          <p class="small">New to Simplecoding?</p>
          <router-link :to="{ name: 'SignupView' }"
            >Create Your Account</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const swal = require("sweetalert");

export default {
  props: ["baseUrl"],
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
      const body = {
        email: this.email,
        password: this.password,
      };
      await axios
        .post(`${this.baseUrl}user/signIn`, body)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          swal({
            title: "Good job!",
            text: "Login successfully",
            icon: "success",
          });
          this.$emit("fetchData");
          this.$router.push({ name: "home" });
        })
        .catch((err) => console.log("err", err));
    },
  },
};
</script>
<style lang="scss" scoped>
.signin {
  padding-top: 120px;
  padding-bottom: 40px;

  h3 {
    margin-bottom: 40px;
  }

  .form-box {
    max-width: 450px;
    background: #fff;
    border-radius: 10px;
    padding: 35px 20px;
    margin: auto;
    .form-group {
      position: relative;
      margin-bottom: 25px;
      label {
        position: absolute;
        left: 20px;
        top: 10px;
        position: absolute;
        left: 10px;
        top: -11px;
        background: #fff;
        padding: 0 5px;
        color: #6f42c1;
      }
    }
    .box-two > label {
      left: 14px;
    }
  }
  .hr {
    background: #6f42c1;
    height: 1px;
    width: 70%;
    margin: 25px auto;
  }
  .small {
    font-size: 14px;
    text-align: center;
    color: #6c757d;
    margin-bottom: 5px;
  }
  .btn {
    background: #6f42c1;
    color: #fff;
    transition: all 300ms;
    border: 1.5px solid #6f42c1;
  }
  a {
    display: inline-block;
    padding: 6px 15px;
    background: #6f42c1;
    color: #fff;
    border-radius: 5px;
    transition: all 300ms;
    border: 1.5px solid #6f42c1;
  }
  .btn:hover,
  a:hover {
    background: #fff;
    color: #6f42c1;
  }
}
</style>
