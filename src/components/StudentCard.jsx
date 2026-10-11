// A single student card. Data comes in through the `student` prop.
function StudentCard({ student, onView, onDelete }) {
  return (
    <div className="card h-100 shadow-sm rounded-4">

      {/* Grey placeholder with a simple person icon */}
      <div className="student-card-photo">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="36" r="17" fill="#adb5bd" />
          <path d="M16 100 C16 72 84 72 84 100 Z" fill="#adb5bd" />
        </svg>
      </div>

      <div className="card-body">
        <h5 className="card-title">{student.name}</h5>
        <p className="mb-1 small">ID: {student.id}</p>
        <p className="mb-1 small">Major: {student.major}</p>
        <p className="mb-1 small">Year: {student.year}</p>
        <p className="mb-3 small">GPA: {student.gpa}</p>

        <div className="d-flex gap-2">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => onView(student)}
          >
            View Profile
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(student.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
