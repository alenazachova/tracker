export const AppButton = (props) => {
  const { url, children, type } = props;
  const className = "button button-" + type;
  return (
    <>
      <button url={url} className={className}>
        {children}
      </button>
    </>
  );
};
