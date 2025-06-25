'use client'
import { useState, useRef, useEffect } from 'react'
import Heading from './sub/Heading'
import Project from './sub/Project'
import { projectsData, projectsButton } from '@/assets'
import { animate, motion } from 'framer-motion'

const Projects = () => {
  const [tech, setTech] = useState('All')
  const [index, setIndex] = useState(0)
  const prevIndex = useRef(0)
  const buttonsRef = useRef([])

  const handleClick = () => {
    animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 })
    animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 })
  }

  useEffect(() => {
    handleClick()
    prevIndex.current = index
  }, [index])
  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text={'Projects'} />
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectsButton.map((text, i) => (
          <motion.button
            key={i}
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            ref={(el) => buttonsRef.current.push(el)}
            onClick={() => {
              setTech(text)
              setIndex(i)
            }}
            className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
          >
            {text}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData
          .filter((project) => {
            return project.tech.some((item) => (tech === 'All' ? true : item === tech))
          })
          .map((data, i) => (
            <motion.div key={`id-${i}`} layout>
              <Project data={data} index={i} />
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default Projects
