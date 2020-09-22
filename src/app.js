import 'bootstrap';
import "regenerator-runtime";
import "./scss/style.scss";
import "./script/component/header-app.js";
import "./script/component/header-jumbotron.js";
import main from "./script/view/main.js";
import "./script/component/footer.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

document.addEventListener("DOMContentLoaded", main);