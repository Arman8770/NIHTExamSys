"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Award, Eye } from "lucide-react"
import Link from "next/link"

interface CertificateCardProps {
  studentName: string
  examTitle: string
  date: string
  score: number
  totalQuestions: number
  id: string
}

export function CertificateCard({ studentName, examTitle, date, score, totalQuestions, id }: CertificateCardProps) {
  // Simplified card just for display/navigation
  const cgpa = totalQuestions > 0 ? (score / totalQuestions) * 10 : 0

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all border-amber-200 bg-amber-50/30">
      <CardContent className="p-0 relative">
        {/* Visual Preview */}
        <div className="aspect-[4/3] bg-white p-6 relative border-b text-center flex flex-col items-center justify-center select-none overflow-hidden">
          <div className="absolute inset-0 border-[8px] border-double border-amber-900/10 pointer-events-none m-2"></div>
          <Award className="h-12 w-12 text-amber-600 mb-2 opacity-80" />
          <h3 className="font-serif text-xl text-amber-900 font-bold uppercase tracking-widest mb-1">Certificate</h3>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-4">of Completion</p>

          <p className="font-script text-2xl text-blue-900 my-2 font-bold italic">{studentName}</p>
          <p className="text-xs text-muted-foreground">has completed</p>
          <p className="font-semibold text-gray-800 my-1">{examTitle}</p>
          <div className="mt-4 text-[10px] text-muted-foreground">
            {new Date(date).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-white/50 flex justify-between items-center">
        <div className="text-xs text-muted-foreground">
          CGPA: <span className="font-bold text-emerald-600">{cgpa.toFixed(1)}</span>
        </div>
        <Link href={`/student/certificates/${id}`}>
          <Button size="sm" variant="outline" className="gap-2 border-amber-200 hover:bg-amber-100 hover:text-amber-900 cursor-pointer">
            <Eye className="h-4 w-4" />
            View Certificate
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
