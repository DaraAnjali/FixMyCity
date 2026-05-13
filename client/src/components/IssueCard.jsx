import {
  updateIssueStatus,
  deleteIssue,
  supportIssue,
} from "../services/issueService";

import { toast } from "react-toastify";

import { useAuth } from "../context/AuthContext";

const IssueCard = ({
  issue,
  refreshIssues,
}) => {

  const { user } = useAuth();

  // UPDATE STATUS
  const handleStatusUpdate = async (
    status
  ) => {

    try {

      await updateIssueStatus(
        issue._id,
        status,
        user.token
      );

      toast.success(
        `Issue marked as ${status}`
      );

      refreshIssues();

    } catch (error) {

      toast.error(
        "Failed to update issue"
      );

      console.log(error);
    }
  };

  // DELETE ISSUE
  const handleDelete = async () => {

    try {

      await deleteIssue(
        issue._id,
        user.token
      );

      toast.success(
        "Issue deleted successfully"
      );

      refreshIssues();

    } catch (error) {

      toast.error(
        "Failed to delete issue"
      );

      console.log(error);
    }
  };

  // SUPPORT ISSUE
  const handleSupport = async () => {

    try {

      await supportIssue(
        issue._id,
        user.token
      );

      toast.success(
        "Issue supported successfully"
      );

      refreshIssues();

    } catch (error) {

      toast.error(
        "Already supported or failed"
      );

      console.log(error);
    }
  };

  return (
    <div className="bg-[#1E293B] p-6 rounded-2xl">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          {issue.title}
        </h2>

        <span
          className={`
            px-4 py-2 rounded-full text-sm font-semibold

            ${
              issue.status === "Resolved"
                ? "bg-green-500"

                : issue.status === "In Progress"
                ? "bg-blue-500"

                : "bg-orange-500"
            }
          `}
        >
          {issue.status}
        </span>

      </div>

      {
        issue.image && (
          <img
            src={issue.image}
            alt={issue.title}
            className="w-full h-56 object-cover rounded-xl mb-5 mt-5"
          />
        )
      }

      <p className="text-gray-400 mt-4">
        {issue.description}
      </p>

      <div className="mt-5 flex justify-between text-sm text-gray-500">

        <p>
          📍 {issue.location}
        </p>

        <p>
          {issue.category}
        </p>

      </div>

      {/* SEVERITY */}
      <div className="mt-3">

        <p>
          Severity:
          {" "}

          <span
            className={
              issue.severity === "High"
                ? "text-red-400 font-semibold"

                : issue.severity === "Medium"
                ? "text-yellow-400 font-semibold"

                : "text-green-400 font-semibold"
            }
          >
            {issue.severity}
          </span>
        </p>

      </div>

      {/* SUPPORT SECTION */}
      <div className="mt-6 flex items-center gap-4">

        <button
          onClick={handleSupport}

          className="bg-[#FF8A00] px-4 py-2 rounded-lg"
        >
          Support Issue 👍
        </button>

        <p className="text-gray-400">
          {issue.supports?.length || 0}
          {" "}Supports
        </p>

      </div>

      {/* ADMIN CONTROLS */}
      {
        user?.role === "admin" && (

          <div className="flex gap-3 mt-6 flex-wrap">

            <button
              onClick={() =>
                handleStatusUpdate(
                  "In Progress"
                )
              }

              className="bg-blue-500 px-4 py-2 rounded-lg"
            >
              In Progress
            </button>

            <button
              onClick={() =>
                handleStatusUpdate(
                  "Resolved"
                )
              }

              className="bg-green-500 px-4 py-2 rounded-lg"
            >
              Resolve
            </button>

            <button
              onClick={handleDelete}

              className="bg-red-500 px-4 py-2 rounded-lg"
            >
              Delete
            </button>

          </div>
        )
      }

    </div>
  );
};

export default IssueCard;