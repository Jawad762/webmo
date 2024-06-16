import Image from "next/image";
import Logo from "../../public/logo.png";
import NavbarCTA from "./NavbarCTA";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-center w-full py-4">
      <div className="w-full px-4 lg:px-32">
        <nav className="flex items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-6">
            <Image src={Logo} height={50} width={50} alt="Logo"/>
            {/* <NavbarLinks /> */}
          </div>
          <div className="flex flex-row items-center justify-end gap-2">
            <NavbarCTA />
          </div>
        </nav>
      </div>
    </div>
  );
}
