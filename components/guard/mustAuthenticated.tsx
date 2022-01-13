import { useSession } from "next-auth/react";
import { ComponentType } from "react";

function mustAuthenticated<T>(BaseComponent: ComponentType<T>) {
  return (hocProps: T) => {
    const { data: session, status } = useSession();

    if (status === "unauthenticated") {
      return <>Opps</>;
    }

    return <BaseComponent {...hocProps} />;
  };
}

export default mustAuthenticated;
