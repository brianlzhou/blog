import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'
import CoursesHarvard from '@/components/CoursesHarvard'
import CoursesTJ from '@/components/CoursesTJ'
import { motion } from 'framer-motion'

const Courses = () => {
  return (
    <>
      <PageSEO
        title={`Coursework - ${siteMetadata.author}`}
        description="Courses taken over the years"
      />
      <div className="mx-auto max-w-6xl divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Harvard College
          </h1>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.9 }}
            variants={{
              hidden: {
                opacity: 0.5,
                y: 10,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <CoursesHarvard />
          </motion.div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Thomas Jefferson HS for Science/Tech
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            (AV) represents post-AP coursework.
          </p>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.9 }}
            variants={{
              hidden: {
                opacity: 0.5,
                y: 10,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <CoursesTJ />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Courses
