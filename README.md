# A/B Testing Platform for Blog Posts

Hello there! It's Elif here. In this document, I'd like to walk you through my approach and the technical decisions made while tackling the challenge of implementing an A/B testing platform for blog posts.

## Setup Instructions

To get this project up and running on your local machine, follow these steps:

#### Clone the repository:
`
git clone https://github.com/eliftabak/blog-ab-testing.git
`

`
cd blog-ab-testing
`

#### Install dependencies:

`
npm install
`

#### Start the development server:

`
npm start
`

Note: This project was bootstrapped with Create React App. For more information on how to perform common tasks, you can find the [Create React App documentation here](https://create-react-app.dev/docs/getting-started/).

## My Approach

### 1. Designing for Scalability and Flexibility

Understanding that the content team might experiment with various elements, from headlines to images, I designed the system with scalability in mind. The solution had to accommodate an undefined number of content variations and types, ensuring flexibility for future experiments.

### 2. Empowering Content Editors

I built a user-friendly interface that abstracts away the complexities of the A/B testing logic. Editors can define test parameters, including variations in text, images, and cta buttons, directly through this interface. I used React for the UI to take advantage of its component based structure, making the interface intuitive for non-technical users.

### 3. State Management with Redux

Choosing Redux for state management was a pivotal technical decision. Redux provided a centralized store for managing the state of A/B tests, user assignments to variations, and tracking interactions. This choice ensured that the application state remained consistent across user sessions and interactions.

### 4. Persistent User Variation Assignment

A critical aspect of A/B testing is ensuring that once a user is assigned a variation, they continue to see the same variation throughout their session. Initially, I leveraged localStorage for persistence; however, to streamline state management and adhere to Redux patterns, I transitioned to using Redux entirely, acknowledging the challenge of state persistence across sessions.

### 5. Analytics and Event Tracking

For tracking user interactions, I implemented a service that logs page views and clicks. Each logged event includes the user's unique identifier, the assigned variation, and the action taken. This meticulous tracking allows for calculating the CTR for each variation. This setup helps in accurately calculating the CTR for each variation. To ensure reliability, the system counts each user's interaction once per variation.

### 6. Using TypeScript for Improved Code Quality

Incorporating TypeScript was another crucial decision. It significantly enhanced code reliability and maintainability by introducing type safety

### 7. Styling with Tailwind CSS

For the project's styling, Tailwind CSS was chosen for its utility-first approach, which allowed for rapid UI development.


### Further Enhancements

- Backend Integration for Data Handling: Advancing the platform would require setting up a backend integration to centralize and manage A/B testing data more efficiently. This move would improve data analysis capabilities and user management, setting the stage for more dynamic and real-time content strategy adjustments.

- Analytics Enhancement: Integrating the service I created with Statstig or Google Analytics would be another upgrade to the currrent version of the project.
