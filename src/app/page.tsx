import { SignInForm } from '@features/sign-in/components/sign-in-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInForm />
    </main>
  );
}
