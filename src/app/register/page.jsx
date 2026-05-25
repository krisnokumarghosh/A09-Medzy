import RegistrationComponent from "@/components/authentication/RegistrationComponent";

export const generateMetadata = () => {
  return {
    title: "Register | Medzy",
  };
};

const RegisterPage = () => {
  return (
    <div>
      <RegistrationComponent></RegistrationComponent>
    </div>
  );
};

export default RegisterPage;
