// Quiz Data
const quizzes = [
  {
    id: 1,
    title: "The Universe",
    category: "Science",
    image: "../assets/m1.png",
    description: "Test your knowledge about the cosmos.",
    questions: [
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        answer: "Jupiter"
      },
      {
        question: "Which galaxy do we live in?",
        options: ["Andromeda", "Whirlpool", "Milky Way", "Sombrero"],
        answer: "Milky Way"
      },
      {
        question: "What is the closest star to Earth?",
        options: ["Alpha Centauri", "Betelgeuse", "Sirius", "The Sun"],
        answer: "The Sun"
      },
      {
        question: "What causes a solar eclipse?",
        options: [
          "The Moon passing between Earth and Sun",
          "Earth passing between Moon and Sun",
          "The Sun blocking the Moon",
          "The Moon blocking stars behind it"
        ],
        answer: "The Moon passing between Earth and Sun"
      },
      {
        question: "What is a light-year?",
        options: [
          "The time it takes light to travel around Earth",
          "The distance light travels in one year",
          "A measure of brightness",
          "The lifespan of a star"
        ],
        answer: "The distance light travels in one year"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
      },
      {
        question: "What is the main component of the Sun?",
        options: ["Liquid lava", "Hydrogen and helium", "Oxygen and nitrogen", "Molten iron"],
        answer: "Hydrogen and helium"
      },
      {
        question: "How many moons does Earth have?",
        options: ["0", "1", "2", "3"],
        answer: "1"
      },
      {
        question: "What is a supernova?",
        options: [
          "A new planet",
          "An exploding star",
          "A type of galaxy",
          "A black hole"
        ],
        answer: "An exploding star"
      },
      {
        question: "Which of these is NOT a type of galaxy?",
        options: ["Spiral", "Elliptical", "Irregular", "Triangular"],
        answer: "Triangular"
      }
    ]
  },
  {
    id: 2,
    title: "Ancient Civilizations",
    category: "History",
    image: "../assets/m2.png",
    description: "Explore the mysteries of ancient cultures.",
    questions: [
      {
        question: "Which ancient civilization built the pyramids?",
        options: ["Greeks", "Egyptians", "Romans", "Mayans"],
        answer: "Egyptians"
      },
      {
        question: "The Code of Hammurabi originated in which civilization?",
        options: ["Babylonian", "Persian", "Indus Valley", "Chinese"],
        answer: "Babylonian"
      },
      {
        question: "Which ancient civilization developed democracy?",
        options: ["Egyptian", "Greek", "Roman", "Persian"],
        answer: "Greek"
      },
      {
        question: "The Great Wall was built by which civilization?",
        options: ["Japanese", "Indian", "Chinese", "Mongolian"],
        answer: "Chinese"
      },
      {
        question: "Which civilization invented paper?",
        options: ["Greek", "Egyptian", "Chinese", "Mesopotamian"],
        answer: "Chinese"
      },
      {
        question: "The ancient city of Troy was located in modern-day:",
        options: ["Greece", "Italy", "Turkey", "Egypt"],
        answer: "Turkey"
      },
      {
        question: "Which civilization built Machu Picchu?",
        options: ["Aztec", "Maya", "Inca", "Olmec"],
        answer: "Inca"
      },
      {
        question: "The Rosetta Stone helped decipher which ancient writing?",
        options: ["Cuneiform", "Hieroglyphics", "Linear B", "Sanskrit"],
        answer: "Hieroglyphics"
      },
      {
        question: "Which ancient civilization developed the concept of zero?",
        options: ["Roman", "Greek", "Indian", "Egyptian"],
        answer: "Indian"
      },
      {
        question: "The Hanging Gardens were one of the Seven Wonders of which ancient city?",
        options: ["Athens", "Babylon", "Rome", "Alexandria"],
        answer: "Babylon"
      }
    ]
  },
  {
    id: 3,
    title: "Shakespearean Plays",
    category: "Literature",
    image: "../assets/m3.png",
    description: "Dive into the world of the Bard.",
    questions: [
      {
        question: "Which of these is NOT a Shakespeare play?",
        options: ["Macbeth", "Hamlet", "Romeo and Juliet", "Faust"],
        answer: "Faust"
      },
      {
        question: "In which play would you find the characters Rosencrantz and Guildenstern?",
        options: ["Macbeth", "Hamlet", "King Lear", "Othello"],
        answer: "Hamlet"
      },
      {
        question: "Which play features the famous line 'To be or not to be'?",
        options: ["Macbeth", "Hamlet", "Julius Caesar", "King Lear"],
        answer: "Hamlet"
      },
      {
        question: "How many sonnets did Shakespeare write?",
        options: ["50", "100", "154", "200"],
        answer: "154"
      },
      {
        question: "Which play is set in Verona?",
        options: ["Hamlet", "Othello", "Romeo and Juliet", "The Tempest"],
        answer: "Romeo and Juliet"
      },
      {
        question: "Which character says 'All the world's a stage'?",
        options: ["Hamlet", "Macbeth", "Jaques", "Falstaff"],
        answer: "Jaques"
      },
      {
        question: "In which play does the character Iago appear?",
        options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
        answer: "Othello"
      },
      {
        question: "Which play features three witches?",
        options: ["Hamlet", "Macbeth", "King Lear", "The Tempest"],
        answer: "Macbeth"
      },
      {
        question: "Which of these is a Shakespeare comedy?",
        options: ["Macbeth", "Hamlet", "A Midsummer Night's Dream", "King Lear"],
        answer: "A Midsummer Night's Dream"
      },
      {
        question: "Which play features the character Shylock?",
        options: ["The Merchant of Venice", "Othello", "King Lear", "The Tempest"],
        answer: "The Merchant of Venice"
      }
    ]
  },
  {
    id: 4,
    title: "General Knowledge",
    category: "General Knowledge",
    image: "../assets/m4.png",
    description: "Test your overall knowledge with a mix of questions.",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        answer: "Paris"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
      },
      {
        question: "Which country gifted the Statue of Liberty to the United States?",
        options: ["England", "France", "Spain", "Italy"],
        answer: "France"
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "Au"
      },
      {
        question: "Which language has the most native speakers?",
        options: ["English", "Spanish", "Mandarin", "Hindi"],
        answer: "Mandarin"
      },
      {
        question: "What is the tallest mammal?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Polar Bear"],
        answer: "Giraffe"
      },
      {
        question: "Which country is home to the kangaroo?",
        options: ["New Zealand", "South Africa", "Australia", "Brazil"],
        answer: "Australia"
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Heart"],
        answer: "Skin"
      },
      {
        question: "Which year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        answer: "1945"
      }
    ]
  },
  {
    id: 5,
    title: "Science",
    category: "Science",
    image: "../assets/m5.png",
    description: "Explore the wonders of science from biology to physics.",
    questions: [
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: "Diamond"
      },
      {
        question: "Which planet is known as the Morning Star?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Venus"
      },
      {
        question: "What is the study of fossils called?",
        options: ["Paleontology", "Archaeology", "Geology", "Meteorology"],
        answer: "Paleontology"
      },
      {
        question: "Which blood type is known as the universal donor?",
        options: ["A", "B", "AB", "O"],
        answer: "O"
      },
      {
        question: "What is the speed of light?",
        options: [
          "300,000 km/s",
          "150,000 km/s",
          "1 million km/s",
          "30 km/s"
        ],
        answer: "300,000 km/s"
      },
      {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        answer: "Hydrogen"
      },
      {
        question: "What is the main gas in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
      },
      {
        question: "Which scientist developed the theory of relativity?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Stephen Hawking"
        ],
        answer: "Albert Einstein"
      }
    ]
  },
  {
    id: 6,
    title: "History",
    category: "History",
    image: "../assets/m6.png",
    description: "Journey through time and learn about historical events.",
    questions: [
      {
        question: "In which year did World War I begin?",
        options: ["1912", "1914", "1916", "1918"],
        answer: "1914"
      },
      {
        question: "Who was the first president of the United States?",
        options: [
          "Thomas Jefferson",
          "George Washington",
          "Abraham Lincoln",
          "John Adams"
        ],
        answer: "George Washington"
      },
      {
        question: "Which ancient wonder was located in Alexandria, Egypt?",
        options: [
          "Great Pyramid",
          "Hanging Gardens",
          "Lighthouse",
          "Colossus"
        ],
        answer: "Lighthouse"
      },
      {
        question: "The Magna Carta was signed in which century?",
        options: ["11th", "12th", "13th", "14th"],
        answer: "13th"
      },
      {
        question: "Who painted the Mona Lisa?",
        options: [
          "Michelangelo",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Vincent van Gogh"
        ],
        answer: "Leonardo da Vinci"
      },
      {
        question: "Which empire was ruled by Genghis Khan?",
        options: ["Roman", "Ottoman", "Mongol", "Persian"],
        answer: "Mongol"
      },
      {
        question: "The Industrial Revolution began in which country?",
        options: ["France", "Germany", "United States", "England"],
        answer: "England"
      },
      {
        question: "Who discovered America in 1492?",
        options: [
          "Vasco da Gama",
          "Christopher Columbus",
          "Ferdinand Magellan",
          "James Cook"
        ],
        answer: "Christopher Columbus"
      },
      {
        question: "Which ancient civilization built the Machu Picchu complex?",
        options: ["Aztec", "Maya", "Inca", "Olmec"],
        answer: "Inca"
      },
      {
        question: "The French Revolution began in which year?",
        options: ["1776", "1789", "1799", "1804"],
        answer: "1789"
      }
    ]
  },
  {
    id: 7,
    title: "Mathematics",
    category: "Mathematics",
    image: "../assets/m8.png",
    description: "Challenge your math skills with various problems.",
    questions: [
      {
        question: "What is the value of π (pi) rounded to two decimal places?",
        options: ["3.14", "3.16", "3.18", "3.12"],
        answer: "3.14"
      },
      {
        question: "What is the square root of 64?",
        options: ["4", "6", "8", "10"],
        answer: "8"
      },
      {
        question: "If x + 5 = 10, what is the value of x?",
        options: ["2", "5", "10", "15"],
        answer: "5"
      },
      {
        question: "What is the area of a rectangle with length 5 and width 4?",
        options: ["9", "18", "20", "25"],
        answer: "20"
      },
      {
        question: "How many degrees are in a right angle?",
        options: ["45", "90", "180", "360"],
        answer: "90"
      },
      {
        question: "What is 2 to the power of 5?",
        options: ["10", "16", "32", "64"],
        answer: "32"
      },
      {
        question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        options: ["24", "32", "64", "128"],
        answer: "32"
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["90", "180", "270", "360"],
        answer: "180"
      },
      {
        question: "What is the Roman numeral for 50?",
        options: ["V", "X", "L", "C"],
        answer: "L"
      },
      {
        question: "If a train travels 300 miles in 5 hours, what is its speed?",
        options: ["50 mph", "60 mph", "70 mph", "80 mph"],
        answer: "60 mph"
      }
    ]
  }
];

