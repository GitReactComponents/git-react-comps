// import React, {useState} from "react";
// import ReactDOM from "react-dom";
// import { useSpring, animated as a } from "react-spring";

// import "./Modal.scss";

// function Modal() {
//   const [show, displayGreeting] = useState(false);

//   const displayProps = useSpring({
//     opacity: show ? 1 : 0,
//     marginTop: show ? 0 : -500
//   });


//   return (
//     <div className="container">
//       <div className="button-container">
//         <button onClick={() => displayGreeting(a => !a)} className="button">
//           Click Here
//         </button>
//       </div>
//       {!show ? (
//         <div className="Intro">Click button below</div>
//       ) : (
//         <a.div className="box" style={displayProps}>
//           <h1>Hey there ! React Spring is awesome.</h1>
//         </a.div>
//       )}
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);
