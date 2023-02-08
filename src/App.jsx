import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Noticias from "./components/Noticias";

function App() {
  return (
    <div>
      <NavBar/>
      <Noticias/>  
      <ItemListContainer greeting={"Samsung presenta el nuevo S23"} />
    </div>
  );
}

export default App;