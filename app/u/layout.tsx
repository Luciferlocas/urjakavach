import SideNav from "@/components/SideNav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen min-h-screen flex gap-4 bg-[#d6e3f8]">
      <div className="p-4 h-screen fixed hidden lg:flex">
        <SideNav />
      </div>
      <div className="w-full lg:pl-[14rem] pl-o">{children}</div>
    </div>
  );
}
