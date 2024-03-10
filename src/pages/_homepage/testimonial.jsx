import Image from "next/image";
import React from "react";

const Testimonial = () => {

  const testimonials = [
    {
      name: 'Paul Swingle',
      date: 'February 31, 2023',
      profile: "https://res.cloudinary.com/djnlyzsmv/image/upload/v1710052391/resdium-assets/value%20home%20remodeling%20website%20assests/client-2_frj7tg.webp",
      review: "I couldn't be more pleased with Jack's remodeling work – he turned our outdated space into a masterpiece!"
    },
    {
      name: 'Mark Swingle',
      date: 'January 31, 2023',
      profile: "https://res.cloudinary.com/djnlyzsmv/image/upload/v1710052391/resdium-assets/value%20home%20remodeling%20website%20assests/client-1_tjhzwb.webp",
      review: "Jack's remodeling skills are simply outstanding, and our home now feels like a dream come true!"
    },
  ]

  return (
    <div id="testimonial" className="py-32 px-4 md:px-20">
      <h2 className="h2-title">Hear From The People</h2>
      <h2 className="h2-title">That Trust Us The Most!</h2>
      <div className="py-6 mt-10 flex flex-wrap gap-x-10">

        {
          testimonials.map((item, i) => <TestimonialCard data={item} key={i} />)
        }

      </div>
    </div>
  );
};

export default Testimonial;

const TestimonialCard = ({ data }) => {
  return <div className="max-w-[445px] drop-shadow-lg bg-[#E8F4FF] rounded-lg p-4">
    <div className="flex justify-between">
      <div className="flex items-center gap-x-3" >
        <Image src={data.profile} alt="" width={60} height={60} />
        <div>
          <h3 className="text-lg font-medium">{data.name}</h3>
          <p className="text-xs">{data.date}</p>
        </div>
      </div>
      <div>
        <Image src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1710052479/resdium-assets/value%20home%20remodeling%20website%20assests/facebook_zp0hid.png'} alt="" width={32} height={32} />
      </div>
    </div>
    <p className="p-4">
      {data.review}
    </p>
  </div>
}