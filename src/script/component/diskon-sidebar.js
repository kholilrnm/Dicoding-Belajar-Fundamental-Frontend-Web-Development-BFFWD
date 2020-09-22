class DiskonSideBar extends HTMLElement {

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
        .btn-sm {
          background-color: white; 
          border: none;
          color: red;
          padding: 5px 22px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 10px;
          border-radius: 6px;
          border: solid 2px red;
          font-weight: bold;
        }
        p {
          font-family: "Times New Roman", Times, serif;
        }
        .green {
          color: green;
          border: solid 2px green;
        }
      </style>
      <li><button class="btn-sm">Diskon 50 %</button></li>
        <p>Margarita</p>
        <p>Smut</p>
        <p>Rose</p>
        <p>Bijou</p>
      <li><button class="btn-sm green">Diskon 15 %</button></li>
        <p>Affair</p>
        <p>B-52</p>
        <p>Adam</p>
        <p>747</p>`
  }
}

customElements.define("diskon-sidebar", DiskonSideBar);