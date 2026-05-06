import React, { useEffect, useState } from "react";
import { fetchPriorityNotifications } from "../services/notificationService";

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      const data = await fetchPriorityNotifications();

      setNotifications(data || []);
    };

    loadNotifications();
  }, []);

  return (
    <div>
      <h2>Top 10 Priority Notifications</h2>

      {notifications.length === 0 ? (
        <p>No notifications found</p>
      ) : (
        notifications.map((item) => (
          <div
            key={item.ID}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{item.Type}</h3>
            <p>{item.Message}</p>
            <small>{item.Timestamp}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationList;