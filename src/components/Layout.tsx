import { ChildrenProps } from "@/types/types";
import Header from "./Header";

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
