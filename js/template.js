const template = document.getElementById("prophet-card");
const data = await fetch("../data/latter-day-prophets.json").then((res) =>
  res.json()
);

template.innerHTML = "";

data["prophets"].forEach((pro) => {
  const card = document.createElement("section");
  card.classList.add("card");

  card.innerHTML = `
          <h2>${pro.name + " " + pro.lastname}</h2>
          <p>${pro.birthdate}</p>
          <p>${pro.birthplace}</p>
          <img
            class="profile"
            src="${pro.imageurl}"
            alt=""
            loading="lazy"
            width="200"
            height="300"
          />`;

  template.appendChild(card);

});

function showContent() {
  document.body.append(
    document.importNode(
      document.getElementById("prophet-card").content,
      true
    )
  )
}

document
  .getElementsByTagName("button")[0]
  .addEventListener("click", showContent);
