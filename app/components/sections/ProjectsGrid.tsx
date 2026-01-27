"use client";

import Image from "next/image";

interface Project {
  name: string;
  image: string;
  description: string;
  summary: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Work
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Explore our portfolio of landscape transformations across Dublin and
          beyond
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative cursor-pointer">
      <div className="relative aspect-4/3 overflow-hidden rounded-lg mb-4 bg-foreground/5">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
          fill
        />

        <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6">
          <p className="text-background text-sm leading-relaxed text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.summary}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-foreground/70 transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-foreground/60 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
