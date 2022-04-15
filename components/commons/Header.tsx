import {
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Dispatch } from "react";
import Image from "next/image";
interface IMyHeader {
  opened: boolean;
  setOpened: Dispatch<boolean>;
}

const MyHeader = (props: IMyHeader) => {
  const { opened, setOpened } = props;
  const theme = useMantineTheme();

  return (
    <Header height={70} padding="md">
      {/* Handle other responsive styles with MediaQuery component or createStyles function */}
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Image width={50} height={50} src="/assets/png/logo.png" />
        <Text
          component="span"
          align="center"
          size="xl"
          color="dimmed"
          weight={700}
        >
          Amirazz Food
        </Text>
      </div>
    </Header>
  );
};

export default MyHeader;
