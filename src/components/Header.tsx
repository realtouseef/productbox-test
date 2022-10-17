import Link from "next/link";
import { useShoppingCart } from "@/utils/ShoppingCartContext";
import { FaShoppingCart } from "react-icons/fa";
// import { NavLinkTypes } from "src/types/types";

export default function Header() {
  const { cartItemsQuantity } = useShoppingCart();
  // const navLinks: NavLinkTypes[] = [];

  return (
    <nav className="bg-slate-200 p-5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">RandoStore</Link>
          {/* <div className="space-x-5">
            {navLinks.map(({ id, href, linkName }) => {
              return (
                <Link href={href} key={id}>
                  <a>{linkName}</a>
                </Link>
              );
            })}
          </div> */}
          <Link href="/basket">
            <a className="text-2xl flex items-center justify-center space-x-2">
              <FaShoppingCart />
              <p>{cartItemsQuantity}</p>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
