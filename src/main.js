import { Footer } from "./components/footer.js";
import { Header } from "./components/header.js";


// Body style
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('bg-gray-200');
});


// Load header component
document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector('header')) {
        document.body.insertBefore(Header(), document.body.firstChild);
    }
});



// SPONSORS
async function renderSponsor() {
    // Sponsor grid from HTML file
    const sponsorGrid = document.getElementById('sponsor-grid');
    
    try {
        // Get sponsors from sponsor.json
        const response = await fetch('/data/sponsor.json');
        const sponsorList = await response.json();

        if (!response.ok) {
            throw new Error('Errore! Status: ' + response.status);
        }

        // For each sponsor create the container logo
        sponsorList.forEach(sponsor => {
            const containerSponsor = document.createElement('div');
            containerSponsor.className = "sponsor w-full flex items-center justify-center";
            containerSponsor.innerHTML = `<img class="max-w-4/5 max-h-28 w-auto h-auto object-contain" src="/${sponsor.src}" alt="${sponsor.name}" draggable="false" loading="lazy">`;
            sponsorGrid.appendChild(containerSponsor);
        });
    
    // Send to console the error
    } catch (error) {
        console.error('Errore durante il caricamento degli sponsor:' + error);
    }
}

// Call function
renderSponsor();


// NEXT MATCH
async function renderNextMatch() {
    // Get list of match from calendario.json file
    try {
        const response = await fetch('/data/calendario.json');
        if (!response.ok) {
            throw new Error(`Errore HTTP! Status ${response.status}`);
        }
        const matches = await response.json();

        // Function to parse date in format DD/MM/YYYY and time HH:MM
        function parseDateTime(dateStr, timeStr) {
            const [d, m, y] = (dateStr || '').split('/').map(s => parseInt(s, 10));
            const [hh = 0, mm = 0] = ((timeStr || '').split(':').map(s => parseInt(s, 10)));
            if (!y || !m || !d) return null;
            return new Date(y, m - 1, d, hh || 0, mm || 0, 0, 0);
        }

        // Today 
        const now = new Date();

        // For each match parse date and time
        const matchesDates = matches.map(match => ({
            ...match,
            datetime: parseDateTime(match.date, match.time)
        })).filter(m => m.datetime instanceof Date && !isNaN(m.datetime));

        // Find next match
        const future = matchesDates.filter(m => m.datetime >= now).sort((a, b) => a.datetime - b.datetime);
        let next = future.length ? future[0] : matchesDates.sort((a, b) => a.datetime - b.datetime)[0];
        if (!next) return;
        

        // Update DOM: home/away logos team and name
        const homeImg = document.querySelector('#home-team img');
        const homeName = document.querySelector('#home-team p');
        const awayImg = document.querySelector('#away-team img');
        const awayName = document.querySelector('#away-team p');

        // Home
        if (homeImg) homeImg.src = next.homeIcon;
        if (homeImg) homeImg.alt = next.home;
        if (homeName) homeName.textContent = next.home.toUpperCase();

        // Away
        if (awayImg) awayImg.src = next.awayIcon;
        if (awayImg) awayImg.alt = next.away;
        if (awayName) awayName.textContent = next.away.toUpperCase();

        // Show league
        const headingMatchLeague = document.getElementById('league');
        const headingMatchDate = document.getElementById('date');
        const headingMatchTime = document.getElementById('time');
        
        if (headingMatchLeague) headingMatchLeague.textContent = next.league.toUpperCase();
        if (headingMatchDate) headingMatchDate.textContent = next.date.toUpperCase();
        if (headingMatchTime) headingMatchTime.textContent = `H ${next.time.toUpperCase()}`;


        let timerId = null;

        // Ensure the countdown structure exists and return references to value elements
        function ensureCountdownElements() {
            const container = document.getElementById('countdown');
            if (!container) return {};

            let daysEl = container.querySelector('.days .value');
            let hoursEl = container.querySelector('.hours .value');
            let minutesEl = container.querySelector('.minutes .value');
            let secondsEl = container.querySelector('.seconds .value');

            if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
                container.innerHTML = `
                    <div class="days flex flex-col items-center">
                        <p class="value text-6xl font-bold">0</p>
                        <p class="label text-lg font-medium">GIORNI</p>
                    </div>
                    <div class="hours flex flex-col items-center">
                        <p class="value text-6xl font-bold">0</p>
                        <p class="label text-lg font-medium">ORE</p>
                    </div>
                    <div class="minutes flex flex-col items-center">
                        <p class="value text-6xl font-bold">0</p>
                        <p class="label text-lg font-medium">MINUTI</p>
                    </div>
                    <div class="seconds flex flex-col items-center">
                        <p class="value text-6xl font-bold">0</p>
                        <p class="label text-lg font-medium">SECONDI</p>
                    </div>
                `;

                daysEl = container.querySelector('.days .value');
                hoursEl = container.querySelector('.hours .value');
                minutesEl = container.querySelector('.minutes .value');
                secondsEl = container.querySelector('.seconds .value');
            }

            return { daysEl, hoursEl, minutesEl, secondsEl };
        }

        // Countdown: update only the numeric elements
        function updateCountdown() {
            const container = document.getElementById('countdown');
            if (!container) return;

            const els = ensureCountdownElements();
            if (!els.daysEl) return;

            const now = new Date();
            const difference = next.datetime - now;

            if (difference <= 0) {
                if (timerId) {
                    clearInterval(timerId);
                    timerId = null;
                }

                const remaining = matchesDates.filter(m => m.datetime > now).sort((a, b) => a.datetime - b.datetime);
                if (remaining.length) {
                    next = remaining[0];
                    if (!timerId) timerId = setInterval(updateCountdown, 1000);
                    updateCountdown();
                    return;
                }

                // No more matches: set zeros
                els.daysEl.textContent = '0';
                els.hoursEl.textContent = '0';
                els.minutesEl.textContent = '0';
                els.secondsEl.textContent = '0';
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            els.daysEl.textContent = String(days);
            els.hoursEl.textContent = String(hours);
            els.minutesEl.textContent = String(minutes);
            els.secondsEl.textContent = String(seconds);
        }

        // Avvia countdown
        updateCountdown();
        if (!timerId) timerId = setInterval(updateCountdown, 1000);
    } catch (error) {
        console.error("Errore durante il caricamento delle partite: " + error.message);
    }  
};

renderNextMatch();


// Load footer component
document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('footer')) {
    document.body.appendChild(Footer());
  }
});



// SHOW SCROLL TO TOP BUTTON
const turnUpButton = document.getElementById('turn-up-btn');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset || 0;
    // If scroll position is greater then 300 show button
    if (scrollPosition >= 300) {
        turnUpButton.classList.remove('hidden');
        turnUpButton.classList.add('flex');
    // otherwise hide it
    } else {
        turnUpButton.classList.remove('flex');
        turnUpButton.classList.add('hidden');
    }
});






