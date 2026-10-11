import { useState } from 'react';

import Navbar from './components/Navbar.jsx';
import Breadcrumb from './components/Breadcrumb.jsx';
import PageHeader from './components/PageHeader.jsx';
import StudentGrid from './components/StudentGrid.jsx';
import Pagination from './components/Pagination.jsx';
import Alert from './components/Alert.jsx';
import Footer from './components/Footer.jsx';

import { students as initialStudents } from './data/students.js';

const STUDENTS_PER_PAGE = 4;

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Students', href: '#students' },
  { label: 'Directory' }
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [alertMessage, setAlertMessage] = useState(
    'Student records have been successfully updated.'
  );

  // 1. Filter the list by the search term
  const term = searchTerm.trim().toLowerCase();
  const filteredStudents = term
    ? students.filter((student) =>
        student.name.toLowerCase().includes(term) ||
        String(student.id).includes(term)
      )
    : students;

  // 2. Work out the pagination numbers
  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / STUDENTS_PER_PAGE));
  const page = Math.min(currentPage, totalPages);

  // 3. Slice out just the 4 students for the current page
  const start = (page - 1) * STUDENTS_PER_PAGE;
  const visibleStudents = filteredStudents.slice(start, start + STUDENTS_PER_PAGE);

  // --- Event handlers ---
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);          // go back to page 1 on a new search
  };

  const handleDelete = (id) => {
    setStudents((previous) => previous.filter((student) => student.id !== id));
    setAlertMessage(`Student with ID ${id} was removed from the directory.`);
  };

  const handleView = (student) => {
    setAlertMessage(`Viewing profile for ${student.name} (ID: ${student.id}).`);
  };

  const handleAddNew = () => {
    setAlertMessage('Add New Student button clicked.');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar onSearch={handleSearch} />

      <main className="container flex-grow-1 py-4">
        <Breadcrumb items={BREADCRUMB_ITEMS} />

        <div className="mt-4">
          <PageHeader
            title="Student Directory"
            buttonLabel="Add New Student"
            onButtonClick={handleAddNew}
          />
        </div>

        <StudentGrid
          students={visibleStudents}
          onView={handleView}
          onDelete={handleDelete}
        />

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <Alert
          message={alertMessage}
          onClose={() => setAlertMessage('')}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
