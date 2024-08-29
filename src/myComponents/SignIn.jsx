import { Input} from "@/components/ui/input";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = () =>{
    console.log({email, password});
  }
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
       <button onClick={handleSignIn} className="bg-black text-white w-full py-2 rounded-md">Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
