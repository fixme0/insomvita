// Modules
import { Bar } from 'js/modules/scrollbar';

// Styles
import 'style/pages/me';

document.addEventListener("DOMContentLoaded", () => {
    const scrollbarTarget = document.querySelector('.text-list');

    scrollbarTarget && new Bar(scrollbarTarget);
});