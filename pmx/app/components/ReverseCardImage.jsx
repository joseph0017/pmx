import Image from "next/image"

const ReverseCardImage = ({title, description, imgSrc}) => {
  return (
    <div className="mt-16 sm:mt-20 block shadow-lg bg-nav-yellow">
        <div className="lg:grid lg:grid-cols-12">
            <div className="pl-4 pr-4 lg:pl-0 lg:pr-0 col-start-0 col-span-6 pt-6 lg:pt-0">
                <Image src={imgSrc} alt="dining" />
            </div>      
            <div className="col-start-8 col-span-8 mt-12 lg:mt-20 ml-5 pb-4">
                <h1 className="mb-5 sm:ml-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-bold"> {title} </h1>
                <p className="sm:ml-4 mr-2 mb-2 sm:mb-4"> {description}</p>
            </div>
        </div>
    </div>
  )
}

export default ReverseCardImage