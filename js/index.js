const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]); 

const nav = document.querySelector('nav')

const navItemOne = nav.firstElementChild;
navItemOne.textContent = siteContent["nav"]["nav-item-1"];
const navItemTwo = navItemOne.nextElementSibling;
navItemTwo.textContent = siteContent['nav']['nav-item-2']; 
const navItemThree = navItemTwo.nextElementSibling;
navItemThree.textContent = siteContent['nav']['nav-item-3']; 
const navItemFour = navItemThree.nextElementSibling;
navItemFour.textContent = siteContent['nav']['nav-item-4'];
const navItemFive = navItemFour.nextElementSibling;
navItemFive.textContent = siteContent['nav']['nav-item-5'];
const navItemSix = navItemFive.nextElementSibling;
navItemSix.textContent = siteContent['nav']['nav-item-6'];

const cta = document.querySelector('.cta'); 
const ctaText = document.querySelector('.cta-text');
const h1 = ctaText.firstElementChild;
h1.textContent = siteContent['cta']['h1']; 
const button = h1.nextElementSibling;
button.textContent = siteContent['cta']['button']; 
const ctaImg = document.getElementById('cta-img'); 
ctaImg.src = siteContent['cta']['img-src'];
const mainContent = document.querySelector('.main-content'); 
const topContent = document.querySelector('.top-content'); 
const textContent = document.querySelectorAll('.text-content'); 
textContent.forEach(element => element.firstElementChild.textContent = siteContent['main-content']['features-h4']); 
textContent.forEach(element => element.lastElementChild.textContent = siteContent['main-content']['features-content']);
const middleImg = document.querySelector('#middle-img'); 
middleImg.src = siteContent['main-content']['middle-img-src']; 
const contact = document.querySelector('.contact'); 
const contactH4 = contact.firstElementChild;
contactH4.textContent = siteContent['contact']['contact-h4']; 
const firstP = contactH4.nextElementSibling;
firstP.textContent = siteContent['contact']['address']; 
const secondP = firstP.nextElementSibling;
secondP.textContent = siteContent['contact']['phone']; 
const thirdP = secondP.nextElementSibling;
thirdP.textContent = siteContent['contact']['email']; 
const footer = document.querySelector('footer'); 
footer.textContent = siteContent['footer']['copyright']; 










