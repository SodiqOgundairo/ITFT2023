const getDataButton = document.getElementById("getDataButton");
const resultsDiv = document.getElementById("results");

getDataButton.addEventListener("click", function() {
//    document.write("clicked");

  fetch("../php/getData.php") // Replace with the actual path to your PHP script

    .then(response => response.json())
    .then(data => {
        // Display the retrieved data in the resultsDiv
        resultsDiv.innerHTML = ""; // Clear any previous content
        console.log(data)

        //looping through our json content
      data.forEach(row => {
        resultsDiv.innerHTML += `<p>Name: ${row.student_name}, Grade: ${row.student_grade}</p>`; // Customize the display as needed
      });
    })
    .catch(error => {
      
      console.error("Error fetching data:", error);
      // Handle errors gracefully, e.g., display an error message to the user
    });
});

let array = []

// console.log('log')
// console.table ('ass')
// console.error('error')
// console.warn('warning')
