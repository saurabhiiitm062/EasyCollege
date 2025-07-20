    import CandidateLayout from '@/components/CandidateLayout'
import type { ReactNode } from 'react'  

export default function CandidateRootLayout({ children }: { children: ReactNode }) {
    return <CandidateLayout>{children}</CandidateLayout>
}
