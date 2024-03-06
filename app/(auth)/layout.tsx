import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      <Image
        fill
        alt="Auth Page Image"
        src="/authbg.png"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
