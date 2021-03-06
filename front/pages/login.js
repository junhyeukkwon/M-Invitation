import React, { useEffect, useState } from "react";
import MuiAlert from "@mui/material/Alert";
import Head from "next/head";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

// @material-ui/icons
import IconButton from "@material-ui/core/IconButton";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "styles/jss/nextjs-material-kit/pages/loginPage.js";
import { FormControl, InputLabel, Snackbar, StylesProvider } from "@material-ui/core";
import { useS3Upload, getImageData } from "next-s3-upload";
import { useRouter } from "next/router";
import DaumPostcode from "react-daum-postcode";
import { postInfoAPI } from "../lib/api/info";
import { postImagesAPI } from "../lib/api/info";

const useStyles = makeStyles(styles);

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function LoginPage(props) {
  const crypto = require("crypto");

  const router = useRouter();

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [classicModal, setClassicModal] = React.useState(false);

  const [urls, setUrls] = useState([]);
  const { uploadToS3 } = useS3Upload();
  const [heights, setHeights] = useState([]);
  const [widths, setWidths] = useState([]);
  const [address, setAdress] = useState("");
  const [hashh, setHashh] = useState("");

  const onCompletePost = (data) => {
    const tmp = data.address;
    setAdress(tmp);
  };

  const postCodeStyle = {
    display: "block",
    zIndex: 100,
  };

  let hashValue = "";

  const [openAlert, setOpenAlert] = React.useState(false);


  const generatePage = () => {
    setOpenAlert(false);
      const data = {
      fName: brideName,
      fPhone: bridePhone,
      fAccount: brideAccountBank + ' ' + brideAccount,
      fFatherName: fFatherName,
      fMotherName: fMotherName,
      mName: groomName,
      mPhone: groomPhone,
      mAccount: groomAccountBank + ' ' + groomAccount,
      mFatherName: mFatherName,
      mMotherName: mMotherName,
      location: address + ' ' + weddingHall,
      dateTime: weddingDate,
      hashValue: hashh 
    }
    urls.map((url, idx) => {
      const data = {
       
      link: url,
      hashValue: hashh
      }
      console.log(data);
      postImagesAPI(data);
    })
    console.log("generatePage");
    console.log('durl', data);
    
    postInfoAPI(data);
    
    router.replace("/profile");
  };

  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const handleFilesChange = async ({ target }) => {
    const files = Array.from(target.files);
    setUrls([]);
    setHeights([]);
    setWidths([]);

    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      const { url } = await uploadToS3(file);
      const { height, width } = await getImageData(file);

      setUrls((current) => [...current, url]);
      setHeights((current) => [...current, height]);
      setWidths((current) => [...current, width]);

      crypto.pbkdf2(
        "secret",
        url.toString(),
        100000,
        64,
        "sha512",
        (err, derivedKey) => {
          if (err) {
            throw err;
          }
          hashValue += derivedKey.toString("hex").substring(2, 6);
        }
      );
    }
    setHashh(hashValue)
    console.log(hashValue);
  };

  const classes = useStyles();
  const { ...rest } = props;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  //?????? ?????? ????????? ?????? ??? ?????? ??? ?????? ??????
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [bridePhone, setBridePhone] = useState("");
  const [groomPhone, setGroomPhone] = useState("");
  const [brideAccount, setBrideAccount] = useState("");
  const [groomAccount, setGroomAccount] = useState("");
  const [brideAccountBank, setBrideAccountBank] = useState("");
  const [groomAccountBank, setGroomAccountBank] = useState("");
  const [fFatherName, setFFatherName] = useState("");
  const [fMotherName, setFMotherName] = useState("");
  const [mFatherName, setMFatherName] = useState("");
  const [mMotherName, setMMotherName] = useState("");
  const [weddingHall, setWeddingHall] = useState("");
  const [weddingDate, setWeddingDate] = useState("");

  const regex = /^[0-9\b -]{0,13}$/;

  const handlePressBride = (e) => {
    console.log("handlePressBride");
    if (regex.test(e.target.value)) {
      console.log("handlePressBride2");
      setBridePhone(e.target.value);
    }
  };

  const handlePressGroom = (e) => {
    console.log("handlePressGroom");
    if (regex.test(e.target.value)) {
      console.log("handlePressGroom2");
      setGroomPhone(e.target.value);
    }
  };


  // useEffect(() => {
  //   if (setBridePhone.length === 10) {
  //     setBridePhone(bridePhone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
  //   }
  //   if (bridePhone.length === 13) {
  //     setBridePhone(bridePhone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  //   }
  // }, [bridePhone]);


  return (
    <>
      <div>
        <Head>
          <title>It's your day</title>
          <meta keyword="It's your day" />
          <meta contents="It's your day" />
        </Head>
        <Header
          absolute
          color="transparent"
          brand="wedding invitation"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url('/img/wedding/wedding_snap3.png')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h3>????????? ????????? ??????????????????</h3>
                    </CardHeader>
                    <p className={classes.divider}>
                      ???????????? ???????????? ??????????????????
                    </p>
                    <CardBody>
                      <p className={classes.divider}>?????? ???</p>
                      
                      <div>
                        <label htmlFor="fName" >?????? ??????</label>
                     
                        <input
                          type="text"
                          placeholder="??????"
                          id="fName"
                          onChange={(e) => {
                            setBrideName(e.target.value),
                              console.log("brideName" + brideName);
                          }}
                        />
                        

                        <label htmlFor="fPhone" >Phone Number</label>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          id="fPhone"
                          onChange={handlePressBride}
                        />

                        <label htmlFor="fAccount" >?????? ??????</label>
                        <select name="bank" id="fAccount" onChange={(e) => {setBrideAccountBank(e.target.value), console.log(brideAccountBank)}}>
                        <option value="">--?????? ??????--</option>
                          <option value="????????????">??????</option>
                          <option value="????????????">??????</option>
                          <option value="????????????">??????</option>
                          <option value="????????????">??????</option>
                          <option value="????????????">????????????</option>
                          <option value="???????????????">???????????????</option>
                          <option value="????????????">????????????</option>
                        </select>
                        <input
                          type="text"
                          placeholder="????????????"
                          id="fAccount"
                          value={brideAccount}
                          onChange={(e) => {
                            setBrideAccount(e.target.value),
                              console.log(brideAccount);
                          }}
                        />
                      </div>

                      <p className={classes.divider}>????????? ?????? ??????</p>
                      <div>
                        <label htmlFor="fFatherName" >?????? ??????</label>
                        <input
                          type="text"
                          placeholder="??????"
                          id="fFatherName"
                          onChange={(e) => {
                            setFFatherName(e.target.value),
                              console.log(fFatherName);
                          }}
                        ></input>
                        <label htmlFor="fMotherName">?????? ??????</label>
                        <input
                          type="text"
                          placeholder="??????"
                          id="fMotherName"
                          onChange={(e) => {
                            setFMotherName(e.target.value),
                              console.log(fMotherName);
                          }}
                        ></input>
                      </div>

                      <p className={classes.divider}>????????? ??????</p>

                      <label htmlFor="mName" >?????? ??????</label>
                      <input
                        type="text"
                        placeholder="??????"
                        id="mName"
                        onChange={(e) => {
                          setGroomName(e.target.value),
                            console.log("groomName" + groomName);
                        }}
                      ></input>

                      <label htmlFor="mPhone" >Phone Number</label>
                      <input
                        type="text"
                        placeholder="Phone Number"

                        id="mPhone"
                        onChange={handlePressGroom}

                      />

                      <label htmlFor="mAccount" >?????? ??????</label>
                      <select name="bank" id="mAccount" onChange={(e) => {setGroomAccountBank(e.target.value), console.log(groomAccountBank)}}>
                        <option value="">--?????? ??????--</option>
                        <option value="????????????">??????</option>
                        <option value="????????????">??????</option>
                        <option value="????????????">??????</option>
                        <option value="????????????">??????</option>
                        <option value="????????????">????????????</option>
                        <option value="???????????????">???????????????</option>
                        <option value="????????????">????????????</option>
                      </select>
                      <input
                        type="text"
                        placeholder="????????????"
                        id="mAccount"
                        onChange={(e) => {
                          setGroomAccount(e.target.value),
                            console.log("groomAccount" + groomAccount);
                        }}
                      />
                      <p className={classes.divider}>????????? ?????? ??????</p>
                   
                      <label htmlFor="fFatherName" >?????? ??????</label>
                      <input
                        type="text"
                        placeholder="??????"
                        id="mFatherName"
                        onChange={(e) => {
                          setMFatherName(e.target.value),
                            console.log(mFatherName);
                        }}
                      ></input>
                      <label htmlFor="mMotherName" >?????? ??????</label>
                      <input
                        type="text"
                        placeholder="??????"
                        id="mMotherName"
                        onChange={(e) => {
                          setMMotherName(e.target.value),
                            console.log(mMotherName);
                        }}
                      ></input>


                      <DaumPostcode
                        style={postCodeStyle}
                        onComplete={onCompletePost}
                      />
                      <label htmlFor="weddingHall" >????????? ?????? ??????</label>
                      <input
                        type="text"
                        id="weddingHall"
                        onChange={(e) => {
                          setWeddingHall(e.target.value),
                            console.log(weddingHall);
                        }}
                      ></input>
                      <br />
                      <div>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl fullWidth>
                            <label>?????? ??????</label>
                              <input type="datetime-local" placeholder="yyyy-mm-dd" id="wedding-date" title="Enter a date in this format YYYY/MM/DD" value={weddingDate} onChange={(e) => setWeddingDate(e.target.value)}/><br/>
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                      </div>
												????????? ??? 7?????? ???????????????.(????????? ????????? ????????? ????????? ?????????.)
                      <div>
                        {" "}
                        {/* ?????? ?????? */}
                        <input
                          type="file"
                          name="file"
                          multiple={true}
                          onChange={handleFilesChange}
                        />
                        <div>
                          {urls.map((url, index) => (
                            <div key={url}>
                              File {index}: ${url}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardBody>
                    
                      
                      
                      <CardFooter className={classes.cardFooter}>
                        <GridItem xs={12} sm={12} md={6} lg={4}>
                          <Button
                            color="primary"
                            block
                            onClick={() => setClassicModal(true)}
                          >
                            <LibraryBooks className={classes.icon} />
                            ????????? ??????
                          </Button>
                          <Dialog
                            classes={{
                              root: classes.center,
                              paper: classes.modal,
                            }}
                            open={classicModal}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={() => setClassicModal(false)}
                            aria-labelledby="classic-modal-slide-title"
                            aria-describedby="classic-modal-slide-description"
                          >
                            <DialogTitle
                              id="classic-modal-slide-title"
                              disableTypography
                              className={classes.modalHeader}
                            >
                              <IconButton
                                className={classes.modalCloseButton}
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={() => setClassicModal(false)}
                              >
                                <Close className={classes.modalClose} />
                              </IconButton>
                              <h4 className={classes.modalTitle}>
                                ?????? ??? ????????????
                              </h4>
                            </DialogTitle>
                            <DialogContent
                              id="classic-modal-slide-description"
                              className={classes.modalBody}
                            >
                              <p>
                                ?????? ???????????? ????????? ?????? ?????? ??? ??????????????????,
                                ????????? ?????? ?????? ????????? ???????????????.
                              </p>

                            <h6>?????? ?????? : {groomName}</h6>
                            <h6>?????? ?????? : {brideName}</h6>
                            <h6>?????? ???????????? : {groomPhone}</h6>
                            <h6>?????? ???????????? : {bridePhone}</h6>
                            <h6>?????? ?????? : {groomAccountBank +' '+ groomAccount}</h6>
                            <h6>?????? ?????? : {brideAccountBank +' '+ brideAccount}</h6>
                            <h6>????????? ????????? ?????? : {mFatherName}</h6>
                            <h6>????????? ????????? ?????? : {mMotherName}</h6>
                            <h6>????????? ????????? ?????? : {fFatherName}</h6>
                            <h6>????????? ????????? ?????? : {fMotherName}</h6>
                            <h6>????????? ?????? : {address +' '+ weddingHall}</h6>
                            <h6>?????? ?????? : {weddingDate}</h6>
                            
                          </DialogContent>
                          <DialogActions className={classes.modalFooter}>
                            <Button
                              color="transparent"
                              simple
                              onClick={() => {
                                setOpenAlert(true);
                                generatePage();
                                //addInfo();
                              }}
                            >
                              ?????? ??????
                            </Button>
                            <Button
                              onClick={() => setClassicModal(false)}
                              color="danger"
                              simple
                            >
                              ?????? ??? ????????????
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </GridItem>
                      <Snackbar
                        open={openAlert}
                        autoHideDuration={4000}
                        onClose={handleClose}
                      >
                        <Alert
                          onClose={handleClose}
                          severity="success"
                          sx={{ width: "100%" }}
                        >
                          ????????? ?????? ??????!
                        </Alert>
                      </Snackbar>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    </>
  );
}