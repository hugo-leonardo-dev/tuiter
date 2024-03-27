import './App.module.css';
import Index from './ui/pages';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles['app-container']}>
      <Index />
    </div>
  );
}

export default App;
