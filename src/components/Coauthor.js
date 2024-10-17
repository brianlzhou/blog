import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Coauthor = ({ text }) => {
  return (
    <Link href={`/coauthors/${kebabCase(text)}`}>
      <a className="mr-2 text-lg font-medium transition duration-500 ease-in-out hover:bg-primary-500 hover:text-gray-100 dark:hover:text-gray-900">
        {text}
      </a>
    </Link>
  )
}

export default Coauthor
