import { ReleasableCommits } from "projen";
import { JsiiProject } from "projen/lib/cdk";
import { GithubCredentials } from "projen/lib/github";
import { NodePackageManager, NpmAccess } from "projen/lib/javascript";

const project = new JsiiProject({
  name: "projen",
  githubOptions: {
    mergify: false,
  },
  projenCredentials: GithubCredentials.fromApp(),
  description: "More projects and components for projen.",
  homepage: "https://github.com/jessestricker/projen",
  keywords: ["projen"],
  npmAccess: NpmAccess.PUBLIC,
  npmTrustedPublishing: true,
  packageManager: NodePackageManager.PNPM,
  packageName: "@jessestricker/projen",
  peerDeps: ["constructs@^10", "projen@>=0.97.0 <1.0.0"],
  releasableCommits: ReleasableCommits.featuresAndFixes(),
  defaultReleaseBranch: "main",
  prettier: true,
  prettierOptions: {
    yaml: true,
  },
  pullRequestTemplate: false,
  releaseToNpm: true,
  workflowGitIdentity: {
    name: "github-actions[bot]",
    email: "41898282+github-actions[bot]@users.noreply.github.com",
  },
  workflowNodeVersion: "24",
  workflowPackageCache: true,
  projenrcTs: true,
  author: "Jesse Stricker",
  authorAddress: "git@jessestricker.de",
  repositoryUrl: "https://github.com/jessestricker/projen.git",
  jsiiVersion: "~5.9.0",
});

project.synth();
