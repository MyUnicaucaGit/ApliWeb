$(function () {
  $("#ipInput").keyup(function () {
    validateIp($("#ipInput").val()) ? correct("ipInput") : incorrect("ipInput");
  });

  jqke;
});

const correct = (parSelector) => {
  document.getElementById(parSelector).classList.add("correct");
  document.getElementById(parSelector).classList.remove("incorrect");
};

const incorrect = (parSelector) => {
  document.getElementById(parSelector).classList.add("incorrect");
  document.getElementById(parSelector).classList.remove("correct");
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
