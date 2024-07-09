## E-commerce Website Implementation

This project showcases a meticulously crafted, fully responsive, and statically generated e-commerce website designed according to specifications from Figma. Developed using Next.js and Chakra UI, it represents a pivotal stage 2 frontend task for the HNG Internship's Frontend Track.

## Table of Contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Technologies Used](#technologies-used)
- [Project Features](#project-features)
- [Setup Instructions](#setup-instructions)
  - [Clone the repository](#clone-the-repository)
  - [Install dependencies](#install-dependencies)
  - [Run the development server](#run-the-development-server)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![Example UI Screenshot 1](/images/Screenshot.png)

![Example UI Screenshot 2](/images/Screenshot-10perPage.png)

![Example UI Screenshot 4](/images/Screenshot-with-search.png)

![Example UI Screenshot 3](/images/Screenshot-darkMode.png)

![Example UI Screenshot 5](/images/Screenshot-mobile.png)

![Example UI Screenshot 6](/images/Screenshot-mobile-with-nav.png)

![Example UI Screenshot 7](/images/Screenshot-mobile-with-nav-active.png)

### Links

- Live Site URL: [Online Shopping Cart](https://stephengift-shoppingcart.vercel.app/)
- GitHub URL: [Repository](https://github.com/stephen-gift/bluetech-department-list.git)

## Technologies Used

- **Next.js** - A React framework for building server-rendered and statically generated web applications.
- **Chakra UI** - A flexible and accessible UI component library for React.
- **Axios** - A promise-based HTTP client for making API requests.
- **TypeScript** - A superset of JavaScript that adds static types for better code quality and development experience.
- **React Toastify** - A React component for displaying toast notifications.
- **React Icons** - A library for including popular icons in React applications.
- **React Hook Form** - A library for managing form state and validation in React applications.
- **@chakra-ui/icons** - A set of icons designed specifically for use with Chakra UI.
- **@chakra-ui/react** - The core Chakra UI library for building responsive UIs.
- **framer-motion** - A library for creating animations and transitions in React.
- **react-intersection-observer** - A React implementation of the Intersection Observer API for monitoring element visibility.
- **zustand** - A small, fast, and scalable state management solution for React.

## Project Features

- **Functional UI**: Implements the provided Figma design, ensuring a visually appealing and user-friendly experience.
- **Responsive Design**: Ensures the shop page is fully responsive and adapts well to different screen sizes.
- **Static Generation**: Utilizes Next.js's static generation capabilities to improve performance and SEO.
- **State Management**: Manages the state of the shopping cart and other components using Zustand.
- **Animations**: Implements smooth animations and transitions using Framer Motion.
- **Intersection Observer**: Uses React Intersection Observer to optimize component rendering and visibility detection.

## Setup Instructions

### Clone the repository

```bash
git clone https://github.com/stephen-gift/shopping-cart.git
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

This will start the development server, typically accessible on [http://localhost:3000](http://localhost:3000) by default.

## My Process

During the development of this project, I adhered to a structured approach to ensure clarity and efficiency in implementation. The key steps taken were:

1. **Planning and Design**: I began by thoroughly analyzing the provided Figma design, breaking it down into individual components, and identifying the necessary functionality requirements.

2. **Setting Up the Environment**: The project was initialized using Next.js to leverage its server-side rendering capabilities. I integrated Chakra UI to ensure a consistent and accessible UI component library.

3. **State Management**: State management was implemented using Zustand and the Context API in React, facilitating seamless updates and reactivity for the shopping cart and other components.

4. **Styling and Responsiveness**: Utilizing Chakra UI's responsive design utilities, I ensured the application maintains a visually appealing and functional layout across various screen sizes.

5. **Animations**: Framer Motion was employed to create smooth animations and transitions, enhancing user interaction and engagement throughout the application.

Challenges Faced

- One of the main challenges was handling asynchronous data fetching and ensuring smooth state transitions.
- Ensuring pixel-perfect implementation of the Figma design.
- Managing state and ensuring responsive behavior across different devices.

I addressed these challenges through:

- Careful state management using Zustand and Context API to handle asynchronous data and smooth state transitions.
- Leveraging responsive design utilities provided by Chakra UI to ensure the application adapts well to different screen sizes.
- Ensuring state management passed all TypeScript checks to maintain code quality and robustness.

### Built With

The project was built using the following technologies:

- Next.js
- Chakra UI
- Axios
- TypeScript
- Chakra Icons
- Framer Motion
- React Intersection Observer
- Zustand

### What I Learned

Through this project, I acquired deeper expertise in several critical areas:

- **Static Generation (SSG)**: Implementing SSG with Next.js significantly boosted the application's performance and SEO capabilities, emphasizing the advantages of pre-rendering content for faster page loads and improved search engine visibility.

- **Responsive Design**: Leveraging Chakra UI's responsive design utilities enabled me to craft a user-friendly interface that seamlessly adapts across various devices. This experience underscored the importance of creating adaptable layouts without heavy reliance on custom CSS solutions.

- **State Management with Zustand**: Adopting Zustand for state management provided a robust framework for maintaining global application state. This approach enhanced my proficiency in ensuring data integrity and facilitating efficient state updates across components.

- **Animations with Framer Motion**: Framer Motion empowered me to implement polished animations and transitions, enhancing the application's visual appeal and user interaction. Mastering motion effects underscored the impact of subtle animations in enhancing usability and engaging users effectively.

- **Integration of External Libraries**: Working with Axios for API requests, Chakra Icons for iconography, and React Intersection Observer for optimizing component visibility expanded my technical toolkit. This experience deepened my understanding of integrating and leveraging third-party libraries effectively within a React ecosystem.

- **Cross-team Collaboration**: Collaborating closely with designers and backend developers throughout the project strengthened my interpersonal skills. It taught me the importance of effective communication in translating design concepts into functional frontend implementations that align with backend requirements.

Each facet of this project enriched my professional skill set, equipping me with invaluable insights and practical experience to apply in future projects and professional endeavors.

### Continued Development

Looking forward, I am committed to further refining my skills in the following specialized areas:

- **Advanced TypeScript Usage**: I aim to deepen my expertise in advanced TypeScript concepts, including intricate type definitions and leveraging generics effectively. Strengthening these skills will bolster code quality and maintainability, enhancing overall development efficiency.

- **Optimizing API Calls**: My focus will be on optimizing API interactions through advanced techniques such as pagination and caching. By mastering these strategies, I intend to improve application performance, handle larger datasets more efficiently, and ensure seamless user experiences.

- **Sophisticated UI Animations**: Exploring advanced UI animations and transitions using tools like Framer Motion will be a priority. Enhancing user interaction through polished motion design will elevate the visual appeal and usability of applications, contributing to superior user engagement.

These targeted areas of development represent my ongoing commitment to advancing technical proficiency and delivering impactful solutions in future endeavors.

### Useful resources

Here are some valuable resources that have been instrumental in my professional development:

- [Next.js Documentation](https://nextjs.org/docs/getting-started): Comprehensive documentation for Next.js, a powerful React framework for building server-rendered and statically generated applications.
- [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started): A comprehensive guide for building accessible and responsive UI components.
- [Axios Documentation](https://axios-http.com/docs/intro): Essential documentation for making HTTP requests and managing responses in JavaScript applications.
- [TypeScript Deep Dive](https://typescript-deep-dive.netlify.app/): A detailed reference for mastering advanced TypeScript features and adopting best practices.
- [Framer Motion Documentation](https://www.framer.com/docs/): Comprehensive guide for creating dynamic animations and seamless transitions in React applications.
- [React Intersection Observer Documentation](https://reactjs.org/docs/intersection-observer.html): Official documentation for effectively monitoring and optimizing component visibility in React.
- [Zustand Documentation](https://zustand.surge.sh/): In-depth guide for implementing efficient state management solutions in React applications using Zustand.

## Author

### Developer

- Portfolio - [Stephen Gift Dada](https://stephengift.vercel.app/)
- LinkedIn - [Your LinkedIn Profile](https://www.linkedin.com/in/stephen-gift-8894131b6)
- GitHub - [@stephen-gift](https://github.com/stephen-gift)
- Email - [stephengift43@gmail.com](mailto:stephengift43@gmail.com)

### Designer

- Behance - [Behance](https://www.behance.net/tracyboboye2)
- Email - [tracyilliti@gmail.com](mailto:tracyilliti@gmail.com)
