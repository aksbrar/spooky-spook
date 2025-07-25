if (cardsContainer) {
    // get data here

    cardsData.forEach((card) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <p class="card-time">${card.time}, ${card.location}</p>
        <p class="card-title">${card.title}</p>
        <p class="card-details">${card.details}</p>
      `;
      cardsContainer.appendChild(div);
    });
  }


