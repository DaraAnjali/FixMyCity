import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  createIssue,
  getIssues,
  getSingleIssue,
  updateIssueStatus,
  deleteIssue,
  supportIssue,
} from "../controllers/issueController.js";

import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();


// CREATE + GET ALL
router.route("/")
  .post(
  protect,
  upload.single("image"),
  createIssue
)
  .get(getIssues);


// SINGLE ISSUE
router.route("/:id")
  .get(getSingleIssue)

  .put(protect, admin, updateIssueStatus)

  .delete(protect, admin, deleteIssue);
  router.put(
  "/:id/support",
  protect,
  supportIssue
);

export default router;