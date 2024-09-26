// document.addEventListener('DOMContentLoaded', () => {
//     let navbar = document.querySelector('.navbar');
//     let menuBtn = document.querySelector('#menu-btn');

//     if (navbar && menuBtn) {
//         menuBtn.onclick = () => {
//             navbar.classList.toggle('active');
//         };
//     } else {
//         console.error("Either '.navbar' or '#menu-btn' element not found.");
//     }

//     window.onscroll = () => {
//         navbar.classList.remove('active');
//     }
// });
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


const reviewsData = [
    {
        id: 1,
        name: "John Doe",
        job: "⭐⭐⭐⭐⭐",
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Fantastic service! The cleaners are efficient, and the manpower consulting was a game changer for our staffing needs. Highly recommended!"
    },
    {
        id: 2,
        name: "Mike Smith",
        job: "⭐⭐⭐⭐",
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        text: "Great experience! The cleaning team did a thorough job, and the consulting services helped optimize our workforce. Will use again!"
    },
    {
        id: 3,
        name: "Alex Johnson",
        job: "⭐⭐⭐⭐",
        img: "https://randomuser.me/api/portraits/men/3.jpg",
        text: "Reliable and thorough cleaning. Their manpower consulting helped us hire the right people quickly. Couldn’t ask for more!"
    },
    {
        id: 4,
        name: "David Brown",
        job: "⭐⭐⭐⭐",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        text: "Solid cleaning service and excellent manpower consulting. A slight delay in scheduling, but overall very satisfied!"
    },
    {
        id: 5,
        name: "Chris Miller",
        job: "⭐⭐⭐⭐⭐",
        img: "https://randomuser.me/api/portraits/men/5.jpg",
        text: "Impressive! Both the cleaning and consulting services exceeded our expectations. Very professional team!"
    }
];

let currentReview = 0;
const reviewContainer = document.querySelector(".custom-review");
const imgElement = document.getElementById("person-img");
const authorElement = document.getElementById("review-author");
const jobElement = document.getElementById("review-job");
const infoElement = document.getElementById("review-info");

window.addEventListener("DOMContentLoaded", function () {
    showReview(currentReview);
    autoSlide();
});

function showReview(review) {
    const currentReviewData = reviewsData[review];
    imgElement.src = currentReviewData.img;
    authorElement.textContent = currentReviewData.name;
    jobElement.textContent = currentReviewData.job;
    infoElement.textContent = currentReviewData.text;
}

function autoSlide() {
    setInterval(() => {
        fadeOut();
        setTimeout(() => {
            currentReview = (currentReview + 1) % reviewsData.length;
            showReview(currentReview);
            fadeIn();
        }, 500); // Delay to sync with fade out
    }, 5000); // Slides every 5 seconds
}

function fadeOut() {
    reviewContainer.classList.add("fade-out");
}

function fadeIn() {
    reviewContainer.classList.remove("fade-out");
}

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    
    // Show the toast
    var toast = document.getElementById("toast");
    toast.className = "toast show";

    // Hide the toast after 3 seconds
    setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);

    this.submit();

    // Reset the form
    this.reset();
});