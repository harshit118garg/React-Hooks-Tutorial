import React from "react";
/* Css File */
import "./App.css";
/* Use State Hook */
import UseStateClassComp from "./HookComps/useStateClassComp";
import UseState1 from "./HookComps/useState1";
import UseState2 from "./HookComps/UseState2";
import UseState3 from "./HookComps/UseState3";
import UseState4 from "./HookComps/UseState4";
/* Use Effect Hook */
import UseEffect1 from "./HookComps/UseEffect1";
import UseEffect2 from "./HookComps/UseEffect2";
import UseEffect3 from "./HookComps/UseEffect3";
import UseEffect4 from "./HookComps/UseEffect4";
import UseEffect5 from "./HookComps/UseEffect5";
import UseEffect6 from "./HookComps/UseEffect6";
/* Use Context Hook */
import UserContext from "./HookComps/UserContext";
/* Use Reducer Hook */
import UseReducer1 from "./HookComps/UseReducer1";
import UseReducer2 from "./HookComps/UseReducer2";
import UseReducer3 from "./HookComps/UseReducer3";
import UseContextReducer from "./HookComps/UseContextReducer";
import URDataFetch from "./HookComps/URDataFetch";  //data fetching using useState & useReducer
import URDataFetch2 from "./HookComps/URDataFetch2";

function App() {
  return (
    <>
      <div className="App">
          <h2>Use State Using class Component</h2>
          <UseStateClassComp />
        <hr />
          <h2>Use State Using functional Component</h2>
          <UseState1 />
        <br />
        <hr />
          <h2>use State hook with previous state</h2>
          <UseState2 />
        <br />
        <hr />
          <h2>use State hook with object</h2>
          <UseState3 />
        <br />
        <hr />
          <h2>use State hook with array</h2>
          <UseState4 />
        <br />
        <hr />
          <h2>use Effect hook</h2>
          <UseEffect1 />
        <br />
        <hr />
          <h2>Conditional run effects</h2>
          <UseEffect2 />
        <br />
        <hr />
          <h2>Run Effects only once</h2>
          <UseEffect3 />
        <br />
        <hr />
          <h2>USe Effects with clean up</h2>
          <UseEffect4 />
        <br />
        <hr />
          <h2>USe Effects with incorrect dependency</h2>
          <UseEffect5 />
        <br />
        <hr />
          <h2 style={{ color: "red" }}>USe Effects Fetching data</h2>
          <UseEffect6 />
        <br />
        <hr />
          <h2>USe COntext Hook</h2>
          <UserContext />
        <br />
        <hr />
          <h2>Use Reducer Hook (simple state & action)</h2>
          <UseReducer1 />
        <br />
        <hr />
          <h2>Use Reducer Hook (complex state & action)</h2>
          <UseReducer2 />
        <br />
        <hr />
          <h2>Multiple Use Reducer Hook (complex state & action)</h2>
          <UseReducer3 />
        <br />
        <hr />
          <h2>Use Reducer with Use Context</h2>
          <UseContextReducer />
        <br />
        <hr />
          <h2>Fetching Data using Use State & Use Effect Hooks</h2>
          <URDataFetch />
        <br />
        <hr />
          <h2>Fetching Data using Use Reducer Hook</h2>
          <URDataFetch2 />
        <br />
      </div>
    </>
  );
}

export default App; 