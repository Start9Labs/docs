(function() {
    // Function to switch the theme
    function switchTheme() {
        const html = document.documentElement;
        const currentTheme = localStorage.getItem('mdbook-theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "ayu" : "light");
        const newTheme = currentTheme === 'light' ? 'ayu' : 'light';

        html.classList.remove(currentTheme);
        html.classList.add(newTheme);
        localStorage.setItem('mdbook-theme', newTheme);
    }

    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'custom-theme-toggle';
    toggleButton.innerHTML = '<i class="fa fa-sun-o light-mode" aria-hidden="true"></i><i class="fa fa-moon-o dark-mode" aria-hidden="true"></i>'; // Font Awesome icons

    // Add event listener to the button
    toggleButton.addEventListener('click', switchTheme);

    // Find the parent element to insert the toggle button
    const menuBar = document.getElementById('menu-bar');

    // Insert the toggle button into the menu bar (adjust insertion point as needed)
    if (menuBar) {
        // Append to right-buttons div
        const rightButtons = menuBar.querySelector('.right-buttons');
        if(rightButtons){
            rightButtons.insertBefore(toggleButton, rightButtons.firstChild);
        } else {
            console.error('Right buttons not found')
            menuBar.appendChild(toggleButton);
        }

    } else {
        console.error('Menu bar not found!');
    }

    // Set the initial theme
    const initialTheme = localStorage.getItem('mdbook-theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "ayu" : "light");
    document.documentElement.classList.remove('light', 'ayu');
    document.documentElement.classList.add(initialTheme);

})();