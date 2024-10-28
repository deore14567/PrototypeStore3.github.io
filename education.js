// Auto-Sliding Carousel
const carouselContainer = document.querySelector('.carousel-container');
let scrollAmount = 0;

function autoSlideCarousel() {
    scrollAmount += 250; // Slide by 250px
    if (scrollAmount >= carouselContainer.scrollWidth - carouselContainer.clientWidth) {
        scrollAmount = 0; // Reset to start when reaching the end
    }
    carouselContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
setInterval(autoSlideCarousel, 3000); // Slide every 3 seconds

// Pop-in Animation for Education Sections
const educationSections = document.querySelectorAll('.education-section');
const options = {
    threshold: 0.2 // Trigger animation when 20% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('pop-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

educationSections.forEach(section => observer.observe(section));

// Fun Physics Formula Feature
const formulaBox = document.createElement('div');
formulaBox.className = 'formula-box';
formulaBox.innerText = "E = mc²"; // Sample formula
document.body.appendChild(formulaBox);

educationSections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        formulaBox.style.opacity = 1;
        formulaBox.style.top = `${section.getBoundingClientRect().top - 40}px`;
        formulaBox.style.left = `${section.getBoundingClientRect().left + 20}px`;
    });
    section.addEventListener('mouseleave', () => {
        formulaBox.style.opacity = 0;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const factBox = document.getElementById('factBox');
    const facts = [
        "An atom consists of a dense nucleus surrounded by orbiting electrons.",
        "Electrons are negatively charged and orbit around the positively charged nucleus.",
        "The nucleus is made up of protons and neutrons, which are much heavier than electrons."
    ];

    let factIndex = 0;

    document.querySelector(".atom-container").addEventListener("click", () => {
        factBox.innerText = facts[factIndex];
        factBox.style.display = 'block';
        factBox.style.opacity = 1;

        setTimeout(() => {
            factBox.style.opacity = 0;
            setTimeout(() => {
                factBox.style.display = 'none';
            }, 300);
        }, 3000);

        factIndex = (factIndex + 1) % facts.length;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Fun Fact Display
    const balls = document.querySelectorAll('.ball');
    const factBox = document.getElementById('factBox');
    const facts = [
        "Solid: Molecules are tightly packed and only vibrate in place.",
        "Liquid: Molecules are close together but can flow past one another.",
        "Gas: Molecules are far apart and move freely."
    ];

    balls.forEach((ball, index) => {
        ball.style.left = `${Math.random() * window.innerWidth}px`;
        ball.style.top = `${Math.random() * window.innerHeight * 0.6}px`;
        ball.style.animationDuration = `${Math.random() * 1 + 0.5}s`;

        ball.addEventListener('click', () => {
            factBox.innerText = facts[index];
            factBox.style.display = 'block';
            factBox.style.opacity = 1;

            setTimeout(() => {
                factBox.style.opacity = 0;
                setTimeout(() => {
                    factBox.style.display = 'none';
                }, 300);
            }, 3000);
        });
    });

    // Quiz Data
    const quizData = [
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "O2", "CO2", "N2"],
            answer: "H2O"
        },
        {
            question: "What is the acceleration due to gravity?",
            options: ["9.8 m/s²", "9.8 m/s", "10 m/s²", "8.5 m/s²"],
            answer: "9.8 m/s²"
        },
        {
            question: "Which of the following is a noble gas?",
            options: ["Oxygen", "Hydrogen", "Argon", "Carbon"],
            answer: "Argon"
        },
        {
            question: "What is the formula for kinetic energy?",
            options: ["1/2 mv²", "mv", "mgh", "F=ma"],
            answer: "1/2 mv²"
        }
    ];

    let currentQuiz = 0;
    let score = 0;

    function loadQuiz() {
        const currentQuizData = quizData[currentQuiz];
        document.getElementById("quizQuestion").innerText = currentQuizData.question;
        const quizOptionsDiv = document.getElementById("quizOptions");
        quizOptionsDiv.innerHTML = '';
        currentQuizData.options.forEach(option => {
            const button = document.createElement("div");
            button.classList.add("quiz-option");
            button.innerText = option;
            button.onclick = () => checkAnswer(option);
            quizOptionsDiv.appendChild(button);
        });
        document.getElementById("quizFeedback").innerText = '';
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = quizData[currentQuiz].answer;
        const feedbackDiv = document.getElementById("quizFeedback");

        if (selectedOption === correctAnswer) {
            score++;
            feedbackDiv.innerText = "Correct!";
            feedbackDiv.style.color = "#00ff00";
        } else {
            feedbackDiv.innerText = `Incorrect. Hint: The answer has ${correctAnswer.length} letters.`;
            feedbackDiv.style.color = "#ff4500";
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            setTimeout(loadQuiz, 1500);
        } else {
            feedbackDiv.innerText += ` Quiz finished! Your score is ${score}/${quizData.length}.`;
            setTimeout(() => {
                currentQuiz = 0;
                score = 0;
                loadQuiz();
            }, 3000);
        }
    }

    loadQuiz();
});
