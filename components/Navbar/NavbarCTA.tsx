import Link from "next/link";
import { Button } from "../ui/button";

export default function NavbarCTA() {
  return <Link href='#contact'><Button>{`Let's Work Together`}</Button></Link>
}
