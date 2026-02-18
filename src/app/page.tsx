import Header from "@/components/Header";
import { Column, Row } from "@/components/once-ui/Flex";
import { ShineFx } from "@/components/once-ui/ShineFx";
import { MatrixFx } from "@/components/once-ui/MatrixFx";
import { CompareImage } from "@/components/once-ui/CompareImage";
import { Arrow } from "@/components/once-ui/Arrow";
import { Card } from "@/components/once-ui/Card";
import { Carousel } from "@/components/once-ui/Carousel";

export default function Home() {
  const projects = [
    {
      title: "Videolytics",
      description: "Advanced video stream analyzer using Streamlit and computer vision. Real-time object detection and metadata extraction for security streams.",
      skills: ["Python", "Streamlit", "OpenCV", "PyTorch"],
      github: "https://github.com/rudrapandya/videolytics",
      live: "#",
      media: [
        { slide: "/images/project1.jpg", alt: "Videolytics Dashboard" },
        { slide: "/videos/project1-demo.mp4", alt: "Live Demo" }
      ],
    },
    {
      title: "Polyglot Semantic Explorer",
      description: "A multilingual semantic search engine powered by vector embeddings. Capable of understanding context across 50+ languages.",
      skills: ["React", "Node.js", "Pinecone", "Transformers"],
      github: "https://github.com",
      live: "#",
      media: [
        { slide: "/images/project1.jpg", alt: "Search Interface" },
      ],
    },
    {
      title: "Videolytics",
      description: "Advanced video stream analyzer using Streamlit and computer vision. Real-time object detection and metadata extraction for security streams.",
      skills: ["Python", "Streamlit", "OpenCV", "PyTorch"],
      github: "https://github.com/rudrapandya/videolytics",
      live: "#",
      media: [
        { slide: "/images/project1.jpg", alt: "Videolytics Dashboard" },
        { slide: "/videos/project1-demo.mp4", alt: "Live Demo" }
      ],
    },
    {
      title: "Videolytics",
      description: "Advanced video stream analyzer using Streamlit and computer vision. Real-time object detection and metadata extraction for security streams.",
      skills: ["Python", "Streamlit", "OpenCV", "PyTorch"],
      github: "https://github.com/rudrapandya/videolytics",
      live: "#",
      media: [
        { slide: "/images/project1.jpg", alt: "Videolytics Dashboard" },
        { slide: "/videos/project1-demo.mp4", alt: "Live Demo" }
      ],
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
          <ShineFx speed={3} className="text-5xl md:text-7xl font-bold tracking-tighter">Rudra Pandya</ShineFx>
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
          <div className="h-1 w-20 bg-white/20 rounded-full" />
        </Column>

        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <Card key={idx} className="p-4">
              {/* Top Link Buttons - Glassmorphic */}
              <Row fillWidth gap="12" className="justify-end absolute top-6 right-6 z-30">
                <a href={project.github} target="_blank" className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest hover:bg-white/20 transition-all">
                  GITHUB
                </a>
                <a href={project.live} target="_blank" className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest hover:bg-white/20 transition-all">
                  LIVE
                </a>
              </Row>

              {/* Media Carousel */}
              <Carousel items={project.media} />

              {/* Project Info */}
              <Column paddingX="20" paddingY="24" gap="12" className="pt-6">
                <ShineFx speed={8} className="text-2xl font-semibold">
                  {project.title}
                </ShineFx>
                
                <p className="text-neutral-medium leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Skill Tags - Transparent Glass Style */}
                <Row gap="8" className="flex-wrap pt-4">
                  {project.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-medium text-[9px] uppercase tracking-widest font-bold">
                      {skill}
                    </span>
                  ))}
                </Row>
              </Column>
            </Card>
          ))}
        </div>
      </Column>
    </main>
  );
}