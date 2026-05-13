import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#FF8A00",
  "#0057D9",
  "#3FAE00",
];

const StatusChart = ({
  pending,
  inProgress,
  resolved,
}) => {

  const data = [
    {
      name: "Pending",
      value: pending,
    },

    {
      name: "In Progress",
      value: inProgress,
    },

    {
      name: "Resolved",
      value: resolved,
    },
  ];

  return (
    <div className="bg-[#1E293B] p-6 rounded-2xl">

      <h2 className="text-2xl font-bold mb-6">
        Issue Status Analytics
      </h2>

      <div className="w-full h-[350px]">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}

              dataKey="value"

              nameKey="name"

              outerRadius={120}

              label
            >

              {
                data.map((entry, index) => (

                  <Cell
                    key={index}

                    fill={
                      COLORS[index % COLORS.length]
                    }
                  />
                ))
              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default StatusChart;