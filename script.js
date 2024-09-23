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
        img: "https://randomuser.me/api/portraits/men/1.jpg", // John Doe's image URL
        text: "Fantastic service! The cleaners are efficient, and the manpower consulting was a game changer for our staffing needs. Highly recommended!"
    },
    {
        id: 2,
        name: "Mike Smith",
        job: "⭐⭐⭐⭐",
        img: "https://randomuser.me/api/portraits/men/2.jpg", // Mike Smith's image URL
        text: "Great experience! The cleaning team did a thorough job, and the consulting services helped optimize our workforce. Will use again!"
    },
    {
        id: 3,
        name: "Alex Johnson",
        job: "⭐⭐⭐⭐",
        img: "https://randomuser.me/api/portraits/men/3.jpg", // Alex Johnson's image URL
        text: "Reliable and thorough cleaning. Their manpower consulting helped us hire the right people quickly. Couldn’t ask for more!",
    },
    {
        id: 4,
        name: "David Brown",
        job: "⭐⭐⭐⭐",
        img: "https://randomuser.me/api/portraits/men/4.jpg", // David Brown's image URL
        text: "Solid cleaning service and excellent manpower consulting. A slight delay in scheduling, but overall very satisfied!",
    },
    {
        id: 5,
        name: "Chris Miller",
        job: "⭐⭐⭐⭐⭐",
        img: "https://randomuser.me/api/portraits/men/5.jpg", // Chris Miller's image URL
        text: "Impressive! Both the cleaning and consulting services exceeded our expectations. Very professional team!",
    }
];

const imgElement = document.getElementById("person-img");
const authorElement = document.getElementById("review-author");
const jobElement = document.getElementById("review-job");
const infoElement = document.getElementById("review-info");

let currentReview = 0;

window.addEventListener("DOMContentLoaded", function () {
    showReview(currentReview);
    setInterval(() => {
        currentReview++;
        if (currentReview > reviewsData.length - 1) {
            currentReview = 0;
        }
        showReview(currentReview);
    }, 5000); // Change review every 5 seconds
});

function showReview(review) {
    const currentReviewData = reviewsData[review];
    imgElement.src = currentReviewData.img;
    authorElement.textContent = currentReviewData.name;
    jobElement.textContent = currentReviewData.job;
    infoElement.textContent = currentReviewData.text;

    const reviewElement = document.querySelector('.custom-review');
    reviewElement.classList.remove('show'); // Remove class to trigger fade-out

    setTimeout(() => {
        reviewElement.classList.add('show'); // Add class to trigger fade-in
    }, 50); // Small delay to allow fade-out to complete
}