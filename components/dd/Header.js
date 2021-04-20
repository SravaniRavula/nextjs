

import Head from 'next/head'
import { useQuery, gql } from "@apollo/client";
import styles from '../styles/Home.module.css'

const ResumeQuery = gql`
  query ResumeQuery {
    bio {
      name
      email
      tagline
      img
      publish
      title
      text
    }
   
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(ResumeQuery);

  if (error) {
    return <span>Error... oops!</span>;
  }
  if (loading) {
    return (
      <header >
        <h1>NIC Graphql</h1>
        <h2>loading...</h2>
      </header>
    );
  }


  const { bio } = data;

  return (
    <>
      <Head>
        <title>NIC </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header >
        <h1>{bio.name}</h1>
        <h2>{bio.tagline}</h2>
      </header>
</>
  );
}
