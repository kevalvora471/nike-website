import React from 'react'
import { Hero, Footer, CustomersReviews, PopularProducts, SuperQuality, Services, SpecialOffer, Subscribe } from './sections';
import Nav from './components/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const App = () => (
  <main className='relative'>
    <Nav />
    <section className='xl:padding-l wide:padding-r padding-b' data-aos='zoom-in' data-aos-duration='700' data-aos-delay='100'>
      <Hero />
    </section>
    <section className='padding' data-aos='zoom-in'  data-aos-duration='700'  data-aos-delay='200'>
      <PopularProducts />
    </section>
    <section className='padding' data-aos='zoom-in'  data-aos-duration='700'  data-aos-delay='200'>
      <SuperQuality />
    </section>
    <section className='padding-x py-10' data-aos='zoom-in'  data-aos-duration='700'  data-aos-delay='200'>
      <Services />
    </section>
    <section className='padding' data-aos='zoom-in'  data-aos-duration='700'  data-aos-delay='200'>
      <SpecialOffer />
    </section>
    <section className='bg-pale-blue padding' data-aos='zoom-in'  data-aos-duration='700'  data-aos-delay='200'>
      <CustomersReviews />
    </section>
    <section className='padding-x sm:py-32 py-16 w-full' data-aos='zoom-in'  data-aos-duration='700'  data-aos-delay='200'>
      <Subscribe />
    </section>
    <section className='bg-black padding-x padding-t pb-8'>
      <Footer />
    </section>
  </main>
);

export default App