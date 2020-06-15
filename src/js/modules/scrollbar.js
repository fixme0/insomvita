import SimpleBar from 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

class Bar {
    constructor(element) {
        this.element = element;

        this.init();
    }

    get baseOptions () {
        return {
            // classNames: {
            //     scrollbar: 'scrollbar',
            //     track: 'scrollbar-track'
            // } 
        }
    }

    init () {
        new SimpleBar(this.element, {
            ...this.baseOptions
        })
    }
}

export { Bar };