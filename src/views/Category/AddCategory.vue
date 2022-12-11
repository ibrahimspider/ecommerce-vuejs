<template>
  <div class="container">
    <div class="text-center">
      <h3 class="title">Add Category</h3>
    </div>
    <div class="form">
      <form action="">
        <div class="form-group">
          <label>Category Name</label>
          <input type="text" class="form-control" v-model="categoryName" />
        </div>
        <div class="form-group">
          <label>Category Description</label>
          <textarea
            class="form-control"
            v-model="description"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group">
          <label>Category Image</label>
          <input type="text" class="form-control" v-model="imageURL" />
        </div>
        <button type="button" class="btn btn-primary" @click="addCategory">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
const swal = require("sweetalert");
export default {
  data() {
    return {
      categoryName: "",
      description: "",
      imageURL: "",
    };
  },
  methods: {
    addCategory() {
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageURL,
      };
      axios({
        method: "post",
        url: "https://limitless-lake-55070.herokuapp.com/category/create",
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          swal({
            title: "Good job!",
            text: "Category added successfully",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 40px;
  margin-top: 90px;
  color: #563d7c;
}
.form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
