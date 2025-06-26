# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Next.js, Tailwind CSS, and Framer Motion. The site showcases your work, skills, and provides a contact form that sends messages directly to your email and sends an auto-reply to users using EmailJS.

## Features

- Responsive design for all devices
- Animated hero and sections with Framer Motion
- Modern UI with Tailwind CSS
- Contact form with email sending and auto-reply (EmailJS)
- Easy to customize content and styles

## Technologies Used

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal_portfolio.git
   cd personal_portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Contact Form (EmailJS)

The contact form allows visitors to send you a message. When a user submits the form:

- The message is sent to your email using EmailJS.
- An automatic reply is sent to the user, confirming receipt.
- A beautiful success message is shown and the form is cleared.

### How to Configure EmailJS

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Connect your email service (e.g., Gmail).
3. Create two email templates:
   - One for sending the form info to yourself.
   - One for sending an auto-reply to the user.
4. Update the `Contact.jsx` file with your EmailJS Service ID, Template IDs, and Public Key.

## Customization

- Update your personal information, images, and content in the `src/data` and `src/components` folders.
- Adjust styles using Tailwind CSS classes.

## License

This project is open source and available under the [MIT License](LICENSE).
