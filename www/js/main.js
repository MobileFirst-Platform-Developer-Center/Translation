/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

function languageChanged(lang) {
	if (typeof(lang)!="string")
		lang = $("#languages").val();
	
    switch (lang){
    	case "english":
    		setEnglish();
    		break;
    	case "french":
    		setFrench();
    		break;
    	case "russian":
    		setRussian();
    		break;
    	case "hebrew":
    		setHebrew();
    		break;
    }
    
    if ($("#languages").val()=="hebrew") 
    	$("#wrapper").css({direction: 'rtl'});
    else 
    	$("#wrapper").css({direction: 'ltr'});
    	
    $("#sampleText").html(Messages.sampleText);
    $("#headerText").html(Messages.headerText);
    $("#actionsLabel").html(Messages.actionsLabel);
}

function setFrench(){
	Messages.headerText = "Traduction";
	Messages.actionsLabel = "Sélectionnez langue:";
	Messages.sampleText = "ceci est un exemple de texte en français.";
}
function setRussian(){
	Messages.headerText = "Перевод";
	Messages.actionsLabel = "Выбор языка:";
	Messages.sampleText = "Это пример текста на русском языке.";
}

function setHebrew(){
	Messages.headerText = "תרגום";
	Messages.actionsLabel = "בחר שפה:";
	Messages.sampleText = "זו דוגמא של טקסט בעברית.";
}

function setEnglish(){
	Messages.headerText = "Translation";
	Messages.actionsLabel = "Select language:";
	Messages.sampleText = "This is a sample text in english.";
}