import Head from 'next/head'
import React from 'react';
import { useQuery, gql } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Card, CardBody, CardTitle,CardSubtitle ,CardImg } from 'reactstrap';
import styles from '../styles/Home.module.css'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';



const ResumeQuery = gql` 
  query ResumeQuery {  
    awards{
      title
      img
      publish
      text
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


  const {awards} = data;

  return (
    <div >
      <Head>
        <title>Awards Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="container"> 
      {awards.map((award) => { 
          return (
            <>
              <Row>
            
            <Col xs={4}  style={{ padding: 5 }}>
             
                <Card className="my-2">
                  <CardImg
                    variant="top"
                    src={award.img}
                    style={{ maxHeight: 300 } }
                  />
                <CardBody>
                      <CardTitle className="font-weight-bold" >{award.title}</CardTitle>
                      <Card className="p-2"><CardSubtitle>{award.publish}</CardSubtitle></Card>
                    </CardBody>
                  </Card>
                
              </Col>
           
          </Row>
            </>
          );
        } ) }
      </section>
      <Footer />
      </div>
      
  )
}

   