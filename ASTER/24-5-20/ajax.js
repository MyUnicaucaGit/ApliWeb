var objXmlAjax;

const createAjax = () => {
  let objAjax;
  if (window.XMLHttpRequest) {
    console.log("Creando Objeto AJAX..");
    objAjax = new XMLHttpRequest();
    console.log("Objeto AJAX creado");
  } else {
    try {
      console.log("Creando objeto AJAX alterno...");
      objAjax = new ActiveXObject("Microsoft.XMLHTTP");
      console.log("PBjeto AJAX alterno creado");
    } catch (e) {
      console.log("El navegador no soporta ajax");
    }
  }
  return objAjax;
};

const mifuncion = () => {
  console.log(
    "Ejecutando mi función()... readyState= " + objXmlAjax.readyState
  );
  console.log("Status=" + objXmlAjax.status);
  console.log("StatusText=" + objXmlAjax.statusText);
};

const mifuncion2 = () => {
  if (objXmlAjax.status == 200) {
    if (objXmlAjax.readyState == 4) {
      console.log("Datos: " + objXmlAjax.responseText);
      console.log("Datos: " + objXmlAjax.responseXml);
      let div = document.getElementById("divDatos");
      div.innerHTML = objXmlAjax.responseXml;
    }
  }
};

objXmlAjax = createAjax();
objXmlAjax.onreadystatechange = mifuncion2;
objXmlAjax.abort();
objXmlAjax.open("GET", "datos.txt", false);
objXmlAjax.send();
