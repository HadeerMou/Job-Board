export async function applyToJob(jobId, coverLetter) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.from("applications").insert({
    job_id: jobId,
    user_id: user.id,
    cover_letter: coverLetter,
  });

  if (error) throw error;
}
