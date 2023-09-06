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

	// Retrieve artifacts for a specific workflow run
	const getArtifacts = async (owner, repo, runId) => {
		try {
		const response = await octokit.rest.actions.listWorkflowRunArtifacts({
			owner,
			repo,
			run_id: runId,
		});
	
		// Parse the response and extract the download URL or other information
		const artifacts = response.data.artifacts;
		// ... process the artifacts as needed
	
		return artifacts;
		} catch (error) {
		console.error("Error retrieving artifacts:", error);
		throw error;
		}
	};
	
	const runId = 6035878166;
	
	getArtifacts(owner, repo, runId)
		.then((artifacts) => {
		debug(Object.keys(artifacts).toString())
		})
		.catch((error) => {
		// Handle errors
		// ...
		});

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