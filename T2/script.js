/* validation functions */
$(function () {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(data));
  }

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

  $("#serialInput").keyup(function () {
    validateSerial($("#serialInput").val())
      ? correct("#serialInput","#serialError")
      : incorrect("#serialInput","#serialError");
  });

  $("#ipInput").keyup(function () {
    validateIp($("#ipInput").val())
      ? correct("#ipInput","#ipError")
      : incorrect("#ipInput","#ipError");
  });

  $("#maskInput").keyup(function () {
    validateIp($("#maskInput").val())
      ? correct("#maskInput","#maskError")
      : incorrect("#maskInput", "#maskError");
  });

  $("#registerButton").click(function () {
    if (
      validateIp($("#ipInput").val()) &&
      validateIp($("#maskInput").val()) &&
      validateSerial($("#serialInput").val()) &&
      $("#imageInput").prop("files").length === 1
    ) {
      uploadImg($("#imageInput").prop("files")[0]);

      let device = {
        marca: $("#marcaInput").val(),
        modelo: $("#modeloInput").val(),
        serial: $("#serialInput").val(),
        ip: $("#ipInput").val(),
        mask: $("#maskInput").val(),
        image: $("#imageInput").prop("files")[0],
      };
      let d = JSON.parse(localStorage.getItem("data"));
      console.log(d.devices);

      d.devices = [...d.devices, device];
      localStorage.setItem("data", JSON.stringify(d));
      alert("Dispositivo registrado");
    } else {
      alert("Complete correctamente los campos");
    }
  });
});

/* Correct or Incorrect */
const correct = (parSelector,parAlert) => {
  $(parSelector).addClass("correct");
  $(parSelector).removeClass("incorrect");
  $(parAlert).addClass("hidden-alert");
  $(parAlert).removeClass("u-alert");    
};

const incorrect = (parSelector,parAlert) => {
  $(parSelector).addClass("incorrect");
  $(parSelector).removeClass("correct");  
  $(parAlert).addClass("u-alert");
  $(parAlert).removeClass("hidden-alert");  
};

/* IP Validation */
const validateIp = (parTxt) => {
  const d = parTxt.split(".").map((e) => parseInt(e));
  return (
    parTxt.length < 16 &&
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

const uploadImg = (file) => {
  let form = new FormData();

  form.append("image", file);
  let url =
    "https://api.imgbb.com/1/upload?key=4a161374f6b1645e5719cb67a9b3f36e";

  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Connection: "keep-alive",
      "Content-Type": "application/json",
    },
    body: file,
  };
  fetch(url, config).then((response) => {
    console.log(response);
  });
};

const data = {
  marcas: [
    { name: "TP-Link", models: ["1", "2"] },
    { name: "M", models: ["3", "4"] },
  ],
  devices: [],
};
