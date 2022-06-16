import React, { useEffect, useState } from "react";
import Datetime from "react-datetime";
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
import { FormControl, InputLabel, Snackbar } from "@material-ui/core";
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
   
    urls.map((url, idx) => {
      const data = {
       
      link: url,
      hashValue: hashh
      }
      console.log(data);
      postImagesAPI(data);
    })

    const data = {
      fName: brideName,
      fPhone: bridePhone,
      fAccount:brideAccount,
      fFatherName:'',
      fMatherName:'',
      mName: brideName,
      mPhone: bridePhone,
      mAccount:brideAccount,
      mFatherName:'1323',
      mMatherName:'',
      location: address,
      dateTime:'',
      hashValue: hashh
    }
    console.log(data);
    postInfoAPI(data);
    
    // router.replace("/profile");
  };

  const [weddingHall, setWeddingHall] = useState("");
  const [weddingDate, setWeddingDate] = useState("");

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

  //신랑 신부 예식장 정보 등 입력 값 변수 저장
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [bridePhone, setBridePhone] = useState("");
  const [groomPhone, setGroomPhone] = useState("");
  const [brideAccount, setBrideAccount] = useState("");
  const [groomAccount, setGroomAccount] = useState("");


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
                      <h3>아래의 정보를 입력해주세요</h3>
                    </CardHeader>
                    <p className={classes.divider}>
                      사랑하는 마음으로 작성해주세요
                    </p>
                    <CardBody>
                      <p className={classes.divider}>신부 측</p>

                      <label htmlFor="fName">신부 성함</label>
                      <input
                        type="text"
                        placeholder="이름"
                        id="fName"
                        value={brideName}
                        onChange={(e) => {
                          setBrideName(e.target.value),
                            console.log("brideName" + brideName);
                        }}
                      />

                      <label htmlFor="fPhone">Phone Number</label>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        id="fPhone"
                        value={bridePhone}
                        onChange={handlePressBride}
                      />

                      <label htmlFor="fAccount">계좌 번호</label>
                      <input
                        type="text"
                        placeholder="계좌번호"
                        id="fAccount"
                        value={brideAccount}
                        onChange={(e) => {
                          setBrideAccount(e.target.value),
                            console.log("brideAccount" + brideAccount);
                        }}
                      />
                      <p className={classes.divider}>신랑 측</p>

                      <label>신랑 이름</label>
                      <input
                        type="text"
                        placeholder="이름"
                        id="groomName"
                        onChange={(e) => {
                          setGroomName(e.target.value),
                            console.log("groomName" + groomName);
                        }}
                      ></input>

                      <label>Phone Number</label>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        id="groomPhone"
                        onChange={handlePressGroom}
                      />

                      <label>계좌 번호</label>
                      <input
                        type="text"
                        placeholder="계좌번호"
                        id="groomAccount"
                        onChange={(e) => {
                          setGroomAccount(e.target.value),
                            console.log("groomAccount" + groomAccount);
                        }}
                      ></input>

                      <div>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl fullWidth>
                              <Datetime
                                inputProps={{
                                  placeholder: "Wedding Date Here",
                                }}
                              />
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                      </div>
                      <br />

                      <DaumPostcode
                        style={postCodeStyle}
                        onComplete={onCompletePost}
                      />

                      <div>
                        {" "}
                        {/* 사진 입력 */}
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
                          청첩장 생성
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
                              입력 값 확인하기
                            </h4>
                          </DialogTitle>
                          <DialogContent
                            id="classic-modal-slide-description"
                            className={classes.modalBody}
                          >
                            <p>
                              현재 입력하신 정보에 대해 한번 더 확인해주시고,
                              맞다면 확인 완료 버튼을 눌러주세요.
                            </p>

                            <h3>주소 : </h3>
                            <h5>{address}</h5>

                            {urls.map((url, index) => (
                              <div key={url}>
                                <img
                                  src={url}
                                  width={widths[index]}
                                  height={heights[index]}
                                  alt="demo"
                                />
                              </div>
                            ))}

                            <h6>신랑 이름 : {groomName}</h6>
                            <h6>신부 이름 : {brideName}</h6>
                            <h6>신랑 전화번호 : {groomPhone}</h6>
                            <h6>신부 전화번호 : {bridePhone}</h6>
                            <h6>신랑 계좌 : {groomAccount}</h6>
                            <h6>신부 계좌 : {brideAccount}</h6>
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
                              확인 완료
                            </Button>
                            <Button
                              onClick={() => setClassicModal(false)}
                              color="danger"
                              simple
                            >
                              한번 더 확인하기
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
                          데이터 전송 완료!
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

