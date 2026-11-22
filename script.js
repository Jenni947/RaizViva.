
const species = [
  {
    popular: "Ipê-amarelo",
    scientific: "Handroanthus albus",
    region: "Mata Atlântica",
    description: "Árvore conhecida pela floração amarela. Suas flores atraem polinizadores.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/01%20Handroanthus%20albus.jpg",
    source: "https://commons.wikimedia.org/wiki/Category:Handroanthus_albus"
  },
  {
    popular: "Ingá",
    scientific: "Inga vera",
    region: "Mata ciliar",
    description: "Espécie associada a ambientes úmidos e margens de rios. Seus frutos são importantes para a fauna.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Inga%20vera%20-%20Nelson%20Wisnik%20-%20343478842.jpeg",
    source: "https://commons.wikimedia.org/wiki/Category:Inga_vera"
  },
  {
    popular: "Angico-vermelho",
    scientific: "Anadenanthera colubrina",
    region: "Diversos biomas",
    description: "Árvore nativa brasileira da família Fabaceae, com folhas compostas e flores reunidas em inflorescências.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Anadenanthera%20colubrina%20tree.jpg",
    source: "https://commons.wikimedia.org/wiki/Category:Anadenanthera_colubrina"
  },
  {
    popular: "Sangra-d'água",
    scientific: "Croton urucurana",
    region: "Mata ciliar",
    description: "Árvore frequentemente encontrada em ambientes úmidos e áreas próximas a cursos d'água.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Croton%20urucurana%20%282%29.jpg",
    source: "https://commons.wikimedia.org/wiki/Category:Croton_urucurana"
  },
  {
    popular: "Pau-brasil",
    scientific: "Paubrasilia echinata",
    region: "Mata Atlântica",
    description: "Árvore nativa da Mata Atlântica, de grande importância histórica e conservação.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paubrasilia%20echinata%20-%20Jardim%20Bot%C3%A2nico%20de%20S%C3%A3o%20Paulo%20-%20DSC%200201.jpg",
    source: "https://commons.wikimedia.org/wiki/Category:Paubrasilia_echinata"
  }
];

const grid = document.getElementById("plants");
const search = document.getElementById("search");
const region = document.getElementById("region");
const empty = document.getElementById("empty");

function renderPlants() {
  const term = search.value.toLocaleLowerCase("pt-BR");
  const selectedRegion = region.value;

  const filtered = species.filter(plant => {
    const matchesName =
      plant.popular.toLocaleLowerCase("pt-BR").includes(term) ||
      plant.scientific.toLowerCase().includes(term);

    const matchesRegion =
      selectedRegion === "Todas" || plant.region === selectedRegion;

    return matchesName && matchesRegion;
  });

  grid.innerHTML = filtered.map(plant => `
    <article class="plant-card">
      <img
        src="${plant.image}"
        alt="Fotografia de referência da espécie ${plant.popular}"
        loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1448375240586-882707db888b?w=800'; this.alt='Imagem ilustrativa de floresta';"
      >
      <div class="card-content">
        <span class="category">${plant.region}</span>
        <h3>${plant.popular}</h3>
        <p class="scientific">${plant.scientific}</p>
        <p class="description">${plant.description}</p>
        <a class="card-source" href="${plant.source}" target="_blank" rel="noopener">
          Consultar imagens e referências ↗
        </a>
      </div>
    </article>
  `).join("");

  empty.hidden = filtered.length > 0;
}

search.addEventListener("input", renderPlants);
region.addEventListener("change", renderPlants);

renderPlants();
