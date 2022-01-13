import Head from 'next/head'
import Navigation from './components/nav'
//import Logo from '../public/tabteam-logo.png'
import { RightNav } from './components/nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TabTeam</title>
        <meta name="description" content="TabTeam Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Licorice&family=Montserrat&family=Roboto:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <Navigation/>
      <div  style={{height: 5000}}></div>
    </div>
  )
}
