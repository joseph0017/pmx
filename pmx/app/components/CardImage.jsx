import Image from "next/image"

const CardImage = ({title, description, imgSrc}) => {
  return (
    <div className="mt-16 sm:mt-20 block shadow-lg bg-nav-yellow">
        <div className="lg:grid lg:grid-cols-12">
            <div className="col-start-0 col-span-5 lg:mt-16  ml-5">
                <h1 className="mb-5 sm:ml-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white pt-6 lg:pt-0"> {title} </h1>
                <p className=" sm:ml-4 mr-2 mb-8 sm:mb-4 text-black"> {description}</p>
            </div>
            <div className="pl-4 pr-4 lg:pl-0 lg:pr-0 col-start-7 col-span-8 pb-6 lg:pb-0">
                <Image src={imgSrc} alt="dining" />
            </div>
        </div>
    </div>
  )
}

export default CardImage