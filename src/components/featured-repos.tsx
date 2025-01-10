import { repoSchema } from "@/lib/schemas";
import RepoCard from "./repo-card";
import { z } from "zod";

export default async function FeaturedRepos() {
  const result = await fetch(
    "https://api.github.com/search/repositories?q=topic:featured+user:R23MJ+sort:updated",
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const repos = await result.json();

  return (
    <section id="featured-repos">
      <ul className="flex flex-wrap gap-4 p-8 justify-center">
        {repos.items.map((repo: z.infer<typeof repoSchema>) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </ul>
    </section>
  );
}
