"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

interface CertificateViewProps {
    studentName: string
    examTitle: string
    score: number
    totalQuestions: number
    date: Date
}

export function CertificateView({ studentName, examTitle, score, totalQuestions, date }: CertificateViewProps) {
    const certificateRef = useRef<HTMLDivElement>(null)

    const handlePrint = () => {
        const content = certificateRef.current
        if (!content) return

        const printWindow = window.open('', '', 'height=600,width=800')
        if (!printWindow) return

        printWindow.document.write('<html><head><title>Certificate</title>')
        printWindow.document.write('<style>')
        printWindow.document.write(`
            body { font-family: 'Arial', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; }
            .certificate { border: 10px solid #ddd; padding: 50px; background: white; text-align: center; width: 800px; height: 600px; box-sizing: border-box; position: relative; }
            .certificate:after { content: ''; position: absolute; top: 15px; left: 15px; right: 15px; bottom: 15px; border: 2px solid #aaa; }
            h1 { font-size: 50px; color: #333; margin-bottom: 20px; }
            p { font-size: 20px; color: #555; margin: 10px 0; }
            .name { font-size: 32px; font-weight: bold; color: #000; border-bottom: 2px solid #333; display: inline-block; padding: 0 20px; margin: 20px 0; }
            .date { margin-top: 40px; font-size: 16px; color: #777; }
        `)
        printWindow.document.write('</style></head><body>')
        printWindow.document.write(content.innerHTML)
        printWindow.document.write('</body></html>')
        printWindow.document.close()
        printWindow.print()
    }

    return (
        <div className="space-y-4">
            <div className="hidden">
                <div ref={certificateRef}>
                    <div className="certificate">
                        <h1>Certificate of Achievement</h1>
                        <p>This is to certify that</p>
                        <div className="name">{studentName}</div>
                        <p>has successfully passed the exam</p>
                        <div className="name">{examTitle}</div>
                        <p>with a score of <strong>{score} / {totalQuestions}</strong></p>

                        <div className="date">
                            Date: {date.toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Certificate Available</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Congratulations! You have passed the exam and your certificate has been approved.</p>
                    <Button onClick={handlePrint} className="w-full">Download Certificate</Button>
                </CardContent>
            </Card>
        </div>
    )
}
