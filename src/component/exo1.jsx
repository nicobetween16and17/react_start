import React from 'react';
import PorpTypes from 'prop-types';

const Welcome =function(props) {
    const{nom,age}=props;
    Welcome.defaultProps = {
        nom: "Roger",
        age: 18
    };
  return (
    <div>
      <h1>Bienvenu {nom}</h1>
      <p>Vous avez {age} ans</p>
    </div>
  );
}
export default Welcome;