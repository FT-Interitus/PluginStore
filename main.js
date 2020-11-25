var url;
var button;
const port = 8459;

function main() {

   url = document.getElementById("install");
   button = document.getElementById("installbutton");

    const Http = new XMLHttpRequest();
    const ULR = 'http://localhost:'+port+'/';

    Http.onreadystatechange = function() {
        console.log(Http);
        if (Http.readyState == 4 && Http.status == 0) {
            document.location = "InteritusOffline.html";

        }
    };

    Http.open("GET",ULR);

    Http.send();


}

function doTestInstall() {

    requestInstall(url.value,"test",1.0,"Des","TestAuthor","Long Des")

}

function installStatistics() {

    requestInstall("https://github.com/FT-Interitus/Interitus-Plugins/blob/master/statistics/Statistics.itpl?raw=true","Statistics",1.0,"Zeigt dir Statistiken über dein Projekt an!","Tim & Felix","")

}

function requestInstall(url, name, version, description, author, detailed_description) {


    const params = {

        name: name,
        version: version,
        description: description,
        author: author,
        detailed_description: detailed_description

    }

    const Jsoninformation = JSON.stringify(params);

    const Http = new XMLHttpRequest();
    const URL = 'http://localhost:'+port+'/install?'+'url='+url+'&jsoninformation='+encodeURIComponent(Jsoninformation);
    console.log('url='+url+'&jsoninformation='+encodeURIComponent(Jsoninformation));

    Http.onreadystatechange = function() {
        console.log(Http);
        if (Http.readyState == 4 && Http.status == 0) {
            document.location = "InteritusOffline.html";
        }
    };

    Http.open("GET",URL,true);
    Http.send();


}


main();