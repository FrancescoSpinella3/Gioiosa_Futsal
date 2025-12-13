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
        <img src="/src/assets/images/logo-nav.webp" 
            alt="Logo" 
            class="h-14 w-auto"
            draggable="false">
    
    `;
    nav.appendChild(navLogo);

    const navLinks = document.createElement('ul');
    navLinks.className = "hidden gap-5 text-lg font-medium text-(--light-text-color) lg:flex *:relative *:after:content-[''] *:after:absolute *:after:left-0 *:after:bottom-[-34px] *:after:w-0 *:after:h-[3px] *:after:bg-white *:after:transition-all *:after:duration-300 *:hover:after:w-full *:z-10";
    navLinks.innerHTML = `
        <li id="home"><a href="/index.html">HOME</a></li>
        <li id="stagione">
            <a href="#">STAGIONE</a>
            
            <!-- Submenu -->
            <ul id="submenu" class="flex-col bg-white text-(--secondary-text-color) text-[1rem] font-medium w-48 absolute hidden z-50">
                <li class="pl-5 py-3 border-b border-black/20"><a href="/src/pages/stagione/calendario.html">CALENDARIO</a></li>
                <li class="pl-5 py-3"><a href="/src/pages/stagione/classifica.html">CLASSIFICA</a></li>
            </ul>
        </li>
        <li id="storia"><a href="/src/pages/storia.html">STORIA</a></li>
        <li id="rosa"><a href="/src/pages/rosa.html">ROSA</a></li>
    `;
    nav.appendChild(navLinks);

    // Logo C2
    const logoLeague = document.createElement('img');
    logoLeague.className = "h-14 w-auto hidden lg:block";
    logoLeague.src = "/src/assets/images/logo-lega.webp"
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
        <li id="home-mobile"><a href="/index.html">HOME</a></li>
        <li id="stagione-mobile">
            <div class="container-link flex items-center justify-between">
                <a href="#">STAGIONE</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 duration-200 ease-out">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            <!-- Submenu mobile -->
            <ul id="submenu-mobile">
                <li class="hover:underline"><a href="/src/pages/stagione/calendario.html">CALENDARIO</a></li>
                <li class="hover:underline"><a href="/src/pages/stagione/classifica.html">CLASSIFICA</a></li>
            </ul>
        </li>
        <li id="storia-mobile"><a href="/src/pages/storia.html">STORIA</a></li>
        <li id="rosa-mobile"><a href="/src/pages/rosa.html">ROSA</a></li>
    `;
    mobileMenu.appendChild(mobileLinks)

    // Style elements li 
    const mobileLi = mobileMenu.querySelectorAll('.mobile-links li');
    mobileLi.forEach(li => {
        li.className = "py-4 px-7 border-b border-black/30";
    });

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
   
    mobileSubmenu.className = "hidden w-full flex-col text-(--light-text-color) text-lg font-medium px-4 pt-4";
    
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
