import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", score: 21 },
  { day: "Tue", score: 34 },
  { day: "Wed", score: 42 },
  { day: "Thu", score: 30 },
  { day: "Fri", score: 55 },
  { day: "Sat", score: 47 },
  { day: "Sun", score: 38 },
];

export default function StressChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <XAxis dataKey="day" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip />
        <Area dataKey="score" fill="#f97316" stroke="#ea580c" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
