// HEADER COMPONENT

export function Header() {
    const header = document.createElement("header");
    header.className = "fixed w-full z-50";

    const body = document.body;

    // Container nav
    const containerNav = document.createElement("div");
    containerNav.className = "container-nav w-full bg-(--main-color) shadow-lg";

    const nav = document.createElement("nav");
    nav.className = "max-w-6xl h-24 py-2 px-4 mx-auto flex items-center justify-between";

    // Nav logo
    const navLogo = document.createElement('a');
    navLogo.href = "/index.html#hero";
    navLogo.innerHTML = `
        <img src="/assets/images/logo-nav.webp" 
            alt="Logo" 
            class="h-14 w-auto"
            draggable="false">
    
    `;
    nav.appendChild(navLogo);

    const navLinks = document.createElement('ul');
    navLinks.className = "hidden gap-5 text-lg font-medium text-(--light-text-color) lg:flex *:relative *:after:content-[''] *:after:absolute *:after:left-0 *:after:bottom-[-34px] *:after:w-0 *:after:h-[3px] *:after:bg-white *:after:transition-all *:after:duration-500 *:hover:after:w-full *:z-10";
    navLinks.innerHTML = `
        <li id="home"><a href="/">HOME</a></li>
        <li id="stagione">
            <a href="#">STAGIONE</a>
            
            <!-- Submenu -->
            <ul id="submenu" class="flex-col bg-white text-(--secondary-text-color) text-[1rem] font-medium w-48 absolute hidden z-50">
                <li class="pl-5 py-3 border-b border-black/20"><a href="/stagione/calendario.html">CALENDARIO</a></li>
                <li class="pl-5 py-3"><a href="/stagione/classifica.html">CLASSIFICA</a></li>
            </ul>
        </li>
        <li id="storia"><a href="/storia.html">STORIA</a></li>
        <li id="rosa"><a href="/rosa.html">ROSA</a></li>
    `;
    nav.appendChild(navLinks);

    // Logo C2
    const logoLeague = document.createElement('img');
    logoLeague.className = "h-14 w-auto hidden lg:block";
    logoLeague.src = "/assets/images/logo-lega.webp"
    logoLeague.alt = "Logo lega";
    logoLeague.setAttribute('draggable', 'false');
    nav.appendChild(logoLeague);



    // Burger menu
    const burgerMenu = document.createElement('div');
    burgerMenu.className = "burger-menu flex flex-col items-end gap-1.5 lg:hidden";
    for (let i = 1; i <= 3; i++) {
        const bar = document.createElement('span');
        bar.className = "h-0.75 rounded-md w-7 bg-white duration-200 ease-out origin-center";
        burgerMenu.appendChild(bar);
    }
    nav.appendChild(burgerMenu);



    // MOBILE MENU
    const mobileMenu = document.createElement('div');
    mobileMenu.className = "hidden relative bg-(--main-color) text-(--light-text-color) w-screen h-screen lg:hidden transform -translate-x-full transition-transform duration-400 ease-in-out";
    mobileMenu.setAttribute('aria-hidden', 'true');
    const mobileLinks = document.createElement('ul');
    mobileLinks.className = "mobile-links text-xl font-semibold w-full flex flex-col";
    mobileLinks.innerHTML = `
        <li id="home-mobile"><a href="/">HOME</a></li>
        <li id="stagione-mobile">
            <div class="container-link flex items-center justify-between">
                <a href="#">STAGIONE</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 duration-400 ease-out">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </li>
        <!-- Submenu mobile -->
        <div id="submenu-mobile">
            <li><a href="/stagione/calendario.html">CALENDARIO</a></li>
            <li><a href="/stagione/classifica.html">CLASSIFICA</a></li>
        </div>
        <li id="storia-mobile"><a href="/storia.html">STORIA</a></li>
        <li id="rosa-mobile"><a href="/rosa.html">ROSA</a></li>
    `;
    mobileMenu.appendChild(mobileLinks)

    // Style elements li 
    const mobileLi = mobileMenu.querySelectorAll('.mobile-links li');
    mobileLi.forEach(li => {
        li.className = "py-4 px-7 border-b border-black/30";
    });

    // Mobile contact
    const containerContact = document.createElement('div');
    containerContact.className = "absolute left-5 bottom-75 flex items-center gap-3"
    containerContact.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8 text-yellow-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>

        <div class="flex flex-col gap-1 text-(--light-text-color) leading-4">
            <p class="font-medium">CONTATTI</p>
            <a href="mailto:geomdinardo@gmail.com">geomdinardo@gmail.com</a> 
        </div>

    `;
    mobileMenu.appendChild(containerContact);

    
    // Mobile social
    const mobileSocial = document.createElement('div');
    mobileSocial.className = "absolute left-5 bottom-55 flex gap-2.5";
    mobileSocial.innerHTML = `
        <!-- Instagram -->
        <a href="https://www.instagram.com/futsal_polisportiva_gioiosa/" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-8 fill-(--light-text-color) hover:transform hover:translate-x-2 duration-300" aria-label="Logo Instagram" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
        </a>
        <!-- Facebook -->
        <a href="https://www.facebook.com/groups/119099111483290" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-8 fill-(--light-text-color) hover:transform hover:translate-x-2 duration-300" aria-label="Logo Facebook" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L258.2 544L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96z"/></svg>
        </a>
    `;
    mobileMenu.appendChild(mobileSocial)

    // Mobile logos league
    const mobileLogosLeague = document.createElement('div');
    mobileLogosLeague.classList.add('absolute', 'left-5', 'bottom-30')
    mobileLogosLeague.innerHTML = `
        <img src="/assets/images/logo-lega.webp"
            class="h-16" 
            alt="Logo lega"
            loading="lazy"
            draggable="false">
    `;
    mobileMenu.appendChild(mobileLogosLeague);

    // Append elements
    containerNav.appendChild(nav);
    header.appendChild(containerNav);
    header.appendChild(mobileMenu);



    // ACTIVE NAVIGATION BAR LINK
    // determino la pagina corrente e applico la classe active sia su desktop che su mobile
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const pages = {
        'index.html': 'home',
        '': 'home', // per la root
        'calendario.html': 'stagione',
        'classifica.html': 'stagione',
        'storia.html': 'storia',
        'rosa.html': 'rosa',
    };

    const activeLinkId = pages[currentPath];
    if (activeLinkId) {
        header.querySelectorAll('li, li a').forEach(el => {
            el.classList.remove('active', 'underline', 'underline-offset-39', 'underline-4', 'decoration-4');
        });

        const activeItems = header.querySelectorAll(`#${activeLinkId}`);
        activeItems.forEach(item => {
            item.classList.add('active');
            const a = item.querySelector('a');
            if (a) a.classList.add('underline', 'underline-offset-39', 'underline-4', 'decoration-4');
        });
    }

    
    // Function to active desktop submenu 
    const stagioneLi = header.querySelector('#stagione');
    const submenu = header.querySelector('#submenu');

    document.addEventListener('click', (e) => {
        // If click happens insided the stagioneLi element, show submenu
        if (stagioneLi.contains(e.target)) {
            submenu.classList.remove('hidden');
            submenu.classList.add('flex');
        }
        // otherwise, hide it
        else {
            submenu.classList.remove('flex');
            submenu.classList.add('hidden');
        }
    });


    // Function to active mobile menu
    // Open menu function
    function openMenu() {
        
        mobileMenu.classList.remove('hidden');
        mobileMenu.setAttribute('aria-hidden', 'false');
        mobileMenu.offsetHeight;
        mobileMenu.classList.remove('-translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        
        burgerMenu.setAttribute('aria-expanded', 'true');
        burgerMenu.classList.add('open');
        body.classList.add('overflow-hidden');
    }

    // Close menu function
    function closeMenu() {

        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('-translate-x-full');
        mobileMenu.setAttribute('aria-hidden', 'true');

        burgerMenu.setAttribute('aria-expanded', 'false');
        burgerMenu.classList.remove('open')
        body.classList.remove('overflow-hidden'); 
    }

    // Active mobile menu on burger menu click 
    burgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        if (isOpen) closeMenu();
        else openMenu();
    });

    // Close menu on escape button click
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) closeMenu();
    });


    // MOBILE MENU
    // Function to active mobile submenu
    const mobileSubmenu = header.querySelector('#submenu-mobile');
    const mobileSubmenuLi = header.querySelectorAll('#submenu-mobile li');
    const containerLink = header.querySelector('.container-link');
    const arrwIcon = containerLink.querySelector('svg');
   
    mobileSubmenu.className = "hidden w-full flex-col bg-gray-200 text-(--secondary-text-color) text-lg font-semibold px-7 py-4 border-b border-black/30";
    
    // Submenu li delete border
    mobileSubmenuLi.forEach(li => {
        li.className = "border-none";
    });


    // Action
    containerLink.addEventListener('click', () => {
        mobileSubmenu.classList.toggle('hidden');
        arrwIcon.classList.toggle('rotate-180');
    });
    

    return header;
}
