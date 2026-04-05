import {
  Shield,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
  Star,
  Gavel,
} from 'lucide-react'
import type { PracticeArea } from '@/types/practiceArea'

export const practiceAreas: PracticeArea[] = [
  {
    id: 'refugee-claims',
    title: 'Refugee Claims & Protection',
    slug: 'refugee-claims',
    description:
      "We guide clients through Canada's refugee determination system, from initial claims before the Refugee Protection Division to appeals and humanitarian applications. Our lawyers understand the sensitivity and urgency of your situation.",
    icon: Shield,
    keyPoints: [
      'Refugee Protection Division (RPD) hearings and preparation',
      'Refugee Appeal Division (RAD) appeals',
      'Pre-Removal Risk Assessments (PRRA)',
      'Humanitarian and compassionate (H&C) applications',
      'Detention reviews and releases',
    ],
  },
  {
    id: 'family-sponsorship',
    title: 'Family Sponsorship',
    slug: 'family-sponsorship',
    description:
      'Reuniting families is at the heart of what we do. We assist Canadian citizens and permanent residents in sponsoring their loved ones, navigating complex eligibility requirements and documentation with care.',
    icon: Users,
    keyPoints: [
      'Spouse and common-law partner sponsorship',
      'Dependent children sponsorship',
      'Parents and grandparents sponsorship',
      'Sponsorship appeals and refusals',
      'Inadmissibility and criminal rehabilitation',
    ],
  },
  {
    id: 'permanent-residency',
    title: 'Permanent Residency',
    slug: 'permanent-residency',
    description:
      'Securing permanent residency is a major milestone. We help clients navigate Express Entry, Provincial Nominee Programs, and other pathways to build their lives in Canada with confidence.',
    icon: Award,
    keyPoints: [
      'Express Entry (FSW, FST, CEC) profiles and ITAs',
      'Provincial Nominee Programs (PNP)',
      'Atlantic Immigration Program',
      'Rural and Northern Immigration Pilot',
      'PR card renewals and travel documents',
    ],
  },
  {
    id: 'work-permits',
    title: 'Work Permits',
    slug: 'work-permits',
    description:
      'Whether you are an employer seeking to hire foreign workers or a skilled professional pursuing Canadian opportunities, we provide strategic guidance through every stage of the work permit process.',
    icon: Briefcase,
    keyPoints: [
      'LMIA applications and employer compliance',
      'Employer-specific and open work permits',
      'Intra-company transfers (ICT)',
      'International Experience Canada (IEC/Working Holiday)',
      'Work permit extensions and renewals',
    ],
  },
  {
    id: 'study-permits',
    title: 'Study Permits',
    slug: 'study-permits',
    description:
      'Canada is a top destination for international students. We assist with initial study permit applications, extensions, and transitions to post-graduate work permits and permanent residency pathways.',
    icon: GraduationCap,
    keyPoints: [
      'Initial study permit applications',
      'Study permit extensions',
      'Post-Graduation Work Permit (PGWP)',
      'Co-op and work authorization for students',
      'Transition from student to PR',
    ],
  },
  {
    id: 'visitor-visas',
    title: 'Visitor Visas & Extensions',
    slug: 'visitor-visas',
    description:
      'From temporary resident visas to super visas for parents, we help clients and their families visit Canada. We also handle status extensions and restoration for those already in Canada.',
    icon: Globe,
    keyPoints: [
      'Temporary Resident Visa (TRV) applications',
      'Electronic Travel Authorization (eTA)',
      'Super Visa for parents and grandparents',
      'Visitor record extensions',
      'Status restoration',
    ],
  },
  {
    id: 'citizenship',
    title: 'Citizenship Applications',
    slug: 'citizenship',
    description:
      "Becoming a Canadian citizen is the culmination of your immigration journey. We advise on eligibility, assist with applications and knowledge tests, and represent clients facing citizenship appeals.",
    icon: Star,
    keyPoints: [
      'Citizenship eligibility assessments',
      'Citizenship applications and documentation',
      'Physical presence calculations',
      'Citizenship test preparation',
      'Citizenship appeals and revocation',
    ],
  },
  {
    id: 'appeals-hearings',
    title: 'Appeals & Hearings',
    slug: 'appeals-hearings',
    description:
      'A refused application is not the end of the road. Our experienced litigators represent clients before the Immigration Appeal Division, Refugee Appeal Division, and Federal Court to fight for the outcome they deserve.',
    icon: Gavel,
    keyPoints: [
      'Immigration Appeal Division (IAD) hearings',
      'Refugee Appeal Division (RAD) appeals',
      'Federal Court judicial reviews',
      'Removal order appeals',
      'Residency obligation appeals',
    ],
  },
]
