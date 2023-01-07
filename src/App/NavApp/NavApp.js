import React from "react";
import "./NavApp.css"

function  NavApp({setContent}){
    return (
      <React.Fragment>
        <nav>
            <ul>
              <li>
                <button onClick={() => setContent("menu")}>Menus</button>
              </li>
              <li>
                <button onClick={() => setContent("topic")}>Topics</button>
              </li>
              <li>
                <button onClick={() => setContent("sauce")}>Salsas</button>
              </li>
              <li>
                <button onClick={() => setContent("order")}>Ordenes</button>
              </li>
            </ul>
        </nav>
        </React.Fragment>
    )
}

export { NavApp }