import React, { useEffect, useState } from "react";
import Datetime from "react-datetime";
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
import UploadImages from "./uploadImages";

import styles from "styles/jss/nextjs-material-kit/pages/loginPage.js";
import { FormControl, InputLabel, TableBody } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [classicModal, setClassicModal] = React.useState(false);

  
    
    const [weddingHall, setWeddingHall] = useState("");
    const [weddingDate, setWeddingDate] = useState("");
    // const [customInfo, setCustomInfo] = React.useState([]);

    const onChangeBrideName = (e) => setBrideName(e.target.value);
    const onChanGroomName = (e) => setGroomName(e.target.value);
    const onChangeBridePhone = (e) => setBridePhone(e.target.value);
    const onChangeGroomPhone = (e) => setGroomPhone(e.target.value);
    const onChangeBrideAccoun = (e) => setBrideAccount(e.target.value);
    const onChangeGroomAccount = (e) => setGroomAccount(e.target.value);
    const onChangeWeddingHall = (e) => setWeddingHall(e.target.value);
  
    

  // const custom = customInfo.map(info => (

  // ));

  const inputSave = () =>{
    setCartIsShown(true);
  }



  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;


  
  //신랑 신부 예식장 정보 등 입력 값 변수 저장
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [bridePhone, setBridePhone] = useState("");
  const [groomPhone, setGroomPhone] = useState("");
  const [brideAccount, setBrideAccount] = useState("");
  const [groomAccount, setGroomAccount] = useState("");
  
  const handlePress = (e) => {
    console.log("handlePress");
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      console.log("handlePress2");
      setBridePhone(e.target.value);
      }
    }

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
                    {/* <CustomInput
                      labelText="Name..."
                      id="setBrideName"
                      saveInfo={userInfo.brideName}
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
                    /> */}
                    <label>신부 성함</label>
                    <input type="text" placeholder="이름" id="brideName" onChange={(e) => {setBrideName(e.target.value), console.log("brideName"+brideName)}}/>
                    {/* <input type="text" name="name" onChange={this.handleChangeInput} value={this.state.input}/> */}
                    {/* <CustomInput
                      labelText="Phone..."
                      id="setBridePhone"
                      saveInfo={userInfo.bridePhone}
                      onClick={ (e) => setBridePhone(e.target.value)}
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
                      /> */}
                      <label>Phone Number</label>
                      <input type="text" placeholder="Phone Number" id="bridePhone" onChange={handlePress} value={bridePhone}/>
                    {/* <CustomInput
                      labelText="Account info..."
                      id="setBrideAccount"
                      saveInfo={userInfo.brideAccount}
                      onChange={ (e) => setBrideAccount(e.target.value)}
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
                      /> */}
                      <label>계좌 번호</label>
                      <input type="text" placeholder="계좌번호" id="brideAccount" onChange={(e) => {setBrideAccount(e.target.value), console.log("brideAccount"+brideAccount)}}/>
                    <p className={classes.divider}>신랑 측</p>
                    {/* <CustomInput
                      labelText="Name..."
                      id="setGroomName"
                      saveInfo={userInfo.groomName}
                      onChange={ (e) => setGroomName(e.target.value)}
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
                    /> */}
                    <label>신랑 이름</label>
                    <input type="text" placeholder="이름" id="groomName" onChange={(e) => {setGroomName(e.target.value), console.log("groomName"+groomName)}}></input>
                    {/* <CustomInput
                      labelText="Phone..."
                      id="setGroomPhone"
                      saveInfo={userInfo.groomPhone}
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
                      /> */}
                      <label>Phone Number</label>
                      <input type="text" placeholder="Phone Number" id="groomPhone" onChange={handlePress}/>
                    {/* <CustomInput
                      labelText="Account info..."
                      id="setGroomAccount"
                      saveInfo={userInfo.groomAccount}
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
                      /> */}
                      <label>계좌 번호</label>
                      <input type="text" placeholder="계좌번호" id="groomAccount" onChange={(e) => {setGroomAccount(e.target.value), console.log("groomAccount"+groomAccount)}}></input>

                    {/* <Address /> */}
                    
                    {/* <CustomInput
                      labelText="Wedding Info..."
                      id="wedding-info"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Info className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }} 
                    /> */}
                    
                    
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
                    </div>{" "}
                    <br />
                    {/* <UploadImages></UploadImages> */}
                    {/* <Address></Address> */}
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
                            현재 입력하신 정보에 대해 한번더 확인해주시고,
                            맞다면 확인 완료 버튼을 눌러 주세요.
                          </p>

                          <h6>신랑 이름 : {groomName}</h6>
                          <h6>신부 이름 : {brideName}</h6>
                          <h6>신랑 전화번호 : {groomPhone}</h6>
                          <h6>신부 전화번호 : {bridePhone}</h6>
                          <h6>신랑 계좌 : {groomAccount}</h6>
                          <h6>신부 계좌 : {brideAccount}</h6>

                        </DialogContent>
                        <DialogActions className={classes.modalFooter}>
                          <Button color="transparent" simple>
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

