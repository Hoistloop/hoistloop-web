import Header from "@/components/Header";
import Navbar from "@components/Navbar";
import headerBg from "@/assets/images/header.png";
import Hero from "@/components/Hero";
import CardGroup from "@/components/CardGroup";
import { CardProps } from "@/components/Card";

export default function HomePage() {
  const words = [
    "Startups",
    "Enterprise leaders",
    "Media & Publishers",
    "Social Good",
  ];

  const services: CardProps[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      ),
      title: "Design",
      description:
        "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
      buttonText: "Learn More",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
          />
        </svg>
      ),
      title: "Engineering",
      description:
        "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
      buttonText: "Learn More",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
          />
        </svg>
      ),
      title: "Project Management",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
      buttonText: "Learn More",
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
        "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
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
        "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
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
        "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
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
        "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    },
  ];

  return (
    <>
      <Navbar />
      <Header
        imageUrl={headerBg}
        title="A Digital Product Studio that will Work"
        worksText="Our Works"
        contactText="Contact Us"
        contactHref="/contact"
        worksHref="/works"
        words={words}
      />
      <Hero
        imageUrl={headerBg}
        title="Our Services"
        subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      />
      <CardGroup cards={services} />
      <Hero
        imageUrl={headerBg}
        title="Why Choose SquareUp?"
        subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
      />
      <CardGroup cards={whyChooseUs} />
    </>
  );
}
