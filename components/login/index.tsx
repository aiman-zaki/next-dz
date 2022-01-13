import { Button, Card } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import { ILogin } from "../../pages/login";

const LoginComponent = ({ providers }: ILogin) => {
  const { data: session } = useSession();

  return (
    <>
      <>
        <Card>
          {!session &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                </Button>
              </div>
            ))}
          {session?.user && (
            <Button
              variant="light"
              color="blue"
              fullWidth
              onClick={() => signOut()}
            >
              Logout
            </Button>
          )}
        </Card>
      </>
    </>
  );
};

export default LoginComponent;
