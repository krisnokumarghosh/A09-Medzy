import toast from "react-hot-toast";

export const successToast = (msg) => {
  toast.success(msg, {
    style: {
      background: "#E1F5EE",
      border: "0.5px solid #5DCAA5",
      color: "#085041",
      borderRadius: "12px",
      padding: "12px 16px",
    },
    iconTheme: {
      primary: "#0F6E56",
      secondary: "#E1F5EE",
    },
  });
};

export const errorToast = (msg) => {
  toast.error(msg, {
    style: {
      background: "#FAECE7",
      border: "0.5px solid #F0997B",
      color: "#4A1B0C",
      borderRadius: "12px",
      padding: "12px 16px",
    },
    iconTheme: {
      primary: "#993C1D",
      secondary: "#FAECE7",
    },
  });
};
