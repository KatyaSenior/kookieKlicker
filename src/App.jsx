import { useState, useEffect } from "react";
import "./App.css";
import cookieButton from "./components/cookie.png";

export default function App() {
  const [cookieCount, setCookies] = useState(0);
  // const [cps, setCps] = useState(1);

  // useEffect(() => {
  //   const myInterval = setInterval(() => {
  //     addCookie();
  //   }, 1000 / cps);

  //   return () => {
  //     clearInterval(myInterval);
  //   };
  // }, [cps]);

  return (
    <>
      <h1>Click the cookie!</h1>
      <div className="cookieStats">
        <img
          src={cookieButton}
          alt={"A delicious looking chocolate chip cookie"}
          onClick={() => setCookies((cookieCount) => cookieCount + 1)}
        ></img>
        {cookieCount} cookies
        <p>How about an upgrade?</p>
      </div>
    </>
  );
}
