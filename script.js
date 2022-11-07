const socialMedia = document.querySelectorAll(".social-media");
console.log(socialMedia);

socialMedia.forEach((media) => {
  let number = 0;
  const numberHolder = media.childNodes[7];
  const amountOf = +media.childNodes[7].getAttribute("data-amount");

  let counting = setInterval(() => {
    number += 90;

    if (number >= amountOf) {
      number = amountOf;
      clearInterval(counting);
      console.log(number);
      numberHolder.innerText = number;
    } else {
      number++;
      numberHolder.innerText = number;
    }
  });
});
