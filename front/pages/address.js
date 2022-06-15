import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = (props) => {
  // const address = props.address;
  // console.log(address);
  

  const onCompletePost = (data) => {
    console.log(data.address);
    
  };

  const postCodeStyle = {
   
    display: "block",
    zIndex: 100, 
  };

  return (
        <DaumPostcode style={postCodeStyle} onComplete={onCompletePost}/>
  );
};

export default Post;