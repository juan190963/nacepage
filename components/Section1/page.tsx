"use client"
import Link from "next/link";
import Image from "next/image";
import "../../styles/estilos.css"
import Icon1 from "./Icons/icon1";
import Icon2 from "./Icons/icon2";
import Icon3 from "./Icons/icon3";
import Icon4 from "./Icons/icon4";


const Section1 = () => {
    return (
        <section className="fondo">
            <div>
                <div className="flex items-end bg-center pt-96 pb-14 ">
                    <div className="pl-64">
                        <h1 className="font-oswald text-white text-8xl font-black">
                            Desarrollo de aplicaciones móviles
                        </h1>
                        <p className="text-white font-medium pt-6">
                            Imagen de <a href="/" className="underline hover:text-zinc-200 hover:no-underline">Freepik</a>
                        </p>
                    </div>

                    <div className="mr-96 ">
                        <div className="grid grid-cols-2 relative justify-center gap-x-52 gap-10">
                            <div className="bg-white flex flex-col items-center justify-center text-center rounded-3xl h-56 w-60">
                                <Icon1 />
                                <h4 className="font-oswald tracking-widest uppercase font-semibold text-rounded-3xl mt-4">
                                    estrategia
                                </h4>
                            </div>
                            <div className="bg-white flex flex-col items-center justify-center text-center rounded-3xl h-56 w-60">
                                <Icon2 />
                                <h4 className="font-oswald tracking-widest uppercase font-semibold text-rounded-3xl mt-4 w-36">
                                    Diseño de experiencia de usuario
                                </h4>
                            </div>
                            <div className="bg-white flex flex-col items-center justify-center text-center rounded-3xl h-44 w-60">
                                <Icon3 />
                                <h4 className="font-oswald tracking-widest uppercase font-semibold text-rounded-3xl mt-4">
                                    desarrollo
                                </h4>
                            </div>
                            <div className="bg-white flex flex-col items-center justify-center text-center rounded-3xl h-44 w-60">
                                <Icon4 />
                                <h4 className="font-oswald tracking-widest uppercase font-semibold text-rounded-3xl mt-4">
                                    Pruebas
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Section1;