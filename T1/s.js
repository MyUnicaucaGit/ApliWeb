// const RE_IPv4 = new RegExp(
//   "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
// );

// ^(25[0-5]|2[0-5][0-5]|[01]?[0-9][0-9]?)+.+(25[0-5]|2[0-5][0-5]|[01]?[0-9][0-9]?)+.+(25[0-5]|2[0-5][0-5]|[01]?[0-9][0-9]?)+.+(25[0-5]|2[0-5][0-5]|[01]?[0-9][0-9]?)$

const miFun = () => {
  if (validateIp(document.getElementById("txtInputIp").value)) {
    document.getElementById("txtInputIp").classList.add("correct");
    document.getElementById("txtInputIp").classList.remove("incorrect");
  } else {
    document.getElementById("txtInputIp").classList.remove("correct");
    document.getElementById("txtInputIp").classList.add("incorrect");
  }
  validateIp(document.getElementById("txtInputIp").value);
};

const validateIp = (parTxt) => {
  const d = parTxt.split(".").map((e) => parseInt(e));
  return (
    parTxt.length < 15 &&
    !/\s/.test(parTxt) &&
    d.length === 4 &&
    validateIpArrange(d)
  );
};

const validateIpArrange = (parArrange) => {
  const e = parArrange.pop();
  if (parArrange.length === 0) {
    return e >= 0 && e <= 255;
  } else {
    return e >= 0 && e <= 255 && validateIpArrange(parArrange);
  }
};
