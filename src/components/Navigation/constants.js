import iconHome from "../../assets/images/icon-home.png";
import iconTransaction from "../../assets/images/icon-refresh.png";
import iconNotification from "../../assets/images/icon-notifications.png";
import iconMapqr from "../../assets/images/icon-mpqr.png";
import iconSettings from "../../assets/images/icon-settings.png";
export const navData = [
  {
    icon: <img src={iconHome} alt="" />,
    link: "/dashboard",
    title: "Dashboard",
    id: "DASHBOARD",
    expanded: false,
    active: false,
  },
  {
    icon: <img src={iconTransaction} alt="" />,
    link: "/transactions",
    title: "Transactions",
    id: "transactions",
    expanded: false,
    active: false,
  },
  {
    icon: <img src={iconNotification} alt="" />,
    link: "/notificatios",
    title: "Notificatios",
    id: "notifictions",
    expanded: false,
    active: false,
  },
  {
    icon: <img src={iconMapqr} alt="" />,
    link: "/map-qr",
    title: "Map QR",
    id: "mapqr",
    expanded: false,
    active: false,
  },
  {
    icon: <img src={iconSettings} alt="" />,
    link: "/settings",
    title: "Settings",
    id: "settings",
    expanded: false,
    active: false,
  },
];
