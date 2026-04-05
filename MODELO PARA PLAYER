async function carregarJSON() {
  const response = await fetch("enemy.json");
  const data = await response.json();

  carregarUI(data);
}

function carregarUI(data) {
  document.getElementById("name").innerText = data.name;
  document.getElementById("image").src = data.image;

  const container = document.getElementById("stats");
  container.innerHTML = "";

  data.stats.forEach(stat => {
    const div = document.createElement("div");
    div.className = "stat";

    div.innerHTML = `
      <span>${stat.label}</span>
      <div class="circle" style="background:${stat.color}"></div>
    `;

    container.appendChild(div);
  });
}

carregarJSON();
