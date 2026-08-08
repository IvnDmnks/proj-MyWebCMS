'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Project {
  id: string;
  ProjTitle: string;
  description: string;
  ProjLink?: string;
  Availability: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  const onGetData = async () => {
    try {
      const res = await axios.get('/api/projects'); // Payload API
      setProjects(res.data.docs); // Payload JSON-ban a dokumentumok a "docs" mezőben vannak
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    onGetData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl p-4 m-4 font-bold text-center">
        Recently I worked on these projects:
      </h1>
      {projects.map((e) => (
        <Card key={e.id} className="m-4 max-w-[800px] justify-center mx-auto">
          <CardHeader>
            <CardTitle>{e.ProjTitle}</CardTitle>
            <CardDescription>{e.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {e.ProjLink && (
              <a
                href={e.ProjLink}
                className="hover:text-textSecondary"
                target="_blank"
                rel="noreferrer"
              >
                <u>GitHub Repository</u>
              </a>
            )}
          </CardContent>
          <CardFooter>
            <p>Availability: {e.Availability}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
