import Image from "next/image"
import Balancer from "react-wrap-balancer"

const Service = () => {

    const data = [
        {
            img: "https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729603/resdium-assets/value%20home%20remodeling%20website%20assests/bathroom-remodeling_ovfolo.webp",
            title: "Bathroom Remodeling",
            desc: 'Discover top-notch bathroom remodeling solutions with our experts. High-quality materials and cutting-edge techniques ensure your dream bathroom becomes a reality!'
        },
        {
            img: "https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729602/resdium-assets/value%20home%20remodeling%20website%20assests/repair-img_hplmv5.webp",
            title: "Repairs",
            desc: 'Count on Weather Shield Structures for reliable home repairs. Trust us to handle even the toughest issues, giving you peace of mind.'
        },
        {
            img: "https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729623/resdium-assets/value%20home%20remodeling%20website%20assests/kicten-remodeling_yecrta.webp",
            title: "Kitchen Remodeling",
            desc: 'Discover top-notch bathroom remodeling solutions with our experts. High-quality materials and cutting-edge techniques ensure your dream bathroom becomes a reality!'
        },

    ]

    const data2 = [
        {
            img: "https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729602/resdium-assets/value%20home%20remodeling%20website%20assests/painting-img_gfztdk.webp",
            title: "Paint, Electricity",
            desc: 'For any painting, electrical, or car repair emergency, Paint Excellence offers 24/7 service to prevent further property damage.'
        },
        {
            img: "https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729608/resdium-assets/value%20home%20remodeling%20website%20assests/carpantry_wl4lro.webp",
            title: "Carpentry",
            desc: 'Carpentry emergency? Trust Paint Excellences 24/7 service for immediate assistance, safeguarding your property with skilled craftsmanship.'
        },

    ]

    return (
        <div id="service" className="px-4 md:px-20 py-20">
            <h2 className="h2-title">Our Services</h2>
            <p className="py-4 desc">
                <Balancer>
                    We have a measure twice, cut once philosophy and have a <br />
                    knack for the details. Using high grade roofing materials and  <br /> regularly participating in certification classes ensures our work  <br /> is always of the  highest QUALITY.
                </Balancer>
            </p>
            <div>

                <div className="flex flex-col  md:flex-row mt-20 justify-center grid-cols-3 gap-14">
                    {
                        data.map((item, i) => <ServiceCard key={i} data={item} />)
                    }
                </div>
                <div className="flex flex-wrap mt-10 md:mt-20 justify-center gap-8">
                    {
                        data2.map((item, i) => <ServiceCard key={i} data={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Service


const ServiceCard = ({ data }) => {

    return <div className="md:max-w-[366px] bg-[#F1F8FF] max-w-full transition-all duration-500  ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer scale-100 h-[344px] shadow-md">
        <div>
            <Image width={366} className="md:w-[366px] w-full" height={177} src={data.img} alt="" />
        </div>
        <div className="p-6 h-fit ">
            <h3 className="text-[24px] font-medium text-primary">
                {data.title}
            </h3>
            <p className="text-sm">
                {data.desc}
            </p>
        </div>
    </div>
}