
export function toggleHamburger () {
    const navbar = document.getElementById ("navbar");
    navbar?.classList.toggle("hamburger-on");
    navbar?.classList.toggle("hamburger-off");
    
}