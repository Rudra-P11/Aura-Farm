import Header from "@/components/Header";
import { Column } from "@/components/once-ui/Flex";
import { ShineFx } from "@/components/once-ui/ShineFx";
import { MatrixFx } from "@/components/once-ui/MatrixFx";
import { CompareImage } from "@/components/once-ui/CompareImage";

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen bg-page-background">
      <Header />
      
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none w-full">
        {/* Top Gradient - Centered and Full Width */}
        <div 
          className="absolute inset-x-0 top-0 h-screen w-full opacity-40"
          style={{
            background: `radial-gradient(100% 100% at 50% 0%, var(--color-accent-background-strong), transparent)`
          }}
        />
        {/* Grid/Line Pattern - Full Screen */}
        <div 
          className="absolute inset-0 opacity-[0.1] w-full h-full" 
          style={{ 
            backgroundImage: `linear-gradient(to right, var(--color-accent-background-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--color-accent-background-strong) 1px, transparent 1px)`, 
            backgroundSize: '4rem 4rem' 
          }} 
        />
      </div>

      <Column fillWidth center className="pt-40 px-8 gap-24">
        {/* Hero Section Header */}
        <Column center gap="16">
          <ShineFx>Rudra Pandya</ShineFx>
          <p className="max-w-xl text-center text-neutral-medium text-lg">
            A CSE Undergrad at IIIT Dharwad passionate about building 
            full-stack applications and exploring the depths of AI.
          </p>
        </Column>

        {/* Matrix Effect Section */}
        <div className="w-full max-w-4xl px-4">
          <MatrixFx height={15} />
        </div>

        {/* Compare Image Section */}
        <div className="w-full max-w-4xl pb-20 px-4">
          <CompareImage 
             leftContent={{ src: "/images/1.jpg", alt: "Software Dev" }}
             rightContent={{ src: "/images/2.jpg", alt: "ML Engineer" }}
          />
        </div>
      </Column>
    </main>
  );
}