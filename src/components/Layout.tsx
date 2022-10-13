import { Box } from "@chakra-ui/react";
import Header from "./Header";

type ChildProps = { children: React.ReactNode };

const Layout: React.FunctionComponent<ChildProps> = ({ children }) => {
  return (
    <Box as="section">
      <Header />
      <Box as="main">{children}</Box>
    </Box>
  );
};

export default Layout;
