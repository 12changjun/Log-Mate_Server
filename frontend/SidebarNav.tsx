"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path;
  };

  const navItems = [
    { href: "/", label: "📊 대시보드" },
    { href: "/recording", label: "🎤 회의 녹음" },
    { href: "/kanban", label: "📋 칸반 보드" },
    { href: "/contribution", label: "👥 팀 기여도" },
    { href: "/settings", label: "⚙️ 설정" },
  ];

  return (
    <nav className="flex-1 p-4 space-y-2">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
            isActive(href)
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
