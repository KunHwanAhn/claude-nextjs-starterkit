import Link from "next/link";
import { ArrowRight, Layers, Moon, Palette, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const TECH_STACK = [
  "Next.js 15",
  "TypeScript",
  "TailwindCSS v4",
  "shadcn/ui",
  "lucide-react",
];

const FEATURES = [
  {
    icon: Zap,
    title: "Next.js 15 App Router",
    description: "React Server Components, Turbopack 기반의 빠른 개발 환경",
  },
  {
    icon: Palette,
    title: "TailwindCSS v4",
    description: "CSS 기반 설정, tailwind.config 없는 깔끔한 구성",
  },
  {
    icon: Layers,
    title: "shadcn/ui",
    description: "15개 핵심 컴포넌트 사전 설치, 필요한 것만 추가",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description: "next-themes 기반 시스템/라이트/다크 모드 지원",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Hero */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Next.js Starter Kit
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          웹 개발을 바르게 시작할 수 있는 스타터킷.
          <br />
          검증된 기술스택으로 즉시 개발에 착수하세요.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {TECH_STACK.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/examples">
            <Button size="lg">
              컴포넌트 둘러보기
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mt-20 grid gap-4 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="size-5 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* Quick Start */}
      <section className="mt-20 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold">빠른 시작</h2>
        <div className="mt-6 w-full max-w-lg rounded-lg border bg-muted/50 p-4 text-left">
          <pre className="overflow-x-auto text-sm">
            <code>{`git clone <repository-url>
cd claude-nextjs-starterkit
npm install
npm run dev`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
