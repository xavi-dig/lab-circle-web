const url = "https://jsonplaceholder.typicode.com/posts?_limit=3";
function addProject() {
  fetch(url)
    .then((response) => response.json())
    .then((item2) => {
      let post = "";
      item2.forEach((element) => {
        post += `<div class="card-1">
            <img class="project-1" src="./assets/projects-section/${
              element.id
            }.jpg" alt="${element.id}" />
            <h3>${element.title.slice(0, 20)}</h3>
            <p>${element.body.slice(0, 50)}</p>
            <a href="">Learn more</a>
          </div>`;

        document.querySelector("#projectsCards").innerHTML = post;
      });
    })
    .catch((error) => console.log(error));
}

addProject();
