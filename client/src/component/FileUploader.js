import { Box, Container, Input, Text, Button } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./file.css";
import { uploadFile } from "../service/api";
import API_URI from "../service/baseurl"
import MyUploads from "./MyUploads";


const Url_litral = `${API_URI}/ank117/`;

function FileUploader() {
  const [file, setFile] = useState("");
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (event) => setValue();

  const fileInputRef = useRef();
  function onUploadClick() {
    console.log("upload clicked");
    fileInputRef.current.click();
  }

  function handleCopy() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1600);
  }
  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        console.log(file, response);
        setResult(response.shortLink);
        const v = Url_litral + `${response.shortLink}`;
        setValue(v);
      }
    };
    getFile();
  }, [file]);
  return (
    <>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          alignItems="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <div className="text">
            <Text fontSize="4xl" fontFamily="Work sans">
              File-Swift-Uploader
            </Text>
          </div>
        </Box>

        <Box
          bg="white"
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="1px"
          className="container-d"
        >
          <div className="upload-btn">
            <Button
              className="upload-btn"
              colorScheme="teal"
              w="50%"
              size="lg"
              onClick={() => onUploadClick()}
            >
              Upload
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => {
                console.log(e.target.files[0], "kkoiok");
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <div className="btn">
            {result && (
              <Input
                value={value}
                onChange={handleChange}
                placeholder="Here is a sample placeholder"
                size="lg"
                color="teal"
                _placeholder={{ color: "inherit" }}
              />
            )}
            <div className="copy-password">
              {result && (
                <CopyToClipboard text={value}>
                  <Button colorScheme="teal" size="lg" onClick={handleCopy}>
                    {!copied ? "Share" : "Shared"}
                  </Button>
                </CopyToClipboard>
              )}
            </div>
          </div>
        </Box>

        <div className="text">
          <Text fontSize="2xl" fontFamily="Work sans" fontWeight="bold">
            My Uploads
          </Text>
        </div>
        <div className="uploadedFile">
          <MyUploads />
        </div>
      </Container>
    </>
  );
}

export default FileUploader;
