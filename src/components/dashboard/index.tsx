import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import LoginIcon from "@mui/icons-material/LoginRounded";

import { Navigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [state, setState] = useState(false);
  const clickHandler = () => {
    setState((value) => !value);
  };
  return (
    <Container>
      {state && <Navigate to="/login" replace={true} />}
      <IconButton onClick={clickHandler}>
        <LoginIcon />
      </IconButton>
      Welcome To The Dashboard
      <Button variant="outlined" color="primary">
        Do Something
      </Button>
    </Container>
  );
};

export default Dashboard;
