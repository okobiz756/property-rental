import { Router } from "express";
import UserMiddlewares from "../../modules/user/user.middlewares";
import CategoryControllers from "../../modules/category/category.controllers";

const { checkAccessToken, isAdmin } = UserMiddlewares;
const {
  handleCreateCategory,
  handleUpdateCategory,
  handleRetrieveCategories,
  handleDeleteCategory,
} = CategoryControllers;
const router = Router();

router
  .route("/admin/category")
  .post(checkAccessToken, isAdmin, handleCreateCategory)
  .get(handleRetrieveCategories);

router
  .route("/admin/category/:id")
  .put(checkAccessToken, isAdmin, handleUpdateCategory)
  .delete(checkAccessToken, isAdmin, handleDeleteCategory);

export default router;
