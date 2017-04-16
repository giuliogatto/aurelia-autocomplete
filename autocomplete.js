import {bindable} from 'aurelia-framework';

@bindable('suggestions')
@bindable('property')
export class AutocompleteCustomElement{

	showSuggestion = false;

	selectSuggestion(suggestion){
		this.property = suggestion;
        	this.showSuggestion = 0;
	}

	keyPressed(evt) {
    		this.property.length > 1 ? this.showSuggestion = 1 : this.showSuggestion = 0;
    	
        	this.suggestionstoshow = this.suggestions.filter(
			suggestion => {
				if(suggestion.toLowerCase().indexOf(this.property.toLowerCase()) > -1)return true;
			}
        	);

    	return true;
    }
}
