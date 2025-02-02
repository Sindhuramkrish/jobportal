import express from "express";
import {
  getUserController,
  updateUserController,
} from "Applyjob/mernstack/controllers/userController.js";
import userAuth from "Applyjob/mernstack/middelwares/authMiddleware.js";

//router object
const router = express.Router();

//routes
// GET USER DATA || POST
router.post("/getUser", userAuth, getUserController);

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUserController);

export default router;
