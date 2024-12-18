import Hero from "@/components/Hero";
import headerBg from "@/assets/images/header.png";

export default function ServicesPage() {
  return (
    <>
      <Hero
        imageUrl={headerBg}
        title="Our Services"
        subtitle="At HoistLoop, we simplify your operations, create custom tools, and help you grow with scalable, tailored solutions."
      />
    </>
  );
}
