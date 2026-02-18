import Header from "@/components/Header";
import { Column } from "@/components/once-ui/Flex";

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen">
      <Header />
      
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top Gradient */}
        <div 
          className="absolute inset-x-0 top-0 h-[60vh] opacity-50"
          style={{
            background: `radial-gradient(circle at 50% 0%, var(--color-accent-background-strong), transparent)`
          }}
        />
        {/* Grid/Line Pattern Simulation */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `linear-gradient(to right, var(--color-accent-background-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--color-accent-background-strong) 1px, transparent 1px)`, backgroundSize: '4rem 4rem' }} />
      </div>

      <Column fillWidth center className="pt-32 px-4">
        {/* We will insert the Hero section here in the next step */}
        <h1 className="text-6xl font-bold tracking-tighter">
          Rudra Pandya
        </h1>
        <p className="text-neutral-medium mt-4">Setting up the canvas...</p>
      </Column>
    </main>
  );
}