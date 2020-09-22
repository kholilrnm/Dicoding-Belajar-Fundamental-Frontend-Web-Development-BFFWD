class FooterApp extends HTMLElement {

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
            .footer {
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #fc9432;
                color: white;
                text-align: center;
                align-items: center;
                clear: both;
                height: 60px;	
                line-height: 60px;
            }
        </style>
            <div class="footer">
                <p>Made With ❤ By Kholil</p>
            </div>`
    }
}

customElements.define("footer-app", FooterApp);