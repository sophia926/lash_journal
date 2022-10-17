    /* eslint-disable */

// My Starter JavaScript Template

// Journal Entry Form

const entryForm = document.querySelector("#entryForm");
const entryResultsSection = document.querySelector("#entryResultsSection");
const entryResultRow = document.querySelector(".entryResultRow");

const getEntryTitle = document.getElementsByClassName("entry-text-title");
const getEntryText = document.getElementsByClassName("entry-text-box");

// const getEntryText = document.getElementsByClassName("entry-text-box");

function addEntryToDom(event) {
        event.preventDefault();


        const heading = document.createElement("h2");
        heading.className = "heading-results";
        // heading.textContent = "Journal Entries";
        entryResultRow.insertAdjacentElement("beforebegin", heading)

        // Adding Div
        const entryDiv = document.createElement("div");
        entryDiv.className = "single-entry-div";
        entryResultRow.appendChild(entryDiv);

        // Adding Div Element h3
        const entryHeading = document.createElement("h3");
        entryHeading.className = "single-entry-heading";
        entryHeading.textContent = getEntryTitle[0].value;
        entryDiv.appendChild(entryHeading);

        // Adding Div Element paragraph

        const entryParagraph = document.createElement("p");
        entryParagraph.className = "single-entry-text";
        entryParagraph.textContent = getEntryText[0].value;
        entryDiv.appendChild(entryParagraph);
        getEntryText[0].value = "";
}

entryForm.addEventListener("submit", addEntryToDom);

// Collapsible enter a new journal entry
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Gratitude collapsible
var coll = document.getElementsByClassName("grat-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// MOOD SLIDER
var slider = document.getElementById("mood");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = slider.value;
  output = slider.value;
  document.getElementById("output").innerHTML = output;
}


function gratitudeGen() {
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '222daebd02msh197e0db183672fap17cc9djsn8a1f2f813e5b',
          'X-RapidAPI-Host': 'gratitude-questions.p.rapidapi.com'
      }
  };

  fetch('https://gratitude-questions.p.rapidapi.com/question', options)
      .then(response => response.json())
      // .then(response => console.log(response))
      // .then(response => (question = response))
      .then(response => (document.getElementById("gratituderesult").innerHTML = response['question']))
      .catch(err => console.error(err));
}