import Image from "next/image"

const Aboutus = () => {
    return (
        <div id="about" className="px-4 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-10">

            <div>
                <h2 className="h2-title">
                    About Us
                </h2>
                <div className="space-y-10 mt-10">
                    <p className="desc">

                        At Remodeling Excellence, our mission is to demonstrate how seamless and stress-free kitchen, bathroom, and home remodeling can be. Our expertly trained and closely-knit teams are with you every step of the journey.
                    </p>
                    <p className="desc">

                        With a presence in Houston, San Antonio, and the U.S. Virgin Islands, we cater to clients across Texas, the Gulf Coast Region, and the Caribbean Islands, and are committed to delivering a seamless experience for all your kitchen, bathroom, and home remodeling needs.
                    </p>
                    <p className="desc">

                        We understand the significance of commitment, which is why when we commit to a project, we deliver. At our Remodeling Company, your kitchen, bathroom, and home remodeling are our true calling.
                    </p>
                </div>
            </div>
            <div className="md:order-last order-first">
                <Image src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1710044560/resdium-assets/value%20home%20remodeling%20website%20assests/about_us_ilg9pr.webp'} alt="" width={547} height={503} />
            </div>
        </div>
    )
}

export default Aboutus