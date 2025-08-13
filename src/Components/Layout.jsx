import React from "react";
import TopBar from "./TopBar";
import BreadcrumbNav from "./BreadcrumbNav";
import SectionTabs from "./SectionTabs";

const Layout = ({ children }) => {
  return (
    <div className="bg-light min-vh-100">
      <TopBar />
      <div className="border-bottom" style={{ background: "#f7f8f6" }}>
        <div
          className="container-fluid"
          style={{ maxWidth: 1440, padding: "16px 60px" }}
        >
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <BreadcrumbNav />
            <SectionTabs />
          </div>
        </div>
      </div>
      <main>
        <div
          className="container-fluid"
          style={{ maxWidth: 1440, padding: "24px 60px 48px" }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};
export default Layout;
