
export function calculateCGPA(score: number, totalQuestions: number): string {
    if (totalQuestions === 0) return "0.0"
    const percentage = (score / totalQuestions) * 100
    // Standard 10-point scale approx
    // 90-100: 10
    // 80-89: 9
    // ...
    // But often it's direct percentage / 9.5 or similar. 
    // Let's use a simpler mapping for visual clarity: percentage / 10
    return (percentage / 10).toFixed(1)
}

export function getGrade(cgpa: number): { label: string; color: string; remarks: string } {
    if (cgpa >= 9.0) return { label: "O", color: "text-emerald-600", remarks: "Outstanding" }
    if (cgpa >= 8.0) return { label: "A+", color: "text-emerald-500", remarks: "Excellent" }
    if (cgpa >= 7.0) return { label: "A", color: "text-green-500", remarks: "Very Good" }
    if (cgpa >= 6.0) return { label: "B+", color: "text-blue-500", remarks: "Good" }
    if (cgpa >= 5.0) return { label: "B", color: "text-blue-400", remarks: "Above Average" }
    if (cgpa >= 4.0) return { label: "C", color: "text-yellow-500", remarks: "Average" }
    return { label: "F", color: "text-destructive", remarks: "Fail" }
}
