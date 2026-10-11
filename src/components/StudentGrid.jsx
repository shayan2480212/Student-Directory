import StudentCard from './StudentCard.jsx';

// Responsive grid of cards.
// col-12 = 1 per row on phones, col-sm-6 = 2 per row, col-lg-3 = 4 per row on desktop.
function StudentGrid({ students, onView, onDelete }) {
  return (
    <div className="row g-4">
      {students.map((student) => (
        <div className="col-12 col-sm-6 col-lg-3" key={student.id}>
          <StudentCard
            student={student}
            onView={onView}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
}

export default StudentGrid;
