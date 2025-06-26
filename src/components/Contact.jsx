'use client'
import Heading from './sub/Heading'
import Image from 'next/image'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'

const Contact = () => {

  const form = useRef()
  const [successMsg, setSuccessMsg] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    // send to you
    emailjs.sendForm(
      'service_5rd1mkm',
      'template_j1lq378',
      form.current,
      '9oKCv1xT1cJ5V9P8C'
    ).then(
      (result) => {
        // send auto-reply to user
        emailjs.sendForm(
          'service_5rd1mkm',
          'template_rvuoycs',
          form.current,
          '9oKCv1xT1cJ5V9P8C'
        ).then(
          (result) => {
            setSuccessMsg('Thank you for contacting me! An email has been sent to you.')
            form.current.reset()
            setTimeout(() => setSuccessMsg(''), 5000)
          },
          (error) => {
            setSuccessMsg('Your message was sent, but the auto-reply failed.')
            form.current.reset()
            setTimeout(() => setSuccessMsg(''), 5000)
          }
        )
      },
      (error) => {
        setSuccessMsg('Failed to send your message. Please try again.')
        setTimeout(() => setSuccessMsg(''), 5000)
      }
    )
  }

  return (
    <div id="contact" className="h-screen lg:h-auto py-1 xs:pb-10">
      <Heading text={'Get in touch'} />
      {successMsg && (
        <div className="mb-4 px-4 py-3 rounded bg-green-100 text-green-800 border border-green-300 shadow transition-all duration-300 text-center font-medium">
          {successMsg}
        </div>
      )}
      <div className="w-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-10">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={'/contact.gif'}
            alt="Contact Image"
            width={400}
            height={400}
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-1"
        >
          <div className="w-full flex lg:flex-col gap-x-1 lg:gap-y-1">
            <input
              name='from_name'
              type="text"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Name"
            />
            <input
              name='from_email'
              type="email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Email"
            />
          </div>
          <input
            name='subject'
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
          />
          <textarea
            name='message'
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write Me..."
          ></textarea>
          <input
            type="submit"
            className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
            value="Send Message"
          />
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
