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
      <div className="fixed inset-0 -z-20 bg-page-background" /> {/* Base Black */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none w-full">
        {/* Top Gradient - The "Red/Accent" Glow */}
        <div 
          className="absolute inset-x-0 top-0 h-[70vh] w-full opacity-60"
          style={{
            background: `radial-gradient(120% 120% at 50% 0%, var(--color-accent-background-strong), transparent)`
          }}
        />
        {/* Bottom Glow */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[40vh] w-full opacity-30"
          style={{
            background: `radial-gradient(100% 100% at 50% 100%, var(--color-brand-background-weak), transparent)`
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
          
          <Row id="arrow-trigger-1" vertical="center" gap="8" className="text-neutral-medium">
            <span className="text-lg">Explore my universe</span>
            <Arrow trigger="#arrow-trigger-1" scale={1} />
          </Row>
        </Column>

        {/* Matrix Effect Section */}
        <div className="w-full max-w-4xl px-4">
          <MatrixFx height={15} />
        </div>

        {/* About Me with Fade Effect */}
        <div className="relative w-full max-w-2xl">
            <Fade 
                fillWidth 
                topRadius="l" 
                height={8} 
                position="absolute" 
                top="0" 
                to="bottom" 
                pattern={{ display: true, size: "2" }} 
            />
            <div className="py-12 px-6 border border-neutral-alpha-weak rounded-xl bg-neutral-alpha-weak backdrop-blur-sm">
                <p className="text-neutral-medium leading-relaxed text-center">
                    I am a CSE Undergraduate at IIIT Dharwad, building the bridge between 
                    robust Full-Stack Architecture and intelligent Machine Learning models. 
                    Currently focused on creating seamless user experiences with high-end 
                    visual aesthetics.
                </p>
            </div>
            <Fade 
                fillWidth 
                bottomRadius="l" 
                height={8} 
                position="absolute" 
                bottom="0" 
                to="top" 
                pattern={{ display: true, size: "2" }} 
            />
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