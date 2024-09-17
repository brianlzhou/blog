import { CoauthorSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllCoauthors } from '@/lib/coauthors'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getStaticPaths() {
  const coauthors = await getAllCoauthors('research')

  return {
    paths: Object.keys(coauthors).map((coauthor) => ({
      params: {
        coauthor,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('research')
  const filteredPosts = allPosts.filter(
    (post) =>
      post.draft !== true && post.coauthors.map((c) => kebabCase(c)).includes(params.coauthor)
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `coauthors/${params.coauthor}/feed.xml`)
    const rssPath = path.join(root, 'public', 'coauthors', params.coauthor)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, coauthor: params.coauthor } }
}

export default function Coauthor({ posts, coauthor }) {
  // Capitalize first letter and convert space to dash
  const title = coauthor[0].toUpperCase() + coauthor.split(' ').join('-').slice(1)
  return (
    <>
      <CoauthorSEO
        title={`${coauthor} - ${siteMetadata.author}`}
        description={`${coauthor} coauthors - ${siteMetadata.author}`}
      />
      <ListLayout posts={posts} title={title} />
    </>
  )
}
