"use client";

import { useState } from "react";
import {
  Bold,
  ChevronDown,
  Copy,
  Mail,
  Plus,
  Settings,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-lg font-semibold">{children}</h3>;
}

function ButtonsSection() {
  return (
    <div className="space-y-6">
      <SectionTitle>Button Variants</SectionTitle>
      <div className="flex flex-wrap gap-2">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>

      <SectionTitle>Button Sizes</SectionTitle>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <Plus className="size-4" />
        </Button>
      </div>

      <SectionTitle>Button with Icon</SectionTitle>
      <div className="flex flex-wrap gap-2">
        <Button>
          <Mail data-icon="inline-start" className="size-4" />
          이메일 보내기
        </Button>
        <Button variant="outline">
          <Copy data-icon="inline-start" className="size-4" />
          복사
        </Button>
      </div>
    </div>
  );
}

function FormSection() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="space-y-6">
      <SectionTitle>Input</SectionTitle>
      <div className="max-w-sm space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input id="email" type="email" placeholder="name@example.com" />
      </div>

      <SectionTitle>Textarea</SectionTitle>
      <div className="max-w-sm space-y-2">
        <Label htmlFor="message">메시지</Label>
        <Textarea id="message" placeholder="메시지를 입력하세요..." />
      </div>

      <SectionTitle>Switch</SectionTitle>
      <div className="flex items-center gap-3">
        <Switch
          id="notifications"
          checked={switchOn}
          onCheckedChange={setSwitchOn}
        />
        <Label htmlFor="notifications">
          알림 {switchOn ? "켜짐" : "꺼짐"}
        </Label>
      </div>
    </div>
  );
}

function DataDisplaySection() {
  return (
    <div className="space-y-6">
      <SectionTitle>Badge</SectionTitle>
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>

      <SectionTitle>Avatar</SectionTitle>
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>YZ</AvatarFallback>
        </Avatar>
      </div>

      <SectionTitle>Card</SectionTitle>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>카드 제목</CardTitle>
          <CardDescription>카드에 대한 간략한 설명입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Card 컴포넌트를 사용하면 콘텐츠를 깔끔하게 그룹화할 수 있습니다.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm">자세히 보기</Button>
        </CardFooter>
      </Card>

      <SectionTitle>Skeleton</SectionTitle>
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </div>
  );
}

function OverlaysSection() {
  return (
    <div className="space-y-6">
      <SectionTitle>Dialog</SectionTitle>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          Dialog 열기
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>다이얼로그 제목</DialogTitle>
            <DialogDescription>
              다이얼로그에 대한 설명이 여기에 들어갑니다.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Dialog 컴포넌트를 활용하여 모달 UI를 구현할 수 있습니다.
            </p>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              닫기
            </DialogClose>
            <Button>확인</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <SectionTitle>Sheet</SectionTitle>
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          Sheet 열기
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Sheet 제목</SheetTitle>
            <SheetDescription>
              Sheet는 사이드 패널 형태의 오버레이입니다.
            </SheetDescription>
          </SheetHeader>
          <div className="px-4">
            <p className="text-sm text-muted-foreground">
              모바일 네비게이션이나 상세 정보 표시에 활용할 수 있습니다.
            </p>
          </div>
        </SheetContent>
      </Sheet>

      <SectionTitle>Dropdown Menu</SectionTitle>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline" />}
        >
          메뉴
          <ChevronDown data-icon="inline-end" className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>내 계정</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="size-4" />
            프로필
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="size-4" />
            설정
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>로그아웃</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SectionTitle>Tooltip</SectionTitle>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          <Bold className="size-4" />
          호버하세요
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip 내용입니다</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function LayoutSection() {
  return (
    <div className="space-y-6">
      <SectionTitle>Separator</SectionTitle>
      <div className="space-y-1">
        <h4 className="text-sm font-medium">섹션 A</h4>
        <p className="text-sm text-muted-foreground">
          Separator 컴포넌트로 콘텐츠를 구분합니다.
        </p>
      </div>
      <Separator />
      <div className="space-y-1">
        <h4 className="text-sm font-medium">섹션 B</h4>
        <p className="text-sm text-muted-foreground">
          수평 및 수직 방향을 지원합니다.
        </p>
      </div>

      <SectionTitle>Tabs (현재 사용 중)</SectionTitle>
      <p className="text-sm text-muted-foreground">
        이 쇼케이스 페이지의 상단 탭이 Tabs 컴포넌트로 구현되어 있습니다.
        콘텐츠를 논리적 그룹으로 나누어 표시할 때 유용합니다.
      </p>
    </div>
  );
}

export default function ExamplesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">컴포넌트 쇼케이스</h1>
      <p className="mt-2 text-muted-foreground">
        스타터킷에 포함된 shadcn/ui 컴포넌트들을 확인하세요.
      </p>

      <div className="mt-8">
        <Tabs defaultValue="buttons">
          <TabsList>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="form">Form</TabsTrigger>
            <TabsTrigger value="data">Data Display</TabsTrigger>
            <TabsTrigger value="overlays">Overlays</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="buttons">
              <ButtonsSection />
            </TabsContent>
            <TabsContent value="form">
              <FormSection />
            </TabsContent>
            <TabsContent value="data">
              <DataDisplaySection />
            </TabsContent>
            <TabsContent value="overlays">
              <OverlaysSection />
            </TabsContent>
            <TabsContent value="layout">
              <LayoutSection />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
