
function addArtistResponse(container, data) {
  const card = document.createElement("div");
  card.className = "card mb-3";
  card.style.maxWidth = "540px";

  const row = document.createElement("div");
  row.className = "row g-0";

  const imgCol = document.createElement("div");
  imgCol.className = "col-md-4";

  const img = document.createElement("img");
  img.src = data.images?.[0]?.url || "";
  img.alt = `Artist photo for ${data.name}`;
  img.className = "img-fluid rounded-start";

  imgCol.appendChild(img);

  const bodyCol = document.createElement("div");
  bodyCol.className = "col-md-8";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = data.name;

  const genres = document.createElement("p");
  genres.className = "card-text";
  genres.innerHTML = `<strong>Géneros:</strong> ${
    (data.genres && data.genres.length ? data.genres.join(", ") : "—")
  }`;

  const followers = document.createElement("p");
  followers.className = "card-text";
  const followersCount = new Intl.NumberFormat("en-US").format(
    data.followers?.total ?? 0
  );
  followers.innerHTML = `<strong>Seguidores:</strong> ${followersCount}`;

  const popularity = document.createElement("p");
  popularity.className = "card-text";
  popularity.innerHTML = `<small class="text-muted"><strong>Popularidad:</strong> ${data.popularity ?? 0}/100</small>`;
//Agregamos todo para que lo despliegue y lo podamos ver en pantalla
  cardBody.append(title, genres, followers, popularity);
  bodyCol.appendChild(cardBody);
  row.append(imgCol, bodyCol);
  card.appendChild(row);
  container.appendChild(card);
}

document.getElementById("fetch-btn").addEventListener("click", async () => {
  const token = document.getElementById("token").value.trim();
  const artistId = document.getElementById("artist-preset").value.trim();

  const container = document.getElementById("track-info");
  container.innerHTML = "";

  const loading = document.createElement("p");
  loading.textContent = "Loading...";
  container.appendChild(loading);

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/artists/" + artistId,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    container.innerHTML = ""; // Clear loading
    addArtistResponse(container, data);
  } catch (err) {
    container.innerHTML = "";
    const error = document.createElement("p");
    error.textContent = err.message;
    error.style.color = "red";
    container.appendChild(error);
  }
});
