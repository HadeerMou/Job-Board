// app/jobs/[id]/page.tsx (Server Component)
import JobDetailClient from "@/app/components/JobDetailClient";
import { supabase } from "@/lib/supabaseClient";

interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  created_at: string;
}

export default async function JobDetailPage({
  params, // THIS IS DIRECTLY AVAILABLE
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Always log to check
  console.log("Server params.id:", id);

  // Fetch job from Supabase
  const { data: job, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Supabase error:", error.message);
    return <p>Failed to load job</p>;
  }

  if (!job) return <p>Job not found</p>;

  // Pass job to Client Component
  return <JobDetailClient job={job as Job} />;
}
