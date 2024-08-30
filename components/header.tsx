"use client"
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/menu";

const Header = () => {
    return (
        <header>
            <div className="flex container  max-w-6xl ">
                <div className="pl-64 pt-8 ">
                    <Link href="/">
                        <Image src="/logo.png" width="100" height="300" alt="Particles " className="w-16" />
                    </Link>
                </div>
                <div className="ml-auto pt-1">
                   <Menu />  
                </div>  
            </div>
        </header>
    );
}

export default Header;