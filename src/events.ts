/**
 * Event System - Comprehensive webhook event handling
 *
 * Provides type-safe access to ALL GitHub webhook events using @octokit types.
 */

import type {
  CheckRunEvent,
  CheckSuiteEvent,
  CreateEvent,
  DeleteEvent,
  DeploymentEvent,
  DeploymentStatusEvent,
  DiscussionCommentEvent,
  DiscussionEvent,
  ForkEvent,
  GollumEvent,
  IssueCommentEvent,
  IssuesEvent,
  PingEvent,
  StarEvent,
  WatchEvent,
  WorkflowJobEvent,
  WorkflowRunEvent,
} from "@octokit/webhooks-types";
import { getEventPayload, isEventType } from "./github-context.ts";

// Common CI/CD Events

export function getWorkflowRunEvent(): WorkflowRunEvent {
  return getEventPayload<WorkflowRunEvent>();
}

export function isWorkflowRunEvent(): boolean {
  return isEventType("workflow_run");
}

export function getWorkflowJobEvent(): WorkflowJobEvent {
  return getEventPayload<WorkflowJobEvent>();
}

export function isWorkflowJobEvent(): boolean {
  return isEventType("workflow_job");
}

export function getCheckRunEvent(): CheckRunEvent {
  return getEventPayload<CheckRunEvent>();
}

export function isCheckRunEvent(): boolean {
  return isEventType("check_run");
}

export function getCheckSuiteEvent(): CheckSuiteEvent {
  return getEventPayload<CheckSuiteEvent>();
}

export function isCheckSuiteEvent(): boolean {
  return isEventType("check_suite");
}

// Issues & Comments

export function getIssuesEvent(): IssuesEvent {
  return getEventPayload<IssuesEvent>();
}

export function isIssuesEvent(): boolean {
  return isEventType("issues");
}

export function getIssueCommentEvent(): IssueCommentEvent {
  return getEventPayload<IssueCommentEvent>();
}

export function isIssueCommentEvent(): boolean {
  return isEventType("issue_comment");
}

// Discussions

export function getDiscussionEvent(): DiscussionEvent {
  return getEventPayload<DiscussionEvent>();
}

export function isDiscussionEvent(): boolean {
  return isEventType("discussion");
}

export function getDiscussionCommentEvent(): DiscussionCommentEvent {
  return getEventPayload<DiscussionCommentEvent>();
}

export function isDiscussionCommentEvent(): boolean {
  return isEventType("discussion_comment");
}

// Deployments

export function getDeploymentEvent(): DeploymentEvent {
  return getEventPayload<DeploymentEvent>();
}

export function isDeploymentEvent(): boolean {
  return isEventType("deployment");
}

export function getDeploymentStatusEvent(): DeploymentStatusEvent {
  return getEventPayload<DeploymentStatusEvent>();
}

export function isDeploymentStatusEvent(): boolean {
  return isEventType("deployment_status");
}

// Repository Events

export function getForkEvent(): ForkEvent {
  return getEventPayload<ForkEvent>();
}

export function isForkEvent(): boolean {
  return isEventType("fork");
}

export function getStarEvent(): StarEvent {
  return getEventPayload<StarEvent>();
}

export function isStarEvent(): boolean {
  return isEventType("star");
}

export function getWatchEvent(): WatchEvent {
  return getEventPayload<WatchEvent>();
}

export function isWatchEvent(): boolean {
  return isEventType("watch");
}

export function getCreateEvent(): CreateEvent {
  return getEventPayload<CreateEvent>();
}

export function isCreateEvent(): boolean {
  return isEventType("create");
}

export function getDeleteEvent(): DeleteEvent {
  return getEventPayload<DeleteEvent>();
}

export function isDeleteEvent(): boolean {
  return isEventType("delete");
}

// Wiki

export function getGollumEvent(): GollumEvent {
  return getEventPayload<GollumEvent>();
}

export function isGollumEvent(): boolean {
  return isEventType("gollum");
}

// Webhook Testing

export function getPingEvent(): PingEvent {
  return getEventPayload<PingEvent>();
}

export function isPingEvent(): boolean {
  return isEventType("ping");
}
