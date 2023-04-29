import getPostData from 'lib/getPostData'
import Params from 'types/Params'
import generateSEOData from 'lib/generateSEOData'
import { Metadata } from 'next'
import getSlugPath from 'lib/getSlugPath'

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPost(params.slug)
  return generateSEOData({ title: post.title, subtitle: post.subtitle, date: post.date })
}

const getPost = async (slug: string) => {
  const post = await getPostData(slug)
  return post
}

async function Page({ params }: Params) {
  const post = await getPost(params.slug)

  return (
    <>
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />
    </>
  )
}

export async function generateStaticParams() {
  const posts = await getSlugPath()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default Page
