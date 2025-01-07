import Hero from "@/components/Hero";
import abstractBg from "@/assets/abstract.svg";
import StepCardGroup from "@/components/StepCardGroup";
import AboutCTA from "@/components/AboutCTA";
import logo from "@/assets/logo.svg";
import FeatureHeader from "@/components/FeatureHeader";

export default function AboutPage() {
  return (
    <>
      <Hero
        imageUrl={abstractBg}
        title="Empowering Innovation, Driving Growth"
        subtitle="At HoistLoop, we leverage cutting-edge technology to transform manual processes into scalable solutions. Our mission is to empower businesses with tailored tools, fostering innovation and long-term success."
      />
      <FeatureHeader title="Our Story" />
      <StepCardGroup
        steps={[
          {
            step: "01",
            title: "Innovation",
            description:
              "In a world driven by ever-evolving technology, HoistLoop was founded with a clear mission: to turn ideas into digital realities. From day one, we aimed to leverage cutting-edge technologies to revolutionize how businesses manage their processes.",
          },
          {
            step: "02",
            title: "Collaboration",
            description:
              "A group of talented engineers and designers came together with a shared vision to create a space where creativity and technology intersect. At HoistLoop, we strive to deliver tailored solutions for each client by combining expertise and passion.",
          },
          {
            step: "03",
            title: "Digitalization",
            description:
              "With the goal of modernizing manual operations, we started by helping businesses like cleaning services, clothing brands, and distributors transition into efficient and scalable digital workflows.",
          },
          {
            step: "04",
            title: "Flexibility",
            description:
              "We provide everything from fully-equipped teams to specialized, trained professionals, all backed by HoistLoop’s hallmark of quality. This adaptability ensures that we meet the unique needs of each project.",
          },
          {
            step: "05",
            title: "Talent and Growth",
            description:
              "We foster professional growth within our team, offering opportunities to innovate and lead. At HoistLoop, we are more than a company; we are a platform where ideas become the driving force behind change.",
          },
          {
            step: "06",
            title: "Global Impact",
            description:
              "Our vision is to position ourselves as a global technology leader. We are dedicated to creating scalable solutions that help businesses adapt, grow, and excel in their industries. We believe in the power of technology to drive transformation and deliver meaningful change.",
          },
        ]}
      />
      <AboutCTA
        imageUrl={logo}
        title="Bring Your Vision to Life"
        description="Partner with HoistLoop to build tailored solutions that drive growth. Let’s start shaping your future today."
        button={{ text: "Start Your Project" }}
        header="Welcome to HoistLoop"
        subHeader="Efficient. Scalable. Transformative. Let’s make it happen together."
      />
    </>
  );
}
