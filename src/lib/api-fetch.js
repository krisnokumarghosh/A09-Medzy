export const ratedDoctorsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rated-doctors`);
  const data = await res.json();

  return data;
};

export const allDoctors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-doctors`);
  const data = await res.json();
  return data;
};

export const singleDoctorData = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-doctors/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getBookedData = async (userID, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${userID}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
