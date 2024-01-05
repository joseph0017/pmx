import React from 'react'

const AboutPage = () => {
  return (
    <section className='pt-10 pl-2'>
        <div className='ml-4 pr-4'>
            <h1 className='text-4xl sm:text-6xl text-yellow-400 font-bold'>WHO WE ARE</h1>
            <p className='text-sm sm:text-base pt-10'> Prime Mega-X Technology Ltd is a construction company that also offers a retail of 
                electronics and technology devices. We provide premium services for our clients at an 
                affordable rate, and we are dedicated to deploying our vast resources to making 
                your ideas come to life.
            </p>
        </div>
        
        <div className='pt-16 ml-4 pr-4'>
            <h1 className='text-4xl sm:text-6xl text-yellow-400 font-bold'> WHY US? </h1>
            <hr />
            <div className='pt-8 lg:grid grid-cols-12'>
                <h3 className='text-xl sm:text-3xl pt-3 col-span-4'>First- Class Client Relations</h3>
                <p className='text-sm sm:text-base pt-4 pb-8 lg:pl-36 col-span-8'> We go the extra mile to understand
                    our client’s preferences and desires
                    formulating the best strategies in
                    making their dreams become a reality
                </p>
            </div>
            <hr />
            <div className='pt-8 lg:grid grid-cols-12'>
                <h3 className='text-xl sm:text-3xl pt-3 col-span-4'>Quality on Budget</h3>
                <p className='text-sm sm:text-base pt-4 pb-8 lg:pl-36 col-span-8'>We procure the best materials and 
                    provide excellent service within the 
                    financial plan of our clients
                </p>
            </div>
            <hr />
            <div className='pt-8 lg:grid grid-cols-12'>
                <h3 className='text-xl sm:text-3xl pt-3 col-span-4'>Hands on Supervision</h3>
                <p className='text-sm sm:text-base pt-4 pb-8 lg:pl-36 col-span-8'> Every detail of our project are carefully
                    supervised to ensure a seamless 
                    integration of technology for premium 
                    usage and an exceptional living 
                    experience.
                </p>
            </div>
            <hr />
        </div>
        <br />
        <br />
        <br />
    </section>
  )
}

export default AboutPage