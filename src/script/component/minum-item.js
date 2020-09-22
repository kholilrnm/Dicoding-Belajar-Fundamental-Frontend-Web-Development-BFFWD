import IconUtensils from "../../assets/img/utensils.svg";

class MinumItem extends HTMLElement {

    set receipe(item) {
        this._item = item;
        this.render();
    }

    switchPage() {
        $('main').hide();
        $('.details').show();
    }

    render() {
        this.innerHTML = `
        <style>
            .card .card-body .card-title {
                font-size: 0.9rem;
            }
            .card .card-body .card-text {
                font-size: 0.7rem;
            }
            .card {
                font-family: "Open Sans", sans-serif;
                cursor: pointer;
                border: 0;
            }
            .card:hover {
                opacity: 0.7;
            }
            .card img.card-img {
                height: 140px;
                object-fit: cover;
                border-radius: 1rem;
            }
            .card .card-body {
                padding: 1.25rem 0 1.25rem 0;
            }
            .icon-svg {
                width: 11px;
                margin-top: -3px;
            }
        </style>
        <div class="col mb-4">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor=".jumbotron">
                <div class="card card-receipe" data-id="${this._item.id}">
                    <img src="${this._item.strDrinkThumb}" class="card-img card-img-top" alt="${this._item.strDrink} id=cardimg" />
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${this._item.strDrink}</h5>
                        <p class="card-text">
                            <span class="float-left"><img src="${IconUtensils}" class="icon-svg"> ID : ${this._item.idDrink}</span>
                            <span class="float-right"><i class="fa fa-clock-o"></i>  ${this._item.dateModified}</span>
                            <span class="float-left" style="margin-top: 5px">${this._item.strInstructions}</span> 
                        </p>
                    </div>
                </div>
            </div>
        </div>`;

        let delay = 0;
        $('[data-aos]').each(function () {
            if ($(this).is(":visible") == true) {
                delay = delay + 400;
                $(this).attr('data-aos-delay', delay);
            }
        });

    }
    
}

customElements.define("minum-item", MinumItem);