/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      type
      id
      title
      description
      imageKey
      owner
      timestamp
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        title
        description
        imageKey
        owner
        timestamp
      }
      nextToken
    }
  }
`;
export const listTasksByOwner = /* GraphQL */ `
  query ListTasksByOwner(
    $owner: String
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasksByOwner(
      owner: $owner
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        title
        description
        imageKey
        owner
        timestamp
      }
      nextToken
    }
  }
`;
