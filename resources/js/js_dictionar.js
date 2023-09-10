function startSbSearch (source_of_words, input_div, output_div, lang) {
    // Getting the values
    var list_of_words = document.getElementById(source_of_words).innerHTML;
    var word = document.getElementById(input_div).value;
    var word_original = word;
    var word_lower_case = word.toLowerCase();
    var word_upper_case = word.toUpperCase();
    var word_upper_case_first_letter = word_lower_case.charAt(0).toUpperCase() + word_lower_case.slice(1);
    var word_upper_case_all_first_letters = word_upper_case_first_letter;
        var copy_word_upper_case_first_letter = word_upper_case_first_letter.split("");
        for (var x = 1; x < word_upper_case_first_letter.length; x++) {
            if (copy_word_upper_case_first_letter[x - 1] == ' ' && (copy_word_upper_case_first_letter[x] != ' ' || copy_word_upper_case_first_letter[x] !== undefined)) {
                if (copy_word_upper_case_first_letter[x] == 'a') copy_word_upper_case_first_letter[x] = 'A';
                else if (copy_word_upper_case_first_letter[x] == 'á') copy_word_upper_case_first_letter[x] = 'Á';
                else if (copy_word_upper_case_first_letter[x] == 'à') copy_word_upper_case_first_letter[x] = 'À';
                else if (copy_word_upper_case_first_letter[x] == 'ã') copy_word_upper_case_first_letter[x] = 'Ã';
                else if (copy_word_upper_case_first_letter[x] == 'â') copy_word_upper_case_first_letter[x] = 'Â';
                else if (copy_word_upper_case_first_letter[x] == 'ä') copy_word_upper_case_first_letter[x] = 'Ä';
                else if (copy_word_upper_case_first_letter[x] == 'ą') copy_word_upper_case_first_letter[x] = 'Ą';
                else if (copy_word_upper_case_first_letter[x] == 'b') copy_word_upper_case_first_letter[x] = 'B';
                else if (copy_word_upper_case_first_letter[x] == 'c') copy_word_upper_case_first_letter[x] = 'C';
                else if (copy_word_upper_case_first_letter[x] == 'ç') copy_word_upper_case_first_letter[x] = 'Ç';
                else if (copy_word_upper_case_first_letter[x] == 'ĉ') copy_word_upper_case_first_letter[x] = 'Ĉ';
                else if (copy_word_upper_case_first_letter[x] == 'ć') copy_word_upper_case_first_letter[x] = 'Ć';
                else if (copy_word_upper_case_first_letter[x] == 'č') copy_word_upper_case_first_letter[x] = 'Č';
                else if (copy_word_upper_case_first_letter[x] == 'd') copy_word_upper_case_first_letter[x] = 'D';
                else if (copy_word_upper_case_first_letter[x] == 'ď') copy_word_upper_case_first_letter[x] = 'Ď';
                else if (copy_word_upper_case_first_letter[x] == 'e') copy_word_upper_case_first_letter[x] = 'E';
                else if (copy_word_upper_case_first_letter[x] == 'é') copy_word_upper_case_first_letter[x] = 'É';
                else if (copy_word_upper_case_first_letter[x] == 'è') copy_word_upper_case_first_letter[x] = 'È';
                else if (copy_word_upper_case_first_letter[x] == 'ẽ') copy_word_upper_case_first_letter[x] = 'Ẽ';
                else if (copy_word_upper_case_first_letter[x] == 'ê') copy_word_upper_case_first_letter[x] = 'Ê';
                else if (copy_word_upper_case_first_letter[x] == 'ë') copy_word_upper_case_first_letter[x] = 'Ë';
                else if (copy_word_upper_case_first_letter[x] == 'ę') copy_word_upper_case_first_letter[x] = 'Ę';
                else if (copy_word_upper_case_first_letter[x] == 'f') copy_word_upper_case_first_letter[x] = 'F';
                else if (copy_word_upper_case_first_letter[x] == 'g') copy_word_upper_case_first_letter[x] = 'G';
                else if (copy_word_upper_case_first_letter[x] == 'ĝ') copy_word_upper_case_first_letter[x] = 'Ĝ';
                else if (copy_word_upper_case_first_letter[x] == 'h') copy_word_upper_case_first_letter[x] = 'H';
                else if (copy_word_upper_case_first_letter[x] == 'ĥ') copy_word_upper_case_first_letter[x] = 'Ĥ';
                else if (copy_word_upper_case_first_letter[x] == 'i') copy_word_upper_case_first_letter[x] = 'I';
                else if (copy_word_upper_case_first_letter[x] == 'í') copy_word_upper_case_first_letter[x] = 'Í';
                else if (copy_word_upper_case_first_letter[x] == 'ì') copy_word_upper_case_first_letter[x] = 'Ì';
                else if (copy_word_upper_case_first_letter[x] == 'ï') copy_word_upper_case_first_letter[x] = 'Ï';
                else if (copy_word_upper_case_first_letter[x] == 'ĩ') copy_word_upper_case_first_letter[x] = 'Ĩ';
                else if (copy_word_upper_case_first_letter[x] == 'î') copy_word_upper_case_first_letter[x] = 'Î';
                else if (copy_word_upper_case_first_letter[x] == 'j') copy_word_upper_case_first_letter[x] = 'J';
                else if (copy_word_upper_case_first_letter[x] == 'ĵ') copy_word_upper_case_first_letter[x] = 'Ĵ';
                else if (copy_word_upper_case_first_letter[x] == 'k') copy_word_upper_case_first_letter[x] = 'K';
                else if (copy_word_upper_case_first_letter[x] == 'l') copy_word_upper_case_first_letter[x] = 'L';
                else if (copy_word_upper_case_first_letter[x] == 'ł') copy_word_upper_case_first_letter[x] = 'Ł';
                else if (copy_word_upper_case_first_letter[x] == 'ĺ') copy_word_upper_case_first_letter[x] = 'Ĺ';
                else if (copy_word_upper_case_first_letter[x] == 'ľ') copy_word_upper_case_first_letter[x] = 'Ľ';
                else if (copy_word_upper_case_first_letter[x] == 'm') copy_word_upper_case_first_letter[x] = 'M';
                else if (copy_word_upper_case_first_letter[x] == 'n') copy_word_upper_case_first_letter[x] = 'N';
                else if (copy_word_upper_case_first_letter[x] == 'ñ') copy_word_upper_case_first_letter[x] = 'Ñ';
                else if (copy_word_upper_case_first_letter[x] == 'ń') copy_word_upper_case_first_letter[x] = 'Ń';
                else if (copy_word_upper_case_first_letter[x] == 'ň') copy_word_upper_case_first_letter[x] = 'Ň';
                else if (copy_word_upper_case_first_letter[x] == 'o') copy_word_upper_case_first_letter[x] = 'O';
                else if (copy_word_upper_case_first_letter[x] == 'ó') copy_word_upper_case_first_letter[x] = 'Ó';
                else if (copy_word_upper_case_first_letter[x] == 'ò') copy_word_upper_case_first_letter[x] = 'Ò';
                else if (copy_word_upper_case_first_letter[x] == 'õ') copy_word_upper_case_first_letter[x] = 'Õ';
                else if (copy_word_upper_case_first_letter[x] == 'ô') copy_word_upper_case_first_letter[x] = 'Ô';
                else if (copy_word_upper_case_first_letter[x] == 'ö') copy_word_upper_case_first_letter[x] = 'Ö';
                else if (copy_word_upper_case_first_letter[x] == 'p') copy_word_upper_case_first_letter[x] = 'P';
                else if (copy_word_upper_case_first_letter[x] == 'q') copy_word_upper_case_first_letter[x] = 'Q';
                else if (copy_word_upper_case_first_letter[x] == 'r') copy_word_upper_case_first_letter[x] = 'R';
                else if (copy_word_upper_case_first_letter[x] == 'ŕ') copy_word_upper_case_first_letter[x] = 'Ŕ';
                else if (copy_word_upper_case_first_letter[x] == 's') copy_word_upper_case_first_letter[x] = 'S';
                else if (copy_word_upper_case_first_letter[x] == 'ŝ') copy_word_upper_case_first_letter[x] = 'Ŝ';
                else if (copy_word_upper_case_first_letter[x] == 'š') copy_word_upper_case_first_letter[x] = 'Š';
                else if (copy_word_upper_case_first_letter[x] == 't') copy_word_upper_case_first_letter[x] = 'T';
                else if (copy_word_upper_case_first_letter[x] == 'ť') copy_word_upper_case_first_letter[x] = 'Ť';
                else if (copy_word_upper_case_first_letter[x] == 'u') copy_word_upper_case_first_letter[x] = 'U';
                else if (copy_word_upper_case_first_letter[x] == 'ú') copy_word_upper_case_first_letter[x] = 'Ú';
                else if (copy_word_upper_case_first_letter[x] == 'ù') copy_word_upper_case_first_letter[x] = 'Ù';
                else if (copy_word_upper_case_first_letter[x] == 'ũ') copy_word_upper_case_first_letter[x] = 'Ũ';
                else if (copy_word_upper_case_first_letter[x] == 'û') copy_word_upper_case_first_letter[x] = 'Û';
                else if (copy_word_upper_case_first_letter[x] == 'ü') copy_word_upper_case_first_letter[x] = 'Ü';
                else if (copy_word_upper_case_first_letter[x] == 'ŭ') copy_word_upper_case_first_letter[x] = 'Ŭ';
                else if (copy_word_upper_case_first_letter[x] == 'v') copy_word_upper_case_first_letter[x] = 'V';
                else if (copy_word_upper_case_first_letter[x] == 'w') copy_word_upper_case_first_letter[x] = 'W';
                else if (copy_word_upper_case_first_letter[x] == 'x') copy_word_upper_case_first_letter[x] = 'X';
                else if (copy_word_upper_case_first_letter[x] == 'y') copy_word_upper_case_first_letter[x] = 'Y';
                else if (copy_word_upper_case_first_letter[x] == 'ý') copy_word_upper_case_first_letter[x] = 'Ý';
                else if (copy_word_upper_case_first_letter[x] == 'ỳ') copy_word_upper_case_first_letter[x] = 'Ỳ';
                else if (copy_word_upper_case_first_letter[x] == 'ỹ') copy_word_upper_case_first_letter[x] = 'Ỹ';
                else if (copy_word_upper_case_first_letter[x] == 'ŷ') copy_word_upper_case_first_letter[x] = 'Ŷ';
                else if (copy_word_upper_case_first_letter[x] == 'ÿ') copy_word_upper_case_first_letter[x] = 'Ÿ';
                else if (copy_word_upper_case_first_letter[x] == 'z') copy_word_upper_case_first_letter[x] = 'Z';
                else if (copy_word_upper_case_first_letter[x] == 'ź') copy_word_upper_case_first_letter[x] = 'Ź';
                else if (copy_word_upper_case_first_letter[x] == 'ż') copy_word_upper_case_first_letter[x] = 'Ż';
            }
        }
        word_upper_case_all_first_letters = copy_word_upper_case_first_letter.join("");
    
    word = word_lower_case;
    
    // The texts in different languages
    var result_entry_text = "";
    var result_definition_text = "";
    var no_result = "";
    
    if (lang == 0) { // Sambahsa
        precise_search = "Precis paursk:";
        in_the_terms = "In ia lexis:";
        in_the_definitions = "In ia definitions:";
        no_result = "Neid resultat";
    }
    else if (lang == 1) { // Portuguese
        precise_search = "Pesquisa precisa:";
        in_the_terms = "Nos termos:";
        in_the_definitions = "Nas definições:";
        no_result = "Nenhum resultado";
    }
    else if (lang == 2) { // Spanish
        precise_search = "Búsqueda precisa:";
        in_the_terms = "En los términos:";
        in_the_definitions = "En las definiciones:";
        no_result = "Sin resultados";
    }
    else if (lang == 3) { // French
        precise_search = "Recherche précise :";
        in_the_terms = "Dans les termes :";
        in_the_definitions = "Dans les définitions :";
        no_result = "Aucun résultat";
    }
    else if (lang == 4) { // Esperanto
        precise_search = "Preciza serĉo:";
        in_the_terms = "En la termoj:";
        in_the_definitions = "En la difinoj:";
        no_result = "Sen rezultoj";
    }
    else if (lang == 5) { // Russian
        precise_search = "Точный поиск:";
        in_the_terms = "В терминологии:";
        in_the_definitions = "В понятиях:";
        no_result = "Нет результатов";
    }
    else { // English
        precise_search = "Precise search:";
        in_the_terms = "In the terms:";
        in_the_definitions = "In the definitions:";
        no_result = "No results";
    }
    
    // Checks whether the input is valid
    var valid_input = true;
    if ((word == "") || (word == " ") || (word == "  ") || (word == "   ") || (word == "    ") || (word == "     ") || (word == "      ") || (word == "	") || (word == "		") || (word == "			")) {
        valid_input = false;
    }
    
    // Counter to save CPU in case of searchs that returns too many results
    var cpu_saver = 0;
    
    // To count whether at least one result was found
    var at_least_one_result = 0;
    
    // Define the maximum number of results
    var MAX_RESULTS = 150;
    
    // Cleaning the result DIV for new searchs
    document.getElementById(output_div).innerHTML = "";
    
    // To store the possible precise word
    var char_chain = "";
    var char_chain_original_word = "";
    var find_precise_word = false;
    var position = 0;
    var temporary_text = "abc";
    
    var word_at_the_beginning = false;
    
    // Variable that will store the highlited definition
    var highlighted_text = "";
    
    // Getting the lines
    var line = list_of_words.split("\n");
    var entry; // I will use this variable to split the lines
    var entry_lowercase; // For search
    
    // Temporary variables
    var temp_x = 0;
    
    /******************************************************/
    /******************************************************/
    // First, the search for precise words
    document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'><tr><th class='js_dictionar_table_part'><b>" + precise_search + "</b></th></tr></table>";
    
    cpu_saver = 0;
    at_least_one_result = 0;
    
            // First, the entries that start with the searched word
    for (var count = 0; count < line.length; count++) {
        entry = (line[count]).split("\t");
        entry_lowercase = (line[count]).toLowerCase().split("\t");
        if (entry[1] !== undefined && valid_input) {
            if (entry_lowercase[0].search(word) !== -1) {
                // Let's find out whether the searched word can be found alone in 
                char_chain = entry_lowercase[0].split("");
                char_chain_original_word = word_lower_case.split("");
                
                for (var c = 0; c < entry[0].length; c++)
                {
                    if (char_chain[c] == char_chain_original_word[0]) {
                        if (((char_chain[c - 1] === undefined) && (char_chain[c + (word.length)] === undefined || char_chain[c + (word.length)] == ' ' || char_chain[c + (word.length)] == '-' || char_chain[c + (word.length)] == '\"' || char_chain[c + (word.length)] == '\'' || char_chain[c + (word.length)] == '”' || char_chain[c + (word.length)] == '»' || char_chain[c + (word.length)] == '.' || char_chain[c + (word.length)] == ',' || char_chain[c + (word.length)] == '!' || char_chain[c + (word.length)] == '?' || char_chain[c + (word.length)] == ')' || char_chain[c + (word.length)] == '(' || char_chain[c + (word.length)] == ']' || char_chain[c + (word.length)] == '}' || char_chain[c + (word.length)] == '…')) && (char_chain[c + word.length - 1] == char_chain_original_word[word.length - 1])) {
                            find_precise_word = true;
                            break;
                        }
                        else {
                            find_precise_word = false;
                        }
                    }
                }
                
                // Now we put it in the table
                if (find_precise_word) {
                    document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'>" + "<tr>" + "<td class='js_dictionar_table_part1'>" + entry[0] + "</td>" + "<td class='js_dictionar_table_part2'>" + entry[1] + "</td>" + "</tr>" + "</table>";
                    cpu_saver++;
                    at_least_one_result++;
                    if (cpu_saver >= MAX_RESULTS) {
                        count = line.length;
                    }
                }
            }
        }
    }
    
    cpu_saver = 0;
    
            // The rest
    for (var count = 0; count < line.length; count++) {
        entry = (line[count]).split("\t");
        entry_lowercase = (line[count]).toLowerCase().split("\t");
        if (entry[1] !== undefined && valid_input) {
            if (entry_lowercase[0].search(word) !== -1) {
                // Let's find out whether the searched word can be found alone in 
                char_chain = entry_lowercase[0].split("");
                char_chain_original_word = word_lower_case.split("");
                
                for (var c = 0; c < entry[0].length; c++)
                {
                    if (char_chain[c] == char_chain_original_word[0]) {
                        if (((char_chain[c - 1] == ' ' || char_chain[c - 1] == '-' || char_chain[c - 1] == '\"' || char_chain[c - 1] == '\'' || char_chain[c - 1] == '“' || char_chain[c - 1] == '«' || char_chain[c - 1] == '.' || char_chain[c - 1] == ',' || char_chain[c - 1] == '¡' || char_chain[c - 1] == '¿' || char_chain[c - 1] == '(' || char_chain[c - 1] == ')' || char_chain[c - 1] == '[' || char_chain[c - 1] == '{' || char_chain[c - 1] == '…') && (char_chain[c + (word.length)] === undefined || char_chain[c + (word.length)] == ' ' || char_chain[c + (word.length)] == '-' || char_chain[c + (word.length)] == '\"' || char_chain[c + (word.length)] == '\'' || char_chain[c + (word.length)] == '”' || char_chain[c + (word.length)] == '»' || char_chain[c + (word.length)] == '.' || char_chain[c + (word.length)] == ',' || char_chain[c + (word.length)] == '!' || char_chain[c + (word.length)] == '?' || char_chain[c + (word.length)] == ')' || char_chain[c + (word.length)] == '(' || char_chain[c + (word.length)] == ']' || char_chain[c + (word.length)] == '}' || char_chain[c + (word.length)] == '…')) && (char_chain[c + word.length - 1] == char_chain_original_word[word.length - 1])) {
                            find_precise_word = true;
                            break;
                        }
                        else {
                            find_precise_word = false;
                        }
                    }
                }
                
                // Now we put it in the table
                if (find_precise_word) {
                    document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'>" + "<tr>" + "<td class='js_dictionar_table_part1'>" + entry[0] + "</td>" + "<td class='js_dictionar_table_part2'>" + entry[1] + "</td>" + "</tr>" + "</table>";
                    cpu_saver++;
                    at_least_one_result++;
                    if (cpu_saver >= MAX_RESULTS) {
                        count = line.length;
                    }
                }
            }
        }
    }
    
    if (at_least_one_result == 0) {
        document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'><tr><td class='js_dictionar_table_part_noresult'><i>" + no_result + "</i></td></tr></table>";
    }
    
    /******************************************************/
    /******************************************************/
    // Now we search in the word side
    document.getElementById(output_div).innerHTML += "<br><table class='js_dictionar_table'><tr><th class='js_dictionar_table_part'><b>" + in_the_terms + "</b></th></tr></table>";
    
    cpu_saver = 0;
    at_least_one_result = 0;
    
            // Firt the entries that start with the searched word
    for (var count = 0; count < line.length; count++) {
        entry = (line[count]).split("\t");
        entry_lowercase = (line[count]).toLowerCase().split("\t");
        if (entry[1] !== undefined && valid_input) {
            if (entry_lowercase[0].search(word) !== -1) {
                // The code just below is just to avoid repetitions
                char_chain = entry_lowercase[0].split("");
                char_chain_original_word = word_lower_case.split("");
                
                for (var c = 0; c < entry[0].length; c++)
                {
                    if (char_chain[c] == char_chain_original_word[0]) {
                        if (((char_chain[c - 1] === undefined || char_chain[c - 1] == ' ' || char_chain[c - 1] == '-' || char_chain[c - 1] == '\"' || char_chain[c - 1] == '\'' || char_chain[c - 1] == '“' || char_chain[c - 1] == '«' || char_chain[c - 1] == '.' || char_chain[c - 1] == ',' || char_chain[c - 1] == ';' || char_chain[c - 1] == ':' || char_chain[c - 1] == '¡' || char_chain[c - 1] == '¿' || char_chain[c - 1] == '(' || char_chain[c - 1] == ')' || char_chain[c - 1] == '[' || char_chain[c - 1] == '{' || char_chain[c - 1] == '…') && (char_chain[c + (word.length)] === undefined || char_chain[c + (word.length)] == ' ' || char_chain[c + (word.length)] == '-' || char_chain[c + (word.length)] == '\"' || char_chain[c + (word.length)] == '\'' || char_chain[c + (word.length)] == '”' || char_chain[c + (word.length)] == '»' || char_chain[c + (word.length)] == '.' || char_chain[c + (word.length)] == ',' || char_chain[c + (word.length)] == ';' || char_chain[c + (word.length)] == ':' || char_chain[c + (word.length)] == '!' || char_chain[c + (word.length)] == '?' || char_chain[c + (word.length)] == ')' || char_chain[c + (word.length)] == '(' || char_chain[c + (word.length)] == ']' || char_chain[c + (word.length)] == '}' || char_chain[c + (word.length)] == '…')) && (char_chain[c + word.length - 1] == char_chain_original_word[word.length - 1])) {
                            find_precise_word = true;
                            break;
                        }
                        else {
                            find_precise_word = false;
                        }
                    }
                }
                
                // Let's prepare the highlighted word
                if (entry[0].search(word_original) !== -1) {
                    highlighted_text = entry[0].replace(word_original, "<span class='highlight'>" + word_original + "</span>");
                }
                else if (entry[0].search(word_lower_case) !== -1) {
                    highlighted_text = entry[0].replace(word_lower_case, "<span class='highlight'>" + word_lower_case + "</span>");
                }
                else if (entry[0].search(word_upper_case) !== -1) {
                    highlighted_text = entry[0].replace(word_upper_case, "<span class='highlight'>" + word_upper_case + "</span>");
                }
                else if (entry[0].search(word_upper_case_first_letter) !== -1) {
                    highlighted_text = entry[0].replace(word_upper_case_first_letter, "<span class='highlight'>" + word_upper_case_first_letter + "</span>");
                }
                else if (entry[0].search(word_upper_case_all_first_letters) !== -1) {
                    highlighted_text = entry[0].replace(word_upper_case_all_first_letters, "<span class='highlight'>" + word_upper_case_all_first_letters + "</span>");
                }
                else {
                    highlighted_text = entry[0].replace(word, "<span class='highlight'>" + word + "</span>");
                }
                
                if (!find_precise_word && (char_chain[0] == char_chain_original_word[0])) {
                    document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'>" + "<tr>" + "<td class='js_dictionar_table_part1'>" + highlighted_text + "</td>" + "<td class='js_dictionar_table_part2'>" + entry[1] + "</td>" + "</tr>" + "</table>";
                    cpu_saver++;
                    at_least_one_result++;
                    if (cpu_saver >= MAX_RESULTS) {
                        count = line.length;
                    }
                }
            }
        }
    }
    
    cpu_saver = 0;
    
            // Now the rest
    for (var count = 0; count < line.length; count++) {
        entry = (line[count]).split("\t");
        entry_lowercase = (line[count]).toLowerCase().split("\t");
        if (entry[1] !== undefined && valid_input) {
            if (entry_lowercase[0].search(word) !== -1) {
                // The code just below is just to avoid repetitions
                char_chain = entry_lowercase[0].split("");
                char_chain_original_word = word_lower_case.split("");
                
                for (var c = 0; c < entry[0].length; c++)
                {
                    if (char_chain[c] == char_chain_original_word[0]) {
                        if (((char_chain[c - 1] === undefined || char_chain[c - 1] == ' ' || char_chain[c - 1] == '-' || char_chain[c - 1] == '\"' || char_chain[c - 1] == '\'' || char_chain[c - 1] == '“' || char_chain[c - 1] == '«' || char_chain[c - 1] == '.' || char_chain[c - 1] == ',' || char_chain[c - 1] == ';' || char_chain[c - 1] == ':' || char_chain[c - 1] == '¡' || char_chain[c - 1] == '¿' || char_chain[c - 1] == '(' || char_chain[c - 1] == ')' || char_chain[c - 1] == '[' || char_chain[c - 1] == '{' || char_chain[c - 1] == '…') && (char_chain[c + (word.length)] === undefined || char_chain[c + (word.length)] == ' ' || char_chain[c + (word.length)] == '-' || char_chain[c + (word.length)] == '\"' || char_chain[c + (word.length)] == '\'' || char_chain[c + (word.length)] == '”' || char_chain[c + (word.length)] == '»' || char_chain[c + (word.length)] == '.' || char_chain[c + (word.length)] == ',' || char_chain[c + (word.length)] == ';' || char_chain[c + (word.length)] == ':' || char_chain[c + (word.length)] == '!' || char_chain[c + (word.length)] == '?' || char_chain[c + (word.length)] == ')' || char_chain[c + (word.length)] == '(' || char_chain[c + (word.length)] == ']' || char_chain[c + (word.length)] == '}' || char_chain[c + (word.length)] == '…')) && (char_chain[c + word.length - 1] == char_chain_original_word[word.length - 1])) {
                            find_precise_word = true;
                            break;
                        }
                        else {
                            find_precise_word = false;
                        }
                    }
                }
                
                // Let's prepare the highlighted word
                if (entry[0].search(word_original) !== -1) {
                    highlighted_text = entry[0].replace(word_original, "<span class='highlight'>" + word_original + "</span>");
                }
                else if (entry[0].search(word_lower_case) !== -1) {
                    highlighted_text = entry[0].replace(word_lower_case, "<span class='highlight'>" + word_lower_case + "</span>");
                }
                else if (entry[0].search(word_upper_case) !== -1) {
                    highlighted_text = entry[0].replace(word_upper_case, "<span class='highlight'>" + word_upper_case + "</span>");
                }
                else if (entry[0].search(word_upper_case_first_letter) !== -1) {
                    highlighted_text = entry[0].replace(word_upper_case_first_letter, "<span class='highlight'>" + word_upper_case_first_letter + "</span>");
                }
                else if (entry[0].search(word_upper_case_all_first_letters) !== -1) {
                    highlighted_text = entry[0].replace(word_upper_case_all_first_letters, "<span class='highlight'>" + word_upper_case_all_first_letters + "</span>");
                }
                else {
                    highlighted_text = entry[0].replace(word, "<span class='highlight'>" + word + "</span>");
                }
                
                if (!find_precise_word && (char_chain[0] != char_chain_original_word[0])) {
                    document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'>" + "<tr>" + "<td class='js_dictionar_table_part1'>" + highlighted_text + "</td>" + "<td class='js_dictionar_table_part2'>" + entry[1] + "</td>" + "</tr>" + "</table>";
                    cpu_saver++;
                    at_least_one_result++;
                    if (cpu_saver >= MAX_RESULTS) {
                        count = line.length;
                    }
                }
            }
        }
    }
    
    if (at_least_one_result == 0) {
        document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'><tr><td class='js_dictionar_table_part_noresult'><i>" + no_result + "</i></td></tr></table>";
    }
    
    /******************************************************/
    /******************************************************/
    
    // And then in the definition side
    document.getElementById(output_div).innerHTML += "<br><table class='js_dictionar_table'><tr><th class='js_dictionar_table_part'><b>" + in_the_definitions + "</b></th></tr></table>";
    
    cpu_saver = 0;
    at_least_one_result = 0;
    
    // We try the entries that start with the searched word
    for (var count = 0; count < line.length; count++) {
        entry = (line[count]).split("\t");
        entry_lowercase = (line[count]).toLowerCase().split("\t");
        if (entry[1] !== undefined && valid_input) {
            if (entry_lowercase[0].search(word) === -1 && entry_lowercase[1].search(word) !== -1) { // This "entry_lowercase[0].search(word) === -1" is here to avoid repetitions from the previous loop
                char_chain = entry_lowercase[1].split("");
                char_chain_original_word = word_lower_case.split("");
                
                find_precise_word = false; // In case the following condition is not satisfied
                
                if (char_chain[0] == char_chain_original_word[0]) {
                    for (var c = 0; c < word_lower_case.length; c++)
                    {
                        if (char_chain[c] == char_chain_original_word[c]) {
                            word_at_the_beginning = true;
                        }
                        else {
                            word_at_the_beginning = false;
                            break;
                        }
                        
                        if (c == (word_lower_case.length - 1) && !(char_chain[c + 1] === undefined || char_chain[c + 1] == ' ' || char_chain[c + 1] == '-' || char_chain[c + 1] == '\"' || char_chain[c + 1] == '\'' || char_chain[c + 1] == '”' || char_chain[c + 1] == '»' || char_chain[c + 1] == '.' || char_chain[c + 1] == ',' || char_chain[c + 1] == ';' || char_chain[c + 1] == ':' || char_chain[c + 1] == '!' || char_chain[c + 1] == '?' || char_chain[c + 1] == ')' || char_chain[c + 1] == '(' || char_chain[c + 1] == ']' || char_chain[c + 1] == '}' || char_chain[c + 1] == '…')) {
                            word_at_the_beginning = false;
                        }
                    }
                    if (word_at_the_beginning) {
                        find_precise_word = true;
                    }
                    else {
                        find_precise_word = false;
                    }
                }
                
                if (find_precise_word) {
                    if (entry[1].search(word_original) !== -1) {
                        highlighted_text = entry[1].replace(word_original, "<span class='highlight'>" + word_original + "</span>");
                    }
                    else if (entry[1].search(word_lower_case) !== -1) {
                        highlighted_text = entry[1].replace(word_lower_case, "<span class='highlight'>" + word_lower_case + "</span>");
                    }
                    else if (entry[1].search(word_upper_case) !== -1) {
                        highlighted_text = entry[1].replace(word_upper_case, "<span class='highlight'>" + word_upper_case + "</span>");
                    }
                    else if (entry[1].search(word_upper_case_first_letter) !== -1) {
                        highlighted_text = entry[1].replace(word_upper_case_first_letter, "<span class='highlight'>" + word_upper_case_first_letter + "</span>");
                    }
                    else if (entry[1].search(word_upper_case_all_first_letters) !== -1) {
                        highlighted_text = entry[1].replace(word_upper_case_all_first_letters, "<span class='highlight'>" + word_upper_case_all_first_letters + "</span>");
                    }
                    else {
                        highlighted_text = entry[1].replace(word, "<span class='highlight'>" + word + "</span>");
                    }
                    
                    document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'>" + "<tr>" + "<td class='js_dictionar_table_part1'>" + entry[0] + "</td>" + "<td class='js_dictionar_table_part2'>" + highlighted_text + "</td>" + "</tr>" + "</table>";
                    cpu_saver++;
                    at_least_one_result++;
                    if (cpu_saver >= MAX_RESULTS) {
                        count = line.length;
                    }
                }
            }
        }
    }
    
    cpu_saver = 0;
    
    // Now we do a second precise search, but with the precise word in other positions
    for (var count = 0; count < line.length; count++) {
        entry = (line[count]).split("\t");
        entry_lowercase = (line[count]).toLowerCase().split("\t");
        if (entry[1] !== undefined && valid_input) {
            if (entry_lowercase[0].search(word) === -1 && entry_lowercase[1].search(word) !== -1) { // This "entry_lowercase[0].search(word) === -1" is here to avoid repetitions from the previous loop
                char_chain = entry_lowercase[1].split("");
                char_chain_original_word = word_lower_case.split("");
                
                // This piece of code is to avoid repetitions from the previous loop
                word_at_the_beginning = false; // In the case the following condition is not satisfied
                if (char_chain[0] == char_chain_original_word[0]) {
                    for (var c = 0; c < word_lower_case.length; c++)
                    {
                        if (char_chain[c] == char_chain_original_word[c]) {
                            word_at_the_beginning = true;
                        }
                        else {
                            word_at_the_beginning = false;
                            break;
                        }
                        
                        if (c == (word_lower_case.length - 1) && !(char_chain[c + 1] === undefined || char_chain[c + 1] == ' ' || char_chain[c + 1] == '-' || char_chain[c + 1] == '\"' || char_chain[c + 1] == '\'' || char_chain[c + 1] == '”' || char_chain[c + 1] == '»' || char_chain[c + 1] == '.' || char_chain[c + 1] == ',' || char_chain[c + 1] == ';' || char_chain[c + 1] == ':' || char_chain[c + 1] == '!' || char_chain[c + 1] == '?' || char_chain[c + 1] == ')' || char_chain[c + 1] == '(' || char_chain[c + 1] == ']' || char_chain[c + 1] == '}' || char_chain[c + 1] == '…')) {
                            word_at_the_beginning = false;
                        }
                    }
                }
                // Now we continue
                for (var c = 0; c < entry[1].length; c++)
                {
                    if (char_chain[c] == char_chain_original_word[0]) {
                        if (word_at_the_beginning == false && ((char_chain[c - 1] == ' ' || char_chain[c - 1] == '-' || char_chain[c - 1] == '\"' || char_chain[c - 1] == '\'' || char_chain[c - 1] == '“' || char_chain[c - 1] == '«' || char_chain[c - 1] == '.' || char_chain[c - 1] == ',' || char_chain[c - 1] == ';' || char_chain[c - 1] == ':' || char_chain[c - 1] == '¡' || char_chain[c - 1] == '¿' || char_chain[c - 1] == '(' || char_chain[c - 1] == ')' || char_chain[c - 1] == '[' || char_chain[c - 1] == '{' || char_chain[c - 1] == '…') && (char_chain[c + (word.length)] === undefined || char_chain[c + (word.length)] == ' ' || char_chain[c + (word.length)] == '-' || char_chain[c + (word.length)] == '\"' || char_chain[c + (word.length)] == '\'' || char_chain[c + (word.length)] == '”' || char_chain[c + (word.length)] == '»' || char_chain[c + (word.length)] == '.' || char_chain[c + (word.length)] == ',' || char_chain[c + (word.length)] == ';' || char_chain[c + (word.length)] == ':' || char_chain[c + (word.length)] == '!' || char_chain[c + (word.length)] == '?' || char_chain[c + (word.length)] == ')' || char_chain[c + (word.length)] == '(' || char_chain[c + (word.length)] == ']' || char_chain[c + (word.length)] == '}' || char_chain[c + (word.length)] == '…')) && (char_chain[c + word.length - 1] == char_chain_original_word[word.length - 1])) {
                            if (word.length > 1) {
                                temp_x = 0;
                                for (var y = c; y < (c + word.length); y++) {
                                    if (char_chain[y] != word[temp_x]) {
                                        find_precise_word = false;
                                        break;
                                    }
                                    else {
                                        find_precise_word = true;
                                        if (y == (c + word.length - 1)) {
                                            position = c;
                                            break;
                                        }
                                    }
                                    temp_x++;
                                }
                                if (find_precise_word) {
                                    break;
                                }
                            }
                            else {
                                find_precise_word = true;
                                position = c;
                                break;
                            }
                        }
                        else {
                            find_precise_word = false;
                        }
                    }
                }
                
                if (find_precise_word) {
                    temporary_text = "<span class='highlight'>" + entry[1].substr(position, word.length) + "</span>";
                    highlighted_text = entry[1].substr(0, position) + entry[1].substr(position + word.length);
                    highlighted_text = [highlighted_text.slice(0, position), temporary_text, highlighted_text.slice(position)].join('');
                    
                    document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'>" + "<tr>" + "<td class='js_dictionar_table_part1'>" + entry[0] + "</td>" + "<td class='js_dictionar_table_part2'>" + highlighted_text + "</td>" + "</tr>" + "</table>";
                    cpu_saver++;
                    at_least_one_result++;
                    if (cpu_saver >= MAX_RESULTS) {
                        count = line.length;
                    }
                }
            }
        }
    }
    
    cpu_saver = 0;
    
    // Now we search the remaining words
    for (var count = 0; count < line.length; count++) {
        entry = (line[count]).split("\t");
        entry_lowercase = (line[count]).toLowerCase().split("\t");
        if (entry[1] !== undefined && valid_input) {
            if (entry_lowercase[0].search(word) === -1 && entry_lowercase[1].search(word) !== -1) { // This "entry_lowercase[0].search(word) === -1" is here to avoid repetitions from the previous loop
                
                char_chain = entry_lowercase[1].split("");
                char_chain_original_word = word_lower_case.split("");
                
                for (var c = 0; c < entry[1].length; c++)
                {
                    if (char_chain[c] == char_chain_original_word[0]) {
                        if (((char_chain[c - 1] === undefined || char_chain[c - 1] == ' ' || char_chain[c - 1] == '-' || char_chain[c - 1] == '\"' || char_chain[c - 1] == '\'' || char_chain[c - 1] == '“' || char_chain[c - 1] == '«' || char_chain[c - 1] == '.' || char_chain[c - 1] == ',' || char_chain[c - 1] == ';' || char_chain[c - 1] == ':' || char_chain[c - 1] == '¡' || char_chain[c - 1] == '¿' || char_chain[c - 1] == '(' || char_chain[c - 1] == ')' || char_chain[c - 1] == '[' || char_chain[c - 1] == '{' || char_chain[c - 1] == '…') && (char_chain[c + (word.length)] === undefined || char_chain[c + (word.length)] == ' ' || char_chain[c + (word.length)] == '-' || char_chain[c + (word.length)] == '\"' || char_chain[c + (word.length)] == '\'' || char_chain[c + (word.length)] == '”' || char_chain[c + (word.length)] == '»' || char_chain[c + (word.length)] == '.' || char_chain[c + (word.length)] == ',' || char_chain[c + (word.length)] == ';' || char_chain[c + (word.length)] == ':' || char_chain[c + (word.length)] == '!' || char_chain[c + (word.length)] == '?' || char_chain[c + (word.length)] == ')' || char_chain[c + (word.length)] == '(' || char_chain[c + (word.length)] == ']' || char_chain[c + (word.length)] == '}' || char_chain[c + (word.length)] == '…')) && (char_chain[c + word.length - 1] == char_chain_original_word[word.length - 1])) {
                            if (word.length > 1) {
                                temp_x = 0;
                                for (var y = c; y < (c + word.length); y++) {
                                    if (char_chain[y] != word[temp_x]) {
                                        find_precise_word = false;
                                        break;
                                    }
                                    else {
                                        find_precise_word = true;
                                        if (y == (c + word.length - 1)) {
                                            position = c;
                                            break;
                                        }
                                    }
                                    temp_x++;
                                }
                                if (find_precise_word) {
                                    break;
                                }
                            }
                            else {
                                find_precise_word = true;
                                position = c;
                                break;
                            }
                        }
                        else {
                            find_precise_word = false;
                        }
                    }
                }
                
                if (!find_precise_word) {
                    if (entry[1].search(word_original) !== -1) {
                        highlighted_text = entry[1].replace(word_original, "<span class='highlight'>" + word_original + "</span>");
                    }
                    else if (entry[1].search(word_lower_case) !== -1) {
                        highlighted_text = entry[1].replace(word_lower_case, "<span class='highlight'>" + word_lower_case + "</span>");
                    }
                    else if (entry[1].search(word_upper_case) !== -1) {
                        highlighted_text = entry[1].replace(word_upper_case, "<span class='highlight'>" + word_upper_case + "</span>");
                    }
                    else if (entry[1].search(word_upper_case_first_letter) !== -1) {
                        highlighted_text = entry[1].replace(word_upper_case_first_letter, "<span class='highlight'>" + word_upper_case_first_letter + "</span>");
                    }
                    else if (entry[1].search(word_upper_case_all_first_letters) !== -1) {
                        highlighted_text = entry[1].replace(word_upper_case_all_first_letters, "<span class='highlight'>" + word_upper_case_all_first_letters + "</span>");
                    }
                    else {
                        highlighted_text = entry[1].replace(word, "<span class='highlight'>" + word + "</span>");
                    }
                    
                    document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'>" + "<tr>" + "<td class='js_dictionar_table_part1'>" + entry[0] + "</td>" + "<td class='js_dictionar_table_part2'>" + highlighted_text + "</td>" + "</tr>" + "</table>";
                    cpu_saver++;
                    at_least_one_result++;
                    if (cpu_saver >= MAX_RESULTS) {
                        count = line.length;
                    }
                }
            }
        }
    }
    if (at_least_one_result == 0) {
        document.getElementById(output_div).innerHTML += "<table class='js_dictionar_table'><tr><td class='js_dictionar_table_part_noresult'><i>" + no_result + "</i></td></tr></table>";
    }
    
    document.getElementById(output_div).style.display = "block";
}