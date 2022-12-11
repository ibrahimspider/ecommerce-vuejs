<template>
  <div class="signup">
    <div class="container">
      <div class="text-center">
        <h3>Create Account</h3>
      </div>
      <div class="form-box shadow">
        <form @submit="signup">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" v-model="email" required />
          </div>
          <div class="form-row">
            <div class="col form-group box-two">
              <label for="exampleInputEmail1">First name</label>
              <input
                type="text"
                class="form-control"
                v-model="firstName"
                required
              />
            </div>
            <div class="col form-group box-two">
              <label for="exampleInputEmail1">Last name</label>
              <input
                type="text"
                class="form-control"
                v-model="lastName"
                required
              />
            </div>
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
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              required
              v-model="confirmPassword"
            />
          </div>
          <button type="submit" class="btn">Sign Up</button>
        </form>
        <div class="hr"></div>
        <div class="text-center">
          <p class="small">Already Have an Account?</p>
          <router-link :to="{ name: 'SigninpView' }">Sign In</router-link>
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
      firstName: null,
      lastName: null,
      password: null,
      confirmPassword: null,
    };
  },
  methods: {
    async signup(e) {
      e.preventDefault();
      if (this.password === this.confirmPassword) {
        // call signup api
        const user = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
        };
        console.log("user", user);
        await axios
          .post(`${this.baseUrl}user/signup`, user)
          .then(() => {
            this.$router.push({ name: "home" });
            swal({
              title: "Good job!",
              text: "User Signup successfully, Please Login",
              icon: "success",
            });
          })
          .catch((err) => console.log("err", err));
      } else {
        // show some error
        swal({
          title: "Error!",
          text: "password dont match",
          icon: "error",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.signup {
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
