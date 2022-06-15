import React, { useState }from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import styles from "styles/jss/nextjs-material-kit/components/customInputStyle.js";
import LoginPage from "../../pages/login";

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    saveInfo
  } = props;

  

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }

  // 신랑 신부 예식장 정보 등 입력 값 변수 저장
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [bridePhone, setBridePhone] = useState("");
  const [groomPhone, setGroomPhone] = useState("");
  const [brideAccount, setBrideAccount] = useState("");
  const [groomAccount, setGroomAccount] = useState("");

  
  
    // const inputChangeSave = (e) => {
    //   const inputValue = e.target.value;
    //   const userInfo = props.userInfo;
    //   props.saveInfo(inputValue, userInfo);
    // }
  
    
  
    
    
    return (
      <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
        className={classes.labelRoot + " " + labelClasses}
        htmlFor={id}
        {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      {/* <LoginPage onChange={inputChangeSave}/> */}
      
      <Input
      // onChange={(e) => { console.log(e.target.value) }}
      
      onChange={ (e) => {
        if (id == 'setBrideName') {
          // props.saveInfo().brideAccount(e.target.value);
          setBrideName(e.target.value);
        }else if(id == 'setGroomName') {
          // props.saveInfo.groomName(e.target.value)
          //props.saveInfo(setGroomName(e.target.value));
          setGroomName(e.target.value);
        }else if(id == 'setBridePhone'){
          // props.saveInfo.bridePhone(e.target.value)
          //props.saveInfo(setBridePhone(e.target.value));
          setBridePhone(e.target.value);
        }else if(id == 'setGroomPhone'){
          // props.saveInfo.groomPhone(e.target.value)
          //props.saveInfo(setGroomPhone(e.target.value));
          setGroomPhone(e.target.value)
        }else if(id == 'setBrideAccount'){
          // props.saveInfo.brideAccount(e.target.value)
          //props.saveInfo(setBrideAccount(e.target.value));
          setBrideAccount(e.target.value)
        }else if(id == 'setGroomAccount'){
          // props.saveInfo.groomAccount(e.target.value)
          //props.saveInfo(setGroomAccount(e.target.value));
          setGroomAccount(e.target.value)
        }
      }}
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
        />
        {console.log("커스텀로그"+id+"---"+brideName+groomName+bridePhone+groomPhone+brideAccount+groomAccount)}
        {console.log("로그잼 " + inputProps)}
        
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
};
