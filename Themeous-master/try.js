function darkenColor(hexColor, darknessFactor) {
    // Remove the "#" symbol from the hexadecimal color
    const color = hexColor.replace("#", "");
  
    // Convert the hexadecimal color to RGB
    const red = parseInt(color.substr(0, 2), 16);
    const green = parseInt(color.substr(2, 2), 16);
    const blue = parseInt(color.substr(4, 2), 16);
  
    // Apply darkness factor to darken the color
    const darkenedRed = Math.round(red * (1 - darknessFactor));
    const darkenedGreen = Math.round(green * (1 - darknessFactor));
    const darkenedBlue = Math.round(blue * (1 - darknessFactor));
  
    // Convert the darkened RGB values back to hexadecimal
    const darkenedColor = `#${darkenedRed.toString(16)}${darkenedGreen.toString(16)}${darkenedBlue.toString(16)}`;
  
    return darkenedColor;
  }

  const originalColor = "#0087ff"; // Orange color
const darkenedColor = darkenColor(originalColor, 0.2); // Darken the color by 20%
console.log(darkenedColor); // Output: #cc8000