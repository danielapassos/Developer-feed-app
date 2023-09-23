import { Header } from './components/Header';
import { Post } from './Post'

import './global.css';

export default function App() {
  return (
    <div>
      <Header />

      <Post
        author="Daniela"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
      />
      <Post
        author="Douglas"
        content="Lorem ipsum"
      />
    </div>
  )
}