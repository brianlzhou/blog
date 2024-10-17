import { FaGraduationCap, FaBlackTie, FaSchool } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlineDatabase } from 'react-icons/hi'
import { FaBaby } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiDoorClosedLine } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'

export default function CoursesTJ() {
  return (
    <div>
      <ol className="relative mt-6 ml-6 border-l border-zinc-400 dark:border-gray-800 ">
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2023-2024</h2>
          <time className="pb-12 text-lg font-normal italic leading-none text-gray-400 dark:text-gray-500">
            Year of sidequests
          </time>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            [Teaching Fellow] Math 3190T3 (AV) - Research Statistics 3.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            [Senior Research Lab] Optics and Quantum Research Laboratory (AV).
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            CS 3199T6 (AV) - Machine Learning 1.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            CS 3199T7 (AV) - Machine Learning 2.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            CS 319916 (AV) - Computer Vision 1.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            HUM 244561 (AV) - Global Studies.
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <AiOutlineCode />
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2022-2023</h2>
          <time className="pb-12 text-lg font-normal italic leading-none text-gray-400 dark:text-gray-500">
            Déluge de CS
          </time>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Math 319862 (AV) - Math Techniques.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Math 3190T3 (AV) - Research Statistics 3.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Physics 4520T9 (AV) - Electrodynamics & Quantum Mechanics.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            CS 319966 (AV) - Artificial Intelligence 1.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            CS 319967 (AV) - Artificial Intelligence 2.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            CS 3199J1 (AV) - Web Application Development.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            CS 3199J2 (AV) - Mobile Application Development.
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <FaSchool />
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2021-2022</h2>
          <time className="pb-12 text-lg font-normal italic leading-none text-gray-400 dark:text-gray-500">
            Return to in-person school
          </time>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Math 3199TA (AV) - Probability Theory.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Math 3199TB (AV) - Concrete Math.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            CS 318561 (AV) - Data Structures.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            HUM 2420T1 - Philosophy, Law, and Society.
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <RiDoorClosedLine />
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2020-2021</h2>
          <time className="pb-12 text-lg font-normal italic leading-none text-gray-400 dark:text-gray-500">
            COVID's annus horribilis
          </time>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Math 319800 (AV) - Linear Algebra.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Math 317860 (AV) - Multivariable Calculus.
          </p>
          <p className="text-normal font-normal text-gray-500 dark:text-gray-400">
            Physics 457004 - AP Physics C Mechanics, Electricity, and Magnetism.
          </p>
        </li>
      </ol>
    </div>
  )
}
