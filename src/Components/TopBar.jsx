import { Navbar, Container, Button, Dropdown, Image } from "react-bootstrap";

import { ReactComponent as Logo } from "../assets/logo.svg";
import NavItemWrapper from "./TopBarNavItemWrapper";

const TopBar = () => {
  const navItems = [
    { icon: "bi-grid-3x3-gap-fill", label: "Dashboard" },
    { icon: "bi-download", label: "Downloads" },
    { icon: "bi-inboxes-fill", label: "Inventory", isActive: true },
    { icon: "bi-card-checklist", label: "Tasks" },
  ];

  const quickActions = [
    { icon: "bi-search", label: "Search" },
    { icon: "bi-book", label: "Help" },
    { icon: "bi-bell", label: "Notifications" },
  ];

  return (
    <Navbar
      expand="lg"
      style={{
        background: "#111418",
        color: "#c9d1d9",
        height: 72,
      }}
      className="shadow-sm"
    >
      <Container
        fluid
        style={{
          maxWidth: 1440,
          padding: "12px 60px",
        }}
      >
        {/* Left: Logo */}
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center gap-2 text-white"
          style={{ fontWeight: 600 }}
        >
          <NavItemWrapper isActive isSquare>
            <Logo
              style={{
                width: 30,
                height: 30,
              }}
            />
          </NavItemWrapper>
        </Navbar.Brand>

        {/* Center: icon group (like the screenshot toolbar) */}
        <div className="d-md-flex align-items-center gap-3">
          {navItems.map((item, index) => (
            <NavItemWrapper
              key={index}
              aria-label={item.label}
              showIndicator={item.label === "Tasks"}
              isActive={item.isActive}
            >
              {item.isActive ? (
                <span className="fw-semibold" style={{ color: "#98FF4F" }}>
                  <i className={`bi ${item.icon} fs-5`} />
                  &nbsp;&nbsp;
                  {item.label}
                </span>
              ) : (
                <i className={`bi ${item.icon} fs-5`} />
              )}
            </NavItemWrapper>
          ))}
        </div>

        {/* Right: search, help, notifications, user */}
        <div
          className="d-flex align-items-center ms-auto gap-2 p-2 rounded-5"
          style={{ backgroundColor: "#292B2D" }}
        >
          {quickActions.map((action, index) => (
            <Button
              key={index}
              size="sm"
              style={{
                background: "transparent",
                border: "none",
                color: "#e6eef8",
              }}
              aria-label={action.label}
            >
              <i className={`bi ${action.icon}`} />
            </Button>
          ))}

          <Dropdown align="end">
            <Dropdown.Toggle
              as="div"
              id="user-menu"
              role="button"
              className="d-flex align-items-center cursor-pointer"
            >
              <Image
                roundedCircle
                width={32}
                height={32}
                src={`https://ui-avatars.com/api/?name=SG&background=1f242d&color=e6eef8`}
                alt="User"
                style={{ border: "1px solid #2a313d" }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="mt-2">
              <Dropdown.Header>
                Signed in as <strong>Smriti</strong>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="#profile">Profile</Dropdown.Item>
              <Dropdown.Item href="#settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#logout">Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopBar;
