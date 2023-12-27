import Hero from "@components/Hero";
import heroImage from "../../public/hero-image.webp";
export default function ServicesPage() {
  return (
    <Hero
      title="Our services"
      subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      imageUrl={heroImage}
    />
  );
}
