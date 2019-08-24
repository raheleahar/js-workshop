(() => {
  let char = '';
  for (let i = 1; i < 8; i++) {
    for (let j = 1; j <= i ; j++) {
      if (j <= 4) {
        char = char + '*';
      }
      else {
        char = char.slice(0, -1);
      }
    }
    char = char + '\n'
  }
  console.log(char);
})();
