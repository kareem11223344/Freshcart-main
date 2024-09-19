import React from 'react'
import errorNotFund from "../../assets/images/error.svg"
import { Link } from 'react-router-dom'
export default function Notfound() {
  return (
    <>
      <img src={errorNotFund} className='mx-auto  py-32 px-5  md:py-9 md:px-0 '  alt="errorImage" />

    </>
  )
}
