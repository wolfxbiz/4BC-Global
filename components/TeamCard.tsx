'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

export type TeamMember = {
  name: string
  title: string
  photo: string
  shortBio: string
  fullBio: string
  expertise: string[]
}

export default function TeamCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col">
      {/* Photo */}
      <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-primary/10 to-plum/10">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-heading font-semibold text-[17px] text-text">{member.name}</h3>
          <p className="font-body text-sm text-primary font-medium mt-0.5">{member.title}</p>
        </div>

        <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
          {expanded ? member.fullBio : member.shortBio}
        </p>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {member.expertise.map((e) => (
            <span key={e} className="text-xs font-body text-text-muted bg-bg-soft border border-border rounded-full px-2.5 py-0.5">
              {e}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-heading font-medium text-plum hover:text-primary transition-colors flex items-center gap-1"
        >
          {expanded ? (
            <><ChevronUp size={14} /> Show Less</>
          ) : (
            <><ChevronDown size={14} /> Full Bio</>
          )}
        </button>
      </div>
    </div>
  )
}
