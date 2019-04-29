
function json() {

    const json = document.getElementById("src").value;

    try {
        JSON.parse(json);
    } catch(e) {
        console.log(e);
        document.getElementById("log").innerHTML = "NG: Not JSON format.";
        return false;
    }

    const json_parse = JSON.parse(json);
    const pretty = JSON.stringify(json_parse, null, 4);

    document.getElementById("log").innerHTML = "OK.";
    document.getElementById("dst").value = pretty;
}