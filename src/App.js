import Welcome from "./component/exo1.jsx";
import {nanoid} from 'nanoid';
import Students from './component/exo2.jsx';
import Compteur from './component/compteur.jsx'
function App() {
  const student=[
    {
      id:nanoid(),
      name:'Jean',
      option:'Math',
      sexe:'Queer',
      resultat:100
    },
    {
      id:nanoid(),
      name:'Marc',
      option:'Sciences',
      sexe:'Homme',
      resultat:50
    },
    {
      id:nanoid(),
      name:'Marie',
      option:'Latin',
      sexe:'Femme',
      resultat:75
    },
    {
      id:nanoid(),
      name:'Pierre',
      option:'STMG',
      sexe:'Helicoptère',
      resultat:10
    },
    {
      id:nanoid(),
      name:'Gina',
      option:'Allemand Lv-2',
      sexe:'Assexuée',
      resultat:40
    }];
  return (
    <div style={{padding: "40px"}}className="App">
     <Welcome nom = 'Bono' age = '20'/>
     <Welcome></Welcome>
     <Students list={student}></Students>
     <Compteur></Compteur>
    </div>
  );
}

export default App;
