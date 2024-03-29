import View from "./View";
import icons from 'url:../../img/icons.svg';

class PaginationView extends View{
    _parentEl = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentEl.addEventListener('click', function(e){
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage)
        })
    }

    _generateMarkup(){
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        const curPage = this._data.page;
        // Page 1, and there are other pages
        if(curPage === 1 && numPages > 1 ) return this._generateMarkupButton(curPage, 'next');

        // Page 1, and there are NO other pages
        if(numPages <= 1) return '';

        // Last page
        if(curPage === numPages) return this._generateMarkupButton(curPage, 'prev');

        // Other page
         return this._generateMarkupBoth(curPage)

    };

    _generateMarkupButton(curPage, type){
        return `
        <button data-goto="${type === 'next' ? `${curPage + 1}`: `${curPage - 1}`}"  class="btn--inline pagination__btn--${type === 'next' ? 'next' : 'prev'}">
        ${type === 'next' ? `<span>Page ${curPage + 1}</span>`: ''}
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-${type === 'next' ? 'right' : 'left'}"></use>
        </svg>
        ${type === 'prev' ? `<span>Page ${curPage - 1}</span>`: ''}
        </button>
        `;
    };

    _generateMarkupBoth(curPage){
        return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
      <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
      </button>
        `;
    };
}

export default new PaginationView();