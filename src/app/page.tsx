import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 h-16 flex items-center border-b">
        <span className="font-bold text-xl">ScoringAI</span>
        <nav className="ml-auto flex gap-4">
          <ModeToggle />
          <Link href="/login">
            <Button>Entrar</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="py-24 px-6 text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
            Decisões inteligentes em tempo real
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Utilize nossa IA integrada para processar dados, gerar scores de
            risco e priorizar o atendimento de forma automática.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/login">
              <Button size="lg" className="gap-2">
                Acessar Dashboard <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section>
          <div className="container px-6 grid md:grid-cols-3 gap-8 mx-auto">
            <FeatureCard
              icon={<Zap className="text-primary" />}
              title="Processamento Rápido"
              description="Integração nativa com FastAPI para cálculos complexos em milissegundos."
            />
            <FeatureCard
              icon={<BarChart3 className="text-primary" />}
              title="Análise Preditiva"
              description="Modelos de Machine Learning treinados para identificar padrões de risco."
            />
            <FeatureCard
              icon={<ShieldCheck className="text-primary" />}
              title="Gestão Segura"
              description="Backend em CodeIgniter 4 com autenticação robusta e logs de auditoria."
            />
          </div>
        </section>
      </main>
    </div>
  );

  function FeatureCard({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) {
    return (
      <div className="p-6 bg-background rounded-xl border shadow-sm space-y-3">
        <div className="p-2 bg-primary/10 w-fit rounded-lg">{icon}</div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );
  }
}
