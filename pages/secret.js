import React from "react"
import setLoginSession from "../lib/auth"

const name = (props) => {
  return (
    <div>
      hola tarado {setLoginSession.email}
    </div>
  )
};

export default name;
