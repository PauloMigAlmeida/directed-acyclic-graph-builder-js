'use strict';

export class TextOverflow {

    /**
     * Trim text's content if that overflows the desired width
     * @param text - reference to d3.js SVG element
     * @param width - max width that the text can be before overflow
     * @param content - list of words/chars to be tried out to see how many of them fit in the chosen width
     * @param join_sep - string separator to be added between elements of list of contents
     */
    static calculateTextOverflow(text, width, content, join_sep) {
        // calculate ellipsis size
        const ellipsis = '...';
        text.text(ellipsis);
        const ellipsisWidth = text.node().getBBox().width;
        width -= ellipsisWidth;

        // try best fit
        let curr;
        let list = [];
        while (curr = content.pop()) {
            list.push(curr);
            let attempt = list.join(join_sep);
            attempt.substring(0, attempt.length - join_sep.length);

            text.text(attempt);
            if (text.node().getBBox().width > width) {
                list.pop();
                list.push(ellipsis);

                attempt = list.join(join_sep);
                attempt.substring(0, attempt.length - join_sep.length);
                text.text(attempt);
                break;
            }
        }
    }

    /**
     * Trim text's words if that overflows the desired width
     * @param text - reference to d3.js SVG element
     * @param width - max width that the text can be before overflow
     */
    static calculateWordsOverflow(text, width) {
        const content = text.text().split(/\s+/).reverse();
        TextOverflow.calculateTextOverflow(text, width, content, ' ');
    }

    /**
     * Trim text's characters if that overflows the desired width
     * @param text - reference to d3.js SVG element
     * @param width - max width that the text can be before overflow
     */
    static calculateCharsOverflow(text, width) {
        const content = text.text().split('').reverse();
        TextOverflow.calculateTextOverflow(text, width, content, '');
    }

}