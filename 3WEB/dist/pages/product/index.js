import { BackButtonComponent } from "../../components/back-button";
import { MainPage } from "../main";
export class ProductPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }
    getData() {
        const allDogs = [
            {
                id: 1,
                src: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
                title: "Лабрадор",
                breed: "Лабрадор-ретривер",
                age: 3,
                text: "Дружелюбная и энергичная порода",
                description: "Лабрадоры — одна из самых популярных пород в мире. Они известны своим дружелюбным характером, интеллектом и любовью к воде. Отличные компаньоны для активных семей."
            },
            {
                id: 2,
                src: "https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg",
                title: "Немецкая овчарка",
                breed: "Немецкая овчарка",
                age: 4,
                text: "Умная и преданная собака",
                description: "Немецкие овчарки — универсальные рабочие собаки. Они используются в полиции, армии, как поводыри и спасатели. Очень преданные и легко обучаемые."
            },
            {
                id: 3,
                src: "https://www.purina.co.uk/sites/default/files/2020-12/Bulldog_0.jpg",
                title: "Бульдог",
                breed: "Английский бульдог",
                age: 5,
                text: "Спокойная и уравновешенная порода",
                description: "Бульдоги известны своим спокойным и дружелюбным характером. Они отлично подходят для жизни в квартире и становятся преданными членами семьи."
            },
            {
                id: 4,
                src: "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg",
                title: "Золотистый ретривер",
                breed: "Голден ретривер",
                age: 2,
                text: "Интеллектуальная и добрая порода",
                description: "Золотистые ретриверы — невероятно добрые и терпеливые собаки. Они отлично ладят с детьми и другими животными. Часто используются как терапевтические собаки."
            }
        ];
        return allDogs.find(dog => dog.id === this.id);
    }
    get pageRoot() {
        return document.getElementById('product-page');
    }
    getHTML() {
        return `
            <div class="container mt-4">
                <div id="product-page"></div>
            </div>
        `;
    }
    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }
    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));
        const data = this.getData();
        if (data) {
            const productHTML = `
                <div class="card mt-3">
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img src="${data.src}" 
                                 class="img-fluid rounded-start" 
                                 alt="${data.title}">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h2 class="card-title">${data.title}</h2>
                                <p class="card-text">${data.description || data.text}</p>
                                <ul class="list-group list-group-flush">
                                    ${data.breed ? `<li class="list-group-item"><strong>Порода:</strong> ${data.breed}</li>` : ''}
                                    ${data.age ? `<li class="list-group-item"><strong>Возраст:</strong> ${data.age} лет</li>` : ''}
                                    <li class="list-group-item"><strong>Характер:</strong> ${data.text}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            this.pageRoot.insertAdjacentHTML('beforeend', productHTML);
        }
    }
}
