import React,{useRef,useImperativeHandle, forwardRef} from "react";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
const DynamicControl= forwardRef((props,ref)=>{

    const refCurrentElement=useRef({});
    let ladynamiccontrolprops=Array.isArray(props.custom.controls)===true?props.custom.controls:[]; 
    useImperativeHandle(ref,()=> refCurrentElement.current)
    
 


return(
    <div className="col col-sm col-md col-lg col-xl">
       {
        ladynamiccontrolprops.map((item,index)=>(
            item.ctrl==="drp"?
            <div className={item.class===undefined || item.class===null?'':item.class}>
                <Dropdown ref ={(e)=>refCurrentElement.current[index]=e} custom={{name:item.name,caption:item.caption,directdata:item.directdata,lablefld:item.lablefld,valuefld:item.valuefld}} />
            </div>
            :
            item.ctrl ==='itxt'?
            <div className={item.class===undefined || item.class===null?'':item.class} >
                <InputText ref ={(e)=>refCurrentElement.current[index]=e} custom={{name:item.name,caption:item.caption,placeholder:item.placeholder}} />
            </div>
             :<></>
        ))
       } 

    </div>
)
});
export default React.memo(DynamicControl);