let str = prompt("Enter a string:");
document.write("String : " + str + "<br>");

let title = str.split(" ");
title.forEach((part, index) => {
    part = part.charAt(0).toUpperCase() + part.substring(1, part.length);
    title[index] = part;
});
title = title.join(" ");

document.write("UpperCAse String : " + title);
