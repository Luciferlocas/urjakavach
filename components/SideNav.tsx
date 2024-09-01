"use client";

import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import img from "@/assets/icons/bulb.svg";
import Home from "@/assets/icons/Home";
import Report from "@/assets/icons/Report";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "sonner";

const SideNav = () => {
  const path = usePathname();
  const router = useRouter();
  const isActive = (name: string) => path.includes(name);
  const handleLogout = () => {
    toast.success("Logged out successfully");
    router.push("/");
  };

  return (
    <aside
      id="default-sidebar"
      aria-label="Sidebar"
      className="flex flex-col gap-12 bg-white rounded-[1rem] w-52"
    >
      <header className="flex gap-2 justify-center items-center p-4">
        <Image alt="logo" src={img} priority width={32} height={32} />
        <span className="font-black text-black text-lg">GridSight</span>
      </header>

      <ul className="flex flex-col gap-6 text-black">
        <li
          className={`${
            isActive("/dashboard") &&
            "border-r-3 border-blue-600 font-bold text-blue-600"
          }`}
        >
          <Link href="/u/dashboard" className="flex gap-2 p-2">
            <Home /> <span>Dashboard</span>
          </Link>
        </li>
        <li
          className={`${
            isActive("/news") &&
            "border-r-3 border-blue-600 font-bold text-blue-600"
          }`}
        >
          <Link href="/u/news" className="flex gap-2 p-2">
            <Report /> <span>News</span>
          </Link>
        </li>
      </ul>

      <div className="mt-auto w-full p-4">
        <Button
          color="primary"
          radius="sm"
          variant="shadow"
          className="font-bold w-full"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default SideNav;
