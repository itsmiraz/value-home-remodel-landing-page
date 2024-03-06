import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['100', '300', '400', '500', '600', '700'],
});
const RootLayout = ({ children }) => {
    return (
        <div className={poppins.className}>
            <div className="relative  mx-auto max-w-[1520px] transition-all duration-300 ease-in-out">
                {children}
            </div>
        </div>
    )
}

export default RootLayout