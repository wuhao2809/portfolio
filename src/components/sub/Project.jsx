'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Project = ({ data, index }) => {
  const [show, setShow] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      onClick={() => setShow((show) => !show)}
      className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer"
    >
      <Image
        src={data.url}
        alt="Project Image"
        width={400}
        height={400}
        className="rounded-lg opacity-70"
      />
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: show ? 1 : 0 }}
  className="absolute top-0 w-full h-full flex flex-col justify-between bg-white/95 p-6 rounded-lg dark:bg-zinc-700/95 transition-colors"
>
  <div className="flex flex-col items-center gap-y-2">
    <h2 className="text-lg font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
      {data.name}
    </h2>
    <p className="text-justify text-gray-500 first-letter:pl-2 dark:text-gray-100 transition-colors">
      {data.desc}
    </p>
  </div>

  <div className="flex justify-center mt-4">
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition-colors"
    >
      View Project
    </a>
  </div>
</motion.div>

    </motion.div>
  )
}

export default Project
