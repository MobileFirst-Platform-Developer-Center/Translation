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
