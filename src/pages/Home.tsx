import Header from "@/components/Header";
import headerBg from "@/assets/header.png";
import Hero from "@/components/Hero";
import CardGroup from "@/components/CardGroup";
import { CardProps } from "@/components/Card";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";

import abstractBg from "@/assets/abstract.svg";
import logo from "@/assets/logo.svg";
import BrandsSection from "@/components/BrandsSection";

export default function HomePage() {
  const services: CardProps[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <path
            d="M16.2112 29.1936H30.4336C32.21 29.1936 32.8436 28.6926 32.8436 27.7127C32.8436 24.84 29.189 20.8761 23.3167 20.8761C17.4557 20.8761 13.8012 24.84 13.8012 27.7127C13.8012 28.6926 14.4347 29.1936 16.2112 29.1936ZM23.328 18.883C25.7607 18.883 27.8538 16.7452 27.8538 13.9616C27.8538 11.2114 25.7494 9.17383 23.328 9.17383C20.9067 9.17383 18.8022 11.256 18.8022 13.9839C18.8022 16.7452 20.8954 18.883 23.328 18.883ZM3.99137 29.1936H12.5905C11.4138 27.5123 12.8507 24.1274 15.2833 22.2791C14.0274 21.4552 12.4094 20.8427 10.2936 20.8427C5.19072 20.8427 2 24.5505 2 27.6348C2 28.6369 2.56573 29.1936 3.99137 29.1936ZM10.3049 19.1392C12.4094 19.1392 14.2424 17.2686 14.2424 14.8524C14.2424 12.4585 12.3981 10.6881 10.3049 10.6881C8.20041 10.6881 6.34481 12.503 6.35613 14.8747C6.35613 17.2686 8.18909 19.1392 10.3049 19.1392ZM31.7008 18.5491C32.0856 18.8051 32.6173 18.7272 32.9228 18.2929C33.7941 17.1683 34.3146 15.5094 34.3146 13.8058C34.3146 12.1022 33.7941 10.4543 32.9228 9.31858C32.6173 8.88433 32.0856 8.80639 31.7008 9.06248C31.2483 9.37425 31.169 9.93098 31.5311 10.3875C32.1873 11.2782 32.5607 12.5142 32.5607 13.8058C32.5607 15.0974 32.1761 16.3221 31.5311 17.224C31.1804 17.6917 31.2483 18.2261 31.7008 18.5491ZM35.8986 21.4552C36.3172 21.7335 36.8376 21.6333 37.1431 21.2102C38.5914 19.2506 39.44 16.556 39.44 13.8058C39.44 11.0556 38.6028 8.33875 37.1431 6.40135C36.8376 5.97824 36.3172 5.87803 35.8986 6.15639C35.4799 6.43475 35.4121 6.95807 35.7402 7.41459C36.9735 9.12929 37.6862 11.4341 37.6862 13.8058C37.6862 16.1774 36.9508 18.4711 35.7402 20.1969C35.4234 20.6534 35.4799 21.1768 35.8986 21.4552Z"
            fill="#9EFF00"
          />
        </svg>
      ),
      title: "Team Integration",
      description:
        "Our skilled developers become an extension of your team, ready to collaborate and deliver results. Whether you need temporary support or ongoing expertise, we ensure seamless integration to help your business thrive.",
      button: { text: "Learn More", link: "/services#team-integration" },
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M18.75 8.89489C18.75 8.30297 18.4399 7.76794 18.0813 7.297C17.7132 6.8135 17.5 6.24 17.5 5.625C17.5 3.89911 19.1789 2.5 21.25 2.5C23.3211 2.5 25 3.89911 25 5.625C25 6.24 24.7868 6.8135 24.4187 7.297C24.0601 7.76794 23.75 8.30297 23.75 8.8949C23.75 9.44881 24.2128 9.891 24.7658 9.858C27.9501 9.66799 31.0831 9.28881 34.1536 8.73164C34.4915 8.67032 34.8398 8.75074 35.1166 8.95401C35.3935 9.15729 35.5744 9.4655 35.6171 9.80628C35.9905 12.7887 36.2021 15.821 36.2431 18.8941C36.2513 19.5047 35.7556 19.9998 35.1449 20C34.553 20 34.0179 19.6899 33.547 19.3313C33.0635 18.9632 32.49 18.75 31.875 18.75C30.1491 18.75 28.75 20.4289 28.75 22.5C28.75 24.5711 30.1491 26.25 31.875 26.25C32.49 26.25 33.0635 26.0368 33.547 25.6687C34.0179 25.3101 34.553 25 35.1449 25C35.6623 25 36.0731 25.4361 36.0357 25.9521C35.8379 28.6831 35.5051 31.3769 35.0439 34.0269C34.9535 34.5466 34.5465 34.9536 34.0267 35.044C30.9949 35.5717 27.9057 35.9312 24.7691 36.1128C24.2141 36.1449 23.75 35.7008 23.75 35.1449C23.75 34.553 24.0601 34.0179 24.4187 33.547C24.7868 33.0635 25 32.49 25 31.875C25 30.1491 23.3211 28.75 21.25 28.75C19.1789 28.75 17.5 30.1491 17.5 31.875C17.5 32.49 17.7132 33.0635 18.0813 33.547C18.4399 34.0179 18.75 34.553 18.75 35.1449C18.75 35.7475 18.2566 36.2342 17.6542 36.2171C15.005 36.142 12.3873 35.94 9.80689 35.6169C9.4661 35.5743 9.15789 35.3933 8.95462 35.1164C8.75135 34.8396 8.67093 34.4913 8.73225 34.1534C9.22038 31.4635 9.57191 28.7256 9.77933 25.9472C9.81763 25.4342 9.40938 25 8.89489 25C8.30297 25 7.76794 25.3101 7.297 25.6687C6.8135 26.0368 6.24 26.25 5.625 26.25C3.89911 26.25 2.5 24.5711 2.5 22.5C2.5 20.4289 3.89911 18.75 5.625 18.75C6.24 18.75 6.8135 18.9632 7.297 19.3313C7.76794 19.6899 8.30297 20 8.8949 20C9.5055 20 10.0013 19.505 9.99289 18.8944C9.95557 16.1807 9.78103 13.5004 9.47598 10.8605C9.43217 10.4813 9.56397 10.103 9.83384 9.8331C10.1037 9.56324 10.4821 9.43144 10.8612 9.47525C13.0984 9.73376 15.3643 9.89854 17.6551 9.96552C18.2569 9.98312 18.75 9.49695 18.75 8.89489Z"
            fill="#9EFF00"
          />
        </svg>
      ),
      title: "Custom Software",
      description:
        "We design and build software that works the way your business needs it to. Whether it’s tools to manage clients, sales, or operations, we create solutions that simplify your processes and drive growth.",
      button: { text: "Learn More", link: "/services#custom-software" },
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M15.285 22.7297C15.285 22.5887 15.3571 22.4618 15.4724 22.3207L21.4275 14.9989C21.8744 14.4346 22.6242 14.8155 22.3647 15.5068L20.4037 20.656H24.0806C24.3546 20.656 24.5997 20.8675 24.5997 21.1216C24.5997 21.2626 24.5276 21.4178 24.3978 21.5447L18.4572 28.8523C18.0102 29.4167 17.2459 29.0358 17.5056 28.3586L19.4809 23.1953H15.7896C15.5157 23.1953 15.285 22.9978 15.285 22.7297ZM7.52757 32.9717H32.4724C35.5005 32.9717 37 31.5187 37 28.6125V14.9707C37 12.0646 35.5005 10.6115 32.4724 10.6115H30.4826V8.72111C30.4826 7.64894 29.8482 7 28.738 7H24.4843C23.3885 7 22.7541 7.64894 22.7541 8.72111V10.6115H17.2603V8.72111C17.2603 7.64894 16.6259 7 15.5157 7H11.2621C10.1518 7 9.53181 7.64894 9.53181 8.72111V10.6115H7.52757C4.514 10.6115 3 12.0646 3 14.9707V28.6125C3 31.5187 4.514 32.9717 7.52757 32.9717Z"
            fill="#9EFF00"
          />
        </svg>
      ),
      title: "Smart Automation",
      description:
        "We help you automate repetitive tasks, saving time and reducing errors. Our intelligent solutions let you focus on growing your business while the tools handle the rest.",
      button: { text: "Learn More", link: "/services#smart-automation" },
    },
  ];
  const whyChooseUs: CardProps[] = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3632 38.4339C26.0479 38.4339 30.6344 33.8474 30.6344 28.1788C30.6344 22.4941 26.0479 17.9076 20.3632 17.9076C14.6946 17.9076 10.1081 22.4941 10.1081 28.1788C10.1081 33.8474 14.6946 38.4339 20.3632 38.4339ZM17.4401 33.4597C16.8264 33.9119 16.1804 33.4436 16.4226 32.733L17.5854 29.2607L14.6139 27.1452C14.0486 26.7253 14.2263 25.934 15.0015 25.934L18.6513 25.9662L19.7657 22.4779C19.9917 21.7674 20.7669 21.7674 20.993 22.4779L22.1074 25.9662L25.7571 25.934C26.5323 25.934 26.6939 26.7414 26.1448 27.1291L23.1732 29.2607L24.336 32.733C24.5783 33.4436 23.9322 33.9119 23.3186 33.4597L20.3793 31.3118L17.4401 33.4597ZM10.528 20.4915C12.1107 18.4889 14.2909 16.9709 16.7941 16.2279L9.47824 3.08203L5.23085 9.5581C4.94015 9.97798 4.924 10.4463 5.1824 10.8662L10.528 20.4915ZM16.7456 10.7209H23.9969L28.9225 2H11.82L16.7456 10.7209ZM23.9484 16.2279C26.4678 16.9709 28.6319 18.4889 30.2145 20.4915L35.5762 10.8662C35.8185 10.4463 35.8024 9.97798 35.5117 9.5581L31.2642 3.08203L23.9484 16.2279Z"
            fill="#9EFF00"
          />
        </svg>
      ),
      title: "Expertise",
      description:
        "At HoistLoop, we bring years of experience in crafting custom technology solutions. Our team leverages the latest tools and methods to deliver scalable, high-quality results tailored to your business needs.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <path
            d="M16.2112 29.1936H30.4336C32.21 29.1936 32.8436 28.6926 32.8436 27.7127C32.8436 24.84 29.189 20.8761 23.3167 20.8761C17.4557 20.8761 13.8012 24.84 13.8012 27.7127C13.8012 28.6926 14.4347 29.1936 16.2112 29.1936ZM23.328 18.883C25.7607 18.883 27.8538 16.7452 27.8538 13.9616C27.8538 11.2114 25.7494 9.17383 23.328 9.17383C20.9067 9.17383 18.8022 11.256 18.8022 13.9839C18.8022 16.7452 20.8954 18.883 23.328 18.883ZM3.99137 29.1936H12.5905C11.4138 27.5123 12.8507 24.1274 15.2833 22.2791C14.0274 21.4552 12.4094 20.8427 10.2936 20.8427C5.19072 20.8427 2 24.5505 2 27.6348C2 28.6369 2.56573 29.1936 3.99137 29.1936ZM10.3049 19.1392C12.4094 19.1392 14.2424 17.2686 14.2424 14.8524C14.2424 12.4585 12.3981 10.6881 10.3049 10.6881C8.20041 10.6881 6.34481 12.503 6.35613 14.8747C6.35613 17.2686 8.18909 19.1392 10.3049 19.1392ZM31.7008 18.5491C32.0856 18.8051 32.6173 18.7272 32.9228 18.2929C33.7941 17.1683 34.3146 15.5094 34.3146 13.8058C34.3146 12.1022 33.7941 10.4543 32.9228 9.31858C32.6173 8.88433 32.0856 8.80639 31.7008 9.06248C31.2483 9.37425 31.169 9.93098 31.5311 10.3875C32.1873 11.2782 32.5607 12.5142 32.5607 13.8058C32.5607 15.0974 32.1761 16.3221 31.5311 17.224C31.1804 17.6917 31.2483 18.2261 31.7008 18.5491ZM35.8986 21.4552C36.3172 21.7335 36.8376 21.6333 37.1431 21.2102C38.5914 19.2506 39.44 16.556 39.44 13.8058C39.44 11.0556 38.6028 8.33875 37.1431 6.40135C36.8376 5.97824 36.3172 5.87803 35.8986 6.15639C35.4799 6.43475 35.4121 6.95807 35.7402 7.41459C36.9735 9.12929 37.6862 11.4341 37.6862 13.8058C37.6862 16.1774 36.9508 18.4711 35.7402 20.1969C35.4234 20.6534 35.4799 21.1768 35.8986 21.4552Z"
            fill="#9EFF00"
          />
        </svg>
      ),
      title: "Client-Centric Approach",
      description:
        "We put your goals at the center of everything we do. By listening to your challenges and collaborating closely, we create solutions that align perfectly with your vision and ensure long-term success.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M19.6374 36.66C19.9041 36.66 20.3209 36.5599 20.7377 36.3432C30.2238 31.3751 33.2748 28.891 33.2748 22.9059V10.3355C33.2748 8.61835 32.5411 8.06819 31.1408 7.48468C29.1902 6.68444 22.9551 4.41711 21.0211 3.75025C20.571 3.6002 20.1042 3.51685 19.6374 3.51685C19.1706 3.51685 18.7038 3.61688 18.2703 3.75025C16.3197 4.38377 10.0845 6.70112 8.13396 7.48468C6.75022 8.05152 6 8.61835 6 10.3355V22.9059C6 28.891 9.21762 31.0917 18.537 36.3432C18.9705 36.5767 19.3706 36.66 19.6374 36.66ZM12.1185 20.6385C12.1185 20.4385 12.2185 20.1884 12.4019 19.9717L21.8213 8.15154C22.5382 7.25128 23.7386 7.85146 23.3052 8.96845L20.2042 17.3043H26.0226C26.4727 17.3043 26.8061 17.6209 26.8061 18.0712C26.8061 18.2712 26.7061 18.5213 26.5228 18.738L17.1033 30.5582C16.3864 31.4584 15.2027 30.8582 15.6195 29.7579L18.7371 21.4055H12.902C12.4686 21.4055 12.1185 21.0886 12.1185 20.6385Z"
            fill="#9EFF00"
          />
        </svg>
      ),
      title: "Results-Driven Solutions",
      description:
        "We focus on measurable outcomes that add value to your business. Every solution we deliver is designed to save time, improve efficiency, and drive growth for your organization.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <path
            d="M9.33747 27.8223L9.74664 29.4589C10.2649 31.5867 11.397 32.6778 13.6474 32.6778H28.3365C30.6007 32.6778 31.719 31.6139 32.2509 29.4589L32.6601 27.8223H9.33747ZM8.88739 25.9538H33.1238L35.6879 15.4518L34.5695 14.8108L28.282 19.3934C27.8182 19.7208 27.5046 19.598 27.2454 19.2298L21.3261 10.2826L20.6714 10.2554L14.6976 19.2707C14.4657 19.6253 14.1929 19.7345 13.7292 19.4071L7.56441 14.9062L6.25507 15.2472L8.88739 25.9538ZM6.75971 18.1795C8.56006 18.1795 10.0058 16.7202 10.0058 14.9062C10.0058 13.1332 8.56006 11.6602 6.75971 11.6602C4.95937 11.6602 3.5 13.1195 3.5 14.9062C3.5 16.7202 4.973 18.1795 6.75971 18.1795ZM20.9988 12.5058C22.7855 12.5058 24.2448 11.0464 24.2448 9.24607C24.2448 7.473 22.7855 6 20.9988 6C19.1848 6 17.7391 7.45937 17.7391 9.24607C17.7391 11.0464 19.1985 12.5058 20.9988 12.5058ZM35.2242 18.1795C37.011 18.1795 38.4839 16.7202 38.4839 14.9062C38.4839 13.1195 37.0246 11.6602 35.2242 11.6602C33.4376 11.6602 31.9782 13.1332 31.9782 14.9062C31.9782 16.7202 33.4376 18.1795 35.2242 18.1795Z"
            fill="#9EFF00"
          />
        </svg>
      ),
      title: "Collaborative Partnership",
      description:
        "We believe in building lasting relationships with our clients. By working as an extension of your team, we ensure seamless communication, transparency, and shared success throughout every project.",
    },
  ];

  return (
    <>
      <Header
        imageUrl={abstractBg} // Fondo visual que refleje tecnología y colaboración
        title="Empowering Businesses with Scalable Tech Solutions."
        worksText="Learn More" // Texto ajustado para explorar más información
        contactText="Schedule a Call" // CTA directo para agendar una llamada
        contactHref="/contact" // Ruta para la página de contacto
        worksHref="/services" // Ruta para la página de servicios o "works"
        words={[
          "Small Businesses",
          "Entrepreneurs",
          "Tech Innovators",
          "Growing Enterprises",
        ]} // Palabras dinámicas que representan a tus audiencias clave
      />
      <BrandsSection
        brands={[
          { type: "FaAws", size: 40, color: "##E6E6E6" },
          { type: "FaReact", size: 40, color: "##E6E6E6" },
          { type: "FaNodeJs", size: 40, color: "##E6E6E6" },
          { type: "RiNextjsLine", size: 40, color: "##E6E6E6" },
          { type: "FaPhp", size: 40, color: "##E6E6E6" },
        ]}
      />
      <Hero
        imageUrl={headerBg}
        title="Our Services"
        subtitle="At HoistLoop, we simplify your operations, create custom tools, and help you grow with scalable, tailored solutions."
      />
      <CardGroup
        cards={services}
        columns={3}
      />
      <Hero
        imageUrl={headerBg}
        title="Why Choose SquareUp?"
        subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
      />
      <CardGroup
        cards={whyChooseUs}
        columns={2}
      />
      <ContactCTA
        imageSrc={logo} // Asegúrate de utilizar el logo sin texto
        imageUrl={headerBg} // Fondo visual que refuerce tecnología y colaboración
        title="Let's Build Your Future with HoistLoop."
        subtitle="We’re excited to partner with you! Let’s discuss how our custom solutions and expertise can transform your business. Get in touch with us today to start your project."
        buttonText="Start Your Project"
        contactHref="/contact" // Redirige a la página de contacto
      />
      <ContactForm buttonText="Send Message" />
    </>
  );
}
