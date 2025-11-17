/**
 * GitHub Webhook Event Types
 *
 * Union type of all GitHub webhook event names for IntelliSense support.
 *
 * @see https://docs.github.com/en/webhooks/webhook-events-and-payloads
 */

/**
 * All GitHub webhook event names.
 *
 * Provides IntelliSense for event type checking.
 */
export type GitHubEventName =
  | "branch_protection_configuration"
  | "branch_protection_rule"
  | "check_run"
  | "check_suite"
  | "code_scanning_alert"
  | "commit_comment"
  | "create"
  | "custom_property"
  | "custom_property_values"
  | "delete"
  | "dependabot_alert"
  | "deploy_key"
  | "deployment"
  | "deployment_protection_rule"
  | "deployment_review"
  | "deployment_status"
  | "discussion"
  | "discussion_comment"
  | "fork"
  | "github_app_authorization"
  | "gollum"
  | "installation"
  | "installation_repositories"
  | "installation_target"
  | "issue_comment"
  | "issue_dependencies"
  | "issues"
  | "label"
  | "marketplace_purchase"
  | "member"
  | "membership"
  | "merge_group"
  | "meta"
  | "milestone"
  | "org_block"
  | "organization"
  | "package"
  | "page_build"
  | "personal_access_token_request"
  | "ping"
  | "project"
  | "project_card"
  | "project_column"
  | "projects_v2"
  | "projects_v2_item"
  | "projects_v2_status_update"
  | "public"
  | "pull_request"
  | "pull_request_review"
  | "pull_request_review_comment"
  | "pull_request_review_thread"
  | "pull_request_target"
  | "push"
  | "registry_package"
  | "release"
  | "repository"
  | "repository_advisory"
  | "repository_dispatch"
  | "repository_import"
  | "repository_ruleset"
  | "repository_vulnerability_alert"
  | "secret_scanning_alert"
  | "secret_scanning_alert_location"
  | "secret_scanning_scan"
  | "security_advisory"
  | "security_and_analysis"
  | "sponsorship"
  | "star"
  | "status"
  | "sub_issues"
  | "team"
  | "team_add"
  | "watch"
  | "workflow_dispatch"
  | "workflow_job"
  | "workflow_run";

/**
 * Maps event names to their corresponding @octokit/webhooks-types.
 *
 * This provides type-safe event payload access with IntelliSense.
 */
export interface EventTypeMap {
  push: "PushEvent";
  pull_request: "PullRequestEvent";
  pull_request_target: "PullRequestEvent";
  release: "ReleaseEvent";
  workflow_dispatch: "WorkflowDispatchEvent";
  workflow_run: "WorkflowRunEvent";
  workflow_job: "WorkflowJobEvent";
  issues: "IssuesEvent";
  issue_comment: "IssueCommentEvent";
  check_run: "CheckRunEvent";
  check_suite: "CheckSuiteEvent";
  deployment: "DeploymentEvent";
  deployment_status: "DeploymentStatusEvent";
  discussion: "DiscussionEvent";
  discussion_comment: "DiscussionCommentEvent";
  fork: "ForkEvent";
  star: "StarEvent";
  watch: "WatchEvent";
  create: "CreateEvent";
  delete: "DeleteEvent";
  gollum: "GollumEvent";
  ping: "PingEvent";
  // Add more as needed - all types available in @octokit/webhooks-types
}
