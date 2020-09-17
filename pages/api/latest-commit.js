const USERNAME = 'k4m4';
const EMAIL = 'nikolaskam@gmail.com';

const latestCommit = async (_, response) => {
	const githubResponse = await fetch(`https://api.github.com/users/${USERNAME}/events/public`);
	const json = await githubResponse.json();

	if (json.message) {
		return response.status(429).json(json);
	}

	const pushEvents = json.filter(event => event.type === 'PushEvent');

	let latestCommit;
	const latestPushEvent = pushEvents.find(event => {
		latestCommit = event.payload.commits.reverse().find(commit => commit.author.email === EMAIL);
		return Boolean(latestCommit);
	});

	if (!latestCommit) {
		return response.status(404).json({
			error: 'No commit',
		});
	}

	const { repo, created_at: createdAt } = latestPushEvent;

	const repoName = repo.name;
	const repoURL = `https://github.com/${repoName}`;
	const commitMessage = latestCommit.message;
	const commitURL = `${repoURL}/commit/${latestCommit.sha}`;

	return response.status(200).json({
		repoName,
		repoURL,
		commitMessage,
		commitURL,
		createdAt,
	});
};

export default latestCommit;
