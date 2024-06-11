import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignUpForm from './signupForm';
import SignInForm from './signinForm';

export default function SignUp() {
  return (
    <Tabs defaultValue="SIGN IN" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="SIGN IN">
          SIGN IN
        </TabsTrigger>
        <TabsTrigger className="w-full" value="SIGN UP">
          SIGN UP
        </TabsTrigger>
      </TabsList>
      <TabsContent value="SIGN IN">
        <SignInForm />
      </TabsContent>
      <TabsContent value="SIGN UP">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  );
}
