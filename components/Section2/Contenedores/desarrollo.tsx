"use client"
import Image from "next/image";
const Desarrollo = () => {
    return (
            <div className="flex bg-white rounded-2xl  p-4 w-3/5 ml-72 mt-5">
                <div>
                    <span className="inline-flex items-center justify-center rounded-full  bg-blue-800 p-4" ><Image src="/check.png" width="100" height="100" className="w-14" alt=" " /></span>
                </div>
                <div className="pb-4">
                    <h5 className="font-sans text-lg pl-4">Desarrollo</h5>
                    <p className="font-sans text-sm pl-4 pt-5">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
            </div>
    );
}

export default Desarrollo   