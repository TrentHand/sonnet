
// Take the contents of the sonnet div and place it in a variable DONE
var sonnetText = document.getElementById("sonnet").innerHTML;
console.log("sonnetText", sonnetText);

// Find and output the starting position of the word "orphans" DONE
var orphansPosition = sonnetText.indexOf("orphans");
console.log("orphansPosition", orphansPosition);

// Output the number of characters in the sonnet DONE
var sonnetLenght = sonnetText.length;
console.log("sonnetLenght", sonnetLenght);

// Replace the first occurance of the string "winter" with "yuletide" DONE
var newString = sonnetText.replace("winter", "yuletide");
console.log("newString", newString);

// Replace all occurances of the string "the" with "a large" DONE
var otherString = sonnetText.replace(/ the /g, " a large ");
console.log("otherString", otherString);

// Set the content of the sonnet div with the new string DONE
var replacedContent = document.getElementById("sonnet");
replacedContent.innerHTML = otherString;