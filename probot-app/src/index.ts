import { Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.labeled", async (context) => {
    if (context.payload.label!.name === "analysis-requested") {
      const parts = context.payload.issue.title.split('/')
      const repositoryNameWithOwner = `${parts[0]}/${parts[1]}`
      const language = parts[2]
      context.octokit.rest.repos.createDispatchEvent({
        owner: "pre-quantum-research",
        repo: "pqc-data",
        event_type: "analysis-requested",
        client_payload: {
          repositoryNameWithOwner: repositoryNameWithOwner,
          language: language
        }
      })
    }

  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
