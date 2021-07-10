import React from "react";
import { Link } from "react-router-dom";
import { pageUrl } from "../constants/pageurl";

export const Error404 = () => {
  return (
    <React.Fragment>
      <div className="col text-center mx-auto mt-5">
        <h1 style={{ lineHeight: "3" }}>
          Sorry 😥
          <br />
        </h1>
        <p className="text-muted">That page does not exist</p>
        <Link to={pageUrl.HOME_PAGE}>Back home</Link>
      </div>
    </React.Fragment>
  );
};

// export const Error404 = () => {
//   const handleSubmit = () => {
//     const message = document.querySelector(".message");
//     const firstNameInput = document.getElementById("firstNameInput");
//     const firstName = firstNameInput.value;
//     if (!firstName) {
//       message.innerHTML = "Field Cannot be blank input";
//     } else {
//       message.innerHTML = "Welcome " + firstNameInput.value;
//     }
//   };
//   return (
//     <React.Fragment>
//       <form onSubmit={handleSubmit} className="text-center w-50 m-auto">
//         <p className="message"></p>
//         <input
//           className="form-control mb-2"
//           placeholder="Enter your name"
//           id="firstNameInput"
//         />
//         <button type="submit" className=" form-control btn btn-success">
//           Submit
//         </button>
//       </form>
//     </React.Fragment>
//   );
// };
