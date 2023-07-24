## Setup and Launch Instructions

1. Clone the repository or download the source code to your local machine.

2. Install all dependencies using npm (Node Package Manager) by running the
   following command:

   npm install

3. After the installation is complete, start the local development server by
   running the following command:

   npm start

4. Once the server is up and running, open your web browser and visit the
   following [URL](http://localhost:1234) to access the website:

5. Explore the website and interact with the various sections:

## List of Technologies

HTML5: The latest version of Hypertext Markup Language, used for structuring the
content of the website.

CSS3: The latest version of Cascading Style Sheets, used for styling and
presenting the website's visual layout.

Vanilla JavaScript: The pure and standard version of JavaScript, used for
implementing interactive features and animations on the website.

SCSS (Sass): A CSS preprocessor that enhances the styling process by providing
variables, nesting, and other useful features, allowing for more maintainable
and organized code.

JSON: A lightweight data interchange format used for dynamic filtering of
projects and other interactive functionalities.

IntersectionObserver API: A modern JavaScript API used for animating elements on
scroll, contributing to the smooth fade-in effect of news items in the
"LatestNews" section.

LocalStorage: A browser-based API used to save form data locally, ensuring user
data persistence even after leaving or refreshing the page.

Swiper.js: A powerful JavaScript library used for creating the testimonial
carousel, enabling smooth transitions and user-friendly navigation between
different testimonials.

Parcel: A web application bundler used for simplifying the development workflow
by handling asset bundling, transpilation, and other build tasks automatically.

## Features

1. Responsive and Cross-Browser Compatibility:

The website is fully responsive and works seamlessly across different devices
and screen sizes. It has been thoroughly tested on popular web browsers like
Google Chrome, Mozilla Firefox, Opera, and Microsoft Edge to ensure a consistent
experience for all users.

2. BEM Methodology:

The website follows the BEM (Block Element Modifier) methodology, a modular
approach to writing clean and maintainable CSS. BEM ensures consistency in code
structure and class naming, making it easier to manage styles and avoid style
conflicts.

3. Smooth Animations:

Animations throughout the website are designed to be gradual and smooth,
providing a visually appealing and enjoyable user experience. From the
navigation menu to the fade-in effects of various elements, the animations
enhance the overall aesthetics of the website.

4. Page Loading Animation:

Before the main content loads, users are greeted with an engaging page loading
animation. This animation features at least five moving elements and runs for 5
seconds, after which the main page content appears.

5. Progress Bar:

The website features a progress bar located below the navigation menu. It
visually indicates the user's progress as they scroll through the page, helping
them keep track of their position.

6. Dynamic Project Filtering:

In the "What We Do" section, projects are filtered dynamically based on user
selections. The projects are fetched from an external resource using JSON and
JavaScript, providing an interactive and customizable experience for users.

6. Testimonials Carousel:

The "Testimonials" section offers a carousel that allows users to switch between
six different testimonials. The carousel is powered by the popular library
"Swiper.js," which enables smooth and continuous transitions, creating an
engaging testimonial display. With Swiper.js, users can effortlessly navigate
through the testimonials using touch or mouse drag gestures on both desktop and
mobile devices. This dynamic carousel functionality enhances the overall user
experience and adds a polished and professional touch to the website.

7. Smooth News Item Appearances:

In the "LatestNews" section, each news item smoothly fades in every time the
user scrolls to the section or navigates through the header. This creates an
elegant and fluid transition for a seamless reading experience.

8. Form Input Validation:

The "Don't forget..." section includes a form with input validation for name and
email fields. Incorrectly filled forms trigger error messages to guide users in
correcting their inputs.

9. LocalStorage Data Saving:

Correctly filled form data in the "Don't forget..." section is saved to
LocalStorage, ensuring that users' information is retained even if they leave or
refresh the page.

10. Customized Greeting Animation:

If a user enters "Sigma" as their name in the form, they are greeted with a
special animation and a discount offer displayed for 5 seconds.

11. Social Media Links and Automatic Copyright Update:

The footer contains links to the website's social media profiles. Additionally,
the copyright year automatically updates to the current year.
