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
    "clicked button": "Outstanding Clicking!", 
    "img-src": "img/header-img.png",
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

const catContent = {
  "cat-cta": {
    "cat-h1": "Kitties have taken over!", 
    "second img": "/img/surprise.jpg"
  },
  "main-content": {
    "cat-h4": "Walk on a keyboard walk on keyboard hit you unexpectedly",
    "cat-featured-content": "Cat ipsum dolor sit amet, i will be pet i will be pet and then i will hiss walk on keyboard. Pose purrfectly to show my beauty wake up human for food at 4am rub my belly hiss loves cheeseburgers so really likes hummus. Meow and walk away.",
    "cat-middle-image": "/img/Cat-Banner-medium23.jpg"
  }
  

}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]); 

const nav = document.querySelector('nav');
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
const firstA = document.createElement('a');
firstA.textContent = 'First Link';
nav.prepend(firstA); 
const lastA = document.createElement('a');
lastA.textContent = 'Last Link'; 
nav.appendChild(lastA); 
const greenLink = document.querySelectorAll('a');
greenLink.forEach(element => element.style.color = 'green'); 
greenLink.forEach(element => element.style.padding = '.5rem'); 
greenLink.forEach(element => element.addEventListener('mouseenter', () => {
  element.style.backgroundColor = 'lightblue'
}));
greenLink.forEach(element => element.addEventListener('mouseleave', () => {
  element.style.backgroundColor = '#fff'
}));


//////CALL TO ACTION SECTION
const cta = document.querySelector('.cta');
const ctaText = document.querySelector('.cta-text');
const h1 = ctaText.firstElementChild;
h1.textContent = siteContent['cta']['h1']; 
const button = h1.nextElementSibling;
button.textContent = siteContent['cta']['button']; 
button.addEventListener('click', () => {
  if (button.textContent === siteContent['cta']['button']) {
  button.textContent = siteContent['cta']['clicked button']; 
  ctaImg.src = catContent['cat-cta']['second img'];
  roundedImg();
  middleImg.src = catContent['main-content']['cat-middle-image']; 
  textContent.forEach(element => element.firstElementChild.textContent = catContent['main-content']['cat-h4']); 
  h1.textContent = catContent['cat-cta']['cat-h1']; 
  textContent.forEach(element => element.lastElementChild.textContent = catContent['main-content']['cat-featured-content']);

  } else {
    button.textContent = siteContent['cta']['button']; 
    h1.textContent = siteContent['cta']['h1']; 
    ctaImg.src = siteContent['cta']['img-src']; 
    topText(); 
    middleImg.src = siteContent['main-content']['middle-img-src'];
    bottomText(); 
  }
})
const ctaImg = document.getElementById('cta-img'); 
ctaImg.src = siteContent['cta']['img-src']; 

///////MAIN CONTENT SECTION
const mainContent = document.querySelector('.main-content');
const textContent = document.querySelectorAll('.text-content'); 

//////TOP CONTENT
const topText = () => {
  const topContent = document.querySelector('.top-content');
  const features = topContent.firstElementChild; 
  const featuresH4 = features.firstElementChild;
  featuresH4.textContent = siteContent['main-content']['features-h4'];
  const featuresTextContent = featuresH4.nextElementSibling;
  featuresTextContent.textContent = siteContent['main-content']['features-content']; 
  const about = features.nextElementSibling;
  const aboutH4 = about.firstElementChild; 
  aboutH4.textContent = siteContent['main-content']['about-h4']; 
  const aboutTextContent = aboutH4.nextElementSibling;
  aboutTextContent.textContent = siteContent['main-content']['about-content']; 
}
topText(); 

//////MIDDLE IMG
const middleImg = document.querySelector('#middle-img'); 
middleImg.src = siteContent['main-content']['middle-img-src'];

/////BOTTOM CONTENT
const bottomText = () => {
  const bottomContent = document.querySelector('.bottom-content'); 
  const services = bottomContent.firstElementChild;
  const servicesH4 = services.firstElementChild;
  servicesH4.textContent = siteContent['main-content']['services-h4'];
  const servicesTextContent = servicesH4.nextElementSibling;
  servicesTextContent.textContent = siteContent['main-content']['services-content'];
  const product = services.nextElementSibling; 
  const productH4 = product.firstElementChild;
  productH4.textContent = siteContent['main-content']['product-h4']; 
  const productTextContent = productH4.nextElementSibling;
  productTextContent.textContent = siteContent['main-content']['product-content'];
  const vision = product.nextElementSibling;
  const visionH4 = vision.firstElementChild;
  visionH4.textContent = siteContent['main-content']['vision-h4'];
  const visionTextContent = visionH4.nextElementSibling;
  visionTextContent.textContent = siteContent['main-content']['vision-content'];
}
bottomText(); 

///CONTACT
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
const footerP = footer.firstElementChild;
footerP.textContent = siteContent['footer']['copyright']; 

const roundedImg = () => {
  if(ctaImg.src = '/img/surprise.jpg') {
    ctaImg.style.height = '400px'; 
    ctaImg.style.width = '400px'; 
    ctaImg.style.borderRadius = '50%'; 
  }
}
 










