import React, { useEffect, useState } from "react";
import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import { awsURL } from "utils/Constants";
import swalService from "utils/SwalServices";

export default function NotificationScreen() {
  const [allNotifications, setAllNotifications] = useState([]);
  const fetchApi = async () => {
    const path = apiUrl.notifications;
    try {
      const { response } = await Helper.get(path);
      setAllNotifications(response.notifications);
    } catch (error) {
      swalService.showError({ title: "Error during fetch data!" });
    }
  };

  const handleMarkAllReadClick = async () => {
    const path = apiUrl.markAllRead;
    try {
      const { status } = await Helper.put({}, path);
      if (status === 200) {
        fetchApi();
      }
    } catch (error) {
      swalService.showError({ title: "Error!" });
    }
  };

  const handleNotificationClick = async (id) => {
    const path = `${apiUrl.notifications}/${id}`;
    try {
      const { status } = await Helper.get(path);
      if (status === 200) {
        fetchApi();
      }
    } catch (error) {
      swalService.showError({ title: "Error during fetch data!" });
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div
      className="h-[29.9rem] w-[24.625rem] bg-white absolute top-[4rem] right-[1rem] radius-22
      shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)] z-10 border-[1px] rounded-md border-[#E2E8F0]
      overflow-y-scroll custom_scroll
      custum_scroll"
    >
      <div className="p-2 flex justify-between items-center">
        <h1 className=" p-1 text-[#002169] mb-[8px] text-[20px] font-bold">
          NOTIFICATION({allNotifications?.length})
        </h1>
        <button
          className="h-[2rem] w-[7rem]  border-[1px] border-[#E2E8F0] text-[#686868] rounded-md text-sm"
          type="submit"
          onClick={() => handleMarkAllReadClick()}
        >
          Mark as read
        </button>
      </div>

      {allNotifications?.length > 0 ? (
        allNotifications?.map((notification) => {
          return (
            <div
              key={notification}
              className={`p-4 flex items-center justify-start cursor-pointer hover:bg-[#F2F6FF] ${
                !notification?.is_read ? "bg-[#F6F6F6]" : "bg-white"
              }`}
              onClick={() => handleNotificationClick(notification?.id)}
            >
              <img
                src={`${awsURL}/images/profile.jpg`}
                alt="Notification Image"
                className="h-[3rem] w-[3rem] rounded-full object-cover mr-4"
              />
              <div>
                <h1
                  className="text-blue-100"
                  style={{
                    color: "#031B59",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {notification.message}
                </h1>
                <p className="text-gray-600">Now</p>
              </div>
            </div>
          );
        })
      ) : (
        <h4 className="text-center">There is No Notification</h4>
      )}
    </div>
  );
}
