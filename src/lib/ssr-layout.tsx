import React, { useEffect, useState } from "react";

function Loading_SSR() {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <>{children}</> : <Loading_SSR />}</>;
};

export default CustomLayout;
