<template>
  <div class="container">
    <div class="text-center">
      <h3 class="title">Our Category</h3>
    </div>
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6"
        v-for="category in categorys"
        :key="category.id"
      >
        <CategoryBox :category="category"></CategoryBox>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryBox from "../../components/CategoryPage.vue";
export default {
  props: ["categorys"],
  data() {
    return {
      basUrl: "https://limitless-lake-55070.herokuapp.com/",
    };
  },
  components: { CategoryBox },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 40px;
  margin-top: 90px;
  color: #563d7c;
}
</style>
