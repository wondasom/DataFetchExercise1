import React from "react";

// const getSomeTacos = new Promise((resolve, reject) => {
//   console.log("Initial state: Excuse me can I have some 🌮s");

//   reject();
// })
//   .then(() => {
//     // Resolve
//     console.log("Here are your 🌮s");
//   })
//   .catch(err => {
//     // Reject
//     console.error("Nope! No 🌮s for you.");
//   });
//logging this will show us the getSomeTacos promise in the pending state
// Think of this as calling the api.

// console.log(getSomeTacos);

// this is the function we want to schedule. it's a promise.
// const goGetTwo = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(`2`);
//       resolve();
//     }, 2000);
//   });
// };

// async function addAsync() {
//   console.log("1");
//   await goGetTwo();
//   console.log(`3`);
// }

// addAsync();

export const Promises = () => (
  <div>
    {/* <button>
      Sure here's some{" "}
      <span role="img" aria-label="taco">
        {" "}
        🌮
      </span>{" "}
    </button>
    <button>
      No tacos for you
      <span role="img" aria-label="taco">
        {" "}
        🙅🏻‍♀️{" "}
      </span>
    </button> */}
  </div>
);
