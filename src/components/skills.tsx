import { SKILLS } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="bg-section-background p-8">
      <Card className="-mt-20 mx-auto text-center bg-background flex justify-center lg:flex-row flex-col items-center">
        {SKILLS.map((skill) => (
          <div
            className="w-full border-b border-primary lg:border-b-0 lg:border-r last:border-none"
            key={skill.title}
          >
            <CardHeader className="text-2xl font-semibold flex flex-col items-center gap-4">
              <Image
                src={skill.imageURL}
                alt={skill.title}
                width={64}
                height={64}
              />
              {skill.title}
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-8">
              <p className="max-w-[475px]">{skill.description}</p>
              <ul className="flex flex-col gap-8">
                {skill.fields.map((field) => (
                  <li
                    key={field.description}
                    className="flex flex-col items-center gap-2"
                  >
                    <h3 className="text-primary text-lg font-semibold">
                      {field.title}
                    </h3>
                    <p className="whitespace-pre-wrap">{field.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>
        ))}
      </Card>
    </section>
  );
}
