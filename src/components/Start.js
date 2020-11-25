import React from "react";
import Overview from "../container/utils/Overview";

const Start = () => {
  return (
    <Overview
      triangle
      title='Who wants to be a millionaire?'
      buttonLabel='Start'
      redirectTo='/game'
    />
  );
}
export default Start;