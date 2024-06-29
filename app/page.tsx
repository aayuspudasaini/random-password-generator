import PasswordGenerator from "@/components/password-generator-field";
export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center md:justify-center justify-start md:gap-4 gap-2.5 px-4 sm:px-6 lg:px-12 py-4 md:py-0">
      <h1 className="text-4xl lg:text-5xl text-accent-foreground font-extrabold text-center">
        Generate Secure Password
      </h1>
      <p className="text-base md:text-lg font-medium text-secondary-foreground text-center">
        Quickly generate strong passwords to enhance your online security.
      </p>
      <PasswordGenerator />
    </section>
  );
}
