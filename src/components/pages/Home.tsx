import BookingSteps from "../organs/BookingSteps"
import HeroSection from "../organs/HeroSection"
import Services from "../organs/Services"
import TopDestination from "../organs/TopDestination"


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <TopDestination />
            <BookingSteps />
            {/* <Testimonials />
            <Partners />
            <NewsLetter /> */}
        </>
    )
}

export default Home