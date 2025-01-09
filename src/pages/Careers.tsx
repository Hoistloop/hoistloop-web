import Hero from "@/components/Hero";
import abstractBg from "@/assets/abstract.svg";

import FeatureHeader from "@/components/FeatureHeader";
import CardGroup from "@/components/CardGroup";
export default function CareersPage() {
  return (
    <>
      <Hero
        imageUrl={abstractBg}
        title="Your Next Chapter Starts Here"
        subtitle="Join HoistLoop and make an impact. Grow your career, solve meaningful challenges, and shape the future of technology."
      />
      <FeatureHeader
        title="Welcome to HoistLoop, Where Innovation Meets Impact!"
        description="At HoistLoop, we’re a community of innovators driving meaningful change. Whether you're starting out or experienced, this is where your ideas shape the future."
        subtitle="Why work with us?"
      />
      <CardGroup
        cards={[
          {
            title: "Real Impact, Real Solutions",
            description:
              "At HoistLoop, we create tools that transform businesses. From automating processes to building scalable solutions for industries like e-commerce and logistics, your work drives real-world growth and success.",
          },
          {
            title: "A Culture of Growth and Innovation",
            description:
              "We invest in your potential. At HoistLoop, you'll thrive in a culture that prioritizes learning, creativity, and collaboration, with mentorship and innovation time to fuel your personal and professional growth.",
          },
          {
            title: "Flexibility That Works for You",
            description:
              "We value work-life balance. With flexible schedules and remote work options, HoistLoop empowers you to excel professionally while maintaining harmony in your personal life.",
          },
          {
            title: "Join a Global Community",
            description:
              "Be part of a diverse, global team. At HoistLoop, you’ll collaborate with talented individuals from around the world to solve complex challenges and shape the future of technology.",
          },
        ]}
        columns={2}
      />
      <FeatureHeader
        title="Find Your Place at HoistLoop"
        description="Explore opportunities to join a team that values innovation, collaboration, and impact. Take the next step in your career with us."
        subtitle="Open Positions"
      />
      <CardGroup
        cards={[
          {
            title: "UI/UX Designer",
            description:
              "Join our design team to craft user-centered, visually stunning interfaces. Your creativity will help shape seamless experiences across mobile and web platforms.",
            button: { text: "Apply Now", link: "/" },
          },
          {
            title: "Back-End Developer",
            description:
              "Work on scalable and efficient server-side solutions. You'll design robust APIs, optimize database structures, and build the backbone of cutting-edge applications.",
            button: { text: "Apply Now", link: "/" },
          },
          {
            title: "Front-End Developer (Mobile & Web)",
            description:
              "Bring designs to life with responsive and dynamic interfaces. Collaborate closely with designers and back-end developers to create exceptional mobile and web applications.",
            button: { text: "Apply Now", link: "/" },
          },
          {
            title: "Project Manager",
            description:
              "Lead diverse teams and ensure timely delivery of high-impact projects. Your organizational skills and technical knowledge will be key to our success.",
            button: { text: "Apply Now", link: "/" },
          },
        ]}
        columns={2}
      />
    </>
  );
}
