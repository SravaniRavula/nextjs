import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React from 'react';
import { useQuery, gql } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle,  Button } from 'reactstrap';
  import styles from '../styles/Home.module.css'
  import Header from '../components/header/Header';
  import Footer from '../components/footer/Footer';



  const ResumeQuery = gql` 
  query ResumeQuery {  
    news{
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


  const {news} = data;

  return (
    <div >
      <Head>
        <title>News Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles.container}>
      {news.map((news) => { 
          return (
            <>
      <section className="container">
                    <Card className=" m-3 " >
                                    <div className="row">
                                   <CardImg className="col-sm-4 m-3 " variant="top" src={news.img} />               
                                           <CardBody className="col-md-7 p-3">
                                             <CardTitle>{news.publish}</CardTitle>
                                              <CardTitle >{news.title}</CardTitle>
                                              <CardText>{news.text} </CardText>              
                                              <Button variant="primary">Go somewhere</Button>
                                            </CardBody>
                       </div>
                    </Card>
                </section>
                </>
          );
        } ) }
      
      </section>
      <Footer />
    </div>

)
}
