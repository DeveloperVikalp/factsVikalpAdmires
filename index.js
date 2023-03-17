// Challenge 2:
// Replace the arguments below according to your preference.

// space, scary, military, romantic, cowboy, fantasy, superhero
//favouriteMovieGenre("regular")

// watermelon, tomato, banana, orange, avocado, blueberry
//favouriteFruit("regular")

// light, dark
//favouriteMode("light")

// sharp, soft, round
//favouriteEdgeStyle("sharp")



////////////////////////////////////
// IGONE THE CODE BELOW THIS LINE //
////////////////////////////////////
    const movieGenreArr =["space", "scary", "military", "romantic", "cowboy", "fantasy", "superhero"];
    const favouriteFruitArr =["watermelon", "tomato", "banana", "orange", "avocado", "blueberry"];
    const favouriteModeArr =["light", "dark"];
    const edgeStyleArr =["sharp"," soft", "round"];



function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}

function favouriteEdgeStyle(style) {
    setProp("--image", "var(--" + style + ")");
}

function favouriteMovieGenre(font) {
    if (font) {
        setProp("--font", "var(--" + font + ")");    
    }
}

function favouriteMode(mode) {
    if (mode === "light" || !mode) {
        setProp('--background', "var(--light)");
        setProp('--text', "var(--dark)");
    } else if (mode === "dark") {
        setProp('--background', "var(--dark)");
        setProp('--text', "var(--light)");
    }
}

function favouriteFruit(theme) {
    if (theme === "pastel") {
        setProp('--light', "#f2f6c3")
        setProp('--dark', "#68c4af")
    } else if (theme === "muted") {
        setProp('--light', "#4c5b64")
        setProp('--dark', "#45241c")
    } else if (theme === "love") {
        setProp('--light', "#f06836")
        setProp('--dark', "#ba0001")
    } else if (theme === "sky") {
        setProp('--light', "#99ccff")
        setProp('--dark', "#3366ff")
    } else if (theme === "forrest") {
        setProp('--light', "#91B247")
        setProp('--dark', "#597C2B")
    }  else if (theme === "shiny") {
        setProp('--light', "#2e9afe")
        setProp('--dark', "#02197c")
    } else if (theme === "banana") {
        setProp('--light', "#fbec5d")
        setProp('--dark', "#6b3e26")
    } else if (theme === "watermelon") {
        setProp('--light', "#75b855")
        setProp('--dark', "#ad3838")
    } else if (theme === "tomato") {
        setProp('--light', "#d62e2e")
        setProp('--dark', "#600000")
    } else if (theme === "avocado") {
        setProp('--light', "#6b8c21")
        setProp('--dark', "#704012")
    } else if (theme === "orange") {
        setProp('--light', "#ffca16")
        setProp('--dark', "#f97300")
    } else if (theme === "blueberry") {
        setProp('--light', "#41a8f9")
        setProp('--dark', "#064490")
    } else  {
        setProp('--light', "#f5f5f5")
        setProp('--dark', "#222222")
    } 
}

function handleClick(){
    //implementing logic of setting a random combination
    
    let randomNum =0;
    randomNum=Math.floor(Math.random()*movieGenreArr.length);
    let randomMovieGenre = movieGenreArr[randomNum];
    let randomFruit = favouriteFruitArr[Math.floor(Math.random()*favouriteFruitArr.length)];
    let randomMode = favouriteModeArr[Math.floor(Math.random()*favouriteModeArr.length)];
    let randomEdgeStyle = edgeStyleArr[Math.floor(Math.random()*edgeStyleArr.length)];
    favouriteMovieGenre(randomMovieGenre);
    favouriteFruit(randomFruit);
    favouriteMode(randomMode);
    favouriteEdgeStyle(randomEdgeStyle);
    console.log(randomFruit);
    

    
};
window.addEventListener('mousemove',handleClick);
setInterval(()=>{handleClick()},2000);





