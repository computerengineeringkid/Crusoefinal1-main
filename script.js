//smooth Scroll
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetID = this.getAttribute('href');
            const targetSection = document.querySelector(targetID);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

//auto-hide header on Scroll
document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = '-100px';
        } else {
            header.style.top = '5%';
        }
        lastScrollTop = scrollTop;
    });
});

//scroll indicator at the top
window.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";
};

//back to top button
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

//content reveal on scroll
document.addEventListener('DOMContentLoaded', function () {
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = function () {
        revealElements.forEach(function (element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                element.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

//service item hover effects
document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            item.style.transform = 'scale(1.05)';
            item.style.backgroundColor = '#205295';
            const moreInfo = item.querySelector('p.more-info');
            if (moreInfo) {
                moreInfo.style.display = 'block';
            }
        });
        item.addEventListener('mouseout', function () {
            item.style.transform = 'scale(1)';
            item.style.backgroundColor = '#144272';
            const moreInfo = item.querySelector('p.more-info');
            if (moreInfo) {
                moreInfo.style.display = 'none';
            }
        });
    });
});

//pop-up auth forms and authentication management
document.addEventListener('DOMContentLoaded', function () {
    const signUpPopup = document.getElementById('signUpPopup');
    const logInPopup = document.getElementById('logInPopup');
    const accountLink = document.getElementById('accountLink');
    const myAccountButton = document.getElementById('myAccountButton');
    const logoutButton = document.getElementById('logoutButton');
    const closeButtons = document.querySelectorAll('.close');
    const showLoginFormLink = document.getElementById('showLoginForm');
    const showSignUpFormLink = document.getElementById('showSignUpForm');

    // Open sign-in popup
    accountLink.addEventListener('click', function (event) {
        event.preventDefault();
        logInPopup.style.display = 'block';
    });

    // Close popups
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            signUpPopup.style.display = 'none';
            logInPopup.style.display = 'none';
        });
    });

    // Show sign-up form
    showSignUpFormLink.addEventListener('click', function (event) {
        event.preventDefault();
        logInPopup.style.display = 'none';
        signUpPopup.style.display = 'block';
    });

    // Show log-in form
    showLoginFormLink.addEventListener('click', function (event) {
        event.preventDefault();
        signUpPopup.style.display = 'none';
        logInPopup.style.display = 'block';
    });

    // Handle Sign Up
    document.getElementById('signUpForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('signUpUsername').value;
        const password = document.getElementById('signUpPassword').value;

        if (localStorage.getItem(username)) {
            alert('Username already exists!');
        } else {
            localStorage.setItem(username, password);
            alert('Sign up successful!');
            signUpPopup.style.display = 'none';
            logInPopup.style.display = 'block';
        }
    });

    // Handle Log In
    document.getElementById('logInForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('logInUsername').value;
        const password = document.getElementById('logInPassword').value;

        const storedPassword = localStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            localStorage.setItem('loggedInUser', username);
            alert('Login successful!');
            logInPopup.style.display = 'none';
            updateHeaderForLoggedInUser(username);
        } else {
            alert('Invalid credentials!');
        }
    });

    // Handle Log Out
    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        updateHeaderForLoggedOutUser();
    });

    // Update the header based on the user's login state
    function updateHeaderForLoggedInUser(username) {
        accountLink.style.display = 'none';
        myAccountButton.style.display = 'block';
        logoutButton.style.display = 'block';
        document.getElementById('loggedInUser').textContent = username;
    }

    function updateHeaderForLoggedOutUser() {
        accountLink.style.display = 'block';
        myAccountButton.style.display = 'none';
        logoutButton.style.display = 'none';
    }

    // On page load, check if the user is logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        updateHeaderForLoggedInUser(loggedInUser);
    } else {
        updateHeaderForLoggedOutUser();  // Ensure logged-out state on page load
    }
});

//content reveal on scroll for images
document.addEventListener('DOMContentLoaded', function () {
    const imageElements = document.querySelectorAll('.images-grid img');
    const revealOnScroll = function () {
        imageElements.forEach(function (element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                element.classList.add('reveal');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

//hover effects for the images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.images-grid img');
    images.forEach(image => {
        image.addEventListener('mouseover', function () {
            image.style.transform = 'scale(1.05)';
            image.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        image.addEventListener('mouseout', function () {
            image.style.transform = 'scale(1)';
            image.style.boxShadow = 'none';
        });
    });
});
        /* Retrieve the logged in user from local storage */
        document.addEventListener('DOMContentLoaded', function () {
            const loggedInUser = localStorage.getItem('loggedInUser');
            /* If a logged in user is found, update the login user element */
            if (loggedInUser) {
                document.getElementById('loggedInUser').textContent = loggedInUser;
            }

            /* Add event listener to the logout button */
            document.getElementById('logoutButton').addEventListener('click', function () {
                localStorage.removeItem('loggedInUser');
                window.location.href = 'index.html';
            });
        });
