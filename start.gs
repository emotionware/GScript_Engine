var host='website.soluboxes.com';
var user="fer";
var pass="****"
var database="4tgs";


function doGet() {
return HtmlService.createHtmlOutputFromFile('pages/login');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
};


//find build table tblsysbuild
