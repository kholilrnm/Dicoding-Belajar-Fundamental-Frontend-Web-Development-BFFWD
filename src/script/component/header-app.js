import HausLogo from '../../assets/img/HausLogo.png';

class HeaderBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: cornflowerblue;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                padding: 16px;
            }
            .logoBrandHaus {
                    width: 70px;
                    padding: 10px;
            }
            .header {
                top: 0;
                left: 0;
                overflow: hidden;
                background-color: #fc9432;
                width: 100%;
            }
            .header a {
                margin-right: 1%;
                float: left;
                display: block;
                color: #f2f2f2;
                text-align: center;
                padding: 16px 18px;
                text-decoration: none;
                font-size: 14px;
                font-weight: bold;
            }
            .header a.hoverbro:hover {
                padding: 16px 18px;
                border-radius: 10%;
                background-color: #f5ac67;
                color: black;
            }
            .header .nohover {
                margin-right: 1%;
                border-width: 2px;   
            }
            .header a.active {
                border-radius: 10%;
            }
            .header .icon {
                display: none;
            }
            .headkanan {
                float: right;
                padding: 5px 5px;
            }
            .header .profile {
                margin-top: 1%;
            }
            @media screen and (max-width: 600px) {
                .header .none {
                    display: none;
                }
            }
        </style>
        <header class="header" id="myheader">
            <nav>
            <ul>
                <div class="headkiri">
                    <a class="nohover" href=""><img src="${HausLogo}" class="logoBrandHaus" alt="Undefined"></a>
                    <a href="#home" class="profile active hoverbro fontjudul smooth-scroll none">Home</a>
                    <a href="#mulai" class="profile active hoverbro fontjudul smooth-scroll none">#MulaiDuluDenganHausBosque</a>
                    <a href="#artikel-resep" class="profile active hoverbro fontjudul smooth-scroll none">Artikel & Resep</a>
                    <a href="#produk" class="profile active hoverbro fontjudul smooth-scroll none">Produk HausBosque</a>
                </div>
                <div class="headkanan">
                    <a href="https://www.dicoding.com/academies/163" target="_blank" class="submisi fontjudul">Submission Dicoding</a>
                </div>
            </ul>
            </nav>
        </header>`
    }
}

customElements.define("header-app", HeaderBar);