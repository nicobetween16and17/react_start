import React from 'react';
import PropTypes from 'prop-types';

const Welcome =function(props) {
    const{nom,age}=props;

  return (
    <div>
      <h1>Bienvenu {nom}</h1>
      <p>Vous avez {age} ans</p>
    </div>
  );
}
Welcome.defaultProps = {
    nom: "Roger",
    age: 18
};
Welcome.propTypes = {
    nom:PropTypes.string,
    age:PropTypes.number
};
export default Welcome;