<template>
  <div class="container">
    <div class="text-center">
      <h2>Edit Product</h2>
    </div>
    <div class="form">
      <form v-if="product">
        <div class="form-group">
          <label>Category</label>
          <select class="form-control" v-model="product.categoryId" required>
            <option
              v-for="category of categorys"
              :key="category.id"
              :value="category.id"
            >
              {{ category.categoryName }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="product.name"
            required
          />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            v-model="product.description"
            required
          />
        </div>
        <div class="form-group">
          <label>ImageURL</label>
          <input
            type="url"
            class="form-control"
            v-model="product.imageURL"
            required
          />
        </div>
        <div class="form-group">
          <label>Price</label>
          <input
            type="number"
            class="form-control"
            v-model="product.price"
            required
          />
        </div>
        <button type="button" class="btn btn-primary" @click="editProduct">
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
      product: null,
    };
  },
  props: ["baseUrl", "products", "categorys"],
  methods: {
    async editProduct() {
      await axios
        .post(this.baseUrl + "product/update/" + this.id, this.product)
        .then(() => {
          //sending the event to parent to handle
          this.$emit("fetchData");
          this.$router.push({ name: "ProductsView" });
          swal({
            text: "Product Updated Successfully!",
            icon: "success",
            closeOnClickOutside: false,
          });
        })
        .catch((err) => console.log("err", err));
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
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
