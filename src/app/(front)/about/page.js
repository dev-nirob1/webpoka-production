import About from '@/components/section/About';
import Founder from '@/components/section/Founder';
import OurTeam from '@/components/section/OurTeam';
import PageHero from '@/components/widget/PageHero';

const AboutPage = () => {
    return (
        <div>
            <PageHero routeName="About" title="About Us" image="/images/background/about-breadcrumb.avif" />
            <About />
            <Founder/>
            <OurTeam/>
        </div>
    );
};

export default AboutPage;