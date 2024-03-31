  import styles from "./App.module.css";
  import {Navbar} from "./components/Navbar/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
       <Navbar/>
    </div>
    
  )
}

export default App;
