import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import IssueCard from "../components/IssueCard";

import IssueMap from "../components/IssueMap";

import { getIssues } from "../services/issueService";

import StatsCard from "../components/StatsCard";

import StatusChart from "../components/StatusChart";

const Dashboard = () => {

  const [issues, setIssues] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("");

  const fetchIssues = async () => {

    try {

      const data = await getIssues();

      setIssues(data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchIssues();

  }, []);

  const totalIssues = issues.length;

  const pendingIssues = issues.filter(
    (issue) => issue.status === "Pending"
  ).length;

  const inProgressIssues = issues.filter(
    (issue) => issue.status === "In Progress"
  ).length;

  const resolvedIssues = issues.filter(
    (issue) => issue.status === "Resolved"
  ).length;

  const filteredIssues = issues.filter((issue) => {

    const matchesSearch =

      issue.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

      ||

      issue.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =

      statusFilter === ""

      ||

      issue.status === statusFilter;

    const matchesCategory =

      categoryFilter === ""

      ||

      issue.category === categoryFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesCategory
    );
  });

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">

      <Navbar />

      <div className="p-4 md:p-10">

        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Civic Issues Dashboard
        </h1>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <StatsCard
            title="Total Issues"
            value={totalIssues}
            color="bg-[#0057D9]"
          />

          <StatsCard
            title="Pending"
            value={pendingIssues}
            color="bg-orange-500"
          />

          <StatsCard
            title="In Progress"
            value={inProgressIssues}
            color="bg-blue-500"
          />

          <StatsCard
            title="Resolved"
            value={resolvedIssues}
            color="bg-green-500"
          />

        </div>

        {/* SEARCH + FILTERS */}
        <div className="bg-[#1E293B] p-6 rounded-2xl mb-10">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* SEARCH */}
            <input
              type="text"

              placeholder="Search by title or location"

              value={searchTerm}

              onChange={(e) =>
                setSearchTerm(e.target.value)
              }

              className="p-4 rounded-xl bg-gray-800 outline-none"
            />

            {/* STATUS FILTER */}
            <select
              value={statusFilter}

              onChange={(e) =>
                setStatusFilter(e.target.value)
              }

              className="p-4 rounded-xl bg-gray-800 outline-none"
            >

              <option value="">
                All Status
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Resolved">
                Resolved
              </option>

            </select>

            {/* CATEGORY FILTER */}
            <select
              value={categoryFilter}

              onChange={(e) =>
                setCategoryFilter(e.target.value)
              }

              className="p-4 rounded-xl bg-gray-800 outline-none"
            >

              <option value="">
                All Categories
              </option>

              <option value="Road Damage">
                Road Damage
              </option>

              <option value="Water Leakage">
                Water Leakage
              </option>

              <option value="Streetlight">
                Streetlight
              </option>

              <option value="Garbage">
                Garbage
              </option>

            </select>

          </div>

        </div>

        {/* CHART */}
<div className="mb-12">

  <StatusChart
    pending={pendingIssues}
    inProgress={inProgressIssues}
    resolved={resolvedIssues}
  />

</div>

        {/* MAP */}
        <div className="mb-12 rounded-2xl overflow-hidden">

          <IssueMap issues={filteredIssues} />

        </div>

        {/* ISSUE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {
            filteredIssues.map((issue) => (

              <IssueCard
                key={issue._id}

                issue={issue}

                refreshIssues={fetchIssues}
              />
            ))
          }

        </div>

      </div>

    </div>
  );
};

export default Dashboard;