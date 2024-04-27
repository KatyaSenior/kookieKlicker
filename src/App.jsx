import { useState, useEffect } from "react";
import "./App.css";
import cookieButton from "./components/cookie.png";
import ErrorMessage from "./components/ErrorMessage";

export default function App() {
  const [cookieCount, setCookies] = useState(0);
  const [cps, setCps] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [upgradeCount, setUpgradeCount] = useState(0);
  // const [upgradeCost, setUpgradeCost] = useState(10);
  const upgrades = [
    { id: 1, upgradeName: "Upgrade 1", upgradeCost: 10 },
    { id: 2, upgradeName: "Upgrade 2", upgradeCost: 100 },
  ];

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
    if (cookieCount >= upgradeCost) {
      setCps(cps + 1);
      setCookies(cookieCount - upgradeCost);
      setUpgradeCost(upgradeCost + 1);
      setUpgradeCount(upgradeCount + 1);
    } else {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }

  //set up button array
  // const upgradeButtons = upgrades.map((upgrade) => (
  //   <button key={upgrade}>{upgrade}</button>
  // ));

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
        {upgrades.map((upgrade) => {
          return (
            <div key={upgrade.upgradeName + upgrade.id}>
              <button>{upgrade.upgradeName}</button>
              <p>{upgrade.upgradeCost}</p>
            </div>
          );
        })}
        <p onClick={buyUpgrade}>{upgrades}</p>
        <p>{cookieCount} cookies</p>
        {cps} cookies per second
        <p>How about an upgrade?</p>
        <p>{upgradeCount} upgrades purchased so far</p>
        {isVisible && <ErrorMessage />}
      </div>
    </>
  );
}
