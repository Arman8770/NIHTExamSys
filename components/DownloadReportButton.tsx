"use client"

import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"
import { useState } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface Question {
    id: string
    text: string
    options: string // JSON string
    correctAnswerIndex: number
}

interface DownloadReportButtonProps {
    studentName: string
    examTitle: string
    score: number
    totalQuestions: number
    completionTime: string
    questions: Question[]
    responses: Record<string, number>
}

export function DownloadReportButton({
    studentName,
    examTitle,
    score,
    totalQuestions,
    completionTime,
    questions,
    responses
}: DownloadReportButtonProps) {
    const [isDownloading, setIsDownloading] = useState(false)

    const handleDownloadReport = async () => {
        const element = document.getElementById("clean-report-target")
        if (!element) return

        setIsDownloading(true)
        try {
            // Temporarily reveal it off-screen to ensure it renders for capture
            element.style.display = "block"

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff"
            })

            // Hide it again
            element.style.display = "none"

            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: 'a4'
            })

            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()
            const imgWidth = canvas.width
            const imgHeight = canvas.height

            const imgScaledWidth = pdfWidth
            const imgScaledHeight = (imgHeight * pdfWidth) / imgWidth

            // Single page fitting for now, simplified for stability
            if (imgScaledHeight > pdfHeight) {
                let heightLeft = imgScaledHeight
                let position = 0

                // Add first page
                pdf.addImage(imgData, 'PNG', 0, position, imgScaledWidth, imgScaledHeight)
                heightLeft -= pdfHeight
                position -= pdfHeight

                while (heightLeft > 0) {
                    pdf.addPage()
                    pdf.addImage(imgData, 'PNG', 0, position, imgScaledWidth, imgScaledHeight)
                    heightLeft -= pdfHeight
                    position -= pdfHeight
                }
            } else {
                pdf.addImage(imgData, 'PNG', 0, 0, imgScaledWidth, imgScaledHeight)
            }

            pdf.save(`${examTitle.replace(/\s+/g, '_')}_Report.pdf`)
        } catch (error) {
            console.error("Failed to download report:", error)
            alert(`Failed to generate report: ${error instanceof Error ? error.message : String(error)}`)
        } finally {
            if (element) element.style.display = "none"
            setIsDownloading(false)
        }
    }

    const cgpa = totalQuestions > 0 ? (score / totalQuestions) * 10 : 0
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0

    return (
        <>
            <Button
                variant="outline"
                className="flex-1 h-12 text-base border-dashed hover:border-primary/50"
                onClick={handleDownloadReport}
                disabled={isDownloading}
            >
                {isDownloading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                    </>
                ) : (
                    <>
                        <Download className="mr-2 h-4 w-4" /> Download Report
                    </>
                )}
            </Button>

            {/* 
                Hidden Clean Report Template 
                Using strictly inline styles to bypass Tailwind/CSS Variable issues with html2canvas 
            */}
            <div
                id="clean-report-target"
                style={{
                    position: 'absolute',
                    left: '-9999px',
                    top: 0,
                    width: '800px', // Fixed A4-ish width
                    padding: '40px',
                    backgroundColor: '#ffffff',
                    fontFamily: 'Arial, sans-serif',
                    color: '#000000',
                    display: 'none' // Hidden initially
                }}
            >
                {/* Header */}
                <div style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '20px', marginBottom: '30px' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', margin: 0 }}>Exam Result Report</h1>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '5px' }}>Generated on {new Date().toLocaleDateString()}</p>
                </div>

                {/* Summary Card */}
                <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
                    <div style={{ flex: 1, padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#64748b', margin: 0 }}>Student Name</h2>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', margin: '5px 0 0' }}>{studentName}</p>
                    </div>
                    <div style={{ flex: 1, padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#64748b', margin: 0 }}>Exam Title</h2>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', margin: '5px 0 0' }}>{examTitle}</p>
                    </div>
                </div>

                {/* Statistics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '40px' }}>
                    <div style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>{cgpa.toFixed(1)}</div>
                        <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>CGPA</div>
                    </div>
                    <div style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#22c55e' }}>{percentage}%</div>
                        <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>Score</div>
                    </div>
                    <div style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>{score} / {totalQuestions}</div>
                        <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>Correct Answers</div>
                    </div>
                    <div style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>{completionTime}</div>
                        <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>Time Taken</div>
                    </div>
                </div>

                {/* Question Breakdown */}
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
                    Detailed Breakdown
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {questions.map((q, i) => {
                        const userResponse = responses?.[q.id]
                        const isCorrect = userResponse === q.correctAnswerIndex

                        let options: string[] = []
                        try { options = JSON.parse(q.options) } catch (e) { options = [] }

                        return (
                            <div key={q.id} style={{
                                padding: '15px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '8px',
                                backgroundColor: isCorrect ? '#f0fdf4' : '#fef2f2',
                                borderColor: isCorrect ? '#bbf7d0' : '#fecaca'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <span style={{ fontWeight: 'bold', color: '#334155' }}>Q{i + 1}. {q.text}</span>
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        backgroundColor: isCorrect ? '#22c55e' : '#ef4444',
                                        color: '#ffffff'
                                    }}>
                                        {isCorrect ? 'CORRECT' : 'INCORRECT'}
                                    </span>
                                </div>
                                <div style={{ fontSize: '14px', color: '#475569' }}>
                                    Your Answer: <span style={{ fontWeight: 'bold' }}>{options[userResponse] || 'Skipped'}</span>
                                    {!isCorrect && (
                                        <span style={{ marginLeft: '15px', color: '#16a34a' }}>
                                            Correct Answer: <span style={{ fontWeight: 'bold' }}>{options[q.correctAnswerIndex]}</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
