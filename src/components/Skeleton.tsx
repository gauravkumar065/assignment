import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLoading() {
  return (
    <div className="flex items-center my-auto space-x-4 m-auto">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
