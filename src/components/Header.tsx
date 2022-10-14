import { Cart } from "@/utils/CartContext";
import Link from "next/link";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLinkTypes } from "src/types/types";

export default function Header() {
  const { cart } = useContext(Cart);

  const navLinks: NavLinkTypes[] = [
    { id: 1, href: "/add-items", linkName: "Add Products" },
  ];
  return (
    <nav>
      <div className="bg-slate-200 p-5">
        <div className="flex items-center justify-between">
          <Link href="/">RandoStore</Link>
          <div className="space-x-5">
            {navLinks.map(({ id, href, linkName }) => {
              return (
                <Link href={href} key={id}>
                  <a>{linkName}</a>
                </Link>
              );
            })}
          </div>
          <Link href="/basket">
            <a className="text-2xl flex items-center justify-center space-x-2">
              <FaShoppingCart />
              <p>{cart.length}</p>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
