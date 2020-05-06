import React from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";
import { Card } from "./Card.js";

function App({ data }) {
  return (
    <div className="container-fluid p-0">
      {/* navigation */}
      <Navbar />

      {/* header */}
      <Jumbotron trialNumber={data.length} />

      {/* content */}
      <div className="container">
        <div className="row">
          <div className="border content">
            <table className="table">
              <tbody>
                {data.map((trial, i) => {
                  return <Card card={trial} index={i} />;
                })}
              </tbody>
            </table>
          </div>

          {/* sidebar */}
          <div>{/* to render sidebar here */}</div>
        </div>
      </div>

    </div>
  );
}

export default App;
