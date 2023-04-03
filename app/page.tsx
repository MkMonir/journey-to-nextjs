import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-50 w-full h-screen flex justify-center items-center text-3xl">
      <h1>Hello World</h1>
    </main>
  );
}
