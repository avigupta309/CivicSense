import { Header } from "./Profile/Header";
import { Statistics } from "./Profile/Statistics";
import { ReportTable } from "./Profile/ReportTable";

export function UserProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className=" px-5 mx-auto relative z-10">
        <Header />
        <Statistics />
        <ReportTable />
      </div>
    </div>
  );
}
