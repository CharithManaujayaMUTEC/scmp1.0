import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
  menuItems
}: {
  children: React.ReactNode;
  menuItems: { label: string; link: string }[];
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar menuItems={menuItems} />
      <div className="flex-1 bg-gray-50">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
