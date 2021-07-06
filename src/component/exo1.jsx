import React from 'react';

const Welcome =function(age, nom) {
    if(age == null){
        age = 18
    }
    if(nom== null){
        nom = "Roger"
    }

  return (
    <div>
      <h1>Bienvenu {nom }</h1>
      <p>Vous avez {age} ans</p>
    </div>
  );
}