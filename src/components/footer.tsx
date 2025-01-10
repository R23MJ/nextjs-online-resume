import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-section-background z-0 p-8 flex">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Link
            className="text-primary-foreground hover:underline"
            href="/srcdoc.pdf"
          >
            ✅ Next.js Certificate from CodeAcademy{" "}
          </Link>
          <Image
            src="https://simpleicons.org/icons/codecademy.svg"
            width={24}
            height={24}
            alt="CodeAcademy Logo"
          />
        </div>
        <div>
          <Link
            className="text-primary-foreground hover:underline"
            href="https://bytegrad.com/courses/professional-react-nextjs"
          >
            ✅ Completed ByteGrad&apos;s Next.js/React Course
          </Link>
        </div>
      </div>
      <p className="ml-auto mt-auto text-primary-foreground">
        © 2025 Shea Harrington
      </p>
    </footer>
  );
}
