import SideNav from "@/components/SideNav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <div className="w-screen min-h-screen flex gap-4 bg-[#FFF7E8]">
      <div className="p-4 h-screen fixed hidden sm:flex">
        <SideNav />
      </div>
      <div className="w-full sm:pl-[14rem] pl-o">{children}</div>
    </div>
  );
}
