import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <h2>Sign Up</h2>
      <AuthForm type="signup" />
    </>
  );
}
