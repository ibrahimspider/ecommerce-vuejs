import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddCategory from "../views/Category/AddCategory.vue";
import CategoryView from "../views/Category/CategoryView.vue";
import EditCategory from "../views/Category/EditCategory.vue";
import ListCategory from "../views/Category/ListCategory.vue";
import AdminView from "../views/AdminView.vue";
import ProductsView from "../views/products/ProductsView.vue";
import AddProduct from "../views/products/AddProduct.vue";
import EditProduct from "../views/products/EditProduct.vue";
import ShowDetails from "../views/products/ShowDetails.vue";
import SignupView from "../views/SignupView.vue";
import SigninpView from "../views/SigninView.vue";
import WishList from "../views/products/WishList.vue";
import CartView from "../views/CartView.vue";
// import bootstrap files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category/show/:id",
    name: "ListCategory",
    component: ListCategory,
  },
  {
    path: "/admin/category/add",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/admin/category",
    name: "CategoryView",
    component: CategoryView,
  },
  {
    path: "/admin/category/:id",
    name: "EditCategory",
    component: EditCategory,
  },
  {
    // Admin Home Page
    path: "/admin",
    name: "AdminView",
    component: AdminView,
  },
  {
    path: "/admin/product",
    name: "ProductsView",
    component: ProductsView,
  },
  {
    path: "/admin/product/new",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/admin/product/:id",
    name: "EditProduct",
    component: EditProduct,
  },
  {
    path: "/product/show/:id",
    name: "ShowDetails",
    component: ShowDetails,
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: WishList,
  },
  {
    path: "/cart",
    name: "CartView",
    component: CartView,
  },
  {
    path: "/signup",
    name: "SignupView",
    component: SignupView,
  },
  {
    path: "/signin",
    name: "SigninpView",
    component: SigninpView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
