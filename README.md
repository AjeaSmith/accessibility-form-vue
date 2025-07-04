# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- [Solution](https://github.com/AjeaSmith/accessibility-form-vue)
- [Live Site](https://accessibility-form-vue.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library

### What I learned

- How to properly use aria labels to make forms completely accessible
- Learned how to use aria-labels for error handling / read error to screen readers
- Learned to use vue announcer package to announce success message to screen readers
- Learned to use vee-validate/zod to create type safe forms and handle submissions.

### Useful resources

- [HTML Form Accessibility](https://www.youtube.com/watch?v=bRZX9HqxSiE&t=239s) - This YT video helped me understand how to properly use aria-labels for making a form accessibile.
- [VeeValidate](https://vee-validate.logaretm.com/v4/guide/composition-api/handling-forms/) - The docs that helped me setup my form. (typesafe, form submission)

## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->

- Frontend Mentor - [@ajeasmith](https://www.frontendmentor.io/profile/ajeasmith)
- Twitter - [@ajeasmith](https://www.twitter.com/ajeasmith)
