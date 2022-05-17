/* validation functions */
$(function () {
  localStorage.setItem("data", JSON.stringify(data));

  let marcas = JSON.parse(localStorage.getItem("data")).marcas;

  marcas.forEach((marca) => {
    $("#marcaInput").append(
      "<option value='" + marca.name + "'>" + marca.name + "</option>"
    );
  });

  updateModelOptions(marcas);

  $("#marcaInput").change(function () {
    updateModelOptions(marcas);
  });

  $("#ipInput").keyup(function () {
    validateIp($("#ipInput").val())
      ? correct("#ipInput")
      : incorrect("#ipInput");
  });

  $("#maskInput").keyup(function () {
    validateIp($("#maskInput").val())
      ? correct("#maskInput")
      : incorrect("#maskInput");
  });

  $("#serialInput").keyup(function () {
    validateSerial($("#serialInput").val())
      ? correct("#serialInput")
      : incorrect("#serialInput");
  });

  $("#registerButton").click(function () {
    if (
      validateIp($("#ipInput").val()) &&
      validateIp($("#maskInput").val()) &&
      validateSerial($("#serialInput").val())
    ) {
      alert("Bien");
    } else {
      alert("Mal");
    }
  });
});

/* Correct or Incorrect */
const correct = (parSelector) => {
  $(parSelector).addClass("correct");
  $(parSelector).removeClass("incorrect");
};

const incorrect = (parSelector) => {
  $(parSelector).addClass("incorrect");
  $(parSelector).removeClass("correct");
};

/* IP Validation */
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

/* Serial Validation */
const validateSerial = (parTxt) => {
  var re = /^[a-zA-Z0-9_]+-[a-zA-Z0-9_]+-[a-zA-Z0-9_]+$/;
  return parTxt.length < 15 && parTxt.length > 13 && re.test(parTxt);
};

const data = {
  marcas: [
    { name: "HP", models: ["1", "2"] },
    { name: "M", models: ["3", "4"] },
  ],
  devices: [],
};

const updateModelOptions = (parMarcas) => {
  $("#modeloInput").empty();
  let modelos = parMarcas.filter((el) => el.name == $("#marcaInput").val())[0]
    .models;
  modelos.forEach((modelo) => {
    $("#modeloInput").append(
      "<option value='" + modelo + "'>" + modelo + "</option>"
    );
  });
};
