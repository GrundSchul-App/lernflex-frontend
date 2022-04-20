const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// export async function getAllClasses(token, userId) {

export async function getAllClasses() {
  const res = await fetch(`${BACKEND_URL}/classes`, {
    headers: {
      Accept: "application/json",
     // Authorization: `Bearer ${token}`,
    },
  });
  const body = await res.json();

  return body;
}

export async function getAllSubjects() {
  const res = await fetch(`${BACKEND_URL}/subject`, {
    headers: {
      Accept: "application/json",
     // Authorization: `Bearer ${token}`,
    },
  });
  const body = await res.json();

  return body;
}

export async function getStudentsByClassId(classId) {
  const res = await fetch(`${BACKEND_URL}/students/class/${classId}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const body = await res.json();
 
  return body;
}

export async function addAttendanceList(classId, subjectId) {
    const res = await fetch(`${BACKEND_URL}/attendanceList/add`, {  
        method: 'POST',
        headers: {

            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // fehlt einiges
            classId: classId,
            subjectId: subjectId
        })
    });
    const body = await res.json();
    return body;
}
