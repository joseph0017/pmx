import CardImage from "../components/CardImage"
import Hero from "../components/hero"
import serve from '../components/images/serve.jpg'
import estate from '../components/images/estate.jpg'
import procurement from '../components/images/procurement.jpg'
import building from '../components/images/building.jpg'
import ReverseCardImage from "../components/ReverseCardImage"

const ServicesPage = () => {
  return (
    <section>
        
        <Hero imgSrc={serve} subtitle= 'Prime Mega-X Technology Ltd' 
            title='SERVICES' />
        <CardImage title='REAL ESTATE' imgSrc={estate} 
            description= 'we provide high quality buildings from
                        scratch for clients with the best materials
                        available.'
         />

         <ReverseCardImage title='PROCUREMENT' imgSrc={procurement}
            description= 'we procure variety of things ranging from
                        building materials to Electronics, Gadgets etc.'
         />

         <CardImage title= 'BUILDING' imgSrc={building}
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