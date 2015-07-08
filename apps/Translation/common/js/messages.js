/*
*
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

*/

Messages = {
	headerText: "Default header",
	actionsLabel: "Default action label",
	sampleText: "Default sample text",
	englishLanguage : "English",
	frenchLanguage : "French",
	russianLanguage : "Russian",
	hebrewLanguage : "Hebrew"
};

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