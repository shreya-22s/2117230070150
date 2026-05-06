import axios from "axios";
import logger from "../logger/logger";

const API_URL =
  "/evaluation-service/notifications";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaHJleWEuci4yMDIzLmFpZHNAcml0Y2hlbm5haS5lZHUuaW4iLCJleHAiOjE3NzgwNDk1MjEsImlhdCI6MTc3ODA0ODYyMSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjkwNDYyODc5LWI5ZDYtNDgzYy05MDFjLWE5OTU3ZTdkZTk2NSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNocmV5YSByIiwic3ViIjoiMGVhMmE4OGEtMzJiNS00MTcwLTg4NDctZDVkZGRmMTY0MzU4In0sImVtYWlsIjoic2hyZXlhLnIuMjAyMy5haWRzQHJpdGNoZW5uYWkuZWR1LmluIiwibmFtZSI6InNocmV5YSByIiwicm9sbE5vIjoiMjExNzIzMDA3MDE1MCIsImFjY2Vzc0NvZGUiOiJCVENEcVQiLCJjbGllbnRJRCI6IjBlYTJhODhhLTMyYjUtNDE3MC04ODQ3LWQ1ZGRkZjE2NDM1OCIsImNsaWVudFNlY3JldCI6InlzdlpzYU5xQW1UZ2tEWU4ifQ.xFQQBP-yCv6ioNkVU5BUA3MfzaD5p1B0LjBSnlNVfJI";

const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const fetchPriorityNotifications = async () => {
  try {
    logger("Fetching notifications");

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log(response.data);

    const notifications = response.data.notifications || [];

    const sortedNotifications = notifications.sort((a, b) => {
      const priorityDiff =
        priorityMap[b.Type] - priorityMap[a.Type];

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    return sortedNotifications.slice(0, 10);
  } catch (error) {
    console.error(error);

    return [];
  }
};