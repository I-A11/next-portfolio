import React from "react";
import Spinner from "../../assets/spinner.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div className='spinnerContainer'>
      <span className='loader'>
        <Image src={Spinner} />
      </span>
    </div>
  );
};

export default Loading;
