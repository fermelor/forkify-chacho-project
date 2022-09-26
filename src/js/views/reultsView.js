import icons from 'url:../../img/icons.svg';
import view from './view.js';
import previewView from './previewView.js';

class resultView extends view {
  _parentElement = document.querySelector(`.results`);
  _errorMessage = 'No recipies found for your query! Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join(``);
  }
}
export default new resultView();
