"use client";

import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Home from "@/assets/icons/Home";
import Plug from "@/assets/icons/Plug";
import Report from "@/assets/icons/Report";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "sonner";

const SideNav = () => {
  const path = usePathname();
  const router = useRouter();
  const isActive = (name: string) => path?.includes(name);
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
        <Image alt="logo" src="/logo.svg" priority width={32} height={32} />
        <Image
          alt="logo"
          src="/urjakavach.svg"
          priority
          width={130}
          height={32}
          className="md:flex hidden"
        />
      </header>

      <ul className="flex flex-col gap-4 text-black pl-4">
        <li
          className={`${
            isActive("/dashboard") &&
            "border-r-2 border-[#FFA500] text-base text-[#FFA500]"
          } text-sm`}
        >
          <Link href="/u/dashboard" className="flex gap-2 p-2 items-center">
            <Home /> <span className="md:flex hidden">Dashboard</span>
          </Link>
        </li>
        <li
          className={`${
            isActive("/report") &&
            "border-r-2 border-[#FFA500] text-base text-[#FFA500]"
          } text-sm`}
        >
          <Link href="/u/report" className="flex gap-2 p-2 items-center">
            <Report /> <span className="md:flex hidden">Report</span>
          </Link>
        </li>
        <li
          className={`${
            isActive("/grid") &&
            "border-r-2 border-[#FFA500] text-base text-[#FFA500]"
          } text-sm`}
        >
          <Link href="/u/grid" className="flex gap-2 p-2 items-center">
            <Plug /> <span className="md:flex hidden">Grid</span>
          </Link>
        </li>
      </ul>

      <div className="mt-auto w-full p-4">
        <Button
          radius="sm"
          className="font-bold w-full bg-[#FFA500]"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default SideNav;
