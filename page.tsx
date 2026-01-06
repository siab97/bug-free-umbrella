import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, Briefcase, Home, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-semibold tracking-tight text-foreground">Vibe & Thrive Solutions</div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link
              href="#digital-products"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Digital Products
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-6 text-balance">
              Growth isn't rushed—
              <br />
              <span className="font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                it's built
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              We support individuals and small businesses who want to grow the right way—with clarity, structure and
              long-term sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/professional-woman-entrepreneur-working-on-laptop-.jpg"
                alt="Professional working on business growth"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground">Our Approach</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Vibe & Thrive Solutions LLC was created to support individuals and small businesses who want to grow the
                right way—with clarity, structure and long-term sustainability. In an environment where quick wins and
                unrealistic promises are often prioritized, we offer an alternative rooted in preparation, compliance,
                and persistence.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our work focuses on readiness-based guidance, business education and practical support designed to help
                clients make informed decisions, build legitimate foundations, and grow at a pace that aligns with their
                goals and capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-foreground">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for business growth and personal development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Digital Products & Courses</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• How to start your business: logistics & legal process</li>
                  <li>• How to buy a business</li>
                  <li>• Content packages for business traction</li>
                  <li>• Scripts & marketing tips for government contracts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-to-br from-accent/5 to-secondary/5 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Briefcase className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Business Ideas</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dispatching services</li>
                  <li>• Dealership opportunities</li>
                  <li>• Commercial cleaning</li>
                  <li>• Not sure? Let's discuss your interests and passions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-to-br from-secondary/5 to-primary/5 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Users className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">One-on-One Consulting</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Learn how to start your business step-by-step</li>
                  <li>• Website, logo & AI automation design</li>
                  <li>• Proposal guidance for state contracts</li>
                  <li>• Legal setup: EIN, tax filing assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Home className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Real Estate & Property</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Wholesale real estate strategies</li>
                  <li>• Property investment & rental income</li>
                  <li>• Airbnb business setup</li>
                  <li>• Make your money work for you</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-to-br from-secondary/5 to-accent/5 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <TrendingUp className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">E-Commerce & Reselling</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Amazon seller strategies</li>
                  <li>• TikTok shop through Printify</li>
                  <li>• Turo car rental business</li>
                  <li>• Overseas vendor connections & reselling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-to-br from-accent/5 to-primary/5 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <BookOpen className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Career Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• How to become a notary</li>
                  <li>• Break into SaaS: the simple way</li>
                  <li>• Job search assistance & resume help</li>
                  <li>• Personal assistant job application service</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Products Section */}
      <section id="digital-products" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground">
                  Not Ready to Start a Business?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  That's perfectly fine. Starting a business isn't for everyone, and we understand that some individuals
                  just want a stable job. We have other digital products and services to support your journey.
                </p>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/person-studying-online-courses-on-laptop-with-colo.jpg"
                  alt="Digital products and courses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Wholesale Real Estate Guide", color: "from-primary/10 to-accent/10" },
                { title: "Become a Notary", color: "from-accent/10 to-secondary/10" },
                { title: "Break into SaaS", color: "from-secondary/10 to-primary/10" },
                { title: "Job Search Assistance", color: "from-primary/10 to-secondary/10" },
                { title: "Property Rental Income", color: "from-accent/10 to-primary/10" },
                { title: "Airbnb Business Setup", color: "from-secondary/10 to-accent/10" },
                { title: "Turo Car Rental", color: "from-primary/10 to-accent/10" },
                { title: "Amazon Selling Guide", color: "from-accent/10 to-secondary/10" },
                { title: "TikTok Shop via Printify", color: "from-secondary/10 to-primary/10" },
                { title: "Overseas Vendors List", color: "from-primary/10 to-secondary/10" },
              ].map((product, index) => (
                <div
                  key={index}
                  className={`p-6 border border-border bg-gradient-to-br ${product.color} hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg`}
                >
                  <p className="text-foreground font-semibold">{product.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground text-balance">
              Ready to start your journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Schedule a consultation with us today and let's discuss how we can help you achieve your goals with
              structure, clarity, and intention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Vibe & Thrive Solutions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Supporting sustainable business growth with clarity and structure.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#digital-products" className="hover:text-foreground transition-colors">
                    Digital Products
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Disclaimer</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are not lawyers but are knowledgeable about filing taxes and setting up businesses legally.
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Vibe & Thrive Solutions LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
