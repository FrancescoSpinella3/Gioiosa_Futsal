async function renderTimeLine() {
    // Container timeline
    const containerTimeLine = document.getElementById('time-line');

    try {
        // Get time line from storia.json file
        const response = await fetch('/data/storia.json');
        const timeLine = await response.json();

        if (!response.ok) {
            throw new Error(`Errore HTTP! Status: ${response.status}`);
        }

        // Loop through time line and create HTML structure
        timeLine.forEach((slide, i) => {
            const boxTimeLine = document.createElement('div');
            boxTimeLine.className = "box-time-line flex flex-col items-center relative min-h-[300px] mb-10 bg-white rounded-md lg:flex-row lg:mb-20";

            // Toggle layout. If odd, reverse slide content
            if (i % 2 !== 0) {
                boxTimeLine.classList.add('lg:flex-row-reverse');
            }
            
            boxTimeLine.innerHTML = `
                <div class="time-line_content flex flex-col flex-1 py-5 px-0 lg:py-0 lg:px-12">
                    <h3 class="time-line_title text-center font-bold text-2xl mb-4 text-(--main-color) xs:text-3xl lg:text-4xl lg:text-left">${slide.year}</h3>
                    <p class="time-line_description text-[1em] p-5 leading-7 text-center text-(--secondary-text-color) xs:text-lg lg:p-0 lg:text-xl lg:text-left">${slide.description}</p>
                </div>
                
                <div class="time-line_img shrink-0 my-0 mx-auto order-1 overflow-hidden lg:order-0 lg:w-1/2">
                    <img src="${slide.img}" 
                        alt="Foto di squadra ${slide.year}"
                        class="w-full h-auto rounded-bl-md rounded-br-md ${i % 2 !== 0 ? 'lg:rounded-br-none lg:rounded-bl-md lg:rounded-tl-md' : 'lg:rounded-bl-none lg:rounded-br-md lg:rounded-tr-md'}"
                        loading= "lazy">
                </div>
            `;

            // Append slide to main container
            containerTimeLine.appendChild(boxTimeLine);
        });
    
        // Send to console the error 
    } catch (error) {
        console.error("Errore durante il recupero della timeline: " + error);
    }
}   

// Call function
renderTimeLine();