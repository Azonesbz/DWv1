// Define event listener function

// The ROOT represents the <html> tag in the DOM.
const ROOT = document.documentElement;
// The themeIcon represents the light switch button.
var themeButton = document.getElementById("theme-btn");
// The themeIcon represents the vectorial light switch icon.

// Theses paths represents the vectorial paths for the theme icon.
/* ------------- Setting up listeners ------------- */

// When the Document Object Model is loaded, it first checks 
// theme color. 
document.addEventListener("DOMContentLoaded", () => 
{
    // By default, the theme is light.
    let isDark = false;
    // Check if the current device has specified to prefer dark theme
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Check in the cookies if the user has specified to prefer dark theme
    isDark = getCookie("theme") === "dark";
      
    setTheme(isDark);
});

if (themeButton !== null) themeButton.addEventListener("click", () => 
{
    toggleTheme();
});

/* ------------- Setting up functions ------------- */

// This is the function that permit us to change the theme
function setTheme(dark) 
{
    if (dark)
    {
        ROOT.classList.add("dark");
    }
    else 
    {
        ROOT.classList.remove("dark");
    }
    setCookie("theme", dark ? "dark" : "light");
}

// This is the function that permits us to toggle the current theme. 
// Example: You currently are in dark mode, when you call this function the theme will go to light and inversely.
function toggleTheme() 
{
    setTheme(!isThemeDark());
}

// This is the function that permits us to know if the current theme is dark, if yes it returns true.
function isThemeDark() 
{
    return ROOT.classList.contains("dark");
}

