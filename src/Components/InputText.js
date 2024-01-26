import React,{useRef,useImperativeHandle,forwardRef} from "react";

const InputText=forwardRef((props,ref)=>{
const refCurrentElement=useRef();
useImperativeHandle(ref,()=> refCurrentElement.current)
let lscaption=props.custom.caption ===undefined || props.custom.caption ===null ?'':props.custom.caption

return(
    <div>
        <div>
        <label >{lscaption}{props.custom.required===true?<span style={{color:'red'}}>*</span>:<></>} </label>
        </div>        
        <input ref={refCurrentElement} type='text'
         name={props.custom.name ===undefined || props.custom.name ===null ?'':props.custom.name }
        id={props.custom.id ===undefined || props.custom.id ===null ?'':props.custom.id }
        for={props.custom.forname ===undefined || props.custom.forname ===null ?'':props.custom.forname}
        autoComplete={props.custom.autoComplete ===undefined || props.custom.autoComplete ===null ?'':props.custom.autoComplete  }
        required={props.custom.required ===undefined || props.custom.required ===null ? false:props.custom.required}
         disabled={props.custom.disabled ===undefined || props.custom.disabled ===null ?false:props.custom.disabled}
         placeholder={props.custom.placeholder ===undefined || props.custom.placeholder ===null ?false:props.custom.placeholder}
               />
        </div>
)
});
export default InputText;

