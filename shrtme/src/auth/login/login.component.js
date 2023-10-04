import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMsg, setLoginMsg] = useState(false);
  const navigate = useNavigate();

  const checkPassword = () => {
    if (username === 'Admin' && password === 'Admin') {
      setLoginMsg(false);
      navigate("/main");
    } else {
      setLoginMsg(true);
    }
  };

  return (
    <div classname='login-body'>
    <Card sx={{ width: 300, padding: 2, fontSize: 20, opacity: 0.7 }}>
      <Typography>For Registered Users</Typography>
      <Box
        sx={{
          "& .MuiTextField-root": { mt: 0.5 },
        }}
      >
        <TextField
          fullWidth
          error={loginMsg}
          name="registeredUsername"
          label="Username"
          variant="outlined"
          value={username}
          onChange={e => setUsername(e.target.value)}
          helperText={loginMsg ? "Incorrect username or password" : " "}
          required
        />
        <TextField
          fullWidth
          name="registeredPassword"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />{" "}
        <br />
        <Button
          sx={{ mt: 1 }}
          type="submit"
          variant="outlined"
          onClick={checkPassword}
        >
          Login
        </Button>
        <br />
        <Button
          sx={{ mt: 2 }}
          type="submit"
          variant="outlined"
          onClick={checkPassword}
        >
          signin
        </Button>
      </Box>
    </Card>
    </div>
  );
}

export default Login;
