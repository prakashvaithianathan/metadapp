import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import "./style.css";
import { Typography } from "@material-ui/core";
// import MainCard from "ui-component/cards/MainCard";
import Switch from "@mui/material/Switch";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Index = () => {
  const [network, setNetwork] = React.useState("");
  const [send, setSend] = React.useState("");
  const [emailChecked, setEmailChecked] = React.useState(false);
  const [telegramChecked, setTelegramChecked] = React.useState(false);
  const [emailOpened, setEmailOpened] = React.useState(false);
  const [telegramOpened, setTelegramOpened] = React.useState(false);

  const [sendMessage, setSendMessage] = React.useState(false);
  const [input, setInput] = React.useState({
    botToken: "",
    chatId: "",
  });

  const handleChange = (event: SelectChangeEvent) => {
    setNetwork(event.target.value as string);
  };

  const handleSend = (event: SelectChangeEvent) => {
    setSend(event.target.value as string);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (emailChecked === false) {
      setEmailOpened(true);
    }
    if (emailChecked === true) {
      setEmailOpened(false);
    }

    setEmailChecked(event.target.checked);
  };

  const handleTelegram = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (telegramChecked === false) {
      setTelegramOpened(true);
    }
    if (telegramChecked === true) {
      setTelegramOpened(false);
    }
    setTelegramChecked(event.target.checked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  React.useEffect(() => {
    if (input.botToken.trim() !== "" && input.chatId.trim() !== "") {
      setSendMessage(true);
    } else {
      setSendMessage(false);
    }
  }, [input]);

  return (
    <>
      {/* <MainCard className="container-box-shadow spacing" spacing={4}> */}
        <Typography variant="h1" style={{ textAlign: "center" }}>
          <span className="logo">👯</span> Track Token Purchases
        </Typography>
        <Typography
          className="description"
          variant="body2"
          style={{ textAlign: "center" }}
        >
          Filter by token, quantity and buyer address.
        </Typography>
      {/* </MainCard> */}
      <Grid
        container
        xs={12}
        spacing={4}
        justifyContent="space-evenly"
        className="container-box-shadow"
      >
        <Grid container xs={12} spacing={4}>
          <Grid item sm={6} md={5} xs={12} lg={5} xl={5}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select a Network
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={network}
                  label="Select a Network"
                  onChange={handleChange}
                  className="input-white"
                >
                  <MenuItem value={"ethMainnet"}>ETH Mainnet</MenuItem>
                  <MenuItem value={"bscMainnet"}>BSC Mainnet</MenuItem>
                  <MenuItem value={"polygonMainnet"}>Polygon Mainnet</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item sm={6} md={5} xs={12}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select FROM or TO
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={send}
                  label="Select FROM or TO"
                  onChange={handleSend}
                  className="input-white"
                >
                  <MenuItem value={"from"}>FROM..</MenuItem>
                  <MenuItem value={"to"}>TO..</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          justifyContent="flex-start"
          className="container-wallet-spacing"
        >
          <Grid item sm={6} md={5} xs={12}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 0, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="WALLET ADDRESS"
                variant="outlined"
                className="input-white"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={4} className="container-box-shadow">
        <Grid container xs={12} justifyContent="space-between">
          <Typography variant="h2">Send an email</Typography>
          <Switch {...label} checked={emailChecked} onChange={handleEmail} />
        </Grid>
        {emailOpened ? (
          <Grid container xs={12} justifyContent="space-around">
            <Grid item sm={6} md={5} xs={12} lg={6} xl={6}>
              <TextField
                id="full-width"
                label="SEND TO"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Add email addresses separated by comma"
                fullWidth
                margin="normal"
                variant="standard"
                className="input-white"
                style={{ width: "90%" }}
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
              <TextField
                id="full-width"
                label="SUBJECT"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Your Email subject"
                fullWidth
                margin="normal"
                variant="standard"
                className="input-white"
                style={{ width: "90%" }}
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
            </Grid>
            <Grid item sm={6} md={5} xs={12} lg={6} xl={6} spacing={4}>
              <Typography variant="h6">MESSAGE</Typography>
              <TextareaAutosize
                placeholder="Your email body....."
                maxRows={10}
                aria-label="maximum height"
                style={{ width: "100%", height: "100%" }}
                className="textarea-black"
              />
            </Grid>
          </Grid>
        ) : null}
      </Grid>

      <Grid
        container
        xs={12}
        spacing={4}
        justifyContent="space-between"
        className="container-box-shadow"
      >
        <Typography variant="h2">Send using Telegram</Typography>
        <Switch
          {...label}
          checked={telegramChecked}
          onChange={handleTelegram}
        />
        {telegramOpened ? (
          <Grid container xs={12} justifyContent="space-around">
            <Grid item sm={6} md={5} xs={12} lg={6} xl={6}>
              <TextField
                id="full-width"
                label="BOT TOKEN"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Enter your Telegram Bot ID"
                fullWidth
                margin="normal"
                variant="standard"
                className="input-white"
                style={{ width: "90%", color: "blue" }}
                value={input.botToken}
                onChange={handleInputChange}
                name="botToken"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
              <TextField
                id="full-width"
                label="CHAT ID"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Enter the Telegram Chat ID"
                fullWidth
                margin="normal"
                variant="standard"
                className="input-white"
                style={{ width: "90%" }}
                value={input.chatId}
                onChange={handleInputChange}
                name="chatId"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
              <Grid
                item
                sm={6}
                md={5}
                xs={12}
                lg={6}
                xl={6}
                spacing={4}
                className="radio-button-spacing"
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend">MESSAGE FORMAT</FormLabel>
                  <RadioGroup
                    aria-label="html"
                    defaultValue="HTML"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="HTML"
                      control={<Radio />}
                      label="Html"
                    />
                    <FormControlLabel
                      value="Markdown V2"
                      control={<Radio />}
                      label="Markdown V2"
                    />
                    <FormControlLabel
                      value="Markdown (Deprecated)"
                      control={<Radio />}
                      label="Markdown (Deprecated)"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Button
                variant="outlined"
                style={{ width: "100%" }}
                className={`${
                  sendMessage ? "toggle-enable" : "toggle-disable"
                }`}
              >
                Send a Text Message
              </Button>
            </Grid>

            <Grid item sm={6} md={5} xs={12} lg={6} xl={6} spacing={4}>
              <Typography variant="h6">MESSAGE</Typography>
              <TextareaAutosize
                placeholder="Your Telegram message body....."
                maxRows={10}
                aria-label="maximum height"
                style={{ width: "100%", height: "100%" }}
                className="textarea-black"
              />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
      <Grid
        container
        xs={12}
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
        className="container-box-shadow"
      >
        <Grid item sm={6} md={5} xs={12} lg={6} xl={6} spacing={4}>
          <TextField
            id="full-width"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Name this trigger"
            fullWidth
            margin="normal"
            variant="standard"
            className="input-white"
            style={{ width: "90%" }}
            value={input.chatId}
            onChange={handleInputChange}
            name="chatId"
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          md={5}
          xs={12}
          lg={6}
          xl={6}
          spacing={4}
          className="button-spacing"
        >
          <Button variant="outlined" color="secondary">
            Back
          </Button>
          <Button variant="outlined" color="secondary">
            Reset
          </Button>
          <Button variant="outlined" color="secondary">
            Preview
          </Button>
          <Button variant="contained" color="secondary">
            Create
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
