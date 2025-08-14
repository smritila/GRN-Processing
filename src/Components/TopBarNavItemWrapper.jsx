const DotIndicator = () => {
  return (
    <span
      className="rounded-circle p-1 d-inline-block"
      style={{ width: "6px", height: "6px", backgroundColor: "#98FF4F" }}
    ></span>
  );
};

const NavItemWrapper = ({
  children,
  isActive = false,
  isSquare = false,
  showIndicator = false,
}) => {
  let defaultClasses = [
    "d-inline-flex align-items-center justify-content-center",
    "rounded",
    "position-relative",
  ];

  if (isSquare) {
    defaultClasses.push("p-2");
  } else {
    defaultClasses.push("py-2", "px-3");
  }

  return (
    <span
      className={defaultClasses.join(" ")}
      style={{
        background: isActive ? "#292B2D" : "#1E1F21",
        border: "1px solid #2a313d",
      }}
    >
      {children}

      {showIndicator && (
        <span className="position-absolute top-0 start-100 translate-middle">
          <DotIndicator />
        </span>
      )}
    </span>
  );
};

export default NavItemWrapper;
