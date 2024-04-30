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
      upgradeName: "Tim",
      upgradeCost: 10,
      increaseCost: 1,
      upgradeNumber: 0,
    },
    {
      id: 1,
      upgradeName: "Manny",
      upgradeCost: 100,
      increaseCost: 10,
      upgradeNumber: 0,
    },
    {
      id: 2,
      upgradeName: "Cordelia",
      upgradeCost: 1000,
      increaseCost: 100,
      upgradeNumber: 0,
    },
    {
      id: 3,
      upgradeName: "Sam",
      upgradeCost: 10000,
      increaseCost: 1000,
      upgradeNumber: 0,
    },
    {
      id: 4,
      upgradeName: "Davina",
      upgradeCost: 100000,
      increaseCost: 10000,
      upgradeNumber: 0,
    },
    {
      id: 5,
      upgradeName: "Joe",
      upgradeCost: 1000000,
      increaseCost: 100000,
      upgradeNumber: 0,
    },
    {
      id: 6,
      upgradeName: "Jez",
      upgradeCost: 10000000,
      increaseCost: 1000000,
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
  function buyUpgrade(id, upgradeCost, upgradeName, increaseCost) {
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

  //Buttons/html structure
  return (
    <>
      <div className="cookieStats">
        <h1>Feed the staff!</h1>
        <img
          src={cookieButton}
          alt={"A delicious looking chocolate chip cookie"}
          onClick={() => setCookies((cookieCount) => cookieCount + 1)}
        ></img>
        <p>{cookieCount} lines of code written</p>
        {cps} lines of code per second
        {isVisible && <ErrorMessage />}
      </div>
      {userUpgrades.map((upgrade) => {
        return (
          <div className="upgrades" key={upgrade.upgradeName + upgrade.id}>
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
    </>
  );
}
