import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <div className="animate-changing-colors">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
