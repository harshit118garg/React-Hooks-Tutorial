import React from "react";
import ComA from "./ComA";

export const userContext = React.createContext();
export const ageContext = React.createContext();

function UserContext() {
  return (
    <div>
      <userContext.Provider value={"Harshit"}>
        <ageContext.Provider value={21}>
          <ComA />
        </ageContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default UserContext;
