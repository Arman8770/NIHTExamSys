import { auth } from "@/lib/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, GraduationCap, Users, ArrowRight, CheckCircle, Zap } from "lucide-react"

export default async function Home() {
  const session = await auth()

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col justify-center items-center text-center space-y-8 py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse delay-700" />
        </div>

        <div className="relative z-10 space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            New Academic Session Live
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
            Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Assessments</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The intelligent platform for modern education. Secure exams, instant analytics, and seamless management for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            {session ? (
              <Link href="/dashboard">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
                  Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-muted/50 backdrop-blur-sm">
                    View Demo
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto py-24 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Secure & Reliable",
              desc: "Enterprise-grade security ensures your exam data and integrity are never compromised.",
              color: "text-emerald-500",
              bg: "bg-emerald-500/10"
            },
            {
              icon: Zap,
              title: "Instant Analytics",
              desc: "Get real-time insights into student performance with powerful, automated grading.",
              color: "text-amber-500",
              bg: "bg-amber-500/10"
            },
            {
              icon: GraduationCap,
              title: "Student Focused",
              desc: "A distraction-free interface designed to help students perform their best.",
              color: "text-primary",
              bg: "bg-primary/10"
            }
          ].map((feature, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-8 space-y-4 rounded-3xl border bg-card/50 hover:bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
              <div className={`p-4 rounded-2xl ${feature.bg} ${feature.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Role Links Section */}
      <section className="bg-muted/30 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-800/50" />

        <div className="container relative mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Tailored Experience for Everyone</h2>
            <p className="text-xl text-muted-foreground">Dedicated portals for every role in your institution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "For Admins", role: "Management", items: ["User Control", "System Health", "Audit Logs"] },
              { title: "For Teachers", role: "Creation", items: ["Exam Builder", "Gradebook", "Class Insights"] },
              { title: "For Students", role: "Learning", items: ["Take Exams", "View History", "Track Progress"] }
            ].map((card, idx) => (
              <Link key={idx} href="/login" className="group">
                <div className="h-full p-8 rounded-3xl border bg-background hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
                    {card.title}
                    <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-sm font-medium text-primary mb-6">{card.role}</p>
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <CheckCircle className="h-4 w-4 mr-3 text-primary/60" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-sm text-muted-foreground border-t bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} ExamSys Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
