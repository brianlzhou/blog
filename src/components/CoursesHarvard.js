import { FaGraduationCap, FaBlackTie } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlineDatabase } from 'react-icons/hi'
import { FaBaby } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiDoorClosedLine } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'

export default function CoursesHarvard() {
  return (
    <div>
      <ol className="relative mt-6 ml-6 border-l border-zinc-400 dark:border-gray-800 ">
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-white dark:bg-red-900 dark:ring-gray-900">
            <HiOutlineDatabase />
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Spring 2024 (planned)
          </h2>
          <time className="pb-12 text-lg font-normal italic leading-none text-gray-400 dark:text-gray-500">
            ...or Year of the Data Scientist?
          </time>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Computation 209b (G) - Advanced Topics in Data Science.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Stat 111 - Introduction to Statistical Inference.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            CS 1240 - Data Structures and Algorithms.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Math 22a - Vector Calculus and Linear Algebra I.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Gov 1430 - Tech Science to Save the World.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Expos 20 - TBD.
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-white dark:bg-red-900 dark:ring-gray-900">
            <HiOutlineDatabase />
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Fall 2024</h2>
          <time className="pb-12 text-lg font-normal italic leading-none text-gray-400 dark:text-gray-500">
            Semester of the Data Scientist...
          </time>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Computation 209a (G) - Introduction to Data Science.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Stat 110 - Introduction to Probability.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Math 22a - Vector Calculus and Linear Algebra I.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            GenEd 1200 - Justice: Ethical Reasoning in Polarized Times.
          </p>
        </li>
      </ol>
    </div>
  )
}
