import {
  Button,
  Card,
  Grid,
  Modal,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { NextPage } from "next";
import { useState } from "react";
import ImportStockComponent from "../components/forms/ImportStock";
const StockPages: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <ImportStockComponent />{" "}
      </Modal>

      <Card>
        <Grid grow>
          <Grid.Col span={10}>
            {" "}
            <Text size="xl" component="span" align="center">
              Stocks
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Button>Create</Button>
            <Button
              onClick={() => {
                setOpened(true);
              }}
              ml="md"
              color="green"
            >
              Import
            </Button>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
};

export default StockPages;
