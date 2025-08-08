interface SidebarProps {
    menuItems: { label: string; link: string }[];
  }
  
  export default function Sidebar({ menuItems }: SidebarProps) {
    return (
      <aside className="w-64 bg-[#0097b2] text-white p-4">
        <h2 className="text-lg font-bold mb-6">SCMS Dashboard</h2>
        <nav>
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="block py-2 px-3 rounded hover:bg-[#007a91]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    );
  }
  