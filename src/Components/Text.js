import React,{useImperativeHandle,useRef,forwardRef} from "react";

const Text=forwardRef((props,ref)=>{
    return(
        <div>
            <label>{props.custom.caption===undefined || props.custom.caption===null ? '':props.custom.caption}</label>
        </div>
    )
});
export default Text;