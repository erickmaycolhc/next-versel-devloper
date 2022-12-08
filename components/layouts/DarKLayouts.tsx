export const DarkLayouts = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10 px",
      }}
    >
      <h3>DarK-Layouts</h3>
      <div>{children}</div>
    </div>
  );
};
