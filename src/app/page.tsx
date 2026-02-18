import Header from "@/components/Header";
import { Column, Row } from "@/components/once-ui/Flex";
import { ShineFx } from "@/components/once-ui/ShineFx";
import { MatrixFx } from "@/components/once-ui/MatrixFx";
import { CompareImage } from "@/components/once-ui/CompareImage";

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen">
      <Header />
      
      {/* Background logic from earlier... */}

      <Column fillWidth center className="pt-40 px-8 gap-24">
        {/* Shine Effect Headline */}
        <Column center gap="16">
          <ShineFx>Rudra Pandya</ShineFx>
          <p className="max-w-xl text-center text-neutral-medium text-lg">
            A CSE Undergrad at IIIT Dharwad passionate about building 
            full-stack applications and exploring the depths of AI.
          </p>
        </Column>

        {/* Matrix Effect */}
        <div className="w-full max-w-4xl">
          <MatrixFx height={15} />
        </div>

        {/* Compare Image Section */}
        <div className="w-full max-w-4xl pb-20">
          <CompareImage 
             leftContent={{ src: "/images/1.jpg", alt: "Software Dev" }}
             rightContent={{ src: "/images/2.jpg", alt: "ML Engineer" }}
          />
        </div>
      </Column>
    </main>
  );
}