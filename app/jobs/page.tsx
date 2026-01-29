"use client";

import { useJobs } from "@/lib/hooks/useJobs";
import JobCard from "../components/JobCard";

export default function JobsPage() {
  const { data, isLoading, error } = useJobs();

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) return <p>Error loading jobs</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      {data?.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
