import api from "./api";

class App {
  constructor() {
    this.reopsitories = [];

    this.formEl = document.getElementById("repo-form");
    this.inputEl = document.querySelector("input[name=repository]");
    this.listEl = document.getElementById("repo-list");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault(); //evita que a pág recarrege, como faz o html em um submit

    const repoInput = this.inputEl.value;

    if (repoInput.length === 0) return;

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);

      console.log(response);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      this.reopsitories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      console.log(this.reopsitories);

      this.inputEl.value = "";

      this.render();
    } catch (err) {
      alert("O rep não existe");
    }

    this.setLoading(false);
  }

  render() {
    this.listEl.innerHTML = "";

    this.reopsitories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }

  setLoading(loading = true) {
      if (loading === true) {
         let loadingEl = document.createElement("div");
         //loadingEl.appendChild(document.createTextNode())
         loadingEl.setAttribute("class", "loader");
         loadingEl.setAttribute("id", "loader");
         this.formEl.appendChild(loadingEl);
      } else {
        document.getElementById('loader').remove();
      }

      
  }
}

new App();
