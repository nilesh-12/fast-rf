import Container from "@mui/material/Container";
import LogoutIcon from "@mui/icons-material/LogoutRounded";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
const Dashboard = () => {
  const [state, setState] = useState(false);
  const clickHandler = () => {
    setState((value) => !value);
  };
  return (
    <Container>
      {state && <Navigate to="/" replace={true} />}
      <IconButton onClick={clickHandler}>
        <LogoutIcon />
      </IconButton>
      Welcome To The LogIn
    </Container>
  );
};

export default Dashboard;
