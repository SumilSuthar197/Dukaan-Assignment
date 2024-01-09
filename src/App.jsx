import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import SideNavbar from "./components/SideBar/SideNavbar";
import Transaction from "./components/Transactions/Transactions";

export default function App() {
  return (
    <main className="flex">
      <div className="sticky inset-0 w-[224px] bg-[#1e2640] h-screen text-[#ccc]">
        <SideNavbar />
      </div>
      <div className="flex-1 overflow-auto">
        <Header />
        <Overview />
        <Transaction />
      </div>
    </main>
  );
}
