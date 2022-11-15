const args = process.argv.slice(2);

const timer = (arr) => {
  if (!arr) {
    return
  }
  for (const item of arr) {
    let numItem = Number(item);
    if (numItem >= 0 && typeof numItem === 'number') {
      console.log(numItem)
    }
  }

}

timer(args);

//console.log(args)

// process.stdout.write('\x07');