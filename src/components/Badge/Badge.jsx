import modul from "./Badge.module.css";

export const Badge = ({ variant, children }) => {
  switch (variant) {
    case "primary":
      return (
        <div className={`${modul.badge} ${modul.primary}`}>{children}</div>
      );
    case "success":
      return (
        <div className={`${modul.badge} ${modul.success}`}>{children}</div>
      );
    case "warning":
      return (
        <div className={`${modul.badge} ${modul.warning}`}>{children}</div>
      );
    case "alert":
      return <div className={`${modul.badge} ${modul.alert}`}>{children}</div>;
    default:
      return <div className={`${modul.badge}`}>{children}</div>;
  }
};