// DOM Elements
const quizList = document.getElementById("quiz-list");
const filterButtons = document.querySelectorAll(".filter-btn");
const quizContainer = document.querySelector("section");

// Current Quiz State
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let timer = null;
let timeLeft = 30;
let quizStartTime = null;

// Initialize the page
function init() {
  // Set default user name if not set
  if (!localStorage.getItem('quizUserName')) {
    localStorage.setItem('quizUserName', 'Quiz Master');
  }
  
  renderQuizList();
  setupEventListeners();
}

// Render quiz list based on selected filter
function renderQuizList(filter = "all") {
  quizContainer.innerHTML = `
    <section class="bg-white text-[#121417] px-4 sm:px-8 md:px-16 lg:px-24 py-8 font-manrope max-w-[1200px] mx-auto animate-fade-in">
      <!-- Title -->
      <h1 class="text-[32px] font-bold leading-[40px] mb-6">Select a Quiz</h1>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-2 mb-8" id="filter-buttons">
        <button data-category="all" class="filter-btn px-4 py-2 rounded-lg bg-[#4CAF50] text-white text-[14px] font-medium transition-all duration-200">All</button>
        <button data-category="Science" class="filter-btn px-4 py-2 rounded-lg bg-[#F0F2F5] text-[14px] font-medium transition-all duration-200 hover:bg-[#d9dde3]">Science</button>
        <button data-category="History" class="filter-btn px-4 py-2 rounded-lg bg-[#F0F2F5] text-[14px] font-medium transition-all duration-200 hover:bg-[#d9dde3]">History</button>
        <button data-category="Literature" class="filter-btn px-4 py-2 rounded-lg bg-[#F0F2F5] text-[14px] font-medium transition-all duration-200 hover:bg-[#d9dde3]">Literature</button>
        <button data-category="Mathematics" class="filter-btn px-4 py-2 rounded-lg bg-[#F0F2F5] text-[14px] font-medium transition-all duration-200 hover:bg-[#d9dde3]">Mathematics</button>
      </div>

      <!-- Featured Quizzes -->
      <h2 class="text-[22px] font-bold leading-[28px] mb-4">Featured Quizzes</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" id="featured-quizzes">
        ${quizzes.slice(0, 3).map(quiz => `
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transform hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fade-in" data-id="${quiz.id}">
            <img src="${quiz.image}" alt="${quiz.title}" class="w-full h-[160px] object-cover rounded-t-2xl" />
            <div class="p-6">
              <h3 class="text-[18px] font-semibold leading-[26px] mb-2 text-[#121417]">${quiz.title}</h3>
              <p class="text-[16px] font-normal leading-[24px] text-[#61738A]">${quiz.description}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- All Quizzes -->
      <h2 class="text-[22px] font-bold leading-[28px] mb-8">All Quizzes</h2>
      <div class="space-y-12" id="quiz-list">
        ${quizzes.map(quiz => `
          <div data-category="${quiz.category}" data-id="${quiz.id}" class="quiz-card flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transform hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fade-in p-6">
            <div class="flex-1 max-w-full md:max-w-[480px]">
              <h3 class="text-[20px] font-semibold leading-[28px] mb-2 text-[#121417]">${quiz.title}</h3>
              <p class="text-[16px] font-normal leading-[24px] text-[#61738A]">${quiz.description}</p>
            </div>
            <img src="${quiz.image}" alt="${quiz.title}" class="w-full md:w-[320px] h-auto max-h-[160px] rounded-2xl object-cover" />
          </div>
        `).join("")}
      </div>
    </section>
  `;

  // Add event listeners to quiz cards
  document.querySelectorAll('.quiz-card, #featured-quizzes > div').forEach(card => {
    card.addEventListener('click', () => startQuiz(parseInt(card.dataset.id)));
  });

  // Update active filter button style
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('bg-[#4CAF50]', 'text-white');
    btn.classList.add('bg-[#F0F2F5]', 'hover:bg-[#d9dde3]');
    if (btn.dataset.category === filter) {
      btn.classList.remove('bg-[#F0F2F5]', 'hover:bg-[#d9dde3]');
      btn.classList.add('bg-[#4CAF50]', 'text-white');
    }
  });
}

// Start a quiz
function startQuiz(quizId) {
  currentQuiz = quizzes.find(quiz => quiz.id === quizId);
  currentQuestionIndex = 0;
  userAnswers = Array(currentQuiz.questions.length).fill(null);
  quizStartTime = new Date();
  
  renderQuizPage();
}

// Render the quiz page with animations
function renderQuizPage() {
  if (!currentQuiz) return;

  // Reset timer for each question
  timeLeft = 30;
  
  quizContainer.innerHTML = `
    <section class="max-w-4xl mx-auto p-6 animate-slide-in">
      <!-- Quiz Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 class="text-2xl font-bold text-[#121417]">${currentQuiz.title}</h1>
        <div class="flex items-center gap-4">
          <div class="bg-[#F0F2F5] px-3 py-1 rounded-full text-sm font-medium">
            Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}
          </div>
          <div class="flex items-center gap-2 bg-[#F0F2F5] px-3 py-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span id="timer-display">00:30</span>
          </div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div class="bg-[#4CAF50] h-2 rounded-full transition-all duration-500" 
             style="width: ${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%"></div>
      </div>

      <!-- Question Card -->
      <div class="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100 transform hover:scale-[1.01] transition-transform duration-200">
        <h2 class="text-xl font-semibold mb-6 text-[#121417]">${currentQuiz.questions[currentQuestionIndex].question}</h2>
        <div class="space-y-3">
          ${currentQuiz.questions[currentQuestionIndex].options.map((option, i) => `
            <label class="flex items-center p-3 rounded-lg border border-gray-200 hover:border-[#4CAF50] transition-colors duration-200 cursor-pointer ${userAnswers[currentQuestionIndex] === option ? 'bg-[#F0F9FF] border-[#4CAF50]' : ''}">
              <input 
                type="radio" 
                name="quiz-option" 
                value="${option}" 
                class="w-4 h-4 text-[#4CAF50] focus:ring-[#4CAF50] mr-3"
                ${userAnswers[currentQuestionIndex] === option ? 'checked' : ''}
              >
              <span class="text-gray-800">${option}</span>
            </label>
          `).join("")}
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-between">
        <button 
          id="prev-btn" 
          class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-gray-200 hover:scale-105 ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
          ${currentQuestionIndex === 0 ? 'disabled' : ''}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Previous
        </button>
        <button 
          id="next-btn" 
          class="px-6 py-2 bg-[#4CAF50] text-white rounded-lg font-medium transition-all duration-200 hover:bg-[#3e8e41] hover:scale-105"
        >
          ${currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Submit Quiz' : 'Next'}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  `;

  // Start timer for this question
  startTimer();

  // Add event listeners for navigation
  document.getElementById("prev-btn").addEventListener("click", goToPreviousQuestion);
  document.getElementById("next-btn").addEventListener("click", goToNextQuestion);

  // Add event listener for answer selection
  document.querySelectorAll('input[name="quiz-option"]').forEach(input => {
    input.addEventListener("change", (e) => {
      userAnswers[currentQuestionIndex] = e.target.value;
      // Highlight selected option
      document.querySelectorAll('label').forEach(label => {
        label.classList.remove('bg-[#F0F9FF]', 'border-[#4CAF50]');
      });
      e.target.closest('label').classList.add('bg-[#F0F9FF]', 'border-[#4CAF50]');
    });
  });
}

