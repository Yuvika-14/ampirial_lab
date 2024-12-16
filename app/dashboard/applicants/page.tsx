import { DataTable } from "@/components/data-table"
import { columns } from "@/components/columns"

const data = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    position: "Software Engineer",
    status: "Interview",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    position: "Product Manager",
    status: "Offer",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    position: "UX Designer",
    status: "Applied",
  },
]

export default function ApplicantsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Applicants</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

