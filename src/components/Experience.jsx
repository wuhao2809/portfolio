'use client'
import Heading from './sub/Heading'
import Image from 'next/image'
import { arrowLeftIcon, experienceData } from '@/assets'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const date = new Date().getFullYear()

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'end end'],
  })

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 })
  return (
    <div id="experience" className="relative py-20">
      <Heading text={'Experience & Education'} />
      <Image
        src={'/education.png'}
        alt={'Education & Experience Image'}
        width={400}
        height={400}
        className="absolute -top-4 right-0 opacity-70 lg:hidden"
      />
      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
      >
        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative -left-[300p ${
              i % 2 === 0
                ? '-left-[300px] xl:-left-[240px] lg:-left-0'
                : 'left-[300px] xl:left-[240px] lg:left-0'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
              className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm dark:bg-zinc-700 transition-colors z-20"
            >
              <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-white">
                {data.title}
              </h1>
              {/* Eduction part */}
              {data.education && (
                <p className="text-gray-800 dark:text-gray-100">
                <span className="block font-light">Education:</span>
                <span className="block pl-2 font-extralight">{data.education}</span>
                </p>
              )}
              {/* Experience part */}
              <div className="text-gray-800 dark:text-gray-200 transition-colors">
                <span className="font-light">Experience:</span>
                <ul className="pl-2">
                  {data.experience.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 lg:hidden ${
                  i % 2 === 0 ? 'left-full rotate-180' : 'right-full'
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div
              className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center justify-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                i % 2 === 0
                  ? 'left-full -translate-x-1/2 lg:left-1/2'
                  : 'right-full translate-x-1/2 lg:right-1/2'
              }`}
            >
                {String(data.year).includes('-') ? (
    <>
      <div>{String(data.year).split('-')[0].trim()}</div>
      <div>-</div>
      <div>{String(data.year).split('-')[1].trim()}</div>
    </>
  ) : (
    <div>{data.year}</div>
  )}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
        ></motion.div>
      </div>
    </div>
  )
}

export default Experience
