import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>들어가는 말</h3>
          <GridContainer>
            <GridItem xs={16} sm={16} md={16}>
              <h3>
                <small>It's your day</small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Introdution",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        사랑이란 자신과 다른 방식으로 느끼며 다르게 살아가는
                        사람을 이해하고 기뻐하는 것이라고 합니다. 자신과 닮은
                        사람을 사랑하는 것이 아니라 자신과는 대립하여 살고있는
                        사람에게 기쁨의 다리를 건네는 것이 사랑입니다. 차이를
                        부정하는 것이 라니라 그 차이를 사랑하는 것입니다.
                        여러분의 결혼을 축하드리며, 정성을 다해 기쁜 순간을
                        남겨드리겠습니다.
                      </p>
                    ),
                  },
                  {
                    tabName: "Messages",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        안녕하세요, 저희는 모바일 청첩장을 도메인으로 자동적으로
                        모바일 청접장을 만들어주는 앱을 만들어 보았습니다.
                        미숙할 지언정, 저희의 많은 시간과 노력이 들어가서 이렇게
                        만들어진 것을 보았을때, 그저 뿌듯합니다. 더 성장하는
                        Team2가 되겠습니다!
                      </p>
                    ),
                  },
                  {
                    tabName: "developed by",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        <a href="https://github.com/uyggnodkrap">박동규</a> ,{" "}
                        <a href="https://github.com/Do-it-chu">배서현</a> ,{" "}
                        <a href="https://github.com/uiet312">박재운</a> 그리고{" "}
                        <a href="https://github.com/junhyeukkwon">권준혁</a>
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
