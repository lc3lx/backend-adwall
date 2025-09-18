const express = require("express");

const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require("../utils/validators/categoryValidator");

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  uploadCategoryImage,
  resizeImage,
} = require("../controllers/categoryService");

const authService = require("../controllers/authService");

const router = express.Router();

// Nested route

router
  .route("/")
  .get(getCategories)
  .post(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    uploadCategoryImage,
    resizeImage,
    createCategoryValidator,
    createCategory
  );
router
  .route("/:id")
  .get(getCategoryValidator, getCategory)
  .put(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    uploadCategoryImage,
    resizeImage,
    //updateCategoryValidator,
    updateCategory
  )
  .delete(
    authService.protect,
    authService.allowedTo("admin"),
    deleteCategoryValidator,
    deleteCategory
  );

module.exports = router;
