// Find form by class (upload.html)
const form = document.querySelector("form.form-container");

// form inputs
const timeInput = document.getElementById("time");
const locationInput = document.getElementById("location");
const titleInput = document.getElementById("title");
const detailsInput = document.getElementById("details"); 


// Handle form submit on upload page
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (
      !timeInput.value ||
      !locationInput.value.trim() ||
      !titleInput.value.trim() ||
      !detailsInput.value.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    const date = new Date(timeInput.value);
    const formattedDate = date.toLocaleString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const entry = {
      time: formattedDate,
      location: locationInput.value.trim(),
      title: titleInput.value.trim(),
      details: detailsInput.value.trim(),
    };

    const response = fetch("/api", {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(entry)
    })
    if (response.ok){
      alert("data sent")
    } else if(!response.ok) {
      alert("fucked up")
    }

    form.reset();

    window.location.href = "read.html";
  });
}

