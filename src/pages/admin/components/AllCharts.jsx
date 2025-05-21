import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
  LabelList,
} from "recharts";

export function RevenueChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-[70%] ">
      <h2 className="text-lg font-semibold mb-2">Revenue by Month</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="_id" stroke="#CBD5E1" />
          <YAxis stroke="#CBD5E1" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#3B82F6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
];

export function SubscriptionPieChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-[29%]">
      <h2 className="text-lg font-semibold mb-2">Subscription Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="_id"
            cx="50%"
            cy="50%"
            outerRadius={100}
            labelLine={false}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) => [
              `${value}`,
              `${props?.payload?._id || ""}`,
            ]}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export function ContentTypeBarChart({ data }) {
  return (
    <div className="bg-[#1E293B] p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2 text-white">
        Content Type Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="_id" stroke="#CBD5E1" />
          <YAxis stroke="#CBD5E1" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#10B981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function LanguageBarChart({ data }) {
  return (
    <div className="bg-[#1E293B] p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2 text-white">Top Languages</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="_id" stroke="#CBD5E1" />
          <YAxis stroke="#CBD5E1" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#F59E0B" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
