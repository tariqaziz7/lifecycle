import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import HeaderUpdate from './Update/HeaderUpdate';
import HeaderSnapshot from './Update/HeaderSnapshot';
import HeaderDidMount from './Update/HeaderDidMount';
import Container from './Unmount/Container';

function App() {
  return (
    <div className="App">
      {/* Component Did Mount and constructor */}
      {/* <Header /> */}
      {/* Derived from props */}
      {/* <Header favcol="yellow"/>, */}
      {/* <HeaderUpdate favcol="yellow"/> */}
      {/* should component update */}
      {/* <HeaderUpdate/> */}
      {/* <HeaderSnapshot /> */}
      {/* <HeaderDidMount /> */}
      <Container />
    </div>
  );
}

export default App;
