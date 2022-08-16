export class TextOverflow {

    /**
     * Trim text's content if that overflows the desired width
     * @param text - reference to d3.js SVG element
     * @param width - max width that the text can be before overflow
     */
    calculateTextOverflow(text, width) {
        const originalText = text.text();

        // calculate ellipsis size
        const ellipsis = '...';
        text.text(ellipsis);
        const ellipsisWidth = text.node().getComputedTextLength();
        width -= ellipsisWidth;

        // try best fit
        let words = originalText.split(/\s+/).reverse();
        let curr;
        let list = [];
        while (curr = words.pop()) {
            list.push(curr);
            let attempt = list.join(" ");
            attempt.substring(0, attempt.length - 1);

            text.text(attempt);
            if (text.node().getComputedTextLength() > width) {
                list.pop();
                list.push(ellipsis);

                attempt = list.join(" ");
                attempt.substring(0, attempt.length - 1);
                text.text(attempt);
                break;
            }
        }
    }
}