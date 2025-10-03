import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const AppSidebar = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return {
      day: days[date.getDay()],
      date: `${date.getDate()}${getOrdinal(date.getDate())} ${months[date.getMonth()]}, ${date.getFullYear()}`,
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
    };
  };

  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const { day, date, time } = formatDate(currentTime);

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-border flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight">R.O.A.D.S.</h1>
      </div>

      <nav className="flex-1 px-4 overflow-y-auto">
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/about"
              className={`block px-4 py-2.5 rounded-lg font-medium transition-colors ${
                isActive("/about") ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/50"
              }`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={`block px-4 py-2.5 rounded-lg font-medium transition-colors ${
                isActive("/dashboard") || isActive("/video-processing") ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/50"
              }`}
            >
              Dashboard
            </NavLink>
          </li>
          {(location.pathname === "/dashboard" || location.pathname === "/video-processing") && (
            <li>
              <NavLink
                to="/video-processing"
                className={`block px-8 py-2 text-sm rounded-lg transition-colors ${
                  isActive("/video-processing") ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/50"
                }`}
              >
                Video Processing
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/manual-test"
              className={`block px-4 py-2.5 rounded-lg font-medium transition-colors ${
                isActive("/manual-test") || isActive("/test-dashboard") ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/50"
              }`}
            >
              Manual Test
            </NavLink>
          </li>
          {(location.pathname === "/manual-test" || location.pathname === "/test-dashboard") && (
            <>
              <li>
                <NavLink
                  to="/manual-test"
                  className={`block px-8 py-2 text-sm rounded-lg transition-colors ${
                    isActive("/manual-test") ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/50"
                  }`}
                >
                  Input Values
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/test-dashboard"
                  className={`block px-8 py-2 text-sm rounded-lg transition-colors ${
                    isActive("/test-dashboard") ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/50"
                  }`}
                >
                  Test Dashboard
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/technology-stack"
              className={`block px-4 py-2.5 rounded-lg font-medium transition-colors ${
                isActive("/technology-stack") ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/50"
              }`}
            >
              Technology Stack
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/references"
              className={`block px-4 py-2.5 rounded-lg font-medium transition-colors ${
                isActive("/references") ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/50"
              }`}
            >
              References
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="p-6 text-center border-t border-border">
        <div className="font-semibold">{day}</div>
        <div className="text-sm">{date}</div>
        <div className="font-semibold">{time}</div>
      </div>
    </aside>
  );
};

export default AppSidebar;
