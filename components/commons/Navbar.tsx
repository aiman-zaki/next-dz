import { Button, Navbar, ScrollArea } from "@mantine/core";
import LoginComponent from "../login";

const MyNavbar = () => {
  return (
    <Navbar height={600} padding={10} width={{ base: 300 }}>
      <Navbar.Section
        grow
        component={ScrollArea}
        ml={-10}
        mr={-10}
        sx={{ paddingLeft: 10, paddingRight: 10 }}
      >
        <br />
        <Navbar.Section>Stocks</Navbar.Section>
        <Navbar.Section>Branches</Navbar.Section>
      </Navbar.Section>
    </Navbar>
  );
};

export default MyNavbar;
