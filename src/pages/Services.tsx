import Hero from "@/components/Hero";
import headerBg from "@/assets/images/header.png";
import FeatureHeader from "@/components/FeatureHeader";
import FeatureGroup from "@/components/FeatureGroup";
import {
  AdjustmentsHorizontalIcon,
  CircleStackIcon,
  CloudIcon,
  CogIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ServerIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
import FeatureTitle from "@/components/FeatureTitle";

export default function ServicesPage() {
  return (
    <>
      <Hero
        imageUrl={headerBg}
        title="Driving Business Growth Through Technology"
        subtitle="At HoistLoop, we streamline processes, build custom solutions, and empower businesses to scale efficiently."
      />
      <FeatureHeader
        title="Custom Software"
        description="We create software designed to simplify your daily tasks and help your business run more efficiently. Whether you need a system to organize your operations, automate processes, or support your growth, our solutions are tailored to meet your needs and adapt as your business evolves."
        subtitle="Explore What's Included"
      />
      <FeatureTitle title="Core Features of Custom Software" />
      <FeatureGroup
        featureItems={[
          {
            icon: <CogIcon />, // Representa engranajes, ideal para "Business Process Automation"
            subtitle: "Business Process Automation",
          },
          {
            icon: <GlobeAltIcon />, // Representa una red global, perfecto para "Custom Web Applications"
            subtitle: "Custom Web Applications",
          },
          {
            icon: <DevicePhoneMobileIcon />, // Representa un dispositivo móvil, adecuado para "Mobile App Solutions"
            subtitle: "Mobile App Solutions",
          },
          {
            icon: <ServerIcon />, // Representa un servidor, ideal para "API Integration"
            subtitle: "API Integration",
          },
          {
            icon: <CloudIcon />, // Representa una nube, perfecto para "Scalable Cloud Solutions"
            subtitle: "Scalable Cloud Solutions",
          },
          {
            icon: <ShoppingCartIcon />, // Representa un carrito de compras, adecuado para "E-commerce Platforms"
            subtitle: "E-commerce Platforms",
          },
          {
            icon: <CircleStackIcon />, // Representa una base de datos, ideal para "Data Management Systems"
            subtitle: "Data Management Systems",
          },
          {
            icon: <AdjustmentsHorizontalIcon />, // Representa ajustes u optimización, perfecto para "Workflow Optimization"
            subtitle: "Workflow Optimization",
          },
        ]}
      />
    </>
  );
}
