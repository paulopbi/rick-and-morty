const BASE_URL = "https://rickandmortyapi.com/api";
const loadMoreButton = document.querySelector("#load-more");
const insertCharContainer = document.querySelector("#characters-insertion");
const errorDiv = document.querySelector("#error");
const speciesFilter = document.querySelector("#species");
const genderFilter = document.querySelector("#gender");
const statusFilter = document.querySelector("#status");
const nameFilter = document.querySelector("#name");
const defaultFilters = {
  name: "",
  species: "",
  gender: "",
  status: "",
  page: 1,
};

const getCharacters = async ({ name, species, gender, status, page }) => {
  try {
    const API = await fetch(
      `${BASE_URL}/character?name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`
    );
    if (!API.ok) {
      throw new Error(
        "Oops can't find more characters 💔, please try again with another name or filter!"
      );
    }
    errorDiv.style.display = "none";
    const characters = await API.json();
    return characters.results;
  } catch (error) {
    console.error("Error: " + error);
    errorDiv.style.display = "block";
    errorDiv.innerHTML = `<p>${error.message}</p>`;
    return [];
  }
};

const renderFirstTime = async () => {
  const char = await getCharacters(defaultFilters);
  renderCharacters(char);
};

const renderCharacters = (characters) => {
  characters.forEach((character, index) => {
    insertCharContainer.innerHTML += `
    <!-- card ${index + 1} -->
      <main class="chars-container">
        <div class="char">
          <img class="char__picture" src="${character.image}" alt="${
      character.name
    }" width="240" height="168" />
          <div class="char-info">
            <h3>${character.name}</h3>
            <hr />
            <div class="char-status">
              <span>${character.species}</span>
              <span>${character.status}</span>
              <span>${character.gender}</span>
            </div>
          </div>
        </div>
      </main>
  `;
  });
};

const searchCharactersByStatus = async ({ target }) => {
  defaultFilters.status = target.value;
  defaultFilters.page = 1;
  insertCharContainer.innerHTML = "";
  const status = await getCharacters(defaultFilters);
  renderCharacters(status);
};

const searchCharactersByGender = async ({ target }) => {
  defaultFilters.gender = target.value;
  defaultFilters.page = 1;
  insertCharContainer.innerHTML = "";
  const gender = await getCharacters(defaultFilters);
  renderCharacters(gender);
};

const searchCharactersBySpecie = async ({ target }) => {
  defaultFilters.species = target.value;
  defaultFilters.page = 1;
  insertCharContainer.innerHTML = "";
  const specie = await getCharacters(defaultFilters);
  renderCharacters(specie);
};

const searchCharactersByName = async ({ target }) => {
  defaultFilters.name = target.value;
  defaultFilters.page = 1;
  insertCharContainer.innerHTML = "";
  const name = await getCharacters(defaultFilters);
  renderCharacters(name);
};

const loadMoreCharacters = async () => {
  defaultFilters.page += 1;
  const page = await getCharacters(defaultFilters);
  insertCharContainer.innerHTML += "";
  renderCharacters(page);
};

const addEventListenersInFilters = () => {
  speciesFilter.addEventListener("change", searchCharactersBySpecie);
  genderFilter.addEventListener("change", searchCharactersByGender);
  statusFilter.addEventListener("change", searchCharactersByStatus);
  nameFilter.addEventListener("input", searchCharactersByName);
  loadMoreButton.addEventListener("click", loadMoreCharacters);
};

const init = (async () => {
  const sectionAndButton = insertCharContainer && loadMoreButton;
  const existFilters = speciesFilter && genderFilter && statusFilter;

  if (existFilters && sectionAndButton) {
    renderFirstTime();
    addEventListenersInFilters();
  } else {
    console.error("Can't find the DOM elements");
    errorDiv.style.display = "block";
    errorDiv.innerHTML = `<p>😔 We have a little problem with this app, please try again later!</p>`;
  }
  return;
})();
