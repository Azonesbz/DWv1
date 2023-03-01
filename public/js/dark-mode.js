// Define event listener function

// The ROOT represents the <html> tag in the DOM.
const ROOT = document.documentElement;
// The themeIcon represents the light switch button.
var themeButton = document.getElementById("theme-btn");
// The themeIcon represents the vectorial light switch icon.

// Theses paths represents the vectorial paths for the theme icon.
const DARK_ICON_PATH = "M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5ZM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1Zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1ZM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1Zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1ZM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .38-.39.39-1.03 0-1.41L5.99 4.58Zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06Zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.41 0l1.06-1.06ZM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.41 0l1.06-1.06Z";
const LIGHT_ICON_PATH = "M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49ZM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z";

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

