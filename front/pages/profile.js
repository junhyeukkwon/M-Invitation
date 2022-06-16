import React from "react";
import Head from "next/head";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import People from "@material-ui/icons/PersonOutlined";
import Photos from "@material-ui/icons/PhotoAlbumOutlined";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  console.log(props.images);
  console.log(props.infos);
  return (
    <div>
      <Head>
        <title>It's your day</title>
        <meta keyword="It's your day" />
        <meta contents="It's your day" />
      </Head>
      <Header
        color="transparent"
        brand="It's your day"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image="/img/wedding/wedding_snap8.PNG" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    {/* 사진링크가 들어가는곳 */}
                    <img
                      src={props.images[0].link}
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Wedding invitation</h3>
                    <h6>
                      안녕하세요, 오래전 작은 인연이 저희를 연인으로 만들었고
                      지금 그 인연으로 저희가 하나가 됩니다. 아직은 많이
                      부족하지만 늘 그 순간을 생각하며 서로 아껴주고 사랑하며
                      살겠습니다. <br />
                      오셔서 지켜봐 주시고 축복해주세요!
                    </h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>예식장 정보 : {props.infos.location}</p>
              <p>예식 시작 시간 : {props.infos.dateTime}</p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Groom",
                      tabIcon: People,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <div>
                              <p>
                                {props.infos.mFatherName},
                                {props.infos.mMotherName}의 장남{" "}
                                {props.infos.mName}
                              </p>
                              <p>휴대폰 번호: {props.infos.mPhone}</p>
                              <p>계좌정보 : {props.infos.mAccount}</p>
                            </div>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Bride",
                      tabIcon: People,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <div>
                              <p>
                                {props.infos.fFatherName},
                                {props.infos.fMotherName}의 장녀{" "}
                                {props.infos.mName}
                              </p>
                              <p>휴대폰 번호: {props.infos.fPhone}</p>
                              <p>계좌정보 : {props.infos.fAccount}</p>
                            </div>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      //사진이 들어가는 곳
                      tabButton: "Photos",
                      tabIcon: Photos,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={props.images[1].link}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={props.images[2].link}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={props.images[3].link}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={props.images[4].link}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={props.images[5].link}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={props.images[6].link}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/info/1");
    const res2 = await fetch(
      "http://localhost:8080/api/images/hash"
    );
    const infos = await res.json();
    const images = await res2.json();
    return {
      props: { infos, images }, // 그 객체는 props라는 이름의 프로퍼티를 가지고 있고,
      //그 프로퍼티의 값은 객체
    }; //객체 리터럴, 객체를 반환
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
