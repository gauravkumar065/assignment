import React, { lazy, Suspense, useMemo } from "react";
import KeyMetrics from "./components/KeyMetrics";
import {
  userData,
  revenueData,
  topSongsData,
  streamData,
} from "./data/mockData";
import { SkeletonLoading } from "./components/Skeleton";

// Lazy load components
const UserGrowthChart = lazy(() => import("./components/UserGrowthCharts"));
const RevenueDistributionChart = lazy(
  () => import("./components/RevenueDistributionChart")
);
const TopStreamedSongsChart = lazy(
  () => import("./components/TopStreamedSongsChart")
);
const StreamDataTable = lazy(() => import("./components/StreamDataTable"));

const App: React.FC = () => {
  // Memoize data to prevent unnecessary re-renders
  const memoizedUserData = useMemo(() => userData, []);
  const memoizedRevenueData = useMemo(() => revenueData, []);
  const memoizedTopSongsData = useMemo(() => topSongsData, []);
  const memoizedStreamData = useMemo(() => streamData, []);

  return (
    <div className="mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Streamify</h1>
      <KeyMetrics />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Suspense fallback={<SkeletonLoading />}>
          <UserGrowthChart data={memoizedUserData} />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <RevenueDistributionChart data={memoizedRevenueData} />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <TopStreamedSongsChart data={memoizedTopSongsData} />
        </Suspense>
      </div>
      <Suspense fallback={<SkeletonLoading />}>
        <StreamDataTable initialData={memoizedStreamData} />
      </Suspense>
    </div>
  );
};

export default App;
