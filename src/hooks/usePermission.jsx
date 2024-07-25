import { useMemo } from "react";

export const mappedPermissionObj = Object.freeze({
  Dashboard: "dashboard",
  User: "employees",
  Client: "clients",
  Project: "projects",
  Salaryslip: "salary",
  Leave: "leave",
  Leavetype: "leaveType",
  Verfication: "verification",
  Status: "timeSheet",
  Access: "access",
  Management: "management",
  Invoice: "invoices",
  Jobopening: "jobOpening",
  Department: "departments",
  designation: "designation",
  Providentfund: "providentfund",
  Td: "td",
  Companytax: "companytax",
  Expense: "expense",
  Companyprofile: "companyProfile",
  Gadget: "gadget",
  Profile: "profile",
  Myteams: "myTeams",
});

const getActionName = (key) => {
  const viewRegex = /view(?=_|$)/;
  const viewAllRegex = /view_all(?=_|$)/;
  const createUpdateDeleteRegex =
    /^(can_(create|update|delete|approve|decline))_/;

  if (viewAllRegex.test(key)) {
    return "viewAll";
  } else if (viewRegex.test(key)) {
    return "view";
  } else {
    const match = key.match(createUpdateDeleteRegex);
    if (match) {
      return match[2]; // Return the matched group (create, update, or delete)
    } else {
      return key; // Return the key as is if it doesn't match any pattern
    }
  }
};
const usePermissions = (path) => {
  const userData = JSON.parse(localStorage.getItem("userLoginToken")) ?? {
    permissions: [],
    role: null,
  };

  const { permissions, role } = userData;

  const userPermission = useMemo(() => {
    if (!role || !permissions) {
      return {};
    }
    const isAdmin = role === "admin";
    let userPermissionsObj = {};
    if (isAdmin) {
      Object.keys(mappedPermissionObj).forEach((key) => {
        userPermissionsObj[mappedPermissionObj[key]] = {
          view: true,
          viewAll: true,
          create: true,
          delete: true,
          update: true,
        };
      });

      return userPermissionsObj;
    }

    userPermissionsObj = permissions.reduce((acc, permissionObj) => {
      const key = mappedPermissionObj[permissionObj.resource];

      if (key) {
        const transformedActions = {};
        for (const actionKey in permissionObj.actions) {
          transformedActions[getActionName(actionKey)] = isAdmin
            ? true
            : permissionObj.actions[actionKey];
        }
        acc[key] = transformedActions;
      }

      return acc;
    }, {});

    return userPermissionsObj;
  }, [userData]);

  const hasPermission = (requestedPath, permissionKey, childHeaderKey) => {
    if (Object.keys(userPermission).length < 1) {
      return false;
    }
    if (!requestedPath) {
      return userPermission;
    }
    const updatedRequestedRoute = requestedPath.replace(/^\/(.*)/, "$1");
    if (updatedRequestedRoute === "management" && childHeaderKey) {
      return childHeaderKey?.some(
        (key) => userPermission?.[key]?.[permissionKey]
      );
    }

    return permissionKey && userPermission[updatedRequestedRoute]
      ? userPermission[updatedRequestedRoute][permissionKey]
      : userPermission[updatedRequestedRoute];
  };

  return {
    hasPermission,
    userPermission: path ? userPermission[path] : userPermission,
  };
};

export default usePermissions;
