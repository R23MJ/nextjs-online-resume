import { z } from "zod";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { repoSchema } from "@/lib/schemas";
import Link from "next/link";

type RepoCardProps = {
  repo: z.infer<typeof repoSchema>;
};

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <Card className="flex flex-col shadow-md border-[1px] border-black rounded-none w-[300px] h-[300px]">
      <CardHeader>
        <h2>{repo.full_name}</h2>
      </CardHeader>
      <CardContent>
        <p>{repo.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start mt-auto">
        <div className="flex gap-2 flex-wrap">
          {repo.topics.map(
            (topic) =>
              topic !== "featured" && (
                <span
                  key={topic}
                  className="rounded-full text-xs text-primary py-1 px-2 border border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {topic}
                </span>
              )
          )}
        </div>
        <div className="mt-2">
          <Link className="text-primary hover:underline" href={repo.html_url}>
            View on GitHub
          </Link>
          {repo.homepage && (
            <>
              {" "}
              |{" "}
              <Link
                className="text-primary hover:underline"
                href={repo.homepage}
              >
                Live Demo
              </Link>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
