import PageHero from "@/components/widget/PageHero";
import ServiceDetails from "../../../components/section/Servicedetails";
import CTA from "@/components/section/CTA";

const ServicesPage = () => {
    return (
        <>
            <PageHero routeName="services" title="Services" image="/images/background/blogs-breadcrumb.avif" />
            <ServiceDetails />
            <CTA />
        </>
    )
}
export default ServicesPage;