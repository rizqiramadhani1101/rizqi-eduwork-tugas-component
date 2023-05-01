import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

class Komponen extends React.Component {
    render () {
        return (
         <div>
            <ClassComponent  nama="RIzqi Ramadhanianto"/>
            <FunctionalComponent nama="RIzqi Ramadhani" />
             
         </div>
        )
    }
}

export default Komponen;