import Image from "next/image"

const Hero = ({title, subtitle, imgSrc}) => {
  return (
    <div>
        <div className="relative">
            <Image className="" src={imgSrc} alt="home" />
            <h4 className="absolute top-10 text-xl ml-4 sm:text-2xl sm:top-28 md:top-36 lg:text-3xl text-white lg:top-60 lg:ml-10">{subtitle}</h4>
            <h1 className="absolute top-24 text-3xl ml-4 sm:text-4xl sm:top-40 md:text-5xl md:top-56 lg:text-7xl text-white lg:top-80 lg:ml-10">{title}</h1>    
        </div>
    </div>
  )
}

export default Hero