async function carregarJSON() {
  try {
    const response = await fetch("enemy.json?nocache=" + Date.now());

    if (!response.ok) {
      throw new Error("Erro ao carregar o JSON");
    }

    const data = await response.json();
    carregarUI(data);

  } catch (error) {
    console.error("Erro:", error);
    document.body.innerHTML = "<h2>Erro ao carregar dados</h2>";
  }
}

function carregarUI(data) {
  // Nome e imagem
  document.getElementById("name").innerText = data.name;
  document.getElementById("image").src = data.image;

  const container = document.getElementById("stats");
  container.innerHTML = "";

  // Criar stats dinamicamente
  data.stats.forEach(stat => {
    const div = document.createElement("div");
    div.className = "stat";

    div.innerHTML = `
      <span>${stat.label}: ${stat.value}</span>
      <div class="circle" style="background:${stat.color}"></div>
    `;

    container.appendChild(div);
  });
}

// inicia tudo
carregarJSON();
