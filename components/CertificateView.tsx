"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRef, useState } from "react"
import { Download, Loader2 } from "lucide-react"
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
    const certificateRef = useRef<HTMLDivElement>(null)
    const [isDownloading, setIsDownloading] = useState(false)

    const cgpa = totalQuestions > 0 ? (score / totalQuestions) * 10 : 0

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
            pdf.save(`${examTitle.replace(/\s+/g, '_')}_Certificate.pdf`)
        } catch (error) {
            console.error("Failed to download PDF:", error)
            alert(`Failed to download certificate: ${error instanceof Error ? error.message : String(error)}`)
        } finally {
            setIsDownloading(false)
        }
    }

    return (
        <div className="space-y-8 flex flex-col items-center">
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
                            <h1 className="text-5xl font-serif text-[#1e293b] tracking-wide">Certificate of Achievement</h1>
                            <div className="h-1 w-32 bg-[#fbbf24] mx-auto mt-4" />
                        </div>

                        <p className="text-xl text-[#64748b] font-light">This is to certify that</p>

                        <div className="py-2">
                            <h2 className="text-4xl font-bold text-[#0f172a] border-b-2 border-[#cbd5e1] inline-block px-8 pb-2 min-w-[300px] font-serif italic">
                                {studentName}
                            </h2>
                        </div>

                        <p className="text-xl text-[#64748b] font-light">has successfully passed the exam</p>

                        <h3 className="text-3xl font-bold text-[#d97706] font-serif">{examTitle}</h3>

                        <p className="text-lg text-[#475569] mt-4">
                            with a CGPA of <span className="font-bold text-[#0f172a] text-xl">{cgpa.toFixed(1)}</span>
                        </p>

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

            <Card className="w-full max-w-[800px]">
                <CardContent className="flex items-center justify-between p-6">
                    <div>
                        <h3 className="font-semibold text-lg">Download Your Certificate</h3>
                        <p className="text-sm text-muted-foreground">Get a high-quality PDF copy of your achievement.</p>
                    </div>
                    <Button onClick={handleDownloadPdf} disabled={isDownloading} size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                        {isDownloading ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" /> Generating...
                            </>
                        ) : (
                            <>
                                <Download className="h-4 w-4" /> Download PDF
                            </>
                        )}
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
