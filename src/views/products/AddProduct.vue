<template>
  <div class="container">
    <div class="text-center">
      <h2>Add New Product</h2>
    </div>
    <div class="form">
      <form action="">
        <div class="form-group">
          <label>Category</label>
          <select class="form-select" v-model="categoryId" required>
            <option selected></option>
            <option
              :value="category.id"
              v-for="category in categorys"
              :key="category.id"
            >
              {{ category.categoryName }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="name" required />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            v-model="description"
            required
          />
        </div>
        <div class="form-group">
          <label>ImageURL</label>
          <input type="text" class="form-control" v-model="imageURL" required />
        </div>
        <div class="form-group">
          <label>Price</label>
          <input type="number" class="form-control" v-model="price" required />
        </div>
        <button type="button" class="btn btn-primary" @click="addProduct">
          Add Product
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const swal = require("sweetalert");

export default {
  props: ["categorys"],
  data() {
    return {
      id: null,
      categoryId: null,
      name: null,
      description: null,
      imageURL: null,
      price: null,
    };
  },
  methods: {
    addProduct() {
      const newProduct = {
        id: this.id,
        categoryId: this.categoryId,
        name: this.name,
        description: this.description,
        imageURL: this.imageURL,
        price: this.price,
      };

      axios;
      axios({
        method: "post",
        url: "https://limitless-lake-55070.herokuapp.com/product/add",
        data: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          this.$emit("fetchData");
          this.$router.push({ name: "ProductsView" });
          swal({
            title: "Good job!",
            text: "Product added successfully",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  padding-top: 90px;
  padding-bottom: 30px;
}
.form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 29px;
}
</style>
