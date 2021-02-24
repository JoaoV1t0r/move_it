import { CompleteChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExpirienceBar } from "../components/ExperienceBar";
import { Perfil } from "../components/Perfil";
import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExpirienceBar />
      <section>
        <div>
          <Perfil />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
