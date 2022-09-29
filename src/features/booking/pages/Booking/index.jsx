import React from 'react'
import Signin from "features/authentication/pages/Signin";
import { Redirect } from "react-router-dom"; 
import styles from "./style.module.css"
function Booking() {
  if(!localStorage.getItem(Signin)){
    return <Redirect to='/signup' />
  }
  return (
    <div className="container min-h-screen">
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <div className="flex justify-center mt-5">
          <div></div>
          <div className={`${styles.trapezoid}`}></div>
        </div>
      </div>
      <div className="col-span-3">
        <h3 className="text-green-400 text-center text-2xl">0d</h3>
        <hr />
        <h3 className="text-xl">lat mat 48h</h3>
        <p>dia diem</p>
        <p>ngay chieu</p>
        <hr />
        <div className="flex flex-row my-5">
          <div className="w-4/5">
            <span className="text-red-400 text-lg">
              ghee
            </span>
          </div>
          <div className="text-right col-span-1">
            <span className="text-green-800 text-lg">0d</span>
          </div>
        </div>
        <hr />
        <div className="my-5">
          <i>email</i>
        </div>
        <hr />
        <div className="my-5">
          <i>Phone</i>
        </div>
        <hr />
        <div className="mb-0 h-full flex flex-col justify-end items-center" >
          <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl">
            Dat ve
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Booking