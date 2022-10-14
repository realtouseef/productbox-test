export type NavLinkTypes = {
  id: number;
  href: string;
  linkName: string;
};

export interface ItemProps {
  id: number;
  name: string;
  price: number;
  img: string;
}

export type ChildrenProps = {
  children: React.ReactNode;
};

export type SingleProductProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};
