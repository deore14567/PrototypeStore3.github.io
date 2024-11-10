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
// Quiz Setup
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
        },
        {
            question: "What is the molar mass of carbon dioxide (CO2)?",
            options: ["12 g/mol", "44 g/mol", "18 g/mol", "22 g/mol"],
            answer: "44 g/mol"
        },
        {
            question: "What is the derivative of sin(x) with respect to x?",
            options: ["cos(x)", "-cos(x)", "tan(x)", "-sin(x)"],
            answer: "cos(x)"
        },
        {
            question: "Which of these is an example of a chemical reaction?",
            options: ["Dissolving sugar in water", "Boiling water", "Rusting of iron", "Melting ice"],
            answer: "Rusting of iron"
        },
        {
            question: "What is the speed of light in a vacuum?",
            options: ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^10 m/s", "3 × 10^5 m/s"],
            answer: "3 × 10^8 m/s"
        },
        {
            question: "Which of the following is a vector quantity?",
            options: ["Speed", "Distance", "Velocity", "Energy"],
            answer: "Velocity"
        },
        {
            question: "What is the pH of pure water at 25°C?",
            options: ["7", "0", "14", "1"],
            answer: "7"
        },
        {
            question: "Which element has the highest atomic number?",
            options: ["Uranium", "Plutonium", "Oganesson", "Radon"],
            answer: "Oganesson"
        },
        {
            question: "What is the main function of white blood cells?",
            options: ["Transport oxygen", "Fight infections", "Carry nutrients", "Regulate temperature"],
            answer: "Fight infections"
        },
        {
            question: "Which of the following equations represents Ohm's Law?",
            options: ["V = IR", "V = P/I", "I = P/V", "R = V/I"],
            answer: "V = IR"
        },
        {
            question: "What is the derivative of x² with respect to x?",
            options: ["2x", "x", "x²", "x³"],
            answer: "2x"
        },
        {
            question: "Which organ is responsible for producing insulin?",
            options: ["Liver", "Kidney", "Pancreas", "Stomach"],
            answer: "Pancreas"
        },
        {
            question: "What is the principal quantum number of the first orbit in an atom?",
            options: ["1", "2", "3", "0"],
            answer: "1"
        },
        {
            question: "The product of two vectors is called:",
            options: ["Scalar", "Vector", "Matrix", "Tensor"],
            answer: "Vector"
        },
        {
            question: "What is the function of chlorophyll in plants?",
            options: ["Absorb sunlight", "Store water", "Transport nutrients", "Absorb oxygen"],
            answer: "Absorb sunlight"
        },
        {
            question: "Which type of bond is formed when electrons are shared between two atoms?",
            options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
            answer: "Covalent bond"
        },
        {
            question: "Which of the following is a property of a gas?",
            options: ["Fixed shape", "Fixed volume", "Compressible", "Incompressible"],
            answer: "Compressible"
        },
        {
            question: "What is the formula for the area of a circle?",
            options: ["πr²", "2πr", "πr", "πr³"],
            answer: "πr²"
        }
    ];
    
    let currentQuiz = 0;
    let score = 0;
    
    function loadQuiz() {
        const currentQuizData = quizData[currentQuiz];
        document.getElementById("quizQuestion").innerText = currentQuizData.question;
        const quizOptionsDiv = document.getElementById("quizOptions");
        quizOptionsDiv.innerHTML = ''; // Clear previous options
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
            feedbackDiv.innerText = `Incorrect. Hint: The answer has ${correctAnswer}`;
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
    
    loadQuiz(); // Initialize the quiz
});

    
