function checkZillow() {
  const address = document.getElementById("propertyAddress").value.trim();
  const city = document.getElementById("propertyCity").value.trim();
  const state = document.getElementById("propertyState").value.trim();

  if (!address || !city || !state) {
    alert("Please enter Street Address, City, and State.");
    return;
  }

  const query = encodeURIComponent(`${address}, ${city}, ${state}`);
  const url = `https://www.zillow.com/homes/${query}_rb/`;
  window.open(url, "_blank");
}
