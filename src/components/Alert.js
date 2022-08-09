import React from "react";

 function Alert(props){
     if(props.alert==null)  //If  props.alert is null then we must not give any alert message , hence we will return directly
     return;
    return(
        <>
      
      <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</>
    )
}
export default Alert;