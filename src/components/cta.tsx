import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <Button asChild>
      <Link href="#contact">Get in Touch</Link>
    </Button>
  );
}
