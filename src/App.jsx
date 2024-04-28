import { useState, useEffect } from "react";
import "./App.css";
import cookieButton from "./components/cookie.png";
import ErrorMessage from "./components/ErrorMessage";

export default function App() {
  const [cookieCount, setCookies] = useState(0);
  const [cps, setCps] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const upgrades = [
    {
      id: 0,
      upgradeName: "Upgrade 1",
      upgradeCost: 10,
      increaseCost: 1,
      upgradeNumber: 0,
    },
    {
      id: 1,
      upgradeName: "Upgrade 2",
      upgradeCost: 100,
      increaseCost: 10,
      upgradeNumber: 0,
    },
  ];
  const [userUpgrades, setUserUpgrades] = useState(upgrades);
  //set cps
  useEffect(() => {
    {
      if (cps > 0) {
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
  function buyUpgrade(
    id,
    upgradeCost,
    upgradeName,
    increaseCost,
    upgradeNumber
  ) {
    // Check if the player has enough cookies to purchase the upgrade
    if (cookieCount >= upgradeCost) {
      // Update cps and cookieCount
      setCps(cps + increaseCost);
      setCookies(cookieCount - upgradeCost);

      //Handles cost and upgrade counter
      setUserUpgrades((prevUserUpgrades) => {
        return prevUserUpgrades.map((upgrade) => {
          if (upgrade.id === id) {
            return {
              ...upgrade,
              upgradeCost: upgrade.upgradeCost + increaseCost,
              upgradeNumber: upgrade.upgradeNumber + 1,
            };
          }
          return upgrade;
        });
      });
    } else {
      // Display error message
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
        {userUpgrades.map((upgrade) => {
          return (
            <div key={upgrade.upgradeName + upgrade.id}>
              <button
                onClick={() =>
                  buyUpgrade(
                    upgrade.id,
                    upgrade.upgradeCost,
                    upgrade.upgradeName,
                    upgrade.increaseCost,
                    upgrade.upgradeNumber
                  )
                }
              >
                {upgrade.upgradeName}
              </button>
              <p>{upgrade.upgradeCost}</p>
              <p>{upgrade.upgradeNumber} purchased</p>
            </div>
          );
        })}
        <p>{cookieCount} cookies</p>
        {cps} cookies per second
        {isVisible && <ErrorMessage />}
      </div>
    </>
  );
}
