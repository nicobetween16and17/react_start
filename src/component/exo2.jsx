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
        p => <tr>
                
                 <td style={{border:"1px solid black",borderCollapse:"collapse"}}>
                    {p.name} 
                 </td>
                 <td style={{border:"1px solid black",borderCollapse:"collapse"}}>
                     {p.sexe}
                 </td>
                 <td style={{border:"1px solid black",borderCollapse:"collapse"}}>
                    {p.option}
                 </td>
                 <td style={{border:"1px solid black",borderCollapse:"collapse"}}>
                    {p.resultat}  
                 </td>
                 <td style={p.resultat<50?{color:"red",border:"1px solid black",borderCollapse:"collapse"}:{color:"green",border:"1px solid black",borderCollapse:"collapse"}}>
                    {grade(p.resultat)}
                 </td>
            </tr>
    );

  return (
    <>
    <h2>Classe 1-A</h2>
      <table style={{border:"1px solid black",borderCollapse:"collapse"}}>
          <tr style={{border:"1px solid black",borderCollapse:"collapse"}}>
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}>Nom</td>
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}>sexe</td>
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}>option</td>
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}>resultat</td>
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}>Grade</td>
          </tr>
        {listJSX}
      </table>
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