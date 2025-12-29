async function renderMatches() {
    // Container matches
    const containerCalendario = document.getElementById('container-calendario');
    
    try { 
        // Get matches from calendario.json file
        const response = await fetch('/data/calendario.json');
        const matchesList = await response.json();

        if (!response.ok) {
            throw new Error(`Errore HTTP! Status: ${response.status}`);
        }

        // Loop through matches and create HTML structure
        matchesList.forEach(match => {
            const containerMatch = document.createElement('div');
            containerMatch.className = "match w-full flex flex-col gap-5 items-center border-b border-black/20 pb-3 l:flex-row l:gap-24";
            containerMatch.innerHTML = `
                <div class="info-match text-center text-lg leading-5 w-[175px] l:text-start">
                    <p class="league font-medium">${match.league}</p>
                    <p class="league font-semibold text-xl">GIORNATA ${match.matchday}</p>
                    <p class="date text-(--secondary-text-color)">${match.date}</p>
                    <p class="time text-(--secondary-text-color)">${match.time}</p>
                </div>
                <div class="teams w-full flex items-center justify-between text-center gap-10">
                    <div class="home-team w-75 flex flex-col items-center gap-2 lg:flex-row-reverse lg:gap-4">
                        <img src="${match.homeIcon}" alt="${match.home}" class="h-14 w-auto">
                        <p class="font-bold md:text-xl">${match.home.toUpperCase()}</p>
                    </div>
                    <p class="text-xl font-bold">VS</p>
                    <div class="away-team w-75 flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
                        <img src="${match.awayIcon}" alt="${match.away}" class="h-14 w-auto">
                        <p class="font-bold md:text-xl">${match.away.toUpperCase()}</p>
                    </div>
                </div>
            `;
            
            // Append match container to main container
            containerCalendario.appendChild(containerMatch);
        }); 
    // Send to console the error    
    } catch (error) {
        console.error("Errore durante il caricamento del calendario delle partite: ", error);
    }
}

// Call function
renderMatches();