import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';

function App() {
  return(
    <div>
    <NavBar/>
    <AboutMe/>
    </div>
)}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <HomePage/>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// ReactDOM.render(HomePage, document.getElementById('root'))

export default App;
