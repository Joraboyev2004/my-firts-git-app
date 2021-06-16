import React from 'react';

import Carousell from '../Components/Carousel';

import Markalar from '../Components/Markalar';

import Picture from '../Components/Portfolio';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonials';
import WelcomeContent from '../Components/Welcome';




function Home(){
    return(
        <>
     
              <WelcomeContent />       
          <main>
              <section className='text-start'>
                  <Services />
              </section>
              <section>
                  <Picture />
              </section>
              <section>
                  <Testimonials />
              </section>
              <section className='main'>
                  <Carousell />
              </section>
              <section>
                  <Markalar />
              </section>
          </main>
        
        </>
    )
}

export default Home;