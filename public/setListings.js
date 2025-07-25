// get data
const getExistingData = async ()=>{
  try  {
    const res = await fetch("/api")
    const data = await res.json()
    return data
  } catch (e){
    console.error(e)
  }
}

// get card container
const cardsContainer = document.querySelector(".cards-container")

// get data stored
const data = await getExistingData()

if (cardsContainer) {

    data.forEach((card) => {
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


