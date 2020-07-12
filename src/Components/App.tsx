import React, { Fragment, useEffect } from "react";
import QrReader from "react-qr-reader";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  TextField,
  Box,
  Menu,
  MenuItem,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import HistoryIcon from "@material-ui/icons/History";
import CropFreeIcon from "@material-ui/icons/CropFree";
import Swal from "sweetalert2";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PersonIcon from "@material-ui/icons/Person";
// import { useCookies, withCookies } from "react-cookie";

const App = () => {
  const [result, setResult] = React.useState("");

  const [scannerOpen, setScannerOpen] = React.useState(false);

  const [goalOpen, setGoalOpen] = React.useState(false);

  const [historyOpen, setHistoryOpen] = React.useState(false);

  const [dayOpen, setDayOpen] = React.useState(false);

  const [codesOpen, setCodesOpen] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const [bonusOpen, setBonusOpen] = React.useState(false);

  const [userChanged, setUserChanged] = React.useState(false);

  // const [badgeObject, setBadgeObject] = React.useState({
  //   badge1: false,
  //   badge2: false,
  //   badge3: false,
  //   badge4: false,
  //   badge5: false,
  //   badge6: false,
  //   badge7: false,
  //   badge8: false,
  //   badge9: false,
  // });

  const [badge1, setBadge1] = React.useState(false);
  const [badge2, setBadge2] = React.useState(false);
  const [badge3, setBadge3] = React.useState(false);
  const [badge4, setBadge4] = React.useState(false);
  const [badge5, setBadge5] = React.useState(false);
  const [badge6, setBadge6] = React.useState(false);
  const [badge7, setBadge7] = React.useState(false);
  const [badge8, setBadge8] = React.useState(false);
  const [badge9, setBadge9] = React.useState(false);
  const [badge10, setBadge10] = React.useState(false);
  const [badge11, setBadge11] = React.useState(false);
  const [badge12, setBadge12] = React.useState(false);

  const [badge, setBadge] = React.useState("");

  const [numBadges, setNumBadges] = React.useState(0);
  const [goal, setGoal] = React.useState(9);
  const [goalValue, setGoalValue] = React.useState(9);

  const [showRandomCode, setShowRandomCode] = React.useState(false);

  const [cookiesLoaded, setCookiesLoaded] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState("1");

  const [userName, setUserName] = React.useState("Default");
  const [userNameValue, setUserNameValue] = React.useState("");
  const [userNameOpen, setUserNameOpen] = React.useState(false);
  // const [cookies, setCookie] = useCookies(["badges"]);

  const [userOpen, setUserOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const loadCookies = () => {
    console.log(document.cookie);
    if (document.cookie !== "") {
      setUserName(JSON.parse(document.cookie)[currentUser].userName);
      setBadge1(JSON.parse(document.cookie)[currentUser].badge1);
      setBadge2(JSON.parse(document.cookie)[currentUser].badge2);
      setBadge3(JSON.parse(document.cookie)[currentUser].badge3);
      setBadge4(JSON.parse(document.cookie)[currentUser].badge4);
      setBadge5(JSON.parse(document.cookie)[currentUser].badge5);
      setBadge6(JSON.parse(document.cookie)[currentUser].badge6);
      setBadge7(JSON.parse(document.cookie)[currentUser].badge7);
      setBadge8(JSON.parse(document.cookie)[currentUser].badge8);
      setBadge9(JSON.parse(document.cookie)[currentUser].badge9);
      setBadge10(JSON.parse(document.cookie)[currentUser].badge10);
      setBadge11(JSON.parse(document.cookie)[currentUser].badge11);
      setBadge12(JSON.parse(document.cookie)[currentUser].badge12);
      setNumBadges(JSON.parse(document.cookie)[currentUser].numBadges);
      setGoal(JSON.parse(document.cookie)[currentUser].goal);
    } else {
      updateCookies();
    }
    console.log(document.cookie);
  };

  const updateCookies = () => {
    let newCookie;

    if (document.cookie !== "") {
      newCookie = JSON.parse(document.cookie);
    } else {
      newCookie = {};
    }

    newCookie[currentUser] = {
      userName: userName,
      badge1: badge1,
      badge2: badge2,
      badge3: badge3,
      badge4: badge4,
      badge5: badge5,
      badge6: badge6,
      badge7: badge7,
      badge8: badge8,
      badge9: badge9,
      badge10: badge10,
      badge11: badge11,
      badge12: badge12,
      numBadges: numBadges,
      goal: goal,
    };

    document.cookie = JSON.stringify(newCookie);

    console.log(document.cookie);
  };

  const changeUser = (index: number) => {
    setCurrentUser((index + 1).toString());
    handleMenuClose();
    setUserChanged(true);
  };

  const newUser = () => {
    setCurrentUser(
      (Object.keys(JSON.parse(document.cookie)).length + 1).toString()
    );

    setBadge1(false);
    setBadge2(false);
    setBadge3(false);
    setBadge4(false);
    setBadge5(false);
    setBadge6(false);
    setBadge7(false);
    setBadge8(false);
    setBadge9(false);
    setBadge10(false);
    setBadge11(false);
    setBadge12(false);
    setNumBadges(0);
    setGoal(9);

    updateCookies();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (
      result ==
      "https://console.echoAR.xyz/arjs?key=super-violet-1936&entry=3e4ee1a2-43e3-4625-9768-0d6071b53d5a"
    ) {
      setBadge("../../Assets/Badge 1.png");
      if (!badge1) {
        setNumBadges(numBadges + 1);
        setBonusOpen(true);
      }
      setBadge1(true);
    } else if (
      result ==
      "https://console.echoAR.xyz/arjs?key=super-violet-1936&entry=8e6a648c-e185-4e6d-b57a-4a735e1b4ec5"
    ) {
      setBadge("../../Assets/Badge 2.png");
      if (!badge2) {
        setNumBadges(numBadges + 1);
        setBonusOpen(true);
      }
      setBadge2(true);
    } else if (
      result ==
      "https://console.echoAR.xyz/arjs?key=super-violet-1936&entry=609b40f4-43e4-40c1-ad76-6d7644073d31"
    ) {
      setBadge("../../Assets/Badge 3.png");
      if (!badge3) {
        setNumBadges(numBadges + 1);
        setBonusOpen(true);
      }
      setBadge3(true);
    } else if (
      result ==
      "https://console.echoAR.xyz/arjs?key=super-violet-1936&entry=67b3daa9-6c37-434e-ad9e-ca0b27009c14"
    ) {
      setBadge("../../Assets/Badge 4.png");
      if (!badge4) {
        setNumBadges(numBadges + 1);
        setBonusOpen(true);
      }
      setBadge4(true);
    } else if (
      result ==
      "https://console.echoAR.xyz/arjs?key=super-violet-1936&entry=ce186aff-47f5-43b2-8e2f-efcb58ce34fe"
    ) {
      setBadge("../../Assets/Badge 5.png");
      if (!badge5) {
        setNumBadges(numBadges + 1);
        setBonusOpen(true);
      }
      setBadge5(true);
    }

    // var newBadgeObject = badgeObject;
    // newBadgeObject.badge1 = badge1;
    // newBadgeObject.badge2 = badge2;
    // newBadgeObject.badge3 = badge3;
    // newBadgeObject.badge4 = badge4;
    // newBadgeObject.badge5 = badge5;
    // newBadgeObject.badge6 = badge6;
    // newBadgeObject.badge7 = badge7;
    // newBadgeObject.badge8 = badge8;
    // newBadgeObject.badge9 = badge9;
    // setBadgeObject(newBadgeObject);

    // setCookie("badges", JSON.stringify(badgeObject), { path: "/" });
    setOpen(false);
  };

  const handleScannerOpen = () => {
    setScannerOpen(true);
  };

  const handleScannerClose = () => {
    setScannerOpen(false);
  };

  const handleBonusClose = () => {
    setBonusOpen(false);
    if (goalValue === numBadges) {
      Swal.fire(
        "Congratulations",
        "You met your daily activity goal!",
        "success"
      );
    }
  };

  const handleGoalOpen = () => {
    setGoalOpen(true);
  };

  const handleGoalClose = () => {
    setGoalOpen(false);
    if (goalValue === numBadges) {
      Swal.fire(
        "Congratulations",
        "You met your daily activity goal!",
        "success"
      );
    }
  };

  const handleGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.target.value) !== NaN) {
      try {
        setGoalValue(parseInt(event.target.value));
      } catch (exception) {
        console.log(exception);
      }
    }
  };

  const updateValue = () => {
    setGoal(goalValue);
    handleGoalClose();
  };

  const handleUserNameOpen = () => {
    setUserNameOpen(true);
  };

  const handleUserNameClose = () => {
    setUserNameOpen(false);
    newUser();
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.target.value) !== NaN) {
      try {
        setUserNameValue(event.target.value);
      } catch (exception) {
        console.log(exception);
      }
    }
  };

  const updateUserNameValue = () => {
    setUserName(userNameValue);
    handleUserNameClose();
  };

  const handleCodesClose = () => {
    setCodesOpen(false);
    setShowRandomCode(false);
  };

  const handleCodesOpen = () => {
    setCodesOpen(true);
    setShowRandomCode(false);
  };

  const handleShowRandomCode = () => {
    setShowRandomCode(true);
  };

  const handleScan = (data: any) => {
    if (data) {
      setResult(data);
      setScannerOpen(false);
      setOpen(true);
      console.log(data);
    }
  };
  const handleError = (err: any) => {
    console.error(err);
  };

  useEffect(() => {
    if (!cookiesLoaded || userChanged) {
      setCookiesLoaded(true);
      loadCookies();
      if (userChanged) {
        setUserChanged(false);
      }
    } else {
      updateCookies();
    }
  });

  const handleHistoryOpen = () => {
    setHistoryOpen(true);
  };

  const handleHistoryClose = () => {
    setHistoryOpen(false);
  };

  const handleDayOpen = () => {
    setDayOpen(true);
  };

  const handleDayClose = () => {
    setDayOpen(false);
  };

  const handleUserOpen = () => {
    setUserOpen(true);
  };

  const handleUserClose = () => {
    setUserOpen(false);
  };

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">exARcise</Typography>
          <CropFreeIcon
            onClick={handleCodesOpen}
            style={{ marginLeft: "auto", marginRight: "10px" }}
          ></CropFreeIcon>
          <HistoryIcon
            style={{ marginRight: "10px" }}
            onClick={handleHistoryOpen}
          ></HistoryIcon>
          <EditIcon
            style={{ marginRight: "10px" }}
            onClick={() => {
              setGoalOpen(true);
            }}
          ></EditIcon>
          <PersonIcon onClick={handleMenuClick}></PersonIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {document.cookie !== "" &&
              Object.keys(JSON.parse(document.cookie)).map(
                (value: any, index: number) => {
                  return (
                    <MenuItem
                      onClick={() => {
                        changeUser(index);
                      }}
                    >
                      {JSON.parse(document.cookie)[value].userName}
                    </MenuItem>
                  );
                }
              )}
            <MenuItem onClick={handleUserNameOpen}>New user</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div style={{ height: "64px" }}></div>

      <Grid container alignItems="center" direction="column">
        <Grid item>
          <Typography variant="h5">
            {document.cookie !== "" &&
              !userChanged &&
              JSON.parse(document.cookie)[currentUser] !== undefined &&
              JSON.parse(document.cookie)[currentUser].userName}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleScannerOpen}
            style={{ marginTop: "2rem", marginBottom: "4rem" }}
          >
            Scan Activity
          </Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={1}
            style={{ width: "100vw" }}
          >
            <Grid item xs={4} md={2}>
              <img
                // onLoad={() => {
                //   setBadge1(JSON.parse(cookies.get("badges")).badge1);
                // }}
                style={{
                  width: "100%",
                  opacity: badge1 ? 1 : 0.25,
                }}
                src="..\..\Assets\Badge 1.png"
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <img
                // onLoad={() => {
                //   setBadge2(JSON.parse(cookies.get("badges")).badge2);
                // }}
                style={{
                  width: "100%",
                  opacity: badge2 ? 1 : 0.25,
                }}
                src="..\..\Assets\Badge 2.png"
              />
            </Grid>
            <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
              <img
                // onLoad={() => {
                //   setBadge3(JSON.parse(cookies.get("badges")).badge3);
                // }}
                style={{
                  width: "100%",
                  opacity: badge3 ? 1 : 0.25,
                }}
                src="..\..\Assets\Badge 3.png"
              />
            </Grid>

            <Grid item xs={4} md={2}>
              <img
                // onLoad={() => {
                //   setBadge4(JSON.parse(cookies.get("badges")).badge4);
                // }}
                style={{
                  width: "100%",
                  opacity: badge4 ? 1 : 0.25,
                }}
                src="..\..\Assets\Badge 4.png"
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <img
                // onLoad={() => {
                //   setBadge5(JSON.parse(cookies.get("badges")).badge5);
                // }}
                style={{
                  width: "100%",
                  opacity: badge5 ? 1 : 0.25,
                }}
                src="..\..\Assets\Badge 5.png"
              />
            </Grid>
            <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
              <img
                // onLoad={() => {
                //   setBadge6(JSON.parse(cookies.get("badges")).badge6);
                // }}
                style={{
                  width: "100%",
                  opacity: badge6 ? 1 : 0.25,
                }}
                src="..\..\Assets\Badge 6.png"
              />
            </Grid>

            <Grid item xs={4} md={2}>
              <img
                // onLoad={() => {
                //   setBadge7(JSON.parse(cookies.get("badges")).badge7);
                // }}
                style={{
                  width: "100%",
                  opacity: badge7 ? 1 : 0.25,
                }}
                src="..\..\Assets\Badge 7.png"
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <img
                // onLoad={() => {
                //   setBadge8(JSON.parse(cookies.get("badges")).badge8);
                // }}
                style={{
                  width: "100%",
                  opacity: badge8 ? 1 : 0.25,
                }}
                src="..\..\Assets\Badge 8.png"
              />
            </Grid>
            <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
              <img
                // onLoad={() => {
                //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                // }}
                style={{
                  width: "100%",
                  opacity: badge9 ? 1 : 0.25,
                }}
                src="..\..\Assets\Badge 9.png"
              />
            </Grid>
            <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
              <img
                // onLoad={() => {
                //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                // }}
                style={{
                  width: "100%",
                  opacity: 0.25,
                }}
                src="..\..\Assets\Badge 10.png"
              />
            </Grid>
            <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
              <img
                // onLoad={() => {
                //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                // }}
                style={{
                  width: "100%",
                  opacity: 0.25,
                }}
                src="..\..\Assets\Badge 11.png"
              />
            </Grid>
            <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
              <img
                // onLoad={() => {
                //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                // }}
                style={{
                  width: "100%",
                  opacity: 0.25,
                }}
                src="..\..\Assets\Badge 12.png"
              />
            </Grid>
            <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
              <img
                // onLoad={() => {
                //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                // }}
                style={{
                  width: "100%",
                  opacity: 0.25,
                }}
                src="..\..\Assets\Badge 13.png"
              />
            </Grid>
            <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
              <img
                // onLoad={() => {
                //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                // }}
                style={{
                  width: "100%",
                  opacity: 0.25,
                }}
                src="..\..\Assets\Badge 14.png"
              />
            </Grid>
            <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
              <img
                // onLoad={() => {
                //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                // }}
                style={{
                  width: "100%",
                  opacity: 0.25,
                }}
                src="..\..\Assets\Badge 15.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={scannerOpen}
        onClose={handleScannerClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Scan QR Code to Start Activity"}
        </DialogTitle>
        <DialogContent>
          <QrReader delay={300} onError={handleError} onScan={handleScan} />
        </DialogContent>
      </Dialog>

      <Dialog
        open={goalOpen}
        onClose={handleGoalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Set your daily activity goal"}
        </DialogTitle>
        <DialogContent>
          <TextField
            placeholder={goal.toString()}
            onChange={handleGoalChange}
            style={{ width: "100%" }}
          ></TextField>
          <Button
            variant="contained"
            onClick={updateValue}
            color="primary"
            style={{ marginTop: "2rem", width: "100%" }}
          >
            Set new goal
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog
        open={userNameOpen}
        onClose={handleUserNameClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Name"}</DialogTitle>
        <DialogContent>
          <TextField
            placeholder={userName}
            onChange={handleUsernameChange}
            style={{ width: "100%" }}
          ></TextField>
          <Button
            variant="contained"
            onClick={updateUserNameValue}
            color="primary"
            style={{ marginTop: "2rem", width: "100%" }}
          >
            Set name
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={{ height: "56px" }}></div>
        <iframe
          src={result}
          allow="camera *"
          style={{ height: "100%" }}
        ></iframe>
      </Dialog>

      <Dialog
        open={bonusOpen}
        onClose={handleBonusClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You earned a new badge!"}
        </DialogTitle>
        <img src={badge} style={{ width: "100%" }} />
      </Dialog>

      <Dialog fullScreen open={codesOpen} onClose={handleCodesClose}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCodesClose}
              aria-label="close"
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5">exARcise</Typography>
          </Toolbar>
        </AppBar>
        <div style={{ height: "64px", marginTop: "2rem" }}></div>
        <Grid container alignItems="center" direction="column" spacing={4}>
          <Grid item>
            <Button variant="contained" color="primary">
              Show All QR Codes
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleShowRandomCode}
            >
              Show Random QR Code
            </Button>
          </Grid>
          <Grid item>
            {showRandomCode && (
              <img
                src="../../Assets/mountainClimbers.png"
                height="700px"
                width="700px"
              />
            )}
          </Grid>
        </Grid>
      </Dialog>

      <Dialog fullScreen open={historyOpen} onClose={handleHistoryClose}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleHistoryClose}
              aria-label="close"
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5">Your exARcise history</Typography>
          </Toolbar>
        </AppBar>
        <div style={{ height: "64px", marginTop: "2rem" }}></div>
        <Box
          style={{ width: "90%", marginLeft: "5%", marginBottom: "2.5%" }}
          onClick={handleDayOpen}
        >
          <img src="..\..\Assets\july.png" style={{ width: "100%" }} />
        </Box>
        <Box style={{ width: "90%", marginLeft: "5%", marginBottom: "2.5%" }}>
          <img src="..\..\Assets\june.png" style={{ width: "100%" }} />
        </Box>
      </Dialog>

      <Dialog fullScreen open={dayOpen} onClose={handleDayClose}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleDayClose}
              aria-label="close"
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5">7/7/2020</Typography>
          </Toolbar>
        </AppBar>
        <div
          style={{ height: "80px", marginTop: "2rem", marginBottom: "20px" }}
        >
          Filler
        </div>
        <Grid container justify="center">
          <Grid item>
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={1}
              style={{ width: "100vw" }}
            >
              <Grid item xs={4} md={2}>
                <img
                  // onLoad={() => {
                  //   setBadge1(JSON.parse(cookies.get("badges")).badge1);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 1,
                  }}
                  src="..\..\Assets\Badge 1.png"
                />
              </Grid>
              <Grid item xs={4} md={2}>
                <img
                  // onLoad={() => {
                  //   setBadge2(JSON.parse(cookies.get("badges")).badge2);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 1,
                  }}
                  src="..\..\Assets\Badge 2.png"
                />
              </Grid>
              <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
                <img
                  // onLoad={() => {
                  //   setBadge3(JSON.parse(cookies.get("badges")).badge3);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 0.25,
                  }}
                  src="..\..\Assets\Badge 3.png"
                />
              </Grid>

              <Grid item xs={4} md={2}>
                <img
                  // onLoad={() => {
                  //   setBadge4(JSON.parse(cookies.get("badges")).badge4);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 1,
                  }}
                  src="..\..\Assets\Badge 4.png"
                />
              </Grid>
              <Grid item xs={4} md={2}>
                <img
                  // onLoad={() => {
                  //   setBadge5(JSON.parse(cookies.get("badges")).badge5);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 1,
                  }}
                  src="..\..\Assets\Badge 5.png"
                />
              </Grid>
              <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
                <img
                  // onLoad={() => {
                  //   setBadge6(JSON.parse(cookies.get("badges")).badge6);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 0.25,
                  }}
                  src="..\..\Assets\Badge 6.png"
                />
              </Grid>

              <Grid item xs={4} md={2}>
                <img
                  // onLoad={() => {
                  //   setBadge7(JSON.parse(cookies.get("badges")).badge7);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 0.25,
                  }}
                  src="..\..\Assets\Badge 7.png"
                />
              </Grid>
              <Grid item xs={4} md={2}>
                <img
                  // onLoad={() => {
                  //   setBadge8(JSON.parse(cookies.get("badges")).badge8);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 1,
                  }}
                  src="..\..\Assets\Badge 8.png"
                />
              </Grid>
              <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
                <img
                  // onLoad={() => {
                  //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 1,
                  }}
                  src="..\..\Assets\Badge 9.png"
                />
              </Grid>
              <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
                <img
                  // onLoad={() => {
                  //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 0.25,
                  }}
                  src="..\..\Assets\Badge 10.png"
                />
              </Grid>
              <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
                <img
                  // onLoad={() => {
                  //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 0.25,
                  }}
                  src="..\..\Assets\Badge 11.png"
                />
              </Grid>
              <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
                <img
                  // onLoad={() => {
                  //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 0.25,
                  }}
                  src="..\..\Assets\Badge 12.png"
                />
              </Grid>
              <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
                <img
                  // onLoad={() => {
                  //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 1,
                  }}
                  src="..\..\Assets\Badge 13.png"
                />
              </Grid>
              <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
                <img
                  // onLoad={() => {
                  //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 0.25,
                  }}
                  src="..\..\Assets\Badge 14.png"
                />
              </Grid>
              <Grid item xs={4} md={2} style={{ marginRight: "0px" }}>
                <img
                  // onLoad={() => {
                  //   setBadge9(JSON.parse(cookies.get("badges")).badge9);
                  // }}
                  style={{
                    width: "100%",
                    opacity: 0.25,
                  }}
                  src="..\..\Assets\Badge 15.png"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>

      <Dialog
        open={bonusOpen}
        onClose={handleBonusClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You earned a new badge!"}
        </DialogTitle>
        <img src={badge} style={{ width: "100%" }} />
      </Dialog>
    </Fragment>
  );
};

export default App;
