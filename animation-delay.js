let delay = 0;

for (let c = 1; c < 6; c++) {
  let actualTopic = document.querySelector(`li:nth-child(${c})`);

  actualTopic.setAttribute('style', `animation-delay: ${delay}s`);

  delay += 0.2;
}
