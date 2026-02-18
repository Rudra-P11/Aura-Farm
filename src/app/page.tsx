import Header from "@/components/Header";
import { Column, Row, Flex } from "@/components/once-ui/Flex";
import { ShineFx } from "@/components/once-ui/ShineFx";
import { MatrixFx } from "@/components/once-ui/MatrixFx";
import { CompareImage } from "@/components/once-ui/CompareImage";
import { Arrow } from "@/components/once-ui/Arrow";
import { Fade } from "@/components/once-ui/Fade";
import { Card, Hover } from "@/components/once-ui/Card";
import { Carousel } from "@/components/once-ui/Carousel";
import { Media } from "@/components/once-ui/Media";

export default function Home() {
  const projects = [
    {
      title: "Videolytics",
      description: "Advanced video stream analyzer using Streamlit and computer vision.",
      media: [
        { slide: "/images/project1.jpg", alt: "Videolytics Dashboard" },
        { slide: "/videos/project1-demo.mp4", alt: "Live Demo" }
      ],
      link: "https://github.com/rudrapandya/videolytics"
    }
  ];

  return (
    <main id="home" className="relative min-h-screen bg-transparent">
      <Header />
      
      {/* Background Layer */}
      <div className="fixed inset-0 -z-20 bg-page-background" />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none w-full">
        <div className="absolute inset-x-0 top-0 h-[70vh] w-full opacity-60"
          style={{ background: `radial-gradient(120% 120% at 50% 0%, var(--color-accent-background-strong), transparent)` }} />
        <div className="absolute inset-0 opacity-[0.15] w-full h-full" 
          style={{ backgroundImage: `linear-gradient(to right, var(--color-accent-background-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--color-accent-background-strong) 1px, transparent 1px)`, backgroundSize: '4rem 4rem' }} />
      </div>

      {/* Hero Section */}
      <Column fillWidth center className="pt-40 px-8 gap-24">
        <Column center gap="16">
          <ShineFx>Rudra Pandya</ShineFx>
          <Row id="arrow-trigger-1" vertical="center" gap="12" className="text-neutral-medium group cursor-pointer">
            <span className="text-lg tracking-wide uppercase font-medium">Explore my universe</span>
            <Arrow trigger="#arrow-trigger-1" scale={1} />
          </Row>
        </Column>

        <div className="relative w-full max-w-4xl px-4 flex items-center justify-center">
          <MatrixFx height={20} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-2xl px-8">
                <p className="text-neutral-strong leading-relaxed text-center text-xl md:text-2xl font-light">
                    I am a CSE Undergraduate at IIIT Dharwad, building the bridge between 
                    robust Full-Stack Architecture and intelligent Machine Learning models.
                </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl pb-40 px-4">
          <CompareImage 
             leftContent={{ src: "/images/1.jpg", alt: "Software Dev" }}
             rightContent={{ src: "/images/2.jpg", alt: "ML Engineer" }}
          />
        </div>
      </Column>

      {/* Projects Section */}
      <Column id="projects" fillWidth center className="py-20 px-8 gap-16">
        <Column center gap="8">
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-1 w-20 bg-brand-solid-strong rounded-full" />
        </Column>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Hover 
              key={idx}
              trigger={
                <Card radius="l-8" padding="16">
                  <Carousel items={project.media} />
                  <Column paddingX="20" paddingY="24" gap="8">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-neutral-medium text-sm">{project.description}</p>
                  </Column>
                </Card>
              }
              overlay={
                <div className="absolute top-8 right-8 bg-brand-solid-strong px-4 py-1 rounded-full text-xs font-bold uppercase">
                  View Case Study
                </div>
              }
            />
          ))}
        </div>
      </Column>
    </main>
  );
}