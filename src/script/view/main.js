import '../component/diskon-sidebar.js';
import '../component/minum-list.js';
import '../component/search-bar.js';
import HausLogo from '../../assets/img/HausLogo.png';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const receipeListElement = document.querySelector("minum-list");
    const loaderElement = document.querySelector("#loader-text");
    document.querySelector('#Logo').src = HausLogo;
    
    const onButtonSearchClicked = () => {
        searchDrinks(searchElement.value);
    };

    const searchDrinks = async (keyword) => {
        loaderElement.style.display = 'block';

        try {
            const result = await DataSource.searchDrinks(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = drinks => {
        loaderElement.style.display = 'none';
        receipeListElement.receipes = drinks;
    };

    const fallbackResult = message => {
        loaderElement.style.display = 'none';
        receipeListElement.renderError(message);
    };

    searchDrinks('');

    searchElement.clickEvent = onButtonSearchClicked;

};

export default main;