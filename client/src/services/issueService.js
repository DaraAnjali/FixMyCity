import API from "../utils/api";


// CREATE ISSUE
export const createIssue = async (
  issueData,
  token
) => {

  const formData = new FormData();

  formData.append("title", issueData.title);

  formData.append(
    "description",
    issueData.description
  );


  formData.append(
    "location",
    issueData.location
  );

  formData.append(
  "latitude",
  issueData.latitude
);

formData.append(
  "longitude",
  issueData.longitude
);

  formData.append(
    "image",
    issueData.image
  );

  const response = await API.post(
    "/issues",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


// GET ALL ISSUES
export const getIssues = async () => {

  const response = await API.get("/issues");

  return response.data;
};

// UPDATE STATUS
export const updateIssueStatus = async (
  issueId,
  status,
  token
) => {

  const response = await API.put(
    `/issues/${issueId}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


// DELETE ISSUE
export const deleteIssue = async (
  issueId,
  token
) => {

  const response = await API.delete(
    `/issues/${issueId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const supportIssue = async (
  issueId,
  token
) => {

  const response = await API.put(
    `/issues/${issueId}/support`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};