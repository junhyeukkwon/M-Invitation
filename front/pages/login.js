import React from "react";
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
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
import UploadImages from "./uploadImages";
import Address from "./address";
import styles from "styles/jss/nextjs-material-kit/pages/loginPage.js";
import { FormControl, InputLabel, TableBody } from "@material-ui/core";

import { useState } from "react";
import { useS3Upload } from "next-s3-upload";

const useStyles = makeStyles(styles);


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [classicModal, setClassicModal] = React.useState(false);
  const [urls, setUrls] = useState([]);
  const { uploadToS3 } = useS3Upload();

  setTimeout(function () {
    setCardAnimation("");
  }, 700);

    const handleFilesChange = async ({ target }) => {
    const files = Array.from(target.files);
    setUrls([])

    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      const { url } = await uploadToS3(file);
      setUrls(current => [...current, url]);
    }


    
  };




  const classes = useStyles();
  const { ...rest } = props;
  return (
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
                      }}></CustomInput>

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
                      id="account_info"
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

                    <Address />
                    
                    <CustomInput
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
                    </div>{" "}
                    <br />
                    {/* <UploadImages></UploadImages> */}

                    <div>

                  <input type="file" name="file" multiple={true} onChange={handleFilesChange} /><div>
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
                          <h4 className={classes.modalTitle}>입력 값 확인하기</h4>
                        </DialogTitle>
                        <DialogContent
                          id="classic-modal-slide-description"
                          className={classes.modalBody}
                        >
                          <p>
                            현재 입력하신 정보에 대해 한번더 확인해주시고, 맞다면 확인 완료 버튼을 눌러 주세요.
                          </p>

                          {urls.map((url, index) => (
                            <div key={url}>
                              File {index}: ${url}
                            </div>
                          ))}
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
  );
}
