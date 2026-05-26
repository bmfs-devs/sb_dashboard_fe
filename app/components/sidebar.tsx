"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, Settings, User, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Profile", href: "#", icon: User },
    { name: "Settings", href: "#", icon: Settings },
  ];

  return (
    <aside 
      className={`high-shadow relative h-screen bg-slate-900 text-slate-100 transition-all duration-300 ease-in-out flex flex-col
        ${isCollapsed ? "w-16" : "w-64"}`}
    >
      {/* Header Section */}
      <div className="p-4 flex items-center justify-between border-b border-slate-800 h-16">
        {!isCollapsed && <span className="font-bold text-lg tracking-wide">Console</span>}
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-all group"
            >
              <Icon size={20} className="shrink-0" />
              <span 
                className={`transition-opacity duration-200 whitespace-nowrap
                  ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}