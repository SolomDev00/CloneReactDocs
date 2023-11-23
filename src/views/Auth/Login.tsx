// import { useLocation } from "react-router-dom";
import Button from "../../components/schema/Button";
import Input from "../../components/schema/Input";

const LoginPage = () => {
  // const location = useLocation();

  return (
    <div>
      <h2 className="text-center mb-3">Login to Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
