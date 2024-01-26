import React, { useRef, useState } from "react";
import Modal from "../Components/Modal";
import InputText from "../Components/InputText";
import Text from "../Components/Text";
import '../CSS/Segement.css';
import DynamicControl from "../Components/DependComponents/DynamicControl";

const Segement = () => {
    //States
  const [open, setOpen] = useState(false);
  const [dynamicctrl,setDynamicctrl]=useState([{id:'',name:'',caption:'',directdata:[{labelfld:'Add schema to segment',valuefld:''},{labelfld:'First Name',valuefld:'first_name'},{labelfld:'Last Name',valuefld:'last_name'},{labelfld:'Gender',valuefld:'gender'},{labelfld:'Age',valuefld:'age'},{labelfld:'Account Name',valuefld:'account_name'},{labelfld:'City',valuefld:'city'},{labelfld:'State',valuefld:'state'}],ctrl:'drp',class:'col p-2'}]);
    //----
      
    //Refs
    const shcemabtnref=useRef(null);
    const dynamiccontrolref=useRef();
    const segmentinputref=useRef('');

    //---
    // local varaibles
    //let lodynamic=[{id:'',name:'',caption:'',directdata:[{labelfld:'Add schema to segment',valuefld:''},{labelfld:'First Name',valuefld:'first_name'},{labelfld:'Last Name',valuefld:'last_name'},{labelfld:'Gender',valuefld:'gender'},{labelfld:'Age',valuefld:'age'},{labelfld:'Account Name',valuefld:'account_name'},{labelfld:'City',valuefld:'city'},{labelfld:'State',valuefld:'state'}],ctrl:'drp'}]
    //----------

    //Functions
    const Modelopen=()=>{
        setOpen(true)
    }

    const AddSchema=()=>{
         let lodynamiclen=dynamicctrl.length;
      if(lodynamiclen<8)
      {
      let lodynamiccontrol=[...dynamicctrl];
      setDynamicctrl('');
      lodynamiccontrol.push({id:'',name:'',caption:'',directdata:[{labelfld:'Add schema to segment',valuefld:''},{labelfld:'First Name',valuefld:'first_name'},{labelfld:'Last Name',valuefld:'last_name'},{labelfld:'Gender',valuefld:'gender'},{labelfld:'Age',valuefld:'age'},{labelfld:'Account Name',valuefld:'account_name'},{labelfld:'City',valuefld:'city'},{labelfld:'State',valuefld:'state'}],ctrl:'drp',class:'col p-2'});
      //dynamiccontrolref.current.addnewControl({id:'',name:'',caption:'',directdata:[{labelfld:'Add schema to segment',valuefld:''},{labelfld:'First Name',valuefld:'first_name'},{labelfld:'Last Name',valuefld:'last_name'},{labelfld:'Gender',valuefld:'gender'},{labelfld:'Age',valuefld:'age'},{labelfld:'Account Name',valuefld:'account_name'},{labelfld:'City',valuefld:'city'},{labelfld:'State',valuefld:'state'}],ctrl:'drp'})
      setDynamicctrl(lodynamiccontrol);
      }
      else
      {
        shcemabtnref.current.disabled=true;
      }
      
    }

    const segmentSave=()=>{
        let loobject={"segment_name":"","schema":[]}
        console.log(dynamiccontrolref.current);
        let segmentname=segmentinputref.current.value;
        if(segmentname!==undefined && segmentname!==null && segmentname!=='')
        {
            loobject.segment_name=segmentname;
            let lodynamicctrls=dynamiccontrolref.current;
            for(let i=0;lodynamicctrls.length<i;i++)
            {
                
            }
           
        }
        else
        {
            alert('Please fill the segment name ');
        }
    }
    //-----


 

    //----



  return (
    <div>
        <div className="text-center pt-4">
        <button
        onClick={() => {
            Modelopen() 
        }}
      >
        Segment
      </button>
        </div>
      
      <div>
        <Modal isOpen={open}>
            <div>
               
                <div className="text-end">
                <button onClick={()=>{setOpen(false)}}><i className="bi bi-x-circle"></i></button>
                </div>
                <div className="modal-body">
                <div className="row pt-2 small">
                <InputText ref={segmentinputref} custom={{name:'segment_name',id:'',caption:'Enter the Name of the Segment ',placeholder:'Name of the Segment ' ,style:'',required:true}}  />
                </div>
                <br></br>
                <div className="row">
                <Text custom={{caption:'To save your segment, you need to add the schemas to build the query '}} />
                </div>
                <br></br>
                <div className="row"> 
                <div className="col" >
                    <div className="d-grid gap-3 scroll">
                    <DynamicControl ref={dynamiccontrolref} custom={{controls:dynamicctrl}} />
                    </div>
                    
                </div>    
               <span onClick={()=>{AddSchema()}}><button ref={shcemabtnref}  style={{background:'none',border:'none'}}><i className="bi bi-plus add-schema-icon"></i><span className="add-schema-span">Add Schema</span></button></span>
            
                </div>

                <div className="modal-footer">
                <button className="btn btn-success" onClick={()=>{segmentSave()}}>Save the Segment</button> <button className="btn btn-light" onClick={()=>setOpen(false)}>Cancel</button>
                </div>                
                </div>
            </div>
        </Modal>
      </div>
    </div>
  );
};

export default Segement;
