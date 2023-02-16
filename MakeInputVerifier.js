function makeInputVerifier(minimum, maximum) {
  // write your code here
  var mini = minimum;
  var maxi = maximum;

  return function verify(val) {
    if (val < mini) return "Input is less than minimum value";
    if (val >= mini && val <= maxi) return "Input is in range";
    return "Input is more than maximum value";
  };
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const min = parseInt(readLine().trim());
  const max = parseInt(readLine().trim());
  const verify = makeInputVerifier(min, max);

  const input = parseInt(readLine().trim());
  const result = verify(input);

  ws.write(`${result}\n`);
  ws.end();
}
