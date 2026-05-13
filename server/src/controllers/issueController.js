import Issue from "../models/Issue.js";
import aiCategorize from "../utils/aiCategorize.js";
import aiSeverity from "../utils/aiSeverity.js";

// CREATE ISSUE
export const createIssue = async (req, res) => {
  try {

    const {
      title,
      description,
      category,
      location,
      latitude,
      longitude,
    } = req.body;

    const predictedCategory =
      await aiCategorize(
        `${title} ${description}`
      );

    const predictedSeverity =
      aiSeverity(
        `${title} ${description}`
      );

    const issue = await Issue.create({

      title,
      description,

      category:
        predictedCategory,

      severity:
        predictedSeverity,

      location,

      latitude,
      longitude,

      image: req.file?.path || "",

      reportedBy: req.user._id,
    });

    res.status(201).json(issue);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};



// GET ALL ISSUES
export const getIssues = async (req, res) => {
  try {

    const issues = await Issue.find()
      .populate("reportedBy", "name email")
      .sort({ createdAt: -1 });

    res.json(issues);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// GET SINGLE ISSUE
export const getSingleIssue = async (req, res) => {
  try {

    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found",
      });
    }

    res.json(issue);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// UPDATE ISSUE STATUS
export const updateIssueStatus = async (req, res) => {
  try {

    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found",
      });
    }

    issue.status = req.body.status || issue.status;

    const updatedIssue = await issue.save();

    res.json(updatedIssue);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// DELETE ISSUE
export const deleteIssue = async (req, res) => {
  try {

    const issue = await Issue.findById(req.params.id);

    if (!issue) {

      return res.status(404).json({
        message: "Issue not found",
      });
    }

    // ONLY CREATOR CAN DELETE
    console.log(issue.reportedBy);

console.log(req.user._id);

if (

  issue.reportedBy.toString()

  !==

  req.user._id.toString()

) {

      return res.status(403).json({
        message:
          "Not authorized to delete this issue",
      });
    }

    await issue.deleteOne();

    res.json({
      message:
        "Issue deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};



// SUPPORT ISSUE
export const supportIssue = async (
  req,
  res
) => {

  try {

    const issue = await Issue.findById(
      req.params.id
    );

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found",
      });
    }

    // CHECK ALREADY SUPPORTED
    const alreadySupported =
      issue.supports.includes(
        req.user._id
      );

    if (alreadySupported) {

      return res.status(400).json({
        message:
          "Already supported this issue",
      });
    }

    issue.supports.push(req.user._id);

    await issue.save();

    res.json(issue);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};