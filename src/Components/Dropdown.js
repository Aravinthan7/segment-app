import React,{useImperativeHandle,forwardRef,useRef} from "react";

const Dropdown=forwardRef((props,ref)=>{

    const refCurrentElement=useRef();
    useImperativeHandle(ref,()=> refCurrentElement.current)

    let lodirectdata=props.custom.directdata ===undefined || props.custom.directdata === null ?[]:props.custom.directdata
    return(
        <div>
            <label>{props.custom.caption ===undefined || props.custom.caption ===null ?'':props.custom.caption}</label>
            <select ref={refCurrentElement} name={props.custom.name ===undefined || props.custom.name ===null ?'':props.custom.name} id={props.custom.id ===undefined || props.custom.id ===null ?'':props.custom.id}>
            {
                lodirectdata.length>0?
            lodirectdata.map((i)=>
                <option value={i.valuefld ===undefined || i.valuefld===null ?'':i.valuefld}>{i.labelfld ===undefined || i.labelfld ===null ? '':i.labelfld}</option>
            ):<></> }
            </select>
        </div>
    )
});
export default Dropdown;