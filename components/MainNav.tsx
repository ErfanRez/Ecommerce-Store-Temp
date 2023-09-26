"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface MainNavProps {
  data: any;
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route: any) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex- items-center space-x-4 lg:space-x-6">
      MainNav
    </nav>
  );
};

export default MainNav;
