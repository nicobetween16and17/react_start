import React, { useState } from 'react';
import { PropTypes } from 'prop-types';


const Calcul=()=> {

    const [operand,setOperand] = useState(undefined);
    const [operateur, setOperateur] = useState(undefined);
    const [operation, setOperation] = useState("+")
    const [resultat, setResultat] = useState(undefined)
    const handleCalcul= e=>{
        e.preventDefault();
        console.log("Operand: ",operand)
        console.log("Operation: ",operation)
        console.log("Operateur: ",operateur)
        switch(operation){
            case "+": setResultat(parseInt(operand) + parseInt(operateur))
            break;
            case "-": setResultat(parseInt(operand) - parseInt(operateur))
            break;
            case "x": setResultat(parseInt(operand) * parseInt(operateur))
            break;
            case "/": operateur === 0 ? alert("Operation imposible"):setResultat(parseInt(operand) / parseInt(operateur))
            break;
            default: alert("Champs non remplis")
        }
    console.log("Resultat: ",resultat)
    }
    

  return (
    <>
    
    <form onSubmit={handleCalcul}>
        
        <input type="number" value = {operand} onChange={e=>setOperand(e.target.value)}></input>
        <select onChange={e=>setOperation(e.target.value)}>
            <option value = "+">[+]</option>
            <option value = "-">[-]</option>
            <option value = "x">[x]</option>
            <option value = "/">[/]</option>
        </select>
        <input type="number" value ={operateur} required = "required" onChange={e=>setOperateur(e.target.value)}></input>
        <input type="submit" value = 'Calculer' onClick= {handleCalcul}/>
        <p>{resultat}</p>
    </form>
      
    </>
  );


}
Calcul.propTypes={
    operand:PropTypes.number,
    operateur: PropTypes.number,
    operation: PropTypes.string,
    resultat: PropTypes.number
}
export default Calcul;