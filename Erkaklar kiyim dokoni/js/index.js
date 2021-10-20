data.forEach((element) => {
  let newLi = document.createElement("LI");
  let newCard = document.createElement("DIV");
  let newName = document.createElement("H4");

  newName.textContent = element.name;

  newLi.setAttribute = ("class", "block-card");
  newCard.setAttribute = ("class", "block-card__body");
  newName.setAttribute = ("class", "block-card__name");

  newCard.appendChild(newName);
  //AppendChild
  newLi.appendChild(newCard);

  //AppendChild of LIST
  blockCards.appendChild(newLi);
});
