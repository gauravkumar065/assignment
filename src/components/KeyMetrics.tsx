import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KeyMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      <MetricCard title="Total Users" value="7,200" />
      <MetricCard title="Active Users" value="5,800" />
      <MetricCard title="Total Streams" value="5,100,000" />
      <MetricCard title="Revenue" value="$1,250,000" />
      <MetricCard title="Top Artist" value="Artist X" />
    </div>
  );
};

const MetricCard: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">{value}</p>
    </CardContent>
  </Card>
);

export default KeyMetrics;
