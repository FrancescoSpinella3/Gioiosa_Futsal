async function renderRosa() {
    // Containers
    const portieri = document.getElementById('container-portieri');
    const giocatori = document.getElementById('container-giocatori-di-movimento');
    const mister = document.getElementById('container-mister');

    try {
        // Get players from rosa.json
        const response = await fetch('/data/rosa.json');
        const playerList = await response.json();

        if (!response.ok) {
            throw new Error(`Errore HTTP! Status: ${response.status}`);
        }

        // Insert the player for each role 
        playerList.forEach(player => {
            if (player.role === "portiere") {                
                const pl = document.createElement('p');
                pl.className = "text-xl pl-7 pb-2.5 border-b border-black/20";
                pl.textContent = player.name;
                portieri.appendChild(pl);
            }
            else if (player.role === "giocatore di movimento") {
                const g = document.createElement('p');
                g.className = "text-xl pl-7 pb-2.5 border-b border-black/20";
                g.textContent = player.name;
                giocatori.appendChild(g);
            }
            else {
                const m = document.createElement('p');
                m.className = "text-xl pl-7 pb-2.5 border-b border-black/20";
                m.textContent = player.name;
                mister.appendChild(m);
            }
        });
    
    // Send to console the error
    } catch (error) {
        console.error('Errore durante il caricamento della rosa:', error.message);
    }
}

// Call function
renderRosa();