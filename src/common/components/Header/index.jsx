import React from "react";
import styles from "./style.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_PROFILE } from "features/authentication/action";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth.profile);


  const goToHome = () => {
    history.push("/");
  };

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    dispatch({
      type: SET_PROFILE,
      payload: null,
    });

    goToHome();
  };

  const renderUserInfo = () => {
    if (userProfile)
      return (
        <>
          <a href="#">Hi, {userProfile.hoTen}</a>
          <a className="block ml-5" href="#" onClick={handleLogout}>
            Log out
          </a>
        </>
      );

    return (
      <>
        <button onClick={() => {
          history.push('/signin')
        }} className="self-center px-8 py-3 rounded" activeClassName={styles.active} to="/signin">
          Sign in
        </button>
        <NavLink className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" activeClassName={styles.active} to="/signup">
          Sign up
        </NavLink>
      </>
    );
  };

  return (
    <header className=" bg-white text-coolGray-800   text-black w-full fixed z-10 text-lg " style={{ boxShadow: "2px 2px 8px rgba(0,0,0,0.1)" }}>
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink to="/" rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
          <span onClick={goToHome} >Cyber</span>
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a href="#listfilm" activeClassName={styles.active} className="flex items-center px-4 -mb-1  ">Lịch chiếu</a>
          </li>
          <li className="flex">
            <a activeClassName={styles.active} href="#theater" className="flex items-center px-4 -mb-1 text-black">Cụm rạp</a>
          </li>
          <li className="flex">
            <a href="#news" activeClassName={styles.active} className="flex items-center px-4 -mb-1  text-black">Tin tức</a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">

          {renderUserInfo()}
        </div>

      </div>
    </header>
  );
}

export default Header;
