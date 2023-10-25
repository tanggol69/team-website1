import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At go::bcd, we are passionate about helping you succeed in the digital world. With a focus on providing exceptional web solutions, we specialize in creating both basic and engaging websites tailored to meet your unique needs."
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
