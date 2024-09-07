import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-content-center items-center w-screen min-h-screen">
      <Link className="bg-blue-500 px-6 py-2 rounded-lg shadow-md" href="/u">Login</Link>
    </div>
  );
}
