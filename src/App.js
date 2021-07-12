
import Tache from './component/tache.jsx'
function App() {
  /*const student=[
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
    }];*/
  return (
    <div style={{padding: "40px"}}className="App">
     <h1>Taches</h1>
     <Tache></Tache>
    </div>
  );
}

export default App;
