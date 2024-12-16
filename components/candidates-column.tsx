import { CandidateCard } from "./candidate-card"

interface CandidatesColumnProps {
  title: string
  count: number
  candidates: {
    name: string
    location: string
    image: string
    rating: number
    appliedDate: string
  }[]
}

export function CandidatesColumn({ title, count, candidates }: CandidatesColumnProps) {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="px-2 py-1 text-sm font-medium bg-accent rounded-md">{count}</span>
      </div>
      <div className="space-y-4">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.name} {...candidate} />
        ))}
      </div>
    </div>
  )
}

