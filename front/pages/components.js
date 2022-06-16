import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
import Head from 'next/head';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Head>
        <title>It's your day</title>
        <meta keyword="It's your day"/>
        <meta contents="It's your day"/>
      </Head>
      <Header
        brand="It's your day"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {/* header */}
      <Parallax image="/img/wedding/wedding_snap9.png">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>it’s your day</h1>
                <h3 className={classes.subtitle}>
                사진만 줄 수 있을까요? 당신의 소중한 순간을 더 아름답게 꾸며줄게요.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      {/* body */}
        
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div id="SectionTabs">
          <SectionTabs />
        </div>
        <div id="make_info" className={classes.make_info}>
          <SectionCompletedExamples />
          <GridItem md={12} className={classes.textCenter}>
            <Link href="/login">
              <a className={classes.link}>
                <Button color="warning" size="lg" >
                  청첩장 만들러가기
                </Button>
              </a>
            </Link>
          </GridItem>
        </div>
        <div id="platform">
          <SectionCarousel />
        </div>

      </div>
      <Footer />
    </div>
  );
}
