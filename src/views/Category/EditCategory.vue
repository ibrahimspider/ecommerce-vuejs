<template>
  <div class="container">
    <div class="text-center">
      <h3 class="title">Edit Category</h3>
    </div>
    <div class="form" v-if="category">
      <form action="">
        <div class="form-group">
          <label>Category Name</label>
          <input
            type="text"
            class="form-control"
            v-model="category.categoryName"
            required
          />
        </div>
        <div class="form-group">
          <label>Category Description</label>
          <textarea
            class="form-control"
            v-model="category.description"
            rows="3"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label>Category Image</label>
          <input
            type="text"
            class="form-control"
            v-model="category.imageUrl"
            required
          />
        </div>
        <button type="button" class="btn btn-primary" @click="editCategory">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const swal = require("sweetalert");

export default {
  data() {
    return {
      category: null,
      id: null,
    };
  },
  props: ["categorys", "baseUrl"],
  methods: {
    async editCategory() {
      delete this.category["products"];
      await axios
        .post(`${this.baseUrl}/category/update/${this.id}`, this.category)
        .then(() => {
          this.$emit("fetchData");
          this.$router.push({ name: "CategoryView" });
          swal({
            title: "Good job!",
            text: "Category has been updated successfully",
            icon: "success",
          });
        })
        .catch((err) => console.log("err", err));
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categorys.find((category) => category.id == this.id);
  },
};
</script>
<style lang="scss" scoped>
.title {
  padding-bottom: 100px;
  padding-top: 30px;
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
