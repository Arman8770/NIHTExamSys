"use client"

import { useEffect, useState } from "react"
import { getStudentCertificates } from "@/app/actions/exam" // Need to implement this
import { CertificateCard } from "@/components/CertificateCard"
import { Loader2, Award } from "lucide-react"

export default function CertificatesPage() {
    const [certificates, setCertificates] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCertificates()
    }, [])

    const fetchCertificates = async () => {
        try {
            const res = await getStudentCertificates()
            if (res.certificates) {
                setCertificates(res.certificates)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center p-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                    <Award className="h-8 w-8 text-amber-500" />
                    My Certificates
                </h1>
                <p className="text-muted-foreground mt-1">
                    View and download certificates from your completed exams.
                </p>
            </div>

            {certificates.length === 0 ? (
                <div className="text-center py-20 border-2 border-dashed rounded-xl bg-muted/30">
                    <Award className="h-12 w-12 mx-auto text-muted-foreground/50 mb-3" />
                    <h3 className="text-lg font-medium">No Certificates Yet</h3>
                    <p className="text-muted-foreground">Complete an exam to earn your first certificate!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert) => (
                        <CertificateCard
                            key={cert.id}
                            id={cert.id}
                            studentName={cert.student.name}
                            examTitle={cert.exam.title}
                            date={cert.createdAt}
                            score={cert.score}
                            totalQuestions={cert.exam._count.questions}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
