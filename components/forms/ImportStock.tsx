import { Button, Text } from "@mantine/core";
import { Dropzone, MIME_TYPES, MS_EXCEL_MIME_TYPE } from "@mantine/dropzone";
import axios from "axios";
import { FormEvent, FormEventHandler, useState } from "react";

const ImportStockComponent = () => {
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    var formData = new FormData();

    const data = {};

    formData.append("file", file!);

    await fetch("/api/stocks/test", {
      method: "post",
      body: formData,
    });

    await axios
      .post("/api/stocks/test", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {})
      .catch(() => {
        console.log("Oops");
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Dropzone
          multiple={false}
          onDrop={(e) => {
            setFile(e[0]);
          }}
          maxSize={3 * 1024 ** 2}
        >
          {(status) => (
            <>
              <Text>Click or Drag the file</Text>
            </>
          )}
        </Dropzone>
        <Button mt="md" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ImportStockComponent;
