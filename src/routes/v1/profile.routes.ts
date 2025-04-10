import { Router } from "express";
import UserMiddlewares from "../../modules/user/user.middlewares";
import ProfileControllers from "../../modules/profile/profile.controllers";
import upload from "../../middlewares/multer.middleware";

const router = Router();
const { checkAccessToken } = UserMiddlewares;
const {
  handleCreateWorksAt,
  handleGetWorksAt,
  handleCreateLocation,
  handleGetLocation,
  handleUpdateLanguage,
  handleGetLanguage,
  handleUpdateBio,
  handleGetBio,
  handleUpdateAvatar,
  handleGetAvatar,
} = ProfileControllers;

router.route("/profile/work").patch(checkAccessToken, handleCreateWorksAt);
router.route("/profile/work").get(checkAccessToken, handleGetWorksAt);
router.route("/profile/location").patch(checkAccessToken, handleCreateLocation);
router.route("/profile/location").get(checkAccessToken, handleGetLocation);
router.route("/profile/language").patch(checkAccessToken, handleUpdateLanguage);
router.route("/profile/language").get(checkAccessToken, handleGetLanguage);
router.route("/profile/bio").patch(checkAccessToken, handleUpdateBio);
router.route("/profile/bio").get(checkAccessToken, handleGetBio);
router
  .route("/profile/avatar")
  .patch(checkAccessToken, upload.single("avatar"), handleUpdateAvatar);

router.route("/profile/avatar").get(checkAccessToken, handleGetAvatar);
export default router;
