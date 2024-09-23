const notFoundStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
};

const notFoundTitleStyle: React.CSSProperties = {
  fontWeight: "500",
  fontSize: "3rem",
};

const NotFound = () => {
  return (
    <div style={notFoundStyle} className="box mb">
      <h2 style={notFoundTitleStyle}>Página não encontrada</h2>
    </div>
  );
};

export default NotFound;
