import React from "react";
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Account from "@material-ui/icons/Payment";
import Phone from "@material-ui/icons/Phone";
import Info from "@material-ui/icons/InfoOutlined";
import DateIcon from "@material-ui/icons/DateRangeOutlined";

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

import styles from "styles/jss/nextjs-material-kit/pages/loginPage.js";
import { FormControl, InputLabel } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
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
          backgroundImage: "url('/img/bg7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={18} sm={16} md={14}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>

                    <h3>아래의 정보를 입력해주세요</h3>
                  </CardHeader>
                  <p className={classes.divider}>사랑하는 마음으로 작성해주세요</p>

                  <CardBody>
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
                        <GridItem xs={18} sm={16} md={14}>
                          <FormControl fullWidth>
                            <Datetime
                              inputProps={{
                                placeholder: "Wedding Date Here",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <DateIcon className={classes.inputIconsColor}/>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </FormControl>
                        </GridItem>
                      </GridContainer>
                    </div>{" "}
                    <br />
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

                    <UploadImages></UploadImages>


                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      입력완료
                    </Button>
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
