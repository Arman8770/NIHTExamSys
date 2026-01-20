"use client"

import { useEffect, useState, useTransition } from "react"
import { getAllCertificates } from "@/app/actions/exam"
import { CertificateCard } from "@/components/CertificateCard"
import { Loader2, Award, Search, Calendar, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AllCertificatesPage() {
    const [certificates, setCertificates] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [isPending, startTransition] = useTransition()

    const [debouncedSearch, setDebouncedSearch] = useState(search)

    // Debounce search input
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 500)
        return () => clearTimeout(timer)
    }, [search])

    // Fetch on filter change
    useEffect(() => {
        fetchCertificates()
    }, [debouncedSearch, startDate, endDate])

    const fetchCertificates = async () => {
        try {
            setLoading(true)
            const res = await getAllCertificates({
                search: debouncedSearch,
                startDate,
                endDate
            })
            if (res.certificates) {
                setCertificates(res.certificates)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const clearFilters = () => {
        setSearch("")
        setStartDate("")
        setEndDate("")
    }

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-primary">
                        <Award className="h-8 w-8 text-amber-500" />
                        Student Certificates
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Monitor and review all certificates achieved by students.
                    </p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-card/50 p-6 rounded-2xl border shadow-sm backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div className="md:col-span-1 space-y-2">
                        <label className="text-sm font-medium ml-1">Search Student</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Name, email or phone..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10 h-10"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Start Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="pl-10 h-10"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">End Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="pl-10 h-10"
                            />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={clearFilters}
                            className="flex-1 h-10 gap-2 border-dashed"
                            disabled={!search && !startDate && !endDate}
                        >
                            <X className="h-4 w-4" />
                            Clear Filters
                        </Button>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                </div>
            ) : certificates.length === 0 ? (
                <div className="text-center py-20 border-2 border-dashed rounded-3xl bg-muted/20 border-muted-foreground/20">
                    <Award className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                    <h3 className="text-2xl font-semibold text-slate-400">No Certificates Found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <div key={cert.id} className="relative group">
                            <CertificateCard
                                id={cert.id}
                                studentName={cert.student.name}
                                examTitle={cert.exam.title}
                                date={cert.createdAt}
                                score={cert.score}
                                totalQuestions={cert.exam._count.questions}
                            />
                            {/* Admin/Teacher specific info overlay or ribbon? */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-end gap-1">
                                <div className="bg-primary/95 text-white text-[10px] px-2 py-1 rounded-full shadow-lg backdrop-blur">
                                    {cert.student.email}
                                </div>
                                {cert.student.phoneNumber && (
                                    <div className="bg-slate-800 text-white text-[10px] px-2 py-1 rounded-full shadow-lg backdrop-blur">
                                        {cert.student.phoneNumber.toString()}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
