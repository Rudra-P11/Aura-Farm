import Header from "@/components/Header";
import { Column, Row } from "@/components/once-ui/Flex";
import { ShineFx } from "@/components/once-ui/ShineFx";
import { MatrixFx } from "@/components/once-ui/MatrixFx";
import { CompareImage } from "@/components/once-ui/CompareImage";
import { Arrow } from "@/components/once-ui/Arrow";
import { Fade } from "@/components/once-ui/Fade";

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen bg-transparent">
      <Header />
      
      {/* Background Layer */}
      <div className="fixed inset-0 -z-20 bg-page-background" />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none w-full">
        {/* Top Accent Glow */}
        <div 
          className="absolute inset-x-0 top-0 h-[70vh] w-full opacity-60"
          style={{
            background: `radial-gradient(120% 120% at 50% 0%, var(--color-accent-background-strong), transparent)`
          }}
        />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15] w-full h-full" 
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
          
          <Row id="arrow-trigger-1" vertical="center" gap="12" className="text-neutral-medium group cursor-pointer">
            <span className="text-lg tracking-wide uppercase font-medium">Explore my universe</span>
            <Arrow trigger="#arrow-trigger-1" scale={1} />
          </Row>
        </Column>

        {/* Matrix Effect Section with Floating Text */}
        <div className="relative w-full max-w-4xl px-4 flex items-center justify-center">
          {/* The Matrix Canvas */}
          <MatrixFx height={20} />
          
          {/* The Floating Text (Completely Transparent) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-7xl px-16">
                <p className="text-neutral-strong leading-relaxed text-center text-xl md:text-xl font-light">
                    I am a CSE Undergraduate at IIIT Dharwad, building the bridge between 
                    robust Full-Stack Architecture and intelligent Machine Learning models. 
                    Currently focused on creating seamless user experiences with high-end 
                    visual aesthetics.
                </p>
            </div>
          </div>
        </div>

        {/* Compare Image Section */}
        <div className="w-full max-w-4xl pb-40 px-4">
          <CompareImage 
             leftContent={{ src: "/images/1.jpg", alt: "Software Dev" }}
             rightContent={{ src: "/images/2.jpg", alt: "ML Engineer" }}
          />
        </div>
      </Column>
    </main>
  );
}