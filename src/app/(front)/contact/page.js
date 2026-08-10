import Contact from "@/components/section/Contact";
import Map from "@/components/section/Map";
import PageHero from "@/components/widget/PageHero";

const ContactPage = () => {
    return (
        <>
            <PageHero title="Contact" routeName="contact" image="/images/background/contact-breadcrumb.avif" />
            <Contact />
            <Map />
        </>
    );
};

export default ContactPage;