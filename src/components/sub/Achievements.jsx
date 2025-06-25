import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Achievements = ({ title, amount, children }) => {
  const number = useMotionValue(0)
  const hasCounted = useRef(false)

  const count = (target) => {
    let i = 0
    const updateCount = () => {
      if (i <= target) {
        number.set(i++)
        requestAnimationFrame(updateCount)
      }
    }
    updateCount()
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted.current) {
          hasCounted.current = true
          count(amount)
        }
      },
      { threshold: 0.5 }
    )

    const el = document.getElementById(`achievement-${title}`)
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [amount, title])

  return (
    <div
      id={`achievement-${title}`}
      className="flex flex-col items-center text-center gap-y-2"
    >
      <motion.span className="text-4xl lg:text-3xl font-light text-yellow-500">
        {number}
      </motion.span>
      <div className="flex items-center gap-x-2">
        <span className="text-2xl lg:text-xl text-gray-300">{children}</span>
        <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
          {title}
        </span>
      </div>
    </div>
  )
}

export default Achievements
