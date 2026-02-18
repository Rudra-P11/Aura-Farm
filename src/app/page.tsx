"use client"; // Client component for form handling and interactivity

import React, { useState, useTransition } from "react";
import Header from "@/components/Header";
import { Column, Row, Flex } from "@/components/once-ui/Flex";
import { ShineFx } from "@/components/once-ui/ShineFx";
import { MatrixFx } from "@/components/once-ui/MatrixFx";
import { CompareImage } from "@/components/once-ui/CompareImage";
import { Arrow } from "@/components/once-ui/Arrow";
import { Card } from "@/components/once-ui/Card";
import { Carousel } from "@/components/once-ui/Carousel";
import { GlitchFx } from "@/components/once-ui/GlitchFx";
import { submitRecruiterEmail } from "./actions"; // Import the Server Action

export default function Home() {
  const blueAccent = "#3B82F6";
  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  async function handleRecruiterSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitRecruiterEmail(formData);
      if (result.success) {
        setFormStatus("success");
      }
    });
  }

  const projects = [
    {
      title: "⚕️Multi-Agent Advanced Healthcare Assistant",
      description:
        "The Multi-Agent Medical Assistant is an AI-powered chatbot designed to assist with medical diagnosis, research, and patient interactions.",
      skills: ["Python", "Tensorflow", "Huggingface", "FastAPI", "Computer Vision", "RAG", "Vector Database", "LangGraph", "LangChain"],
      github: "https://github.com/Rudra-P11/Multi-Agent-Healthcare-Assistant",
      live: "https://drive.google.com/drive/folders/1amk71Foo_c_V7cmZGpeuCYQygq54KiBz?usp=sharing",
      media: [
        { slide: "/images/project1.jpg", alt: "Healthcare App" },
        { slide: "/videos/project1.gif", alt: "Demo Video" },
      ],
    },
    {
      title: "Leetcoode: DSA Search Engine",
      description:
        "DSA Search Engine - An intelligent search platform that aggregates problems from LeetCode, Codeforces, and CodeChef, allowing users to find problems using natural language queries powered by advanced information retrieval.",
      skills: ["React", "Node.js", "tf-idf", "Pagination", "Semantic Search", "Web Scrapping"],
      github: "https://github.com/Rudra-P11/DSA-Search-Engine",
      live: "https://leetcoode.netlify.app/",
      media: [{ slide: "/images/project4.gif", alt: "Search Interface" },
        { slide: "/videos/project4.gif", alt: "Demo Video" },
      ],
    },
    {
      title: "OctaByte: Dynamic Portfolio Dashboard",
      description:
        "Modern investors need real-time insights into their portfolio performance to make informed decisions—whether to buy, sell, hold, or add to positions. This is a dynamic web application that displays portfolio information, fetching live data from financial APIs.",
      skills: ["React", "Node.js", "Yahoo-finance", "Typescript", "Scraping", "Optimizations"],
      github: "https://github.com/Rudra-P11/OctaByte",
      live: "https://octa-byte-iota.vercel.app",
      media: [{ slide: "/images/project2.gif", alt: "Financial Dashboard" },
        { slide: "/videos/project2.mp4", alt: "Demo Video" }
      ],
    },
    {
      title: "COiDE: AI-Powered Web Code Editor",
      description:
        "COiDE code Editor is a blazing-fast, AI-integrated web IDE built entirely in the browser using Next.js App Router, WebContainers, Monaco Editor, and local LLMs via Ollama. It offers real-time code execution, an AI-powered chat assistant, and support for multiple tech stacks — all wrapped in a stunning developer-first UI.",
      skills: ["Next.js", "Node.js", "TailwindCSS", "Typescript", "Webcontainers", "LLMs (Ollama)", "MongoDb"],
      github: "https://github.com/Rudra-P11/AI-Code-Editor",
      live: "https://chai-vibe-code-editor.vercel.app/",
      media: [{ slide: "/images/project3.svg", alt: "Web IDE" }
      ],
    }
  ];

  const skillCategories = [
    {
      name: "Languages, Tools & Platforms",
      skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "C",
        "Git", "Github", "Postman", "Wireshark", "Jupyter Notebook"
      ],
    },
    {
      name: "Frontend & Deployment",
      skills: ["React", "Next.js", "TailwindCSS", "ShadCN", "Once UI",
        "Frontend Optimizations", "Caching", "API Endpoints", "AWS", "CI/CD",
        "Docker"
      ],
    },
    {
      name: "Backend & ML",
      skills: ["FastAPI", "Node.js", "Express.js", "MongoDB", 
        "Sequelize", "PyTorch", "TensorFlow", 
        "Pandas", "NumPy", "LangChain", "LangGraph"
      ],
    },
  ];

  return (
    <main id="home" className="relative min-h-screen bg-transparent">
      <Header />

      {/* Background Layer */}
      <div className="fixed inset-0 -z-20 bg-page-background" />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none w-full">
        <div
          className="absolute inset-x-0 top-0 h-[70vh] w-full opacity-60"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 0%, var(--color-accent-background-strong), transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.15] w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-accent-background-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--color-accent-background-strong) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      {/* Hero Section */}
      <Column fillWidth center className="pt-40 px-8 gap-24">
        <Column center gap="16">
          <ShineFx
            speed={8}
            className="text-7xl md:text-9xl font-bold tracking-tighter"
          >
            Rudra Pandya
          </ShineFx>

          <Row
            id="arrow-trigger-1"
            vertical="center"
            gap="12"
            className="text-neutral-medium group cursor-pointer"
          >
            <span className="text-lg tracking-wide uppercase font-medium">
              Explore my profile
            </span>
            <Arrow trigger="#arrow-trigger-1" scale={1} />
          </Row>
        </Column>

        <div className="relative w-full max-w-4xl px-4 flex items-center justify-center">
          <MatrixFx height={20} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-2xl px-8">
              <p className="text-neutral-strong leading-relaxed text-center text-xl md:text-2xl font-light">
                I am a CSE Undergraduate at IIIT Dharwad, building the bridge
                between robust Full-Stack Architecture and intelligent Machine
                Learning models.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl pb-40 px-4">
          <CompareImage
            leftContent={{ src: "/images/2.gif", alt: "Software Dev" }}
            rightContent={{ src: "/images/1.gif", alt: "ML Engineer" }}
          />
        </div>
      </Column>

      {/* Projects Section */}
      <Column id="projects" fillWidth center className="py-20 px-8 gap-16">
        <Column center gap="8">
          <h2 className="text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-white/20 rounded-full" />
        </Column>

        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <Card key={idx} className="p-4 relative">
              <Row
                fillWidth
                gap="12"
                className="justify-end absolute top-6 right-6 z-30"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest hover:bg-white/20 transition-all"
                >
                  GITHUB
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest hover:bg-white/20 transition-all"
                >
                  LIVE
                </a>
              </Row>

              <Carousel items={project.media} />

              <Column paddingX="20" paddingY="24" gap="12" className="pt-6">
                <ShineFx speed={8} className="text-2xl font-semibold">
                  {project.title}
                </ShineFx>

                <p className="text-neutral-medium leading-relaxed text-sm">
                  {project.description}
                </p>

                <Row gap="8" className="flex-wrap pt-4">
                  {project.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-medium text-[9px] uppercase tracking-widest font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </Row>
              </Column>
            </Card>
          ))}
        </div>
      </Column>

      {/* Skills Section */}
      <Column id="skills" fillWidth center className="py-32 px-8 gap-16">
        <Column center gap="8">
          <h2 className="text-4xl font-bold tracking-tight uppercase">
            Technical Arsenal
          </h2>
          <div className="h-0.5 w-20 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        </Column>

        <div className="w-full max-w-[90rem] grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <Column
              key={idx}
              gap="24"
              className="border-t border-white/10 pt-8"
            >
              <h3
                className="text-sm font-bold uppercase tracking-[0.4em] font-mono"
                style={{ color: "Red" }}
              >
                {category.name}
              </h3>

              <Row gap="8" className="flex-wrap">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-4 py-2 bg-white/5 border border-white/10 hover:border-red-500 hover:bg-blue-500/10 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-[15px] font-mono font-bold uppercase tracking-widest text-neutral-medium group-hover:text-red-400 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </Row>
            </Column>
          ))}
        </div>
      </Column>

      {/* Experience & Hackathons Section */}
      <Column id="experience" fillWidth center className="py-32 px-8 gap-16">
        <Column center gap="8">
          <h2 className="text-4xl font-bold tracking-tight uppercase">
            Experience & Journey
          </h2>
          <div className="h-0.5 w-20 bg-white/20" />
        </Column>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <Column gap="8" fillWidth>
            <h3 className="text-xl font-semibold mb-8 text-neutral-strong tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Career Timeline
            </h3>

            {/* Experience Item 1 */}
            <div className="flex gap-6 group relative">
              <div className="absolute left-[5.5px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-green-500 to-transparent opacity-20" />
              <div className="flex flex-col items-center mt-1 z-10">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#3b82f6] ring-2 ring-black" />
              </div>
              <div className="pb-12">
                <span className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-red-400 text-[10px] font-bold tracking-wider">
                  JUN 2025 - AUG 2025
                </span>
                <h4 className="text-lg font-bold text-white mt-2">
                  Software Development Intern
                </h4>
                <p className="text-sm text-neutral-medium italic">
                  ICONIC AI
                </p>
                <p className="text-sm text-neutral-medium mt-3 leading-relaxed border-l-2 border-white/5 pl-4">
                  Designed and implemented NetSense, a real-time network analytics system for processing live packet streams and classifying domain activity into Productivity scores..
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center mt-1 z-10">
                <div className="w-3 h-3 rounded-full bg-neutral-600 ring-2 ring-black" />
              </div>
              <div className="pb-12">
                <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-medium text-[10px] font-bold tracking-wider">
                  MAY 2024 - MAY 2025
                </span>
                <h4 className="text-lg font-bold text-white mt-2">
                  Creative Team Lead
                </h4>
                <p className="text-sm text-neutral-medium italic">
                  Google Developer Groups, IIIT Dharwad
                </p>
                <p className="text-sm text-neutral-medium mt-3 leading-relaxed border-l-2 border-white/5 pl-4">
                  Lead a team of creative artists to build visually attractive media content for Google Developer Group, IIIT Dharwad.
                </p>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center mt-1 z-10">
                <div className="w-3 h-3 rounded-full bg-neutral-600 ring-2 ring-black" />
              </div>
              <div className="pb-12">
                <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-medium text-[10px] font-bold tracking-wider">
                  MAY 2024 - MAY 2025
                </span>
                <h4 className="text-lg font-bold text-white mt-2">
                  Creative Lead
                </h4>
                <p className="text-sm text-neutral-medium italic">
                  MSA, IIIT Dharwad
                </p>
                <p className="text-sm text-neutral-medium mt-3 leading-relaxed border-l-2 border-white/5 pl-4">
                  Lead a team of creative artists to build visually attractive media content for Microsoft Student Ambassadors Chapter IIIT Dharwad.
                </p>
              </div>
            </div>
          </Column>

          {/* Achievements & Stats */}
          <Column gap="12" fillWidth>
            <h3 className="text-xl font-semibold mb-6 text-neutral-strong tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Glory & Stats
            </h3>

            {/* Glitch Image Card */}
            <div className="relative group cursor-pointer">
              <GlitchFx
                speed="fast"
                className="rounded-xl overflow-hidden border border-white/10 bg-black"
              >
                <div className="relative aspect-video w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                  <img
                    src="/images/hackathon-win.jpg" 
                    alt="Smart India Hackathon"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    January 2026
                  </div>
                </div>
              </GlitchFx>

              <div className="mt-4 px-2">
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  IBM Dev Day: AI Demystified
                </h4>
                <p className="text-neutral-medium text-sm mt-1">
                  International Hackathon
                </p>
              </div>
            </div>

            {/* Cyber Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#ffa116] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-[#ffa116] uppercase tracking-widest">
                    Data Structures
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#ff1616] shadow-[0_0_8px_#ffa116]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-mono font-bold text-white group-hover:text-[#ffa116] transition-colors">
                    450+
                  </span>
                  <span className="text-[10px] text-neutral-medium uppercase">
                    Problems Solved
                  </span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-[#ffa116] w-[75%]" />
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#5b4638] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">
                    LEETCODE
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-mono font-bold text-white group-hover:text-neutral-300 transition-colors">
                    1480+
                  </span>
                  <span className="text-[10px] text-neutral-medium uppercase">
                    Max Rating
                  </span>
                </div>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3].map((star) => (
                    <div
                      key={star}
                      className="w-full h-1 bg-white rounded-full opacity-80"
                    />
                  ))}
                  <div className="w-full h-1 bg-white/10 rounded-full" />
                </div>
              </div>
            </div>
          </Column>
        </div>
      </Column>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20 relative z-20">
        <Column center gap="32" className="px-8 max-w-4xl mx-auto">
          
          {/* Header Text */}
          <Column center gap="8">
             <h2 className="text-6xl font-bold tracking-tighter text-white">Want to Connect?</h2>
             <p className="text-neutral-medium text-xl">Write your message/mail. Establish connection.</p>
          </Column>

          {/* Social Links Row */}
          <Row center gap="32" className="flex-wrap">
             {[
               { name: "GitHub", url: "https://github.com/Rudra-P11" },
               { name: "LinkedIn", url: "https://linkedin.com/in/rudrap11" },
               { name: "Email", url: "mailto:pandyarudra2@gmail.com" }
             ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target={social.name === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group text-neutral-medium hover:text-white transition-colors px-4 py-2 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5"
                >
                    <span className="text-xl font-mono uppercase tracking-widest">{social.name}</span>
                    <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                        {/* Custom Arrow Icon */}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </a>
             ))}
          </Row>

          {/* Recruiter / DB Footer */}
          <div className="w-full mt-12 p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl relative overflow-hidden">
             {/* Decorative Scanline */}
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
             
             <Column fillWidth center gap="24">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-green-500 tracking-widest uppercase">System Online • Database Ready</span>
                </div>

                {formStatus === 'success' ? (
                   <div className="py-8 text-center animate-pulse">
                      <h3 className="text-2xl font-bold text-green-400 font-mono tracking-tighter">[ TRANSMISSION RECEIVED ]</h3>
                      <p className="text-neutral-medium text-sm mt-2">I will respond to your signal shortly.</p>
                   </div>
                ) : (
                  <form action={handleRecruiterSubmit} className="w-full max-w-md flex flex-col gap-4">
                      <div className="relative group">
                          <input 
                             type="email" 
                             name="email" 
                             required 
                             placeholder="enter_protocol: recruiter@company.com"
                             className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500 transition-all"
                          />
                          {/* Corner accents */}
                          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
                          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
                      </div>
                      <button 
                         type="submit" 
                         disabled={isPending}
                         className="w-full py-3 bg-red-600 hover:bg-green-500 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                         {isPending ? "TRANSMITTING..." : "EXECUTE CONNECTION"}
                      </button>
                  </form>
                )}
             </Column>
          </div>
          
          <p className="text-[10px] text-neutral-weak uppercase tracking-widest mt-12">
             © 2026 Rudra Pandya • System Status: Normal
          </p>
        </Column>
      </footer>
    </main>
  );
}