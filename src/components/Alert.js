import React from 'react'

// const capitalize = (word) => {
//      const lower = word.toLowerCase();
//      return lower.charAt(0).toUpperCase() + lower.slice(1);
// }
export default function Alert(props) {
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {props.alert.type}: {props.alert.msg}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"> </button> */}
  </div>
  )
}
 