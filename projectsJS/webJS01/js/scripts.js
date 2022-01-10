//Creating html tags
let h1Tag = document.createElement("h1");
let pTag = document.createElement("p");

//Text for html tags
let h1Text = document.createTextNode("Welcome To Native JavaScipt");
let pText = document.createTextNode("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam in, quibusdam, incidunt vel quia minima mollitia molestiae nihil nostrum assumenda dolorem commodi sit asperiores sunt ullam iusto! Exercitationem, laudantium sapiente.");

//Getting hold of the body tag element
let myBodyTag = document.getElementById("myBody");

//Building a simple html website
h1Tag.appendChild(h1Text);
pTag.appendChild(pText);

//document.getElementById("myBody").appendChild(h1Tag);
//document.getElementById("myBody").appendChild(pTag);
myBodyTag.appendChild(h1Tag);
myBodyTag.appendChild(pTag);