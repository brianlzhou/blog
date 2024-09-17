import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Coauthor from '@/components/Coauthor'
import siteMetadata from '@/data/siteMetadata'
import { getAllCoauthors } from '@/lib/coauthors'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const coauthors = await getAllCoauthors('research')

  return { props: { coauthors } }
}

export default function Coauthors({ coauthors }) {
  const sortedCoauthors = Object.keys(coauthors).sort((a, b) => coauthors[b] - coauthors[a])
  return (
    <>
      <PageSEO title={`Coauthors - ${siteMetadata.author}`} description="Prior collaborators" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Coauthors
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(coauthors).length === 0 && 'No coauthors found.'}
          {sortedCoauthors.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Coauthor text={t} />
                <Link
                  href={`/coauthors/${kebabCase(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                >
                  {` (${coauthors[t]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
