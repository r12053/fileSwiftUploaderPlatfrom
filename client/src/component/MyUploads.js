import { useEffect, useState } from "react";
import { getAllFiles, deleteFile } from "../service/api";
import { Box, Image } from "@chakra-ui/react";
import "./myupload.css";
import IMGURL from "./file-icon-paper.jpg";

function MyUploads() {
  const [files, setFiles] = useState();

  const getAll = async () => {
    const data = await getAllFiles();
    setFiles(data);
  };

  function handleClick(id) {
    console.log(id);
    const fileNo = files.findIndex((ele) => ele._id === id);
    console.log(fileNo);
    if (fileNo === -1) {
      alert("Error!!");
      return;
    }
    const litral = `Do You Want To Delete
      File Name  : ${files[fileNo].name} 
      File Id    : ${files[fileNo]._id}`;
    if (window.confirm(litral)) {
      const newFiles = files.filter((ele) => ele._id !== id);
      setFiles(newFiles);
      const deleteById = async () => {
        await deleteFile(id);
      };
      deleteById();
      // getAll();
    }
  }
  useEffect(() => {
    getAll();
  }, [files]);

  return (
    <>
      {files &&
        files.reverse().map((ele) => (
          <Box
            key={ele._id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            margin="auto"
            marginBottom="10px"
            onClick={() => handleClick(ele._id)}
          >
            <Image
              boxSize="100px"
              w="100%"
              src={IMGURL}
              alt={"Rear view of file-icon-paper"}
              className="box-upload"
            />
            <Box>
              {ele.name.length <= 15 ? ele.name : ele.name.slice(0, 15)}
            </Box>
          </Box>
        ))}
    </>
  );
}

export default MyUploads;
