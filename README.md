# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpeg)


### Links

- Solution URL: [Add solution URL here](https://github.com/dimitrisdr/FAQ-accordion-main.git)
- Live Site URL: [Add live site URL here](https://dimitrisdr.github.io/FAQ-accordion-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

```css
.accordion-item {
    display: grid;
    grid-template-rows: 0fr;
    transition: 0.2s ease-in-out; 
    padding-bottom: 0.5rem;
}

.accordion-item[aria-hidden='false'] {
    grid-template-rows: 1fr; 
} 
```



## Author
- Frontend Mentor - [@dimitrisdr](https://www.frontendmentor.io/profile/dimitrisdr)


