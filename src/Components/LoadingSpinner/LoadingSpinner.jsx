import React from "react";
import { Audio, BallTriangle } from 'react-loader-spinner'


export default function LoadingSpinner() {
  return <>
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#10b981"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />

  </>
}
