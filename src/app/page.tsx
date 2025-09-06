import Image from "next/image";
import Section1 from "./components/sections/1/section";
import Section2 from "./components/sections/2/section";
import Section3 from "./components/sections/3/section";
import Section4 from "./components/sections/4/section";

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
