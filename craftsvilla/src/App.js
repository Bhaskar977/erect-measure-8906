import './App.css';
import Navbar from './Components/Navbar';
// import Store from './Pages/Store';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
     {/* <Store/> */}
    </div>
  );
}

export default App;
