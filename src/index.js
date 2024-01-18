import './styles/main.css';
import firstLoad from './pages/firstload';
import setMenu from './pages/menu';

firstLoad();
setMenu();


const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener('click', () => {
    console.log(menuBtn);
    setMenu();
})