document.getElementById('showButton').add EventListener('click', function() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysList = document.getElementById('daysList');

    // Clear any existing list items
    daysList.innerHTML = '';

    // Create a list item for each day and add it to the unordered list
    daysOfWeek.forEach(day => {
        const listItem = document.createElement('li');
        listItem.textContent = day;
        daysList.appendChild(listItem);
    });
});
