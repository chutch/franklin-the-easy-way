import {decorateBlock} from "../../scripts/lib-franklin";

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
    block.textContent = '';
    decorateBlock('youtube');
}
