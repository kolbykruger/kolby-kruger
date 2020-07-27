/**
 * To learn more about HTML Serializer check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/html-serializer
 */

import linkResolver from './link-resolver';
import prismicDOM from 'prismic-dom';

const Elements = prismicDOM.RichText.Elements;

export default function(type, element, content, children) {
	// Generate links to Prismic Documents as <router-link> components
	// Present by default, it is recommended to keep this

	if (type === Elements.paragraph) {
		return '<p>' + children.join('') + '</p>';
	}

	if (type === Elements.hyperlink) {
		let result = '';
		const url = prismicDOM.Link.url(element.data, linkResolver);

		if (element.data.link_type === 'Document') {
			result = `<nuxt-link to="${url}">${content}</nuxt-link>`;
		} else {
			const target = element.data.target ? `target="'${element.data.target}'" rel="noopener"` : '';
			result = `<a href="${url}" ${target}>${content}</a>`;
		}
		return result;
	}

	if (type === Elements.image) {
		let result = `
        <figure style="--aspect-ratio:${element.dimensions.width}/${element.dimensions.height};">
          <picture>
              <source data-srcset="${element.url}&w=572" media="(max-width: 640px)">
              <source data-srcset="${element.url}&w=736" media="(max-width: 960px)">
              <source data-srcset="${element.url}&w=736" media="(max-width: 1200px)">
              <source data-srcset="${element.url}&w=736" media="(max-width: 1920px)">
              <source data-srcset="${element.url}&w=736" media="(min-width: 1921px)">

              <img class="lazyload" data-src="${element.url}&w=736&colorquant=16&blur=500" alt="${element.alt || ''}" copyright="${element.copyright || ''}">
          </picture>
        </figure>
    `;

		if (element.linkTo) {
			const url = prismicDOM.Link.url(element.linkTo, linkResolver);

			if (element.linkTo.link_type === 'Document') {
				result = `<nuxt-link to="${url}">${result}</nuxt-link>`;
			} else {
				const target = element.linkTo.target ? `target="${element.linkTo.target}" rel="noopener"` : '';
				result = `<a href="${url}" ${target}>${result}</a>`;
			}
		}
		const wrapperClassList = [element.label || '', 'block-img'];
		result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`;
		return result;
	}

	// Return null to stick with the default behavior for everything else
	return null;
}
