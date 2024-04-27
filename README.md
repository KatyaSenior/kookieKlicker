User Stories:
🐿️ As a user, I want to be able to click the cookie and increment the counter. ACHIEVED.
🐿️ As a user, I want to see the counter automatically increment using an interval timer. ACHIEVED.
🐿️ As a user, I want to purchase items I can afford in the shop and increase the number of cookies every time the interval passes. ACHEIVED singular item. Make a second!

Requirements:

🎯 Create state variables to store the current number of cookies and the cookies PerSecond value (useState). ACHEIVED.

🎯 Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value. ACHEIVED.

🎯 Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.

🎯 Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value. ACHEIVED.

Stretch Goals:

🏹 Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes

Bugs:

1. Problem: Site fails to render, errors relating to an image tag in App.jsx
   Cause: Img tag cannot have children
   Status: Resolved. Current cookie count moved to outside image tag
2. Problem: When buyUpgrade is converted into a component, it is no longer possible to purchase an upgrade despite the click being recognised.
   Cause: buyUpgrade functionality not required to be in a component. Overcomplicates code.
   Status: Resolved.
3. Problem: Error message appears despite successful upgrade.
   Cause: No "else" in relevant line of code, so always triggering when the upgrade button is pressed.
   Status: Resolved.

General project successes and struggle:

Success: Clicking how simple updating the front end can be using react.
Struggle: Overcomplicating the code. For example, not trusting that a condition could be written as simply as if (variable > 0) and thus wasting time. Project started going much smoother once the above success was acheived.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
