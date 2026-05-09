import { TypographyH1, TypographyP } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <TypographyH1>Welcome to Sanskriti Kindergarden</TypographyH1>
        <TypographyP>
          Start building your pages by editing <code>src/app/page.tsx</code>.
        </TypographyP>
      </div>
    </main>
  );
}
