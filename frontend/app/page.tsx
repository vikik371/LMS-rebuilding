
import SmartLibrary from "@/components/home/smartLibrary";
import Hero from "@/components/home/hero";
import What from "@/components/home/what";
import Ready from "@/components/home/readyToJoin";

export default function App() {
  return (
    <>
      <main className=" max-w-[1920px]">
        
          <Hero />
          <What />
          <SmartLibrary />
          <Ready />
      </main>

    </>
  );
}