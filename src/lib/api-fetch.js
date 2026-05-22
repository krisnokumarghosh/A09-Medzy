export const ratedDoctorsData = async () => {
  const res = await fetch("http://localhost:8000/rated-doctors");
  const data = await res.json();

  return data;
};

export const allDoctors = async () => {
  const res = await fetch("http://localhost:8000/all-doctors");
  const data = await res.json();
  return data;
};

export const singleDoctorData = async (id) => {
  const res = await fetch(`http://localhost:8000/all-doctors/${id}`);
  const data = await res.json();
  return data;
};
