export const ratedDoctorsData = async () => {
  const res = await fetch("http://localhost:8000/rated-doctors");
  const data = await res.json();

  return data;
};
