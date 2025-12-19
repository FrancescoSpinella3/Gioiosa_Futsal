// TURN UP BUTTON
export function TurnUpButton() {
    const btn = document.createElement('button');
    btn.type = "button";
    btn.className = "turn-up-btn fixed hidden items-center justify-center bottom-6 right-6 bg-black/40 text-white p-2.5 size-10 rounded-full cursor-pointer hover:bg-black/60 duration-200 ease-out";
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
        </svg>
    `;

    // Show button: toggle visibility on scroll and run once initially
    function toggleVisibility() {
        const scrollPosition = window.scrollY || window.pageYOffset || 0;
        if (scrollPosition >= 300) {
            btn.classList.remove('hidden');
            btn.classList.add('flex');
        } else {
            btn.classList.remove('flex');
            btn.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', toggleVisibility);
    // Set initial visibility (in case page is already scrolled)
    toggleVisibility();

    // Scroll to top (or to .hero) on click
    btn.addEventListener('click', () => {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.scrollIntoView({
                behavior: "smooth",
                block: 'start'
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    return btn;
}
