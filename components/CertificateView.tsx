"use client"

import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { Download, Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface CertificateViewProps {
    studentName: string
    examTitle: string
    score: number
    totalQuestions: number
    date: Date
}

export function CertificateView({ studentName, examTitle, score, totalQuestions, date }: CertificateViewProps) {
    const router = useRouter()
    const certificateRef = useRef<HTMLDivElement>(null)
    const [isDownloading, setIsDownloading] = useState(false)

    const cgpa = totalQuestions > 0 ? (score / totalQuestions) * 10 : 0
    const isFail = cgpa < 4

    const handleDownloadPdf = async () => {
        const element = certificateRef.current
        if (!element) return

        setIsDownloading(true)
        try {
            const canvas = await html2canvas(element, {
                scale: 2, // Higher scale for better quality
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff"
            })

            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [canvas.width, canvas.height] // Match canvas size exactly
            })

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
            pdf.save(`${examTitle.replace(/\s+/g, '_')}_${isFail ? 'Statement' : 'Certificate'}.pdf`)
        } catch (error) {
            console.error("Failed to download PDF:", error)
            alert(`Failed to download certificate: ${error instanceof Error ? error.message : String(error)}`)
        } finally {
            setIsDownloading(false)
        }
    }

    return (
        <div className="space-y-8 flex flex-col items-center">
            {/* Header Actions */}
            <div className="flex items-center justify-between w-full max-w-[800px]">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="hover:bg-transparent hover:text-primary px-0"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
                <Button onClick={handleDownloadPdf} disabled={isDownloading} className="gap-2 bg-[#059669] hover:bg-[#047857] text-white">
                    {isDownloading ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Generating...
                        </>
                    ) : (
                        <>
                            <Download className="h-4 w-4" /> Download Certificate
                        </>
                    )}
                </Button>
            </div>

            {/* Visible Certificate Preview */}
            <div className="relative w-full max-w-[800px] aspect-[4/3] shadow-2xl rounded-sm overflow-hidden bg-white text-center select-none" ref={certificateRef}>
                <div className="w-full h-full p-12 flex flex-col items-center justify-center border-[10px] border-double border-[#e7e5e4] relative">
                    {/* Inner Border Decoration */}
                    <div className="absolute inset-4 border max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)] border-[#a8a29e] opacity-50 pointer-events-none" />

                    {/* Watermark/Bg */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                        <svg viewBox="0 0 24 24" className="w-96 h-96" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.516L20.297 19H3.703L12 5.516z" /></svg>
                    </div>

                    <div className="relative z-10 space-y-6">
                        <div className="mb-8">
                            <h1 className="text-5xl font-serif text-[#1e293b] tracking-wide">
                                {isFail ? "Statement of Result" : "Certificate of Achievement"}
                            </h1>
                            <div className="h-1 w-32 bg-[#fbbf24] mx-auto mt-4" />
                        </div>

                        <p className="text-xl text-[#64748b] font-light">This is to certify that</p>

                        <div className="py-2">
                            <h2 className="text-4xl font-bold text-[#0f172a] border-b-2 border-[#cbd5e1] inline-block px-8 pb-2 min-w-[300px] font-serif italic">
                                {studentName}
                            </h2>
                        </div>

                        <p className="text-xl text-[#64748b] font-light">
                            {isFail ? "has participated in the exam" : "has successfully passed the exam"}
                        </p>

                        <h3 className="text-3xl font-bold text-[#d97706] font-serif">{examTitle}</h3>

                        <p className="text-lg text-[#475569] mt-4">
                            with a CGPA of <span className="font-bold text-[#0f172a] text-xl">{cgpa.toFixed(1)}</span>
                        </p>

                        {isFail && (
                            <p className="text-sm text-[#64748b] italic mt-2 max-w-md mx-auto">
                                "Success is not final, failure is not fatal: It is the courage to continue that counts."
                            </p>
                        )}

                        <div className="mt-12 flex justify-between items-end w-full max-w-lg mx-auto gap-12 text-left">
                            <div className="flex flex-col items-center gap-2">
                                <div className="text-sm font-medium text-[#94a3b8] uppercase tracking-widest text-center">{date.toLocaleDateString()}</div>
                                <div className="h-px w-32 bg-[#cbd5e1]" />
                                <div className="text-xs text-[#94a3b8] font-semibold uppercase">Date</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                {/* Signature Placeholder */}
                                <div className="font-dancingish text-2xl text-[#475569] italic h-6">ExamSys Admin</div>
                                <div className="h-px w-32 bg-[#cbd5e1]" />
                                <div className="text-xs text-[#94a3b8] font-semibold uppercase">Signature</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
