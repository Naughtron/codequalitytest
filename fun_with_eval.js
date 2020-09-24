if(obj[key].indexOf(FUNCFLAG) === 0) { 
  obj[key] = eval('(' + obj[key].substring(FUNCFLAG.length) + ')');
