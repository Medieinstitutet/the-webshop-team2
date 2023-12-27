export function toggleHamburger() {
  const navbar = document.getElementById("navbar");
  const toggleTest = () => {
    navbar?.classList.toggle("hamburger-on");
    navbar?.classList.toggle("hamburger-off");
  };
  toggleTest();
}
