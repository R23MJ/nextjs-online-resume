import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-wrap justify-center gap-2">
      <div className="flex flex-col min-w-[50vw] p-5">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-primary">Full Stack Developer</span>.
        </h1>
        <p className="text-md md:text-lg text-foreground">
          I enjoy building scalable applications and stunning user experiences.
        </p>
      </div>
      <div className="relative h-[60vh] w-full">
        <Image
          className="absolute -z-10 object-cover"
          priority
          src="/hero.svg"
          alt="header illustration"
          width={1920}
          height={1080}
        />
      </div>
    </header>
  );
}
