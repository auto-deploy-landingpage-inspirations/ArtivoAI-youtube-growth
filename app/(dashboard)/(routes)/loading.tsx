import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-col gap-6 items-center">
        <div className="text-zinc-500 font-bold text-xl text-center">Loading . . .</div>
        <Skeleton className="w-[250px] bg-zinc-800 h-4 rounded-2xl" />
        <Skeleton className="w-[200px] bg-zinc-800 h-4 rounded-2xl" />
      </div>
    </div>
  );
}
