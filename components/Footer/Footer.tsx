import Link from "next/link";
import { config } from "@/lib/config";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Footer() {
  return (
    <div className="flex items-center justify-between px-4 py-10 text-white lg:px-32">
      <Image src={Logo} height={50} width={50} alt="Logo"/>
      <span
          className="font-light"
      >
          © {new Date().getFullYear()} WebMo™ All Rights Reserved.
      </span>
    </div>
  );
}
