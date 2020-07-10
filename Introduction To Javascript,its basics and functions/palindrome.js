let str = prompt("Enter string:");
if (str === str.split("").reverse().join("")) {
    document.write(str + " is palindrome.");
} else {
    document.write(str + " is not palindrome.");
}
