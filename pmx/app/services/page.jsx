import CardImage from "../components/CardImage"
import Hero from "../components/hero"
import house from '../components/images/house.jpg'
import livingroom from '../components/images/livingroom.jpg'
import room from '../components/images/room.jpg'
import dining from '../components/images/dining.jpg'
import ReverseCardImage from "../components/ReverseCardImage"

const ServicesPage = () => {
  return (
    <section>
        
        <Hero imgSrc={house} subtitle= 'Prime Mega-X Technology Ltd' 
            title='SERVICES' />
        <CardImage title='REAL ESTATE' imgSrc={livingroom} 
            description= 'we provide high quality buildings from
                        scratch for clients with the best materials
                        available.'
         />

         <ReverseCardImage title='PROCUREMENT' imgSrc={room}
            description= 'we procure variety of things ranging from
                        building materials to Electronics, Gadgets etc.'
         />

         <CardImage title= 'BUILDING' imgSrc={dining}
         description= 'We take on contracts from organizations,
                        departments and offices to erect buildings
                        in different locations across the country'
         />
         <br />
         <br />
         <br />
    </section>

  )
}
export default ServicesPage