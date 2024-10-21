//api url
const BASE_URL = "https://rickandmortyapi.com/api";
//filters
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

//button and characters container
const buttonLoadMore = document.querySelector("#load-more");
const insertContainer = document.querySelector(".characters-insert");

const getCharacters = async ({ name, species, gender, status, page }) => {
  const API = await fetch(
    `${BASE_URL}/character?name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`
  );
  const characters = await API.json();
  return characters.results;
};

const renderCharacters = (characters) => {
  characters.forEach((character, index) => {
    insertContainer.innerHTML += `
    <!-- card ${index + 1} -->
      <main class="chars-container">
        <div class="char">
          <img src="${character.image}" alt="${
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
  insertContainer.innerHTML = "";
  const status = await getCharacters(defaultFilters);

  renderCharacters(status);
};

const searchCharactersByGender = async ({ target }) => {
  defaultFilters.gender = target.value;
  insertContainer.innerHTML = "";
  const gender = await getCharacters(defaultFilters);
  renderCharacters(gender);
};

const searchCharactersBySpecie = async ({ target }) => {
  defaultFilters.species = target.value;
  insertContainer.innerHTML = "";
  const specie = await getCharacters(defaultFilters);
  renderCharacters(specie);
};

const searchCharactersByName = async ({ target }) => {
  defaultFilters.name = target.value;
  insertContainer.innerHTML = "";
  const name = await getCharacters(defaultFilters);
  renderCharacters(name);
};

const loadMoreCharacters = async () => {
  defaultFilters.page += 1;
  const page = await getCharacters(defaultFilters);
  renderCharacters(page);
};

const addEventListenersOnFilters = () => {
  speciesFilter.addEventListener("change", searchCharactersBySpecie);
  genderFilter.addEventListener("change", searchCharactersByGender);
  statusFilter.addEventListener("change", searchCharactersByStatus);
  nameFilter.addEventListener("input", searchCharactersByName);
  buttonLoadMore.addEventListener("click", loadMoreCharacters);
};

const init = (async () => {
  const insertionAndButton = insertContainer && buttonLoadMore;
  const filtersExist = speciesFilter && genderFilter && statusFilter;

  if (filtersExist && insertionAndButton) {
    const initialRender = await getCharacters(defaultFilters);
    renderCharacters(initialRender);
    addEventListenersOnFilters();
  } else {
    throw new Error("Ocorreu algum problema, tente novamente mais tarde!");
  }
})();
