import Link from '@/components/Link'

const Experience = ({ title, company, location, range, url, text1, text2, text3 }) => {
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">
          <b>{title}</b>
        </span>{' '}
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primary-color-500">
          <b>
            <Link href={url} className="company">
              {company}
            </Link>
          </b>
        </span>
        <span></span>
      </div>
      <div>
        <div className="p-1 font-mono text-gray-400 dark:text-gray-600">
          <b>{range}</b>
        </div>
        <div className="p-2">
          <div className="flex flex-row ">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text1}</div>
          </div>
          <div className="flex flex-row">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text2}</div>
          </div>
          <div className="items-top flex flex-row">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text3}</div>
          </div>
        </div>
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200  dark:text-gray-600">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default Experience
