import { Input } from "@/components/ui/input";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleRegister = () => {
    console.log({ email, password, confirmPassword });
  };
  return (
    <div>
      <div className="mt-4 space-y-4">
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={handleRegister}
          className="bg-black text-white w-full py-2 rounded-md"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;
