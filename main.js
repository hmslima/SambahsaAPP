function detectSystemsLanguage () {
    if (navigator.language[0] == 'p' && navigator.language[1] == 't') {
        return "ptbr";
    }
    else if (navigator.language[0] == 'e' && navigator.language[1] == 's'){
        return "es";
    }
    else if (navigator.language[0] == 'f' && navigator.language[1] == 'r'){
        return "fr";
    }
    else if (navigator.language[0] == 'r' && navigator.language[1] == 'u'){
        return "ru";
    }
    else {
        return "en";
    }
}

async function getHtml(fileName) {
    const result = await fetch(`${fileName}`).then(response => response.text());
    return result;
}

function changeElementContent(fileName, elementName) {
    getHtml(fileName).then(response => {
        document.getElementById(elementName).innerHTML = response;
    });
}

function changeElementContentPlusFunction(fileName, elementName, fn) {
    getHtml(fileName)
    .then(response => {
        document.getElementById(elementName).innerHTML = response;
    })
    .then(fn());
}

function changeLanguage (lang) {

    let counter = 0;

    let langSpecific = document.getElementsByClassName("langSpecific");
    let langEn = document.getElementsByClassName("enText");
    let langEs = document.getElementsByClassName("esText");
    let langFr = document.getElementsByClassName("frText");
    let langPtBr = document.getElementsByClassName("ptbrText");
    let langRu = document.getElementsByClassName("ruText");

    let homeButton = document.getElementById("menuButtonHome");
    let grammarButton = document.getElementById("menuButtonGrammar");
    let dictionaryButton = document.getElementById("menuButtonDictionary");
    let settingsButton = document.getElementById("menuButtonSettings");

    for (counter = 0; counter < langSpecific.length; counter++) {
        langSpecific[counter].style.display = "none";
    }

    if (lang == "es") {
        document.getElementsByTagName('html')[0].setAttribute("lang","es");
        for (counter = 0; counter < langEs.length; counter++) {
            langEs[counter].style.display = "block";
        }
        homeButton.innerHTML = "Inicio";
        grammarButton.innerHTML = "Gramática";
        dictionaryButton.innerHTML = "Diccionario";
        settingsButton.innerHTML = "Configuraciones";
    }
    else if (lang == "fr") {
        document.getElementsByTagName('html')[0].setAttribute("lang","fr");
        for (counter = 0; counter < langFr.length; counter++) {
            langFr[counter].style.display = "block";
        }
        homeButton.innerHTML = "Accueil";
        grammarButton.innerHTML = "Grammaire";
        dictionaryButton.innerHTML = "Dictionnaire";
        settingsButton.innerHTML = "Paramètres";
    }
    else if (lang == "ptbr") {
        document.getElementsByTagName('html')[0].setAttribute("lang","pt-BR");
        for (counter = 0; counter < langPtBr.length; counter++) {
            langPtBr[counter].style.display = "block";
        }
        homeButton.innerHTML = "Início";
        grammarButton.innerHTML = "Gramática";
        dictionaryButton.innerHTML = "Dicionário";
        settingsButton.innerHTML = "Configurações";
    }
    else if (lang == "ru") {
        document.getElementsByTagName('html')[0].setAttribute("lang","ru");
        for (counter = 0; counter < langRu.length; counter++) {
            langRu[counter].style.display = "block";
        }
        homeButton.innerHTML = "Главная";
        grammarButton.innerHTML = "Грамматика";
        dictionaryButton.innerHTML = "Словарь";
        settingsButton.innerHTML = "Настройки";
    }
    else {
        document.getElementsByTagName('html')[0].setAttribute("lang","en");
        for (counter = 0; counter < langEn.length; counter++) {
            langEn[counter].style.display = "block";
        }
        homeButton.innerHTML = "Home";
        grammarButton.innerHTML = "Grammar";
        dictionaryButton.innerHTML = "Dictionary";
        settingsButton.innerHTML = "Settings";
    }
}

function changeSection (nameOfTheSection) {

    let sectionList = document.getElementsByClassName("section");

    for (let counter = 0; counter < sectionList.length; counter++) {
        sectionList[counter].style.display = "none";
    }

    document.getElementById(nameOfTheSection).style.display = "block";
    document.getElementsByTagName('html')[0].setAttribute("currentSection", nameOfTheSection);
}

function changeChapter (chaptersName) {

    let courseSections = document.getElementsByClassName("courseSection");
    let chosenChapter = document.getElementsByClassName(chaptersName);

    for (let counter = 0; counter < courseSections.length; counter++) {
        courseSections[counter].style.display = "none";
    }

    for (let counter = 0; counter < chosenChapter.length; counter++) {
        chosenChapter[counter].style.display = "block";
    }

}

function playPause(player)
{
	let myAudio = document.getElementById(player);
	if (myAudio.paused) {
		myAudio.play();
	}
	else {
		myAudio.pause();
	}
}

function openTab(evt, xName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(xName).style.display = "block";
    evt.currentTarget.className += " active";
  }

function start () {

    changeElementContent("resources/html/dict/en.html", "listOfWordsEnglish");
    changeElementContent("resources/html/dict/es.html", "listOfWordsSpanish");
    changeElementContent("resources/html/dict/fr.html", "listOfWordsFrench");
    changeElementContent("resources/html/dict/pt.html", "listOfWordsPortuguese");
    changeElementContent("resources/html/dict/ru.html", "listOfWordsRussian");
    changeElementContent("resources/html/dict/cjg.html", "listOfConjugations");

    changeLanguage (detectSystemsLanguage());



    // Checks whether the device is mobile or not
    if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))) {
        let menu = document.getElementsByTagName("nav")[0];
        let topNavExtraSpace = document.getElementById("topNavExtraSpace");

        menu.style.bottom = "auto";
        menu.style.top = "2.5rem";
        topNavExtraSpace.style.height = "4.7rem";
    }
}