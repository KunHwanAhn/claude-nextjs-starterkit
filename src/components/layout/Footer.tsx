import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer>
      <Separator />
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-muted-foreground">
        <p>
          Built with Next.js, Tailwind CSS, shadcn/ui
        </p>
        <p className="mt-1">
          &copy; {new Date().getFullYear()} Next.js Starter Kit
        </p>
      </div>
    </footer>
  );
}
