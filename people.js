async function getCharacter() {
  let url = "https://www.breakingbadapi.com/api/characters";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderCharacters() {
  let characters = await getCharacter();
  let html = "";
  characters.forEach((character) => {
    let htmlSegment = `<div class="character">
                            <img src="${character.img}" class="people-img">
                            <h2 class="name">${character.name} </h2>
                            <div class="birthday"><p>${character.birthday}</p></div>
                        </div>`;

    html += htmlSegment;
  });

  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderCharacters();
