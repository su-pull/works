import getPostData from 'lib/getPostData'
import Params from 'types/Params'
import generateSEOData from 'lib/generateSEOData'
import { Metadata } from 'next'

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

export default Page
