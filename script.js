async function searchCountry() {
  const input = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("countryResult");
  resultDiv.innerHTML = "Loading...";

  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${input}`);
    if (!response.ok) throw new Error("Country not found");

    const data = await response.json();
    const country = data[0];

    resultDiv.innerHTML = `
      <h2>${country.name.common}</h2>
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="100"/>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}                                                                                                                                 
