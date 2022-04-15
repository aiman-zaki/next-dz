import { Button, Navbar, ScrollArea } from "@mantine/core";
import Link from "next/link";

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
        <Navbar.Section>
          <Link href="/stocks">
            <Button variant="outline" fullWidth>
              Stocks
            </Button>
          </Link>
        </Navbar.Section>
      </Navbar.Section>
    </Navbar>
  );
};

export default MyNavbar;
