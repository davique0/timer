const args = process.argv.slice(2);

const timer = (arr) => {
  if (!arr) {
    return;
  }
  for (const item of arr) {
    let numItem = Number(item);
    if (numItem >= 0 && typeof numItem === 'number') {
      setTimeout(() => process.stdout.write('\x07'), numItem * 1000);
    }
  }
};

timer(args);