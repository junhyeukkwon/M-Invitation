import React from "react";
import Datetime from "react-datetime";
import MuiAlert from "@mui/material/Alert";
import Head from "next/head";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

// @material-ui/icons
import People from "@material-ui/icons/People";
import Account from "@material-ui/icons/Payment";
import Phone from "@material-ui/icons/Phone";
import Info from "@material-ui/icons/InfoOutlined";
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
import CustomInput from "components/CustomInput/CustomInput.js";
import Address from "./address";
import styles from "styles/jss/nextjs-material-kit/pages/loginPage.js";
import { FormControl, InputLabel, Snackbar } from "@material-ui/core";
import { useState } from "react";
import { useS3Upload, getImageData } from 'next-s3-upload';
import { useRouter } from 'next/router';
import DaumPostcode from "react-daum-postcode";
import UploadImages from "./uploadImages";

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
  const [address, setAdress] = useState('');
  
  const onCompletePost = (data) => {
    const tmp = data.address
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
    router.replace("/profile");
  };

  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const handleFilesChange = async ({ target }) => {
    const files = Array.from(target.files);
    setUrls([])
    setHeights([])
    setWidths([])
    

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
  return (
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
                    <CustomInput
                      labelText="Name..."
                      id="name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Phone..."
                      id="phone"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Phone className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <CustomInput
                      labelText="Account info..."
                      id="account-info"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Account className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <p className={classes.divider}>신랑 측</p>
                    <CustomInput
                      labelText="Name..."
                      id="name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Phone..."
                      id="phone"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Phone className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Account info..."
                      id="account-info"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Account className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <DaumPostcode style={postCodeStyle} onComplete={onCompletePost}/>
                    <CustomInput
                      labelText="Wedding Info..."
                      id="wedding-info"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      onClick={() => setClassicModal()}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Info className={classes.inputIconsColor} />
                            <Info className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
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


                


                    <UploadImages />
                    <Address />

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

                          <h3>주소 : </h3><h5>{address}</h5>
                          
                          {urls.map((url, index) => (

                            <div key={url} >
                              <img src = {url} width={widths[index]} height = {heights[index]} alt = "demo" />                 
                            </div>
                          ))}
                        </DialogContent>
                        <DialogActions className={classes.modalFooter}>
                          <Button
                            color="transparent"
                            simple
                            onClick={() => {
                              setOpenAlert(true);
                              generatePage();
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
  );
}
