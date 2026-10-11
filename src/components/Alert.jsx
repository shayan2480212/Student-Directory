// Dismissible alert. Only shows when a message is provided.
function Alert({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="alert alert-info alert-dismissible mt-4" role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      />
    </div>
  );
}

export default Alert;
