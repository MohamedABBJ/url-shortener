import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import OuterContentWindow from "@/components/outer-content-window";

export default function Home() {
  return (
    <>
      <OuterContentWindow />
      <div className="animate-changing-colors">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
