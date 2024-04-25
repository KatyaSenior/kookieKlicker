import { useState, useEffect } from "react";
import "./App.css";
import cookieButton from "./components/cookie.png";

export default function App() {
  const [cookieCount, setCookies] = useState(0);
  const [cps, setCps] = useState(0);

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

  function buyUpgrade() {
    setCps(cps + 1);
  }

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
        {cookieCount} cookies
        <p>How about an upgrade?</p>
      </div>
    </>
  );
}
