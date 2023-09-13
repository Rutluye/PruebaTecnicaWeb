export const FormatNameUpperFirst = (param) => {
    var result = "";
  
    if (param.length == 0) {
      return result;
    }
    var splitParam = param.split(" ");
    if (splitParam.length > 1) {
      splitParam.forEach(function(element) {
        var cad = "";
        cad = element.charAt(0);
        cad =
          cad.toUpperCase() + element.substring(1, element.length).toLowerCase();
        result = result + cad + " ";
      });
    } else {
      result = param.charAt(0);
      result =
        result.toUpperCase() + param.substring(1, param.length).toLowerCase();
    }
    return result;
  };
  
  export const splitString = (cadena, separador) => {
    return cadena.split(separador);
  };
  