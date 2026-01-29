// app/components/ApplicationCard.tsx
interface ApplicationCardProps {
  application: {
    id: string;
    cover_letter: string;
    status: string;
    jobs: { title: string }[];
    users: { name: string; email: string }[];
  };
}

export default function ApplicationCard({ application }: ApplicationCardProps) {
  const { id, cover_letter, status, jobs, users } = application;
  return (
    <div className="border rounded p-4 shadow mb-4">
      <h2 className="text-lg font-bold">Application ID: {id}</h2>
      <p>
        <strong>Job:</strong> {jobs[0]?.title || "N/A"}
      </p>
      <p>
        <strong>Applicant:</strong> {users[0]?.name} ({users[0]?.email})
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
      <p className="mt-2">
        <strong>Cover Letter:</strong>
      </p>
      <p className="bg-gray-100 p-2 rounded">{cover_letter}</p>
    </div>
  );
}
