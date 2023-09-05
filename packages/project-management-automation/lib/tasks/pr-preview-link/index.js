/**
 * Internal dependencies
 */
const debug = require( '../../debug' );

const { setFailed, getInput } = require( '@actions/core' );
const { getOctokit, context } = require( '@actions/github' );

/** @typedef {import('@actions/github').GitHub} GitHub */
/** @typedef {import('@octokit/webhooks').WebhookPayloadPullRequest} WebhookPayloadPullRequest */

/**
 * Adds a comment to new PRs with a link to the corresponding gutenberg.run preview site.
 *
 * @param {WebhookPayloadPullRequest} payload Pull request event payload.
 * @param {GitHub}                    octokit Initialized Octokit REST client.
 */
async function prPreviewLink( payload, octokit ) {
	const repo = payload.repository.name;
	const owner = payload.repository.owner.login;
	const pullRequestNumber = payload.pull_request.number;

	const token = getInput( 'github_token' );

	debug( JSON.stringify({token,repo, owner, pullRequestNumber, octokit})  );
	debug( 'pr-preview-link: Adding comment to PR.' );

	await octokit.rest.issues.createComment( {
		owner,
		repo,
		issue_number: pullRequestNumber,
		body:
			'Preview site for this PR: http://gutenberg.run/' +
			pullRequestNumber,
	} );
}

module.exports = prPreviewLink;