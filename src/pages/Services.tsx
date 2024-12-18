import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import headerBg from "@/assets/images/header.png";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <Hero
        imageUrl={headerBg}
        title="Our Services"
        subtitle="At HoistLoop, we simplify your operations, create custom tools, and help you grow with scalable, tailored solutions."
      />
    </>
  );
}
