document.getElementById('showButton').add EventListener('click', function() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysList = document.getElementById('daysList');

    // Clear any existing list items
    daysList.innerHTML = '';

    // Create a list item for each day and add it to the unordered list
     // Loop through the array of days and create list items for each day
    daysOfWeek.forEach(day => {
        const listItem = document.createElement('li');// Create a new list item element
        listItem.textContent = day;// Set the text content of the list item to the current day
        daysList.appendChild(listItem); // Append the list item to the unordered list
    });
});
