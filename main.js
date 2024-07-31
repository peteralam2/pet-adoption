async function start(){
  const weatherPromise=await fetch("https://api.open-meteo.com/v1/forecast?latitude=33.8333&longitude=35.8333&current=temperature_2m&forecast_days=1")
  const weatherData= await weatherPromise.json()

  const ourTemperature= weatherData.current.temperature_2m
  document.querySelector("#temperature-output").textContent = ourTemperature
}

start()


async function petsArea(){
    const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
    const petsData = await petsPromise.json()
    petsData.forEach(pet => {
      console.log(pet.name)
    })
}

petsArea()