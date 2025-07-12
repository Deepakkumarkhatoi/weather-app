import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";

export default function SigninPage() {
  return (
    <>
      <Navbar />
      <h2>Sign In</h2>
      <AuthForm type="signin" />
    </>
  );
}
