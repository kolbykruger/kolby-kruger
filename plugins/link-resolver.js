/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function(doc) {
	if (doc.isBroken) {
		return '/not-found';
	}

	if (doc.type === 'homepage') {
		return '/';
	}

	if (doc.type === 'post') {
		return '/post/' + doc.uid;
	}

	if (doc.type === 'case_study') {
		return '/case-study/' + doc.uid;
	}

	if (doc.type === 'experiment') {
		return '/experiments/' + doc.uid;
	}

	return '/not-found';
}
