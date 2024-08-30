"use client"
import Image from "next/image";
import Diseño from "./Contenedores/diseño";
import Redaccion from "./Contenedores/redaccion";
import Desarrollo from "./Contenedores/desarrollo";
import Soporte from "./Contenedores/soporte";




const Section2 = () => {
    return (
        <section className="bg-gray-100">
            <div>
                <div className="pb-14">
                    <div className="text-center pt-20 ">
                        <h2 className="font-oswald font-extrabold text-6xl	">Creamos diseños súper impresionantes</h2>
                        <p className="font-sans font-medium text-lg	ml-96 mr-96	mt-8	leading-loose	">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <div>
                        <div className="grid grid-cols-2  mt-14 ">
                            <Diseño/>
                            <Redaccion/>
                            <Desarrollo/>
                            <Soporte/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;