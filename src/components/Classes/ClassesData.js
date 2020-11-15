import React from 'react';
import './ClassesData.scss';
const ClassesData = (props) => {

    const gymInfo = props.info;

    return (
       

        <div className="col-md-4 mt-5 mb-5">
           
                <img className="classesImage" src={gymInfo.img} style={{ width: "300px", height: "285px" }} />

                <button className='buttonClasses'>{gymInfo.name} <span style={{marginLeft:'5%'}}>🡺</span></button>

            
        </div>
       
    );
};

export default ClassesData;