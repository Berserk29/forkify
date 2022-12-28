import PreviewView from "./previewView";
import icons from 'url:../../img/icons.svg';

class ResultView extends PreviewView{
    _parentEl = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query! Please try again :)';
    _message = ''

}

export default new ResultView();