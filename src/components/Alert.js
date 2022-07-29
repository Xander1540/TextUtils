import React from "react";

{/*function Alert(props){
  const capitalize=(word)=>{
    const lower= word.lowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
  }
}*/}

export default function Alert(props) {
  return ( //if props.alert is not null then do this
  <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.type}</strong>: {props.alert.message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
  </div>
  );
}
