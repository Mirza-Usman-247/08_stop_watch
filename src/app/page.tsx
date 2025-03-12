import Stopwatch from "@/components/Stopwatch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <Stopwatch />
    </div>
  );
}
