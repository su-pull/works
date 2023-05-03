import getAllPosts from 'lib/getAllPosts'
import styles from './styles.module.scss'
import Link from 'next/link'
import { Metadata } from 'next'
import generateSEOData from 'lib/generateSEOData'

export const metadata: Metadata = generateSEOData({
  title: 'Projects',
  subtitle: 'projects',
  date: undefined,
})

async function getPosts() {
  const posts = await getAllPosts()
  return posts
}

async function Page() {
  const posts = await getPosts()
  return (
    <ul className={styles.list_count}>
      {posts?.map(({ slug, title, subtitle }) => (
        <li key={slug} className={styles.list_style}>
          <Link href={`/${slug}`} className={styles.link_card}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Page
