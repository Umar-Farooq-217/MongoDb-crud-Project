import dbConnect from '@/config/db';
import { studentsModel } from '@/model/students';
import React from 'react';

// Server-Side Rendering (SSR) function to fetch data before rendering the page
export async function getServerSideProps() {
  // Ensure database connection
  await dbConnect();

  // Fetch data from the students model
  const data = await studentsModel.find({});

  return {
    props: {
      students: JSON.parse(JSON.stringify(data)) // Avoid serialization issues
    },
  };
}

export default function StudentsPage({ students }) {
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.email} - {student.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
