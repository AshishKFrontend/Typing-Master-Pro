/**
 * Typing Master - Professional Refactored Script
 * Structure: Modular Object-Oriented Logic
 */

const TypingGame = {
    // --- Data Store ---
    lessons: [
        "jjffj ffjjf jffjj ffjjf ffjfj fjfjf jjffj jffjf fjjff fjjfj jjfjf fjfjf jfjff fjjfj jffjf jfjjf ffjfj fjfjf jfjfj fjjfj jffjf fjfjj ffjjf jfjjf jfjfj fjfjj fjjff jfjjf fjjfj jffjf jjffj fjjfj jjffj jfjff jffjf jfjjf ffjfj jfjfj jffjf jffjj fjfjf jfjff jfjfj ffjjf jjffj fjjfj jffjf jfjjf",
        "ddkkd kkddk dkkdd kdkkd kddkd ddkkd dfjk djkf kdfj jkdf ddkk kkdd dkdk kdkd fdfd jkjk dkkd kddk fjdk djkf kdfj ddkk kdkd kdkd dkdk ddkk kkdd ddkd kddk dkkd kdkd kdkf jfkd dfjk kjfd ddkk kkdd ddkk kkdd kdkd dkdk ddkk kkdd",
        "sslls llssl sllss lssll lssls sllsl slsl lsls sldk klds lsdf jkls slsl lsls sssl llls slsl lsls sldk jfsl slsl lsls sllss llssl sssl llls slsl lsls lssl slsl lsdf jkls sldk klds slsl lsls slls lssl slsl lsls",
        "aa;;a ;;aa; a;;aa ;aa;; a;;a; aa;;a asdf ;lkj a;a; ;a;a asl; ;lsa a;sl ;als a;a; ;a;a aa;; ;;aa a;a; ;a;a aa;; ;;aa asdf ;lkj a;sl ;lka a;a; ;a;a aa;; ;;aa a;a; ;a;a aa;; ;;aa asdf ;lkj",
        "fghj jhg fghj ghgh gghh hhgg fghj jhgf ghgh hghg gghh fghj ghgh gghh hhgg ghgh hghg fgjh jhgf ghgh hghg gghh hhgg ghgh hghg gghh hhgg fgjh jhgf ghgh hghg asdfg hjkl; gfdsa hjkl; asdfg hjkl; gfdsa hjkl;",
        "rrr uuu eee yyy ruey yeur rree uuyy eery rruu eeyy urur rure eyre ruey rrrr uuuu eeee yyyy rree uuyy eeyy rruu rude true tree user pure tyre your year roar rear rare tyre tree true rude user pure your year tyre tree true rude user pure",
        "qqq www iii ooo ppp qwiop poiqw qpwoi qwert qwert yuiop poiuy qpqp wowo iioi ooii ppii quiet power paper prior price pride pipe wire pier quick write water white power tower paper prior price pride pipe wire pier quick write water white",
        "power tower quiet write water white paper pride price prior quiet write water white paper pride price prior youth worry upper route outer peer root tree tyre yours write power water quiet white paper pride price prior youth worry upper route outer peer root tree tyre yours",
        "vvv mmm ccc nnn vmc nvm vcvm mcnv vmcn nvmc cave came name main vane calm clan clean move come back neck cave came name main vane calm clan clean move come back neck cave came name main vane calm clan clean move come back neck",
        "zzz xxx bbb /// zxb/ /bxz zxzb b/xz zone zinc boxen zebra basic back bank black zero size move back next box zoom zero size move back next box zoom zone zinc boxen zebra basic back bank black zero size move back next box zoom zero size move back next box zoom",
        "the quick brown fox jumps over the lazy dog. pack my box with five dozen liquor jugs. how vexingly quick dwaltze bright gems fill my azure cup. the quick brown fox jumps over the lazy dog. pack my box with five dozen liquor jugs. how vexingly quick dwaltze bright gems fill my azure cup.",
        "standard typing practice involves focus and rhythm. keeping your fingers on the home row is essential for speed. do not look at the keyboard while typing. try to maintain a steady flow. practice makes a man perfect. speed will come naturally with accuracy. focus on the letters and maintain your pace.",
        "Subject: Re-evaluating our Q4 Strategy (2025-26). Dear Team, please note that the budget has increased by 15.5%, reaching a total of $45,000.75! We need to ensure that all @department heads are aligned. If you have any questions, contact us at help-desk@company.org or call +1-800-555-0199. Don't forget to submit the report in [PDF] or .docx format. The deadline is Friday @ 5:00 PM sharp. Let's aim for 100% efficiency this time; no excuses accepted!",
        "Modern web development requires knowledge of HTML5, CSS3, and JavaScript. For example, a simple function looks like this: function calculateTotal(price, tax) { return price + (price * tax); }. Notice the use of (parentheses), {curly braces}, and [square brackets] like array[0]. When writing CSS, we use selectors like .container or #header { display: flex; }. In Python, indentation is key: if user_active == True: print(\"Welcome!\"). Mastering these symbols like @, #, $, %, ^, &, and * is what separates a pro from a beginner.",
        "The chemical formula for water is H2O, while Sulfuric Acid is H2SO4. In physics, Einstein's famous equation is E=mc^2. If you look at the temperature today, it's 32.5°C (roughly 90.5°F). The ratio was calculated at 3:4, which is approximately 75%. Please verify the coordinates: 40.7128° N, 74.0060° W. All data points should be enclosed in quotes like \"Result_01\" and separated by semicolons; for example: DataA; DataB; DataC. Accuracy in these technical details is 99.9% mandatory.",
        "The journey of a thousand miles begins with a single step; however, that step must be taken in the right direction. Many people ask: \"What is the meaning of life?\" Is it about earning $1,000,000 or is it about finding 100% peace? Perhaps it is a mix of both! In this digital age, our lives are connected by @handles and #hashtags, but we must not forget the 'human' touch. We often find ourselves trapped in [boxes] of our own making. Break free! Use your time wisely, focus on your goals (both short-term & long-term), and remember that every 'Error' in life is just a lesson learned. Stay curious, stay humble, and keep typing towards your destiny.",
        "Welcome to the Ultimate Typing Challenge! This lesson is designed to test every corner of your keyboard and your mental endurance. We will start with some basic English: The quick brown fox jumps over the lazy dog. Now, let's add some complexity: \"Is the 'Fox' faster than the 'Dog' by 50% or 75%?\" Let's move to symbols: @User_123, did you pay the $199.99 bill? (Yes/No). Look at these brackets: [1, 2, 3] and {A, B, C}. Don't forget the math: (10 * 5) / 2 = 25.00. Writing professionally involves using colons: and semicolons; correctly. You might also need backslashes \\ or forward slashes / in file paths like C:\\Users\\Desktop/Project. Every pro typist knows that speed is a byproduct of accuracy. If you can type this entire paragraph without a single mistake, you are truly a Master. From the top row (1! 2@ 3# 4$ 5% 6^ 7& 8* 9( 0)) to the bottom row (Z, X, C, V, B, N, M, <, >, ?), every key has a purpose. Keep your back straight, your eyes on the screen (not the keys!), and let your fingers dance across the board. You are 100% capable of reaching 100+ WPM. This is your final test—finish it with pride and precision!",
        "The Learning Corner publishes regular resources for aspirants preparing for competitive exam - Explainer sections, Op-ed pieces, interactive games for improving vocabulary and grammar and daily quiz to test current affair knowledge. Singapore, Hong Kong SAR, Korea, Chinese Taipei, and Japan continue outperforming all participating countries in mathematics at the fourth and eighth grades, according to results released from TIMSS (Trends in International Mathematics and Science Study) Interviews with Musk are generally painful to watch. 123456789 This is no exception. It reveals that there is nothing stable in Elon Musk's thought processes and very little that is original. He is certainly deeply knowledgeable Bolton prefaced his expose on China's knavish practices first by denying the pertinence of economics as the means of understanding political conflict before then acknowledging that China's theft of admits \"economics plays a critical role.\" Despite these warnings, the government in Madrid decided not to make any political or diplomatic overtures to Morocco, declining to resolve the misunderstanding in a consensual manner. Therefore, in a way, the Spanish government Christopher Wilson at Yahoo observes that nine \"moderate House Democrats on Friday threatened to blow up infrastructure negotiations, highlighting the delicate line that party leadership is trying to walk Even though Castillo is highly likely to take charge, wild speculation dominates both the news and social media. He has frequently made contradictory remarks about his future plans. His erratic comments and improvisational In oil-producing countries, real GDP is projected to increase from 2.7% in 2021 to 3.8% in 2022, with a 5.8% rise in the region's sector driven by Libya's return to global markets. Conversely, This brings us back to blueberries from Spain. Over the past several years, the cultivation of blueberries in Huelva province has progressively expanded. Between 2016 and 2020, blueberry spring exports There are many reasons why the COVID-19 pandemic created a breeding ground for eating disorders. For many people, eating habits changed significantly. Shopping at a grocery store was already incredibly stressful.",
        "We learned to see, at long last. Partway through the millennium, we figured out how to shape and polish glass so as to see far and to see small, and we dug into dead languages of previous millenniums to name our new aids to seeing-telescope, microscope, spectroscope, spectrophotometer, spectroheliograph and, eventually, television. We figured out the art, the geometry and the semantics of perspective. No wonder our superheroes had X-ray vision; so did we. And infrared vision, and ultraviolet vision, and gamma-ray vision and nuclear-magnetic-resonant vision. We extended our sight far beyond the tiny spectrum our unaided eyes could handle, from violet to red. We looked out, and we looked inside. We saw where earth is and what humans are (if not quite who we are). We noticed quasars and we noticed viruses. Surprise! \"In all falling rain, carried from gutters into water-butts, animalcules are to be found. in all kinds of water, standing in the open air, animalcules can turn up,\" noted Anton van Leeuwenhoek, the first man to observe bacteria. We figured out some things about color and space. \"To myself,\" Isaac Newton remarked modestly, \"I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.\" Then-and perhaps most important of all-we learned to see faster. Our sight expanded into the fourth dimension. It started innocently enough, with mundane items like railroad scheduling charts and weather histograms: new graphical representations of time. \"Here is a popular scientific diagram, a weather record,\" said a famous fictional character, the Time Traveler of H. G. Wells, explaining the fourth dimension years before mathematicians and physicists had worked out the details. \"This line I trace with my finger shows the movement of the barometer. Surely the mercury did not trace this line in any of the dimensions of Space generally recognized?\" The hero of \"The Time Machine\" was a time traveler who used ivory levers and quartz rods. But Wells also invented another kind of time traveler, a Professor Gibberne, hero of a little-known story published at the turn of the century under the title \"The New Accelerator.\" Professor Gibberne is a time traveler on drugs-really preparing no less than the absolute acceleration of life.",
        "Two thousand years ago, the great philosopher Aristotle said, \"Injustice arises when equals are treated unequally and also when unequals are treated equally\". This profound statement is what lies at the heart of equality-a fundamental human right. Every human simply by virtue of being a human being is entitled to equal treatment. The most significant, pervasive and violent discrimination in our country is the centuries old caste system. It was abolished by the Constitution in 1952 and untouchability was declared a crime. There was a category of people called dalits outside this system who were discriminated and treated as untouchables. They were thus given reservation by the government. Reservation in India is the process of setting aside a certain percentage of seats (vacancies) in government institutions for members of backward and under-represented communities (defined primarily by caste and tribe). It is a form of quota-based affirmative action. Scheduled Castes, Scheduled Tribes and other backward classes are the primary beneficiaries of the reservation policies under the Constitution with the objective of ensuring a 'level' playing field. The Constitution of India states in Article 15(4) that, \"All citizens shall have equal opportunities of receiving education. Nothing herein contained shall prevent the state from providing special facilities for educationally backward sections\". It also states that, \"The state shall promote with special care the educational and economic interests of the weaker sections of society and shall protect them from 'social injustice' and all forms of exploitation\". The Article further states that nothing in Article 15(4) will prevent the nation from helping SCs and STs for their betterment. In 1982, the Constitution specified 15% and 7.5% of vacancies in public sector and government-aided educational institutes as a quota reserved for the SC and ST candidates respectively for a period of five years, after which it was to be reviewed This period was routinely extended by the succeeding governments. The Supreme Court of India ruled that reservations cannot exceed 50% and put a cap on reservations. However, there are state laws that exceed this 50% limit and these are under litigation in the Supreme Court. For example, caste based reservation stands at 69% and the same is applicable to about 87% of the population in the state of Tamil Nadu. 'In 1990, Prime Minister VP Singh announced that 27% of government positions would be set aside for OBCs in addition to the 22.5% already set aside for SCs and STs. This was followed according to the Mandal Commission which was established in India in 1978 by the Janata Party government under Prime Minister Morarji Desai with a mandate to \"identify the socially or educationally backward\". Now, the question arises whether there is a need to review the reservation policy in India or should continue with the tradition? The basic idea of reservation was undoubtedly superb as it was in all good intent, meant to improve till now the status of those sections of the society which had hitherto been left uncared for. However, as we see it today, the policy of reservation has completely changed in the past few years. There has been unlimited extension of the policy for no one knows how long, it appears as though the policy has come to stay forever and its extension is also as though unlimited, with several more sections joining the band wagon of the classes under reservation. If we look at the reservation policy in India, we are the only country in the world that provides affirmative action based on individual caste identities. It is a well-established fact that reservations are tools of upliftment for those disadvantaged groups who have suffered years of discrimination and oppression at the hands of the higher castes. We the people of India, believe in the concept of 'Vasudeva Kutumbakam' where we take each and every person on equal terms and also take the path of fraternity into its ambit. The reservation policy in India gave a chance to the backward and downtrodden people to be on equal terms with the other classes of the society. It not only helped them in improving their lives and status in the society but also provided them with an opportunity to represent themselves in various aspects of the decision-making part of society, something which was denied to them for a long time. Reservations has come up in educational institutions, in jobs, in state assemblies, in Parliament and in every feasible sphere. It will be a wonder if this system is really going to help us to raise our standards in every sphere or will this become just a tool in the hands of a few, to forward their own interests, as has been up to this juncture. The reservation policy has taken only few families of weaker sections and not the masses."
    ],

    // --- State Variables ---
    state: {
        currentLessonIndex: 0,
        text: "",
        charIndex: 0,
        isRunning: false,
        timer: 0,
        interval: null,
        correct: 0,
        totalTyped: 0,
        isSoundOn: true
    },

    // --- Selectors ---
    elements: {
        display: document.getElementById('display-area'),
        input: document.getElementById('input-field'),
        wpm: document.getElementById('wpm'),
        acc: document.getElementById('acc'),
        time: document.getElementById('timer'),
        overlay: document.getElementById('result-overlay'),
        resultStats: document.getElementById('result-stats'),
        soundBtn: document.getElementById('sound-btn'),
        lessonCards: document.querySelectorAll('.lesson-card')
    },

    audio: {
        // Pop Sound (Click)
        type: new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3'),
        
        // Arrow Sound (Error)
        error: new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3')
    },
    // --- Initialization ---
    init() {
        this.bindEvents();
        this.loadLesson(0);
    },

    bindEvents() {
        window.addEventListener('resize', () => this.updateCaret());
        this.elements.input.addEventListener('input', (e) => this.handleTyping(e));
        // Global focus helper
        document.addEventListener('click', () => this.elements.input.focus());
    },

    // --- Lesson Management ---
    loadLesson(index) {
        this.state.currentLessonIndex = index;
        this.state.text = this.lessons[index];

        this.elements.lessonCards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });

        this.resetGame();
    },

    resetGame() {
        clearInterval(this.state.interval);
        this.state.isRunning = false;
        this.state.timer = 0;
        this.state.charIndex = 0;
        this.state.correct = 0;
        this.state.totalTyped = 0;

        this.elements.input.value = '';
        this.elements.time.innerText = "Time: 0s";
        this.elements.wpm.innerText = "WPM: 0";
        this.elements.acc.innerText = "Acc: 100%";
        this.elements.overlay.style.display = 'none';

        this.renderText();
        this.elements.input.focus();
    },

    renderText() {
        this.elements.display.innerHTML = '<div id="caret"></div>';
        
        this.state.text.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerText = char;
            span.className = 'letter';
            this.elements.display.appendChild(span);
        });

        setTimeout(() => this.updateCaret(), 50);
    },

    // --- Logic Core ---
    handleTyping(e) {
        if (this.elements.overlay.style.display === 'flex') {
            this.elements.input.value = '';
            return;
        }

        if (!this.state.isRunning) this.startTimer();

        const letters = document.querySelectorAll('.letter');

        // Backspace Handling
        if (e.inputType?.includes('delete') || (e.data === null && !e.isComposing)) {
            this.handleBackspace(letters);
            return;
        }

        // Character Input Handling
        if (e.data) {
            const typedChar = e.data.slice(-1);
            if (this.state.charIndex >= this.state.text.length) return;

            const targetChar = this.state.text[this.state.charIndex];

            if (typedChar === targetChar) {
                letters[this.state.charIndex].classList.add('correct');
                this.state.correct++;
                this.playSound('type');
            } else {
                letters[this.state.charIndex].classList.add('incorrect');
                this.playSound('error');
            }

            this.state.charIndex++;
            this.state.totalTyped++;
            
            this.updateCaret();
            this.updateStats();

            if (this.state.charIndex === this.state.text.length) this.endGame();
        }
    },

    handleBackspace(letters) {
        if (this.state.charIndex > 0) {
            this.state.charIndex--;
            
            if (letters[this.state.charIndex].classList.contains('correct')) {
                this.state.correct--;
            }
            
            letters[this.state.charIndex].className = 'letter';
            if (this.state.totalTyped > 0) this.state.totalTyped--;
        }
        this.updateCaret();
        this.updateStats();
    },

    updateCaret() {
        const letters = document.querySelectorAll('.letter');
        const caret = document.getElementById('caret');
        const container = this.elements.display; // Aapka scrollable box

        if (!caret) return;

        const fixedOffset = 8;
        const index = this.state.charIndex;
        let activeLetter = null; // Current letter ko track karne ke liye

        if (index < letters.length) {
            const letter = letters[index];
            activeLetter = letter;
            caret.style.left = `${letter.offsetLeft}px`;
            caret.style.top = `${letter.offsetTop + fixedOffset}px`;
        } else {
            const lastLetter = letters[letters.length - 1];
            if (lastLetter) {
                activeLetter = lastLetter;
                caret.style.left = `${lastLetter.offsetLeft + lastLetter.offsetWidth}px`;
                caret.style.top = `${lastLetter.offsetTop + fixedOffset}px`;
            }
        }

        if (activeLetter) {
            const letterTop = activeLetter.offsetTop;
            const containerScroll = container.scrollTop;
            const containerHeight = container.clientHeight;

            if (letterTop - containerScroll > containerHeight - 100) {
                container.scrollTop = letterTop - 100;
            }
            
            else if (letterTop < containerScroll) {
                container.scrollTop = letterTop - 50;
            }
        }
        this.elements.input.value = this.state.text.substring(0, index);
    },
    startTimer() {
        this.state.isRunning = true;
        this.state.interval = setInterval(() => {
            this.state.timer++;
            this.elements.time.innerText = `Time: ${this.state.timer}s`;
            this.updateStats();
        }, 1000);
    },

    updateStats() {
        if (this.state.totalTyped === 0) return;

        const minutes = this.state.timer / 60 || 1/60;
        const wpm = Math.round((this.state.correct / 5) / minutes) || 0;
        const acc = Math.round((this.state.correct / this.state.totalTyped) * 100);

        this.elements.wpm.innerText = `WPM: ${wpm}`;
        this.elements.acc.innerText = `Acc: ${acc > 100 ? 100 : acc}%`;
    },

    playSound(type) {
        if (!this.state.isSoundOn) return;
        const sfx = type === 'type' ? this.audio.type : this.audio.error;
        sfx.currentTime = 0;
        sfx.play().catch(() => {}); // Catch browser policy errors
    },

    // --- Public Methods (Interactions) ---
    toggleSound() {
        this.state.isSoundOn = !this.state.isSoundOn;
        const btn = this.elements.soundBtn;
        if (btn) {
            btn.innerText = this.state.isSoundOn ? "🔊" : "🔇";
            btn.classList.toggle('muted', !this.state.isSoundOn);
            btn.blur();
        }
        this.elements.input.focus();
    },

    endGame() {
        clearInterval(this.state.interval);
        this.state.isRunning = false;
        this.elements.overlay.style.display = 'flex';
        this.elements.resultStats.innerText = 
            `Time: ${this.state.timer}s | ${this.elements.wpm.innerText} | ${this.elements.acc.innerText}`;
    }
};

// --- Boot Game ---
window.onload = () => TypingGame.init();

// --- Global Aliases (For HTML onclicks) ---
function loadLesson(index) { TypingGame.loadLesson(index); }
function restartLesson() { TypingGame.resetGame(); }
function toggleSound() { TypingGame.toggleSound(); }
function focusInput() { TypingGame.elements.input.focus(); }