import { Router } from "express";
// import { createCategory } from "./app/use-cases/categories/create-category/create-category";
import { ListCategoriesRouter } from "./app/use-cases/categories/list-categories/router";
import { CreateProduct } from "./app/use-cases/products/create-product/create-product";
// import { listCategories } from "./app/use-cases/categories/list-categories/list-categories";
// import { listProducts } from "./app/use-cases/products/list-products/list-products";

export const router = Router();
// List categories
// router.get("/categories", listCategories);

// Create category
// router.post("/categories", createCategory);

// List products
// router.get("/products", listProducts);

// Crete product
// router.post("/products", new CreateProduct().execute);

// Get product by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("OK");
});

// list orders
router.get("/orders", (req, res) => {
  res.send("OK");
});

// Create order
router.post("/orders", (req, res) => {
  res.send("OK");
});
// Create order status
router.patch("/orders/ordersId", (req, res) => {
  res.send("OK");
});
// Delete/cancel order
router.delete("/orders/ordersId", (req, res) => {
  res.send("OK");
});
