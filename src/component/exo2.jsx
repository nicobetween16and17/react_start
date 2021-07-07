import React from 'react';
import PropTypes from 'prop-types';
function grade(number){
    switch(true){
        case number>=95:return 'S';
        case number>=80:return 'A';
        case number>=60:return 'B';
        case number>=50:return 'C';
        case number>=40:return 'D';
        case number<40:return 'F';
        default:return'Null';
    }
}
const Students =function(props) {
    const listJSX=props.list.map(
        p => <li style={p.resultat<50?{color:"red"}:{color:"green"}}key ={p.id}>{p.name}, élève de {p.option} au eu une note de {p.resultat} = {grade(p.resultat)} </li>
    );

  return (
    <>
    <h2>Classe 1-A</h2>
      <ul>
        {listJSX}
      </ul>
    </>
  );
}
Students.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        option:PropTypes.string,
        sexe:PropTypes.string,
        resultat:PropTypes.number
    }))
  
};
export default Students;