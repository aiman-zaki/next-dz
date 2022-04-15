import { AppShell, Container } from "@mantine/core";
import MyNavbar from "./Navbar";
import MyHeader from "./Header";
import { useState } from "react";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AppShell
        fixed
        navbarOffsetBreakpoint="sm"
        padding="md"
        navbar={<MyNavbar />}
        header={<MyHeader opened={opened} setOpened={setOpened} />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
};

export default Layout;
