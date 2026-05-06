# Notification System Design

## Overview

For Stage 1, I created a simple notification system that fetches notifications from the given API and displays the top 10 notifications based on priority.

The main goal was to sort notifications efficiently using the priority rules mentioned in the problem statement.

---

## Priority Logic

Notifications are prioritized in the following order:

1. Placement
2. Result
3. Event

To implement this, I assigned weights for each type:

- Placement → 3
- Result → 2
- Event → 1

While sorting:
- notifications with higher priority appear first
- if two notifications have the same priority, the latest one is shown first using timestamp comparison

---

## Approach Used

1. Fetch notifications from the API using Axios
2. Store notifications in an array
3. Sort notifications using:
   - priority weight
   - timestamp
4. Return only the top 10 notifications using `slice(0,10)`

---

## Efficient Top 10 Maintenance

Currently, sorting is done using JavaScript array sorting.

For a larger real-time system, a better approach would be using a Min Heap / Priority Queue:
- maintain only top 10 notifications
- remove lower priority notifications when new higher priority notifications arrive
- reduces unnecessary sorting operations

This improves efficiency for large-scale notification systems.

---

## Logging

A custom logging middleware was used to track important actions such as:
- fetching notifications
- successful responses
- errors during API calls

Instead of using random console logs throughout the project, logging was centralized in a separate logger file.

---

## Challenges Faced

While integrating the API, CORS issues and authorization errors occurred during frontend requests.

To solve this:
- React proxy configuration was used
- Authorization token was added in request headers

After fixing these issues, notifications were fetched successfully.

---

## Technologies Used

- React JS
- Axios
- JavaScript
- REST API

---

## Output

The final output displays the top 10 notifications sorted according to:
1. Priority
2. Latest timestamp