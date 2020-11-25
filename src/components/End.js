import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPrize } from "../redux/actions";
import Overview from "../container/utils/Overview";

const End = () => {
  const prize = useSelector((state) => state.prize);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setPrize(0));
    };
  }, []);
  return (
    <Overview
      score
      title={`$${prize} earned`}
      buttonLabel='Try again'
      redirectTo='/'
    />
  );
}
export default End;
