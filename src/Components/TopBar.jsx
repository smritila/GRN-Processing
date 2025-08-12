import React from "react";

import { Navbar, Container, Button, Dropdown, Image } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        background: "#111418",
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
          <span
            className="d-inline-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: 36,
              height: 36,
              background: "#1f242d",
              border: "1px solid #2a313d",
            }}
          >
            {/* Placeholder logo mark */}
            <i className="bi bi-recycle" />
          </span>
        </Navbar.Brand>

        {/* Center: icon group (like the screenshot toolbar) */}
        <div
          className="d-none d-md-flex align-items-center gap-3"
          style={{ color: "#c9d1d9" }}
        >
          <Button
            variant="link"
            className="p-0 text-light opacity-75 hover-opacity-100"
          >
            <i className="bi bi-grid-3x3-gap-fill fs-5" />
          </Button>
          <Button
            variant="link"
            className="p-0 text-light opacity-75 hover-opacity-100"
          >
            <i className="bi bi-download fs-5" />
          </Button>
          <Button
            variant="link"
            className="p-0 text-light opacity-75 hover-opacity-100"
          >
            <i className="bi bi-upload fs-5" />
          </Button>
          <Button
            variant="link"
            className="p-0 text-light opacity-75 hover-opacity-100"
          >
            <i className="bi bi-card-checklist fs-5" />
          </Button>
          <Button
            variant="link"
            className="p-0 text-light opacity-75 hover-opacity-100"
          >
            <i className="bi bi-bell fs-5" />
          </Button>
          {/* little green live-indicator like the dot in the screenshot */}
          <span
            className="ms-1 rounded-circle"
            style={{
              width: 6,
              height: 6,
              background: "#2ecc71",
              display: "inline-block",
            }}
            aria-label="status: online"
          />
        </div>

        {/* Right: search, help, notifications, user */}
        <div className="d-flex align-items-center ms-auto gap-2">
          <Button
            variant="outline-light"
            size="sm"
            className="d-flex align-items-center gap-2"
            style={{
              background: "transparent",
              borderColor: "#2a313d",
              color: "#e6eef8",
            }}
          >
            <i className="bi bi-search" />
          </Button>

          <Button
            variant="outline-light"
            size="sm"
            style={{
              background: "transparent",
              borderColor: "#2a313d",
              color: "#e6eef8",
            }}
            aria-label="Help"
          >
            <i className="bi bi-question-circle" />
          </Button>

          <Button
            variant="outline-light"
            size="sm"
            style={{
              background: "transparent",
              borderColor: "#2a313d",
              color: "#e6eef8",
            }}
            aria-label="Notifications"
          >
            <i className="bi bi-bell" />
          </Button>

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
