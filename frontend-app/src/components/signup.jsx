import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import './signup.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultTheme = createTheme();
const chipLabels = [
    "Finance",
    "Investment",
    "Trading",
    "Technology",
    "Government",
    "Research",
    "Politics",
    "Market updates",
    "Global events",
    "Earnings",
    "Investment Strategies",
    "Corporate Actions",
    "Personal Finance",
    "IPO's",
    "Exports"
  ];
  const sourcesChipLabels = [
    "CBC News",
    "Toronto Star",
    "City News",
    "Global News",
    "CNN",
    "CNBC",
    "Wall Street Journal",
    "The Economist",
  ];

  const stocks = [
        { title: 'Apple'},
        { title: 'Tesla'},
        { title: 'CGI'},
        { title: 'Nvidia'},
        { title: 'Google'},
        { title: "Microsoft"},
        { title: 'BlackRock'},
        {title: 'Berkshire Hathway'}
    ]

export default function SignUp() {
    const notify = () => toast.success("Welcome aboard! Signup Successfull", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    const [selectedChips, setSelectedChips] = useState([]);
    const [selectedNewsChips, setSelectedNewsChips] = useState([]);

    let navigate = useNavigate(); 
  const routeChange = () =>{
    notify()
    setTimeout(() => {
      let path = `/`; 
      navigate(path);
    }, 2000);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const handleChipClick = (label) => {
    if (selectedChips.includes(label)) {
      setSelectedChips(selectedChips.filter(chip => chip !== label));
    } else {
      setSelectedChips([...selectedChips, label]);
    }
  };
  const handleNewsChipClick = (label) => {
    if (selectedNewsChips.includes(label)) {
        setSelectedNewsChips(selectedNewsChips.filter(chip => chip !== label));
    } else {
        setSelectedNewsChips([...selectedNewsChips, label]);
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: 'url(signup.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
      <Box
          sx={{
            my: 2,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{display:"flex"}}>
                <Typography component="h1" variant="h4">
                CGI
                </Typography>
                
                <Typography component="h1" variant="h4" marginLeft="10px">
                InvestSmart
                </Typography>
            </div>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h6" align="left">
                Preferences
                </Typography>
                <Grid item xs={12} align="left">
                    <div>
                    {chipLabels.map(label => (
                        <Chip
                        key={label}
                        label={label}
                        onClick={() => handleChipClick(label)}
                        variant={selectedChips.includes(label) ? undefined : "outlined"}
                        color="primary"
                        style={{marginRight: '5px', marginTop: '7px'}}
                        />
                    ))}
                        
                    </div>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h6" align="left">
                Source
                </Typography>
                <Grid item xs={12} align="left">
                    <div>
                    {sourcesChipLabels.map(label => (
                        <Chip
                        key={label}
                        label={label}
                        onClick={() => handleNewsChipClick(label)}
                        variant={selectedNewsChips.includes(label) ? undefined : "outlined"}
                        color="primary"
                        style={{marginRight: '5px', marginTop: '7px'}}
                        />
                    ))}
                        
                    </div>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                {/* <Typography component="h1" variant="h6" align="left">
                Stocks
                </Typography> */}
                <Grid item xs={12} align="left">
                    <div>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={stocks}
                        getOptionLabel={(option) => option.title}
                        filterSelectedOptions
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Stocks to watch"
                            placeholder="Select Stocks"
                        />
                        )}
                    />                        
                    </div>
                </Grid>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={routeChange}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </Grid>
  </ThemeProvider>
  );
}