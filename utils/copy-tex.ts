/**
 * Sources (modified):
 * - https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex
 * - https://github.com/cpinitiative/usaco-guide/blob/master/gatsby-browser.tsx
 */

const defaultCopyDelimiters = {
	inline: ['$', '$'],
	display: ['$$', '$$'],
};

const katexReplaceWithTex = (fragment, copyDelimiters = defaultCopyDelimiters) => {
	const katexHtml = fragment.querySelectorAll('.katex-mathml + .katex-html');
	for (const element of katexHtml) {
		if (element.remove) {
			element.remove(null);
		} else {
			element.remove();
		}
	}

	const katexMathml = fragment.querySelectorAll('.katex-mathml');
	for (const element of katexMathml) {
		const texSource = element.querySelector('annotation');
		if (texSource) {
			if (element.replaceWith) {
				element.replaceWith(texSource);
			} else {
				element.parentNode.replaceChild(texSource, element);
			}

			texSource.innerHTML = copyDelimiters.inline[0] +
				String(texSource.innerHTML) + copyDelimiters.inline[1];
		}
	}

	const displays = fragment.querySelectorAll('.katex-display annotation');
	for (const element of displays) {
		element.innerHTML = copyDelimiters.display[0] +
			String(element.innerHTML.slice(copyDelimiters.inline[0].length,
				element.innerHTML.length - copyDelimiters.inline[0].length -
				copyDelimiters.inline[1].length)) +
			copyDelimiters.display[1];
	}

	return fragment;
};

export const initializeCopyText = () => {
	if (typeof document !== 'undefined' && document) {
		document.addEventListener('copy', event => {
			const selection = window.getSelection();
			if (selection.isCollapsed) {
				return;
			}

			const fragment = selection.getRangeAt(0).cloneContents();
			if (!fragment.querySelector('.katex-mathml')) {
				return;
			}

			const html = [];
			for (const childNode of fragment.childNodes) {
				html.push((childNode as HTMLElement).outerHTML);
			}

			event.clipboardData.setData('text/html', html.join(''));
			event.clipboardData.setData('text/plain',
				katexReplaceWithTex(fragment).textContent);

			event.preventDefault();
		});
	}
};
