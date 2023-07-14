import {
  Button,
  Container,
  TextField,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import CardContainer from "../components/CardContainer";

const Home = ({ explainCode, explaination, previousExplaination }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    explainCode(text);
    setText("");
  };

  const customStyle = {
    marginTop: "100px",
  };

  return (
    <Container sx={customStyle}>
      <Typography variant="h3" textAlign={"center"}>
        CODE GPT
      </Typography>
      <Typography variant="h6" textAlign={"center"}>
        Now Get Complete Explanation Of Your Code
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Paste Your Code Here"
          multiline
          rows={4}
          sx={{ width: "100%", marginTop: "20px" }}
          color={"secondary"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></TextField>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ width: "100%", marginTop: "20px" }}
          onClick={handleOpen}
        >
          Explain This Code
        </Button>
      </form>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Explaination :
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {explaination}
            </Typography>
          </Box>
        </Modal>
      </div>

      <CardContainer previousExplaination={previousExplaination} />
    </Container>
  );
};

export default Home;
