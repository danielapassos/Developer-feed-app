import { Header } from './components/Header';
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/danielapassos.png',
      name: 'Daniela Passos',
      role: 'DevRel @Hashnode'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys! 👋' },
      { type: 'paragraph', content: 'I just uploaded a new project to my portfolio 🚀' },
      { type: 'link', content: 'danizeres-p.vercel.app' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'DevEdu @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys! 👋' },
      { type: 'paragraph', content: 'I just uploaded a new project to my portfolio 🚀' },
      { type: 'link', content: 'danizeres-p.vercel.app' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
