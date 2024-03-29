import React, { forwardRef,useImperativeHandle,useRef } from "react";

const Toast=forwardRef((props,ref)=>{
    const refCurrentElement=useRef();
    useImperativeHandle(ref,()=>refCurrentElement.current);
    

    return(
        <div ref={refCurrentElement} className="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <img src="..." className="rounded me-2" alt="..." />
      <strong className="me-auto"></strong>
      <small>11 mins ago</small>
      <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div className="toast-body">
      {props.custom.children}
    </div>
  </div>
</div>

    )
})
export default Toast;