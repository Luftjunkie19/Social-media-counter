const socialMedia = document.querySelectorAll(".social-media");
console.log(socialMedia);

socialMedia.forEach((media) => {
  let number = 0;
  const numberHolder = media.childNodes[7];
  const amountOf = +media.childNodes[7].getAttribute("data-amount");

  let counting = setInterval(() => {
    number += 50;

    if (number >= amountOf) {
      number = amountOf;
      clearInterval(counting);
      numberHolder.innerText = number;
    } else {
      number++;
      numberHolder.innerText = number;
    }
  });
});
