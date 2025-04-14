function loadInfo() {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'info.json', false);
    xml.send();
    if (xml.status !== 200) {
        alert('Ошибка ' + xml.status + ": " + xml.statusText);
    }
    else {
        alert(xml.responseText);
    }
}
loadInfo();
