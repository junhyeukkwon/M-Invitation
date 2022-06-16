import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/img/wedding/wedding_snap10.PNG"
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                  </div>
                </div>
                <div>
                  <img
                    src="/img/wedding/wedding_snap4.PNG"
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    
                  </div>
                </div>
                <div>
                  <img
                    src="/img/wedding/wedding_snap7.PNG"
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
