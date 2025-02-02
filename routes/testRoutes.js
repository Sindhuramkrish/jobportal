import express from "express";
import { testPostController } from "Applyjob/mernstack/controllers/testController.js";
import userAuth from "Applyjob/mernstack/middelwares/authMiddleware.js";

//router object
const router = express.Router();

//routes
router.post("/test-post", userAuth, testPostController);

//export
export default router;
