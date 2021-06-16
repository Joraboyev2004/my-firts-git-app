import ServicesWel from "../Components/ServicesWel";
import Services_Ser from "../Components/Services_Ser";
import Testimonials from "../Components/Testimonials";


function Services(){
    return(
        <>
          <ServicesWel />
          <main>
              <Services_Ser />
              < Testimonials />
          </main>
        </>
    )
}

export default Services