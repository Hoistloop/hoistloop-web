import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import abstractBg from "@/assets/abstract.svg";
import ContactGroup from "@/components/ContactGroup";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import FAQGroup from "@/components/FAQGroup";
import AboutCTA from "@/components/AboutCTA";
import logo from "@/assets/logo.svg";

export default function ContactPage() {
  return (
    <>
      <Hero
        imageUrl={abstractBg}
        title="Get in Touch with HoistLoop"
        subtitle="We’re here to answer your questions, discuss your needs, and explore how we can help your business thrive."
      />
      <ContactGroup
        contacts={[
          {
            text: "hello@hoistloop",
            icon: <MdEmail />,
          },
          {
            text: "hello@hoistloop",
            icon: <BsFillTelephoneFill />,
          },
          {
            text: "Get Location",
            icon: <FaLocationPin />,
          },
        ]}
      />
      <ContactForm buttonText="Send Message" />
      <Hero
        imageUrl={abstractBg}
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common questions about our services, processes, and how we help businesses succeed."
      />

      <FAQGroup
        faqs={[
          {
            index: 1,
            question: "What services does HoistLoop provide?",
            response:
              "HoistLoop provides custom software solutions, process optimization, tailored system development, and technology outsourcing services.",
          },
          {
            index: 2,
            question: "Do you work with companies of all sizes?",
            response:
              "Yes, we offer services tailored to startups as well as large corporations, ensuring scalable solutions that meet the specific needs of each client.",
          },
          {
            index: 3,
            question: "How do you ensure the quality of your developments?",
            response:
              "Our team uses agile methodologies, automated testing, and quality control tools to deliver robust and functional products.",
          },
          {
            index: 4,
            question: "What technologies does HoistLoop use in its projects?",
            response:
              "We work with modern technologies such as React, Node.js, Laravel, MongoDB, AWS, and more, depending on the project requirements.",
          },
          {
            index: 5,
            question: "Can you integrate with our existing systems?",
            response:
              "Yes, we perform integrations with existing systems to enhance their functionality and adapt them to your company’s current needs.",
          },
          {
            index: 6,
            question: "What is the average time to develop a project?",
            response:
              "The duration depends on the complexity of the project. Typically, custom software development takes 3 to 6 months on average.",
          },
          {
            index: 7,
            question: "How do you handle data confidentiality?",
            response:
              "We sign Non-Disclosure Agreements (NDAs) and implement strict security measures to protect our clients' information.",
          },
          {
            index: 8,
            question:
              "Do you provide technical support after completing a project?",
            response:
              "Yes, we offer maintenance and technical support plans to ensure the software operates optimally in the long term.",
          },
          {
            index: 9,
            question: "What are the stages of the development process?",
            response:
              "Our process includes initial analysis, design, development, testing, implementation, and post-launch support. We work closely with our clients at every stage.",
          },
          {
            index: 10,
            question:
              "What sets HoistLoop apart from other software development companies?",
            response:
              "At HoistLoop, we stand out by offering innovative solutions tailored to each client's specific needs, with a focus on efficiency and business growth.",
          },
        ]}
      />
      <AboutCTA
        imageUrl={logo}
        title="Start Your Project with HoistLoop Today"
        description="Ready to bring your ideas to life? At HoistLoop, we specialize in creating innovative and tailored solutions to help your business succeed. Let’s start building your future now."
        button={{ text: "Get Started", link: "/" }}
        header="Ready to Collaborate?"
        subHeader="Contact us today to discuss your project and explore how we can make your vision a reality."
      />
    </>
  );
}
