import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative bg-grid-small-zinc-800">
      <div className="hidden h-screen md:ml-[1.5vw] md:mt-[2.5vh] md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount}/>
      </div>
      <main className="md:pl-80 pb-10">
        <Navbar/>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
