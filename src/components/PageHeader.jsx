// Page title + a button on the right. Both come in as props.
function PageHeader({ title, buttonLabel, onButtonClick }) {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
      <h2 className="mb-0">{title}</h2>
      <button className="btn btn-primary" onClick={onButtonClick}>
        {buttonLabel}
      </button>
    </div>
  );
}

export default PageHeader;
