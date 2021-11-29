import React, { useContext } from "react";
import { userContext, ageContext } from "./UserContext";

function CompD() {
  const user = useContext(userContext);
  const age = useContext(ageContext);

  return (
    <div>
      {/* <userContext.Consumer>
        {(user) => {
          return (
            <ageContext.Consumer>
              {(age) => {
                return <h3>User is {user} Age is {age}</h3>;
              }}
            </ageContext.Consumer>
          );
        }}
      </userContext.Consumer> */}
      <h3>
        {user} --- {age}
      </h3>
    </div>
  );
}

export default CompD;
