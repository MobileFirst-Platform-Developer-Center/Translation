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

function wlCommonInit() {
	$('#languages').bind('change', languageChanged);
	
    var locale = WL.App.getDeviceLocale();
    var lang = WL.App.getDeviceLanguage();
    WL.Logger.debug(">> Detected locale: " + locale);
    WL.Logger.debug(">> Detected language: " + lang);

    if (locale.indexOf("en")!=-1) languageChanged("english");
    if (locale.indexOf("fr")!=-1) languageChanged("french");
    if (locale.indexOf("ru")!=-1) languageChanged("russian");
    if (locale.indexOf("he")!=-1) languageChanged("hebrew");
}

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
