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
    //let grammarButton = document.getElementById("menuButtonGrammar");
    let dictionaryButton = document.getElementById("menuButtonDictionary");
    let settingsButton = document.getElementById("menuButtonSettings");
    let transcriptorButton = document.getElementById("menuButtonTranscriptor");

    for (counter = 0; counter < langSpecific.length; counter++) {
        langSpecific[counter].style.display = "none";
    }

    if (lang == "es") {
        document.getElementsByTagName('html')[0].setAttribute("lang","es");
        for (counter = 0; counter < langEs.length; counter++) {
            if (langEs[counter].tagName == "SPAN") {
                langEs[counter].style.display = "inline";
            }
            else {
                langEs[counter].style.display = "block";
            }
            
        }
        if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))) {
            homeButton.innerHTML = "Inicio";
            //grammarButton.innerHTML = "Minicurso";
            dictionaryButton.innerHTML = "Diccionario";
            settingsButton.innerHTML = "Configuraciones";
            transcriptorButton.innerHTML = "Transcriptor";
        }
        else {
            homeButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/home.svg' />Inicio";
            //grammarButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/book.svg' />Minicurso";
            dictionaryButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/books.svg' />Diccionario";
            settingsButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/cog.svg' />Configuraciones";
            transcriptorButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/brackets.svg' />Transcriptor";
        }

        document.getElementById("ipa_tab_button").innerHTML = "Transcribir";
        document.getElementById("spt_tab_button").innerHTML = "Transcribir";
    }
    else if (lang == "fr") {
        document.getElementsByTagName('html')[0].setAttribute("lang","fr");
        for (counter = 0; counter < langFr.length; counter++) {
            if (langFr[counter].tagName == "SPAN") {
                langFr[counter].style.display = "inline";
            }
            else {
                langFr[counter].style.display = "block";
            }
        }
        if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))) {
            homeButton.innerHTML = "Accueil";
            //grammarButton.innerHTML = "Mini-cours";
            dictionaryButton.innerHTML = "Dictionnaire";
            settingsButton.innerHTML = "Paramètres";
            transcriptorButton.innerHTML = "Transcripteur";
        }
        else {
            homeButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/home.svg' />Accueil";
            //grammarButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/book.svg' />Mini-cours";
            dictionaryButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/books.svg' />Dictionnaire";
            settingsButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/cog.svg' />Paramètres";
            transcriptorButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/brackets.svg' />Transcripteur";
        }

        document.getElementById("ipa_tab_button").innerHTML = "Transcrire";
        document.getElementById("spt_tab_button").innerHTML = "Transcrire";
    }
    else if (lang == "ptbr") {
        document.getElementsByTagName('html')[0].setAttribute("lang","pt-BR");
        for (counter = 0; counter < langPtBr.length; counter++) {
            if (langPtBr[counter].tagName == "SPAN") {
                langPtBr[counter].style.display = "inline";
            }
            else {
                langPtBr[counter].style.display = "block";
            }
        }
        if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))) {
            homeButton.innerHTML = "Início";
            //grammarButton.innerHTML = "Minicurso";
            dictionaryButton.innerHTML = "Dicionário";
            settingsButton.innerHTML = "Configurações";
            transcriptorButton.innerHTML = "Transcritor";
        }
        else {
            homeButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/home.svg' />Início";
            //grammarButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/book.svg' />Minicurso";
            dictionaryButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/books.svg' />Dicionário";
            settingsButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/cog.svg' />Configurações";
            transcriptorButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/brackets.svg' />Transcritor";
        }

        document.getElementById("ipa_tab_button").innerHTML = "Transcrever";
        document.getElementById("spt_tab_button").innerHTML = "Transcrever";
    }
    else if (lang == "ru") {
        document.getElementsByTagName('html')[0].setAttribute("lang","ru");
        for (counter = 0; counter < langRu.length; counter++) {
            if (langRu[counter].tagName == "SPAN") {
                langRu[counter].style.display = "inline";
            }
            else {
                langRu[counter].style.display = "block";
            }
        }
        if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))) {
            homeButton.innerHTML = "Главная";
            //grammarButton.innerHTML = "Мини-курс";
            dictionaryButton.innerHTML = "Словарь";
            settingsButton.innerHTML = "Настройки";
            transcriptorButton.innerHTML = "Транскрибер";
        }
        else {
            homeButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/home.svg' />Главная";
            //grammarButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/book.svg' />Мини-курс";
            dictionaryButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/books.svg' />Словарь";
            settingsButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/cog.svg' />Настройки";
            transcriptorButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/brackets.svg' />Транскрибер";
        }

        document.getElementById("ipa_tab_button").innerHTML = "Транскрибировать";
        document.getElementById("spt_tab_button").innerHTML = "Транскрибировать";
    }
    else {
        document.getElementsByTagName('html')[0].setAttribute("lang","en");
        for (counter = 0; counter < langEn.length; counter++) {
            if (langEn[counter].tagName == "SPAN") {
                langEn[counter].style.display = "inline";
            }
            else {
                langEn[counter].style.display = "block";
            }
        }
        if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))) {
            homeButton.innerHTML = "Home";
            //grammarButton.innerHTML = "Mini course";
            dictionaryButton.innerHTML = "Dictionary";
            settingsButton.innerHTML = "Settings";
            transcriptorButton.innerHTML = "Transcriber";
            }
            else {
                homeButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/home.svg' />Home";
                //grammarButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/book.svg' />Mini course";
                dictionaryButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/books.svg' />Dictionary";
                settingsButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/cog.svg' />Settings";
                transcriptorButton.innerHTML = "<img class='menuIcon' src='resources/img/icons/brackets.svg' />Transcriber";
            }

            document.getElementById("ipa_tab_button").innerHTML = "Transcribe";
            document.getElementById("spt_tab_button").innerHTML = "Transcribe";
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

function changeLanguageAndSection (lang, nameOfTheSection) {
    changeLanguage (lang);
    changeSection (nameOfTheSection);
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

function changeBackgroundToDarkMode() {
    document.body.style.backgroundColor = "#2E2E1F";
    document.getElementById("changeBgButton").innerHTML = "🌞";

    document.getElementsByTagName("nav")[0].style.backgroundColor = "#140B05";
    document.getElementById("topNav").style.backgroundColor = "#140B05";

    let p = document.getElementsByTagName("p");
    for (let counter = 0; counter < p.length; counter++) {
        p[counter].style.color = "#FFFFFF";
    }

    let h1 = document.getElementsByTagName("h1");
    for (let counter = 0; counter < h1.length; counter++) {
        h1[counter].style.color = "#FFFFFF";
    }

    let h2 = document.getElementsByTagName("h2");
    for (let counter = 0; counter < h2.length; counter++) {
        h2[counter].style.color = "#FFFFFF";
    }

    let ul = document.getElementsByTagName("ul");
    for (let counter = 0; counter < ul.length; counter++) {
        ul[counter].style.color = "#FFFFFF";
    }

    let td = document.getElementsByTagName("td");
    for (let counter = 0; counter < td.length; counter++) {
        td[counter].style.color = "#000000";
    }

    document.getElementById("changeBgButton").style.color = "#FFFFFF";

    let smallButton = document.getElementsByClassName("smallButton");
    for (let counter = 0; counter < smallButton.length; counter++) {
        smallButton[counter].style.color = "#000000";
    }

    let mediumButton = document.getElementsByClassName("mediumButton");
    for (let counter = 0; counter < mediumButton.length; counter++) {
        mediumButton[counter].style.border = "thin solid #FFFFFF";
    }

    let soundButton = document.getElementsByClassName("soundButton");
    for (let counter = 0; counter < soundButton.length; counter++) {
        soundButton[counter].style.color = "#000000";
    }

    
}

function changeBackgroundToLightMode() {
    document.body.style.backgroundColor = "#FBFBE7";
    document.getElementById("changeBgButton").innerHTML = "🌜︎";
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#502D16";
    document.getElementById("topNav").style.backgroundColor = "#502D16";
    

    let p = document.getElementsByTagName("p");
    for (let counter = 0; counter < p.length; counter++) {
        p[counter].style.color = "#000000";
    }

    let h1 = document.getElementsByTagName("h1");
    for (let counter = 0; counter < h1.length; counter++) {
        h1[counter].style.color = "#000000";
    }

    let h2 = document.getElementsByTagName("h2");
    for (let counter = 0; counter < h2.length; counter++) {
        h2[counter].style.color = "#000000";
    }

    let ul = document.getElementsByTagName("ul");
    for (let counter = 0; counter < ul.length; counter++) {
        ul[counter].style.color = "#000000";
    }

    let td = document.getElementsByTagName("td");
    for (let counter = 0; counter < td.length; counter++) {
        td[counter].style.color = "#000000";
    }

    document.getElementById("topNav").style.color = "#FFFFFF";

    document.getElementById("changeBgButton").style.color = "#000000";

    let menuItem = document.getElementsByClassName("menuItem");
    for (let counter = 0; counter < menuItem.length; counter++) {
        menuItem[counter].style.color = "#FFFFFF";
    }

    let mediumButton = document.getElementsByClassName("mediumButton");
    for (let counter = 0; counter < mediumButton.length; counter++) {
        mediumButton[counter].style.border = "";
    }
}

function changeBackground() {
    let background = getComputedStyle(document.body).backgroundColor;
    
    // Dark mode
    if (background == null || background == "rgb(251, 251, 231)") {
        changeBackgroundToDarkMode();
    }
    // Light mode
    else {
        changeBackgroundToLightMode();
    }
}

function activatePhonetics(typeOfPhonetics) {
    let phoneticAlphabet = document.getElementsByClassName(typeOfPhonetics);

    let originalDisplay = getComputedStyle(phoneticAlphabet[0]).display;

    if (originalDisplay == "none") {
        for (let counter = 0; counter < phoneticAlphabet.length; counter++) {
            if (phoneticAlphabet[counter].tagName == "div") {
                phoneticAlphabet[counter].style.display = "block";
            }
            else if (phoneticAlphabet[counter].tagName == "span") {
                phoneticAlphabet[counter].style.display = "inline";
            }
            else {
                phoneticAlphabet[counter].style.display = "block";
            }
        }
    }
    else {
        for (let counter = 0; counter < phoneticAlphabet.length; counter++) {
            phoneticAlphabet[counter].style.display = "none";
        }
    }
}

function start () {

    // Loads the dictionaries
    changeElementContent("resources/html/dict/en.html", "listOfWordsEnglish");
    changeElementContent("resources/html/dict/es.html", "listOfWordsSpanish");
    changeElementContent("resources/html/dict/fr.html", "listOfWordsFrench");
    changeElementContent("resources/html/dict/pt.html", "listOfWordsPortuguese");
    changeElementContent("resources/html/dict/ru.html", "listOfWordsRussian");
    changeElementContent("resources/html/dict/cjg.html", "listOfConjugations");

    // As the function's name says, it detects the system's language
    changeLanguage (detectSystemsLanguage());

    // Detects dark mode. If positive, puts the website in the dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        changeBackgroundToDarkMode();
    }

    // Checks whether the device is mobile or not
    // It's a web browser
    if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))) {
        let menu = document.getElementsByTagName("nav")[0];
        let topNavExtraSpace = document.getElementById("topNavExtraSpace");

        menu.style.bottom = "auto";
        menu.style.top = "2.5rem";
        topNavExtraSpace.style.height = "4.7rem";
        document.getElementsByTagName("nav")[0].style.height = "auto";

        let menuIcons = document.getElementsByClassName("menuIcon");

        for (let counter = 0; counter < menuIcons.length; counter++) {
            menuIcons[counter].style.display = "none";
        }
    }
    // It's mobile
    else {
        let noMobile = document.getElementsByClassName("noMobile");

        for (let counter = 0; counter < noMobile.length; counter++) {
            noMobile[counter].style.display = "none";
        }
    }

    //Check parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const language = urlParams.get('lang');
    const section = urlParams.get('section');
    const mode = urlParams.get('mode');

    if (language == 'ptbr' || language == 'es' || language == 'fr' || language == 'ru') {changeLanguage (language);}
    else if (language === null) {/*Do nothing*/}
    else {changeLanguage ('en');}

    if (section == "sectionHome" || section == "sectionGrammar" || section == "sectionDictionary" || section == "sectionSettings" || 
        section == "transcriptor" || section == "conjugations" || section == "declensions") {
        changeSection (section);
    }
    else if (section == "grammar" || section == "minicourse") {changeSection ("sectionGrammar");}
    else if (section == "dictionary") {changeSection ("sectionDictionary");}
    else if (section == "settings") {changeSection ("sectionSettings");}
    else if (section === null) {/*Do nothing*/}
    else {changeSection ("sectionHome");}

    if (mode == "dark") {
        changeBackgroundToDarkMode();
    }
    else if (mode == "light") {
        changeBackgroundToLightMode();
    }
    else {
        // Do nothing
    }

}