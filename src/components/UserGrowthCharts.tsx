import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserData {
  month: string;
  totalUsers: number;
  activeUsers: number;
}

const UserGrowthChart: React.FC<{ data: UserData[] }> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalUsers"
              stroke="#8884d8"
              name="Total Users"
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="#82ca9d"
              name="Active Users"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UserGrowthChart;
