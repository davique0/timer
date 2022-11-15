const args = process.argv.slice(2);

const timer = (arr) => {
  //ends program if not valid arguments were entered
  if (!arr) {
    return;
  }
  for (const item of arr) {
    let numItem = Number(item); //converts strings to numbers if possible
    if (numItem >= 0 && typeof numItem === 'number') { //filters negative numbers and not numbers
      setTimeout(() => process.stdout.write('\x07'), numItem * 1000);
    }
  }
};

timer(args);