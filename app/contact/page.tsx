import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have questions or ready to take the next step? We'd love to hear from you!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
