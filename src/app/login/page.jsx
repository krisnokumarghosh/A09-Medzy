import LoginComponent from "@/components/authentication/LoginComponent";

export const generateMetadata = () => {
  return {
    title: "Login | Medzy",
  };
};

const LoginPage = () => {
  return (
    <div>
      <LoginComponent></LoginComponent>
    </div>
  );
};

export default LoginPage;
