import React from "react";
import { Link } from "react-router-dom";

const AlumnosItem = ({ data }) => {
    const {alumno}=data;
    console.log(data)
  return (
    <>
    
        <div className="col-3 mb-3">
          <div className="card">
            
            <ul>
                <li>
                    <p>{alumno.apellido}</p>
                </li>
            </ul>
              
            
          </div>
        </div>
      
    </>
  );
};

export default AlumnosItem;
