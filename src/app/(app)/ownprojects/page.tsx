'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/language-provider';

interface Project {
  id: string;
  ProjTitle: string;
  descriptionHU: string;
  descriptionEN: string;
  ProjLink?: string;
  Availability: 'under_development' | 'production_ready';
}

export default function Projects() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);

  const isHu = t.projects?.status_label === 'Állapot:';

  const onGetData = async () => {
    try {
      const res = await axios.get('/api/projects');
      setProjects(res.data?.docs || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([]);
    }
  };

  useEffect(() => {
    onGetData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl p-4 mb-6 font-bold text-center">
        {t.projects.page_title}
      </h1>

      <div className="flex flex-col gap-6 items-center">
        {projects?.map((project) => {
          const description = isHu ? project.descriptionHU : project.descriptionEN;

          return (
            <Card key={project.id} className="w-full max-w-[800px] shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{project.ProjTitle}</CardTitle>
                <CardDescription className="text-base mt-2 leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {project.ProjLink && (
                  <a
                    href={project.ProjLink}
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 underline font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.github_link}
                  </a>
                )}
              </CardContent>

              <CardFooter className="text-sm font-medium text-gray-600 dark:text-gray-400">
                <p>
                  {t.projects.status_label}{' '}
                  <span className="font-semibold text-textPrimary">
                    {t.projects.project_status[project.Availability] || project.Availability}
                  </span>
                </p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}