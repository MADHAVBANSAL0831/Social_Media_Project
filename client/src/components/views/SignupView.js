import {
    Button,
    Container,
    Stack,
    TextField,
    Typography,
    Link,
    Alert,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { useState } from "react";
  import { signup } from "../../api/users";
//   import { loginUser } from "../../helpers/authHelper";
  import { useNavigate } from "react-router-dom";
  import Copyright from "../Copyright";
//   import { isLength, isEmail, contains } from "validator";
  import sentMail from "../../helpers/sentMail";

const SignupView = () => {

const navigate = useNavigate();
const [serverError, setServerError] = useState("");
const [errors, setErrors] = useState({});

const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    otp: "",
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const errors = validate();
    if (Object.keys(errors).length !== 0) return;

    const data = await signup(formData);

    if (data.error) {
      setServerError(data.error);
    } else {
    //   loginUser(data);
      navigate("/");
      sentMail(formData.email, formData.username);
    }
  };


  return (
    <div>
      <Stack alignItems="center">
        <Typography variant="h2" color="text.secondary" sx={{ mb: 6 }}>
          <Link to="/" color="inherit" underline="none" className="LOGO2">
            SocioPedia
          </Link>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <Typography color="text.secondary">
          Already have an account?{" "}
          <Link to="/login" className="LOGO2">
            Login
          </Link>
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            autoFocus
            required
            id="username"
            name="username"
            onChange={handleChange}
            error={errors.username !== undefined}
            helperText={errors.username}
          />
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            required
            id="email"
            name="email"
            onChange={handleChange}
            error={errors.email !== undefined}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            autoComplete="password"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            error={errors.password !== undefined}
            helperText={errors.password}
          />
          <TextField
            label="OTP"
            fullWidth
            required
            margin="normal"
            autoComplete="otp"
            id="otp"
            name="otp"
            type="otp"
            onChange={handleChange}
            error={errors.otp !== undefined}
            helperText={errors.otp}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
            Sign Up
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Copyright />
        </Box>
      </Stack>
    </div>
  );
};

export default SignupView;
