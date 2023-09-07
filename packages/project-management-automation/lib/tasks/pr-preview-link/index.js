
/**
 * Internal dependencies
 */
const debug = require( '../../debug' );

/** @typedef {ReturnType<import('@actions/github').getOctokit>} GitHub */
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
	const action = payload.action;
	const pullRequestNumber = payload.workflow_run.pull_requests[0].number;
	  
	if (action === 'in_progress') {
		const commentBody = await createBuildSummary({
			buildStatus: action, commitHash: '12345678', pullRequestNumber, artifactsUrl: 'https://github.com/WordPress/gutenberg/suites/14933339105/artifacts/851299943'
		}, octokit);

		await octokit.rest.issues.createComment( {
			owner,
			repo,
			issue_number: pullRequestNumber,
			body: commentBody,
		} );
		return;
	}

	debug(JSON.stringify(payload));

	debug( 'workflow_run: run detail' );
	// Get latest workflow_run for the 
	const res = await octokit.rest.actions.listWorkflowRuns({
		owner,
		repo,
		workflow_id: "build-plugin-zip.yml",
		per_page: 1
	  });
	// Parse the response and extract the download URL or other information
	const workflow = res.data;
	debug( JSON.stringify(workflow) );
	
	debug( 'artifacts: detail data.' );
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
	
	const artifacts = await getArtifacts("WordPress", repo, runId)
	debug(Object.keys(artifacts).toString());

	debug( 'pr-preview-link: Adding comment to PR.' );
	const commentBody = await createBuildSummary({
		buildStatus: 'success', commitHash: '12345678', pullRequestNumber, artifactsUrl: 'https://github.com/WordPress/gutenberg/suites/14933339105/artifacts/851299943'
	}, octokit);

	await octokit.rest.issues.createComment( {
		owner,
		repo,
		issue_number: pullRequestNumber,
		body: commentBody,
	} );
}

const createBuildSummary = async ( { buildStatus, commitHash, pullRequestNumber, artifactsUrl }, octokit ) => {
	let status, previewMsg, artifactMsg;
	status = previewMsg = artifactMsg = "🚧  Building in progress...";
	if (buildStatus === "success") {
		status = "✅  Build successful!";
		previewMsg = `🔗 [gutenberg.run/${ pullRequestNumber }](gutenberg.run/${ pullRequestNumber })`;
		artifactMsg = `📦 [gutenberg-plugin](${ artifactsUrl }) - 8.85 MB`;
	} else if (buildStatus === "failure") {
		status = previewMsg = artifactMsg = "🚫  Build failed!";
	}

	debug(JSON.stringify({ buildStatus, commitHash, pullRequestNumber, artifactsUrl }))

	const response = await octokit.rest.markdown.render( {
		"mode": 'gfm',
		"text":
			`
<!--gutenberg-run-placeholder:cmt@v1-->
# Gutenberg Plugin build status

| Name                    | Result |
| ----------------------- | - |
| **Last commit:**        |  |
| **Status**:             | ${ status } |
| **Preview URL**:        | ${ previewMsg } |
| **Gutenberg plugin zip**: | ${ artifactMsg } |
  `
	} )
	return response.data;
};


module.exports = prPreviewLink;
