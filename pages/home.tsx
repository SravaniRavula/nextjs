import Head from 'next/head'
import React from 'react';
import { useQuery, gql } from "@apollo/client";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from '../styles/Home.module.css';





const ResumeQuery = gql` 
  query ResumeQuery {  
    home{
      name
      paragraph
      img
      button
  }
}
`;

export default function Home() {
  const {data, error, loading} = useQuery(ResumeQuery);


  if (error) {
    return <span>Error... oops!</span>
  }

  if (loading) {
    return (
      <header>
        <h1>Loading </h1>
        <h2>Error</h2>
      </header>
    );
  }


  const {home} = data;

  return (
    <>
        
      <Head>
        <title>Awards Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section > 
    
                 <div className={styles.HeroSection}> 
            <section className="container">
            <section className="testimonials">
                <div className="fixed-bnr">
                        <Carousel className="container" >
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-1.jpg"
                              alt="First slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-2.jpg"
                              alt="Second slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-3.jpg"
                              alt="Third slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item>
                                                                <img
                                                                  className="d-block w-100"
                                                                  src="/assets/Banner-4.jpg"
                                                                  alt="Fourth slide"
                                                                />

                                                              </Carousel.Item>
                           <Carousel.Item>
                                      <img
                                        className="d-block w-100"
                                        src="/assets/Banner-5.jpg"
                                        alt="Fifth slide"
                                      />

                                    </Carousel.Item>

                        </Carousel>
                        </div>
                 </section>
                
      </section>
      </div>
      
     

<section className="container" >
<h3 className="text-center m-4">{home.title}</h3>
<div className="row">
    <section className="col-lg-8 p-4">
        <p className="text-justify">
       {home.paragraph}
        </p>
        <a href="#" className="btn btn-danger">{home.button}</a>
        </section>
        <section  className="images col-lg-4 p-4">
            <img className="img-thumbnail float-left" src={home.img}/>

    </section>
 </div>
</section>  
            
      </section>
      <Footer />
      </>
      );
}