// Timer functions
function startTimer() {
  // Clear any existing timer
  if (timer) clearInterval(timer);
  
  // Update display immediately
  updateTimerDisplay();
  
  // Start new timer
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      goToNextQuestion();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerDisplay = document.getElementById("timer-display");
  if (timerDisplay) {
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `00:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is running out
    if (timeLeft <= 10) {
      timerDisplay.parentElement.classList.add('bg-red-100', 'text-red-600');
      timerDisplay.parentElement.classList.remove('bg-[#F0F2F5]');
    } else {
      timerDisplay.parentElement.classList.remove('bg-red-100', 'text-red-600');
      timerDisplay.parentElement.classList.add('bg-[#F0F2F5]');
    }
  }
}

// Navigation functions
function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    saveCurrentAnswer();
    currentQuestionIndex--;
    renderQuizPage();
  }
}

function goToNextQuestion() {
  saveCurrentAnswer();
  
  if (currentQuestionIndex < currentQuiz.questions.length - 1) {
    currentQuestionIndex++;
    renderQuizPage();
  } else {
    submitQuiz();
  }
}

function saveCurrentAnswer() {
  const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
  if (selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption.value;
  }
}

// Submit quiz and show results
function submitQuiz() {
  clearInterval(timer);
  
  // Calculate results
  let score = 0;
  const incorrectAnswers = [];
  const quizDuration = Math.floor((new Date() - quizStartTime) / 1000); // in seconds
  
  currentQuiz.questions.forEach((question, index) => {
    if (userAnswers[index] === question.answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: question.question,
        userAnswer: userAnswers[index],
        correctAnswer: question.answer,
        options: question.options
      });
    }
  });
  
  // Render results page
  renderResultsPage(score, incorrectAnswers, quizDuration);
}

// Enhanced results page matching Figma design
function renderResultsPage(score, incorrectAnswers, quizDuration) {
  const userName = localStorage.getItem('quizUserName') || 'Participant';
  const percentage = Math.round((score / currentQuiz.questions.length) * 100);
  
  quizContainer.innerHTML = `
    <section class="max-w-4xl mx-auto p-6 animate-fade-in">
      <!-- Results Header -->
      <div class="flex justify-between items-center mb-8 pb-4 border-b">
        <h1 class="text-2xl font-bold text-[#121417]">Quiz Results</h1>
        <div class="flex items-center gap-4 text-sm">
          <span class="text-gray-400">Home</span>
          <span class="text-gray-400">Quizzes</span>
          <span class="text-gray-400">Profile</span>
        </div>
      </div>
      
      <!-- Main Results Card -->
      <div class="bg-white rounded-xl shadow-sm p-8 mb-8 text-center border border-gray-100">
        <div class="text-4xl font-bold text-[#4CAF50] mb-2">${percentage}%</div>
        <div class="text-xl font-semibold mb-4">Score: ${score}/${currentQuiz.questions.length}</div>
        
        <h2 class="text-xl font-bold mb-4">Quiz Completed</h2>
        <p class="text-gray-600 mb-6">
          Congratulations, ${userName}! You've completed the quiz with a score of ${score} out of ${currentQuiz.questions.length}.
          ${getPerformanceMessage(score, currentQuiz.questions.length)}
        </p>
        
        <!-- Action Button -->
        <div class="flex justify-center">
          <button id="review-answers-btn" class="px-6 py-2 bg-[#4CAF50] text-white rounded-lg font-medium hover:bg-[#3e8e41] transition-all duration-200">
            Review Answers
          </button>
        </div>
      </div>
      
      <!-- Detailed Results (hidden by default) -->
      <div id="detailed-results" class="hidden bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100 animate-fade-in">
        <h2 class="text-xl font-bold mb-6 text-[#121417]">Review Answers</h2>
        
        ${incorrectAnswers.length > 0 ? `
          <div class="space-y-6">
            ${incorrectAnswers.map((item, i) => `
              <div class="border-b pb-6 last:border-0 last:pb-0">
                <h3 class="text-lg font-semibold mb-3">${i + 1}. ${item.question}</h3>
                <div class="space-y-2 mb-4">
                  ${item.options.map(option => `
                    <div class="flex items-center p-2 rounded ${option === item.correctAnswer ? 'bg-green-50 border border-green-200' : option === item.userAnswer ? 'bg-red-50 border border-red-200' : ''}">
                      <span class="w-4 h-4 rounded-full mr-3 flex-shrink-0 
                        ${option === item.correctAnswer ? 'bg-green-500' : option === item.userAnswer ? 'bg-red-500' : 'bg-gray-200'}">
                      </span>
                      <span class="${option === item.correctAnswer ? 'font-medium text-green-700' : option === item.userAnswer ? 'font-medium text-red-700' : 'text-gray-600'}">
                        ${option}
                      </span>
                    </div>
                  `).join("")}
                </div>
                <div class="text-sm text-gray-500 mt-2">
                  <span class="font-medium">Your answer:</span> ${item.userAnswer || "No answer"} | 
                  <span class="font-medium">Correct answer:</span> ${item.correctAnswer}
                </div>
              </div>
            `).join("")}
          </div>
        ` : `
          <div class="text-center py-8">
            <div class="text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-green-600 mb-2">Perfect Score!</h3>
            <p class="text-gray-600">You answered all questions correctly.</p>
          </div>
        `}
      </div>
      
      <!-- Final Actions -->
      <div class="flex flex-wrap justify-center gap-4">
        <button id="retake-btn" class="px-6 py-2 bg-[#4CAF50] text-white rounded-lg font-medium hover:bg-[#3e8e41] transition-all duration-200">
          Retake Quiz
        </button>
        <button id="another-quiz-btn" class="px-6 py-2 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-all duration-200">
          Take Another Quiz
        </button>
        <button id="home-btn" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200">
          Back to Home
        </button>
      </div>
    </section>
  `;
  
  // Add event listeners
  document.getElementById("home-btn").addEventListener("click", () => {
    currentQuiz = null;
    renderQuizList();
  });
  
  document.getElementById("retake-btn").addEventListener("click", () => {
    startQuiz(currentQuiz.id);
  });
  
  document.getElementById("another-quiz-btn").addEventListener("click", () => {
    currentQuiz = null;
    renderQuizList();
  });
  
  document.getElementById("review-answers-btn").addEventListener("click", () => {
    const detailedResults = document.getElementById("detailed-results");
    if (detailedResults.classList.contains("hidden")) {
      detailedResults.classList.remove("hidden");
    } else {
      detailedResults.classList.add("hidden");
    }
  });
}

// Helper function to get performance message
function getPerformanceMessage(score, totalQuestions) {
  const percentage = score / totalQuestions;
  
  if (percentage >= 0.9) {
    return "Your performance indicates a strong understanding of the subject matter. Keep up the excellent work!";
  } else if (percentage >= 0.7) {
    return "You have a good grasp of the material with just a few areas to review.";
  } else if (percentage >= 0.5) {
    return "You're on the right track but could benefit from reviewing some concepts.";
  } else {
    return "Keep practicing! Reviewing the material will help improve your understanding.";
  }
}

// Animation styles (add these to your CSS)
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
  .animate-slide-in {
    animation: slideIn 0.4s ease-out forwards;
  }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", init);