import CardImage from "./components/CardImage";
import ReverseCardImage from "./components/ReverseCardImage";
import Hero from "./components/hero";

import dining from './components/images/dining.jpg'
import room from './components/images/room.jpg'
import engineers from './components/images/engineers.jpg'

export default function Home () {
  return (
    <main>

      <Hero imgSrc={engineers} subtitle= 'Prime Mega-X Technology Ltd' 
      title='A GENERAL 
              CONSTRUCTION COMPANY' />

      <CardImage title='BRING YOUR PROJECTS TO LIFE' imgSrc={dining}
      description= 'At Prime Mega-X Tech ltd, we are dedicated
                    to deploying our vast resources to making 
                    your ideas come to life.
                    '
       />

      <ReverseCardImage title='FIND YOUR DREAM HOME' imgSrc={room}
      description='Looking for a dream home? 
                    Look no further. We offer real estate services 
                    which are budget friendly as well.'
       />
       <br />
       <br />
       <br />

    </main>
  );
};
