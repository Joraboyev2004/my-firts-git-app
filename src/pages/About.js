import AboutWel from "../Components/AboutWel";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import WhoWeAre from "../Components/WhoWeAre";



function About(){
    return(
        <>
           <AboutWel />
           <main>
               < WhoWeAre />
               <Services />
               <Testimonials />
           </main>
        </>
    )
}

export default About;