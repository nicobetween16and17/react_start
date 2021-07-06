import React from 'react';

const Welcome =function(props) {
    if(props.age == null){
        props.age = 18
    }
    if(props.nom== null){
        props.nom = "Roger"
    }

  return (
    <div>
      <h1>Bienvenu {props.nom }</h1>
      <p>Vous avez {props.age} ans</p>
    </div>
  );
}
export default Welcome;