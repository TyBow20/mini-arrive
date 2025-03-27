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

function exportToExcel() {
  const form = document.getElementById("loan-form");
  const formData = new FormData(form);
  let csvRows = [["Field", "Value"]]; // Add header row

  formData.forEach((value, key) => {
    csvRows.push([key, value]);
  });

  const csvContent = csvRows
    .map((row) => row.map((item) => `"${item.replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", "loan_application.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
