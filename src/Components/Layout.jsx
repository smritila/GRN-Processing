import { Container, Stack } from "react-bootstrap";
import TopBar from "./TopBar";
import BreadcrumbNav from "./BreadcrumbNav";
import SectionTabs from "./SectionTabs";

const Layout = ({ children }) => {
  return (
    <div className="bg-light min-vh-100">
      {/* Top navigation */}
      <TopBar />

      {/* Sub-header: breadcrumb + tabs in one row */}
      <Container
        className="border-bottom"
        fluid
        style={{ maxWidth: 1440, padding: "16px 60px" }}
      >
        <Stack direction="horizontal">
          <BreadcrumbNav />
          <div className="ms-10">
            <SectionTabs />
          </div>
        </Stack>
      </Container>

      {/* Page content */}
      <main>
        <Container fluid style={{ maxWidth: 1440, padding: "24px 60px 48px" }}>
          {children}
        </Container>
      </main>
    </div>
  );
};

export default Layout;
