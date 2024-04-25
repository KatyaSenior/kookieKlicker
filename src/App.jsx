import { useState, useEffect } from "react";
import "./App.css";
import cookieButton from "./components/cookie.png";

export default function App() {
  const [cookieCount, setCookies] = useState(0);
  const [cps, setCps] = useState(0);

  //set cps
  useEffect(() => {
    {
      if (cps > 0) {
        console.log(cps);
        const myInterval = setInterval(() => {
          addCookie();
        }, 1000 / cps);

        return () => {
          clearInterval(myInterval);
        };
      }
    }
  }, [cps]);

  function addCookie() {
    setCookies((currentCookies) => {
      return currentCookies + 1;
    });
  }

  //buy an upgrade
  function buyUpgrade() {
    if (cookieCount > 9) {
      setCps(cps + 1);
      setCookies(cookieCount - 10);
    }
  }

  //Buttons/html structure
  return (
    <>
      <h1>Click the cookie!</h1>
      <div className="cookieStats">
        <img
          src={cookieButton}
          alt={"A delicious looking chocolate chip cookie"}
          onClick={() => setCookies((cookieCount) => cookieCount + 1)}
        ></img>
        <button onClick={buyUpgrade}>Buy upgrade</button>
        <p>{cookieCount} cookies</p>
        {cps} cookies per second
        <p>How about an upgrade?</p>
      </div>
    </>
  );
}
