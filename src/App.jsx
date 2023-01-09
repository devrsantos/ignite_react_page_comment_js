import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Renan Augusto dos Santos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nam adipisci nemo quidem dolor. Voluptatem corporis at unde consequuntur impedit nostrum magnam atque quas deleniti quisquam voluptates quos, libero officiis."
          />
        </main>
      </div>
    </div>
  )
}

export default App

