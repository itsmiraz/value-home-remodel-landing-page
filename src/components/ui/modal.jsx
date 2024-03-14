import React from 'react'
import Close from '../../assets/icons/close'

const Modal = ({ Open, setOpen }) => {
    return (
        <>
            {
                Open && <div className="flex z-40 rounded px-4  md:pt-40 overflow-y-scroll justify-center items-center absolute top-0 left-0 w-full h-full bg-black/50 ">
                    <div className="w-full  relative md:w-[500px]  h-fit bg-white rounded p-4">
                        <div className="flex justify-between items-center">
                            <h2>Get An Esitimate</h2>
                            <button
                                onClick={() => setOpen(!Open)}
                                className="text-2xl"
                            >
                                <Close />
                            </button>
                        </div>
                        <hr className="my-2" />


                        <div className="space-y-4">



                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Modal