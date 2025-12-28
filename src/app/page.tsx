import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-6 h-16 flex items-center border-b">
        <span className="font-bold text-xl">ScoringAI</span>
        <nav className="ml-auto flex gap-4">
          <Link href="/login">
            <Button variant="ghost">Entrar</Button>
          </Link>
          <Link href="/login">
            <Button>Começar Agora</Button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
