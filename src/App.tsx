/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Zap, 
  Target, 
  Brain, 
  Globe, 
  AlertCircle, 
  BookOpen, 
  Layers, 
  Film, 
  Mic2, 
  DollarSign, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Clock,
  Lock,
  Star
} from 'lucide-react';

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 md:py-24 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const PillarCard = ({ number, title, description, icon: Icon }: { number: string, title: string, description: string, icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
        {number}
      </div>
      <Icon className="w-6 h-6 text-orange-500" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-zinc-900">{title}</h3>
    <p className="text-zinc-600 leading-relaxed">{description}</p>
  </motion.div>
);

const BenefitItem = ({ text }: { text: string, key?: React.Key }) => (
  <div className="flex items-start gap-3 mb-3">
    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
    <span className="text-zinc-700">{text}</span>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 border-b border-black/5 bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-semibold mb-8"
          >
            <Zap className="w-4 h-4" />
            OBJETOS QUE FALAM™
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]"
          >
            Crie Vídeos Virais Todos os Dias <span className="text-orange-500">Sem Aparecer</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Descubra o método estruturado que transforma objetos do dia a dia em personagens magnéticos que geram retenção máxima e engajamento explosivo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://pay.kiwify.com.br/A804HYQ"
              className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 group"
            >
              QUERO TRANSFORMAR OBJETOS EM VÍDEOS VIRAIS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Featured Image / Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 relative max-w-4xl mx-auto"
          >
            <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_32px_80px_-20px_rgba(249,115,22,0.3)] border-[6px] md:border-[12px] border-white bg-white">
              <img 
                src="/banner.png" 
                alt="Objetos Que Falam - Método Viral" 
                className="w-full h-auto hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-zinc-900 text-white p-4 md:p-6 rounded-2xl shadow-xl rotate-6 hidden sm:block">
              <div className="text-2xl md:text-3xl font-black text-orange-500">5.7M</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">Visualizações</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-orange-500 text-white p-4 md:p-6 rounded-2xl shadow-xl -rotate-3 hidden sm:block">
              <div className="text-xl md:text-2xl font-black">MÉTODO</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">100% Passo a Passo</div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Context Section */}
      <Section className="bg-zinc-900 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-orange-400 font-semibold mb-4 uppercase tracking-widest text-xs">
              <Globe className="w-4 h-4" />
              A Nova Era Começou
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              A internet mudou. Você não precisa mais ser um influenciador.
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Enquanto a maioria tenta crescer no improviso, criadores anônimos estão usando IA para bater milhões de visualizações sem nunca mostrar o rosto.
            </p>
            <div className="space-y-4">
              {[
                "Criar páginas dark lucrativas",
                "Bater milhões de visualizações",
                "Monetizar com afiliados e produtos próprios",
                "Construir ativos digitais sem exposição"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-zinc-800 rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/ai-video/800/450" 
                alt="AI Video Creation" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white fill-current" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold text-white mb-1">100% IA</div>
              <div className="text-orange-100 text-sm font-medium">Sem Câmera ou Estúdio</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Discovery Section */}
      <Section>
        <div className="text-center mb-16">
          <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Existe uma estrutura invisível por trás de todo vídeo viral.
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Não é sorte. Não é talento. É engenharia de retenção. E ela pode ser replicada por qualquer pessoa, em qualquer nicho.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-black/5 p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-orange-500" />
                Apresentando: OBJETOS QUE FALAM™
              </h3>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                Um sistema estruturado que ensina você a criar roteiros magnéticos, gerar imagens 3D profissionais e animar objetos com movimento cinematográfico.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Roteiros em minutos",
                  "Imagens 3D Estilo Pixar",
                  "Animação Cinematográfica",
                  "Vozes Realistas",
                  "Edição para Retenção",
                  "Loop Infinito",
                  "Monetização Estratégica"
                ].map((item, i) => (
                  <BenefitItem key={i} text={item} />
                ))}
              </div>
            </div>
            <div className="w-full md:w-72 shrink-0">
              <div className="aspect-[3/4] bg-zinc-100 rounded-2xl border-2 border-dashed border-zinc-300 flex flex-col items-center justify-center p-6 text-center">
                <Layers className="w-12 h-12 text-zinc-400 mb-4" />
                <div className="font-bold text-zinc-900 mb-2">Método Completo</div>
                <div className="text-zinc-500 text-sm">Do Zero à Monetização</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pillars Section */}
      <Section className="bg-zinc-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Método em 5 Pilares</h2>
          <p className="text-zinc-600">A base sólida para o seu sucesso viral.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PillarCard 
            number="01" 
            title="Estrutura Viral Validada" 
            description="A fórmula de 5 partes que prende a atenção nos primeiros 2 segundos e mantém o público até o final."
            icon={Target}
          />
          <PillarCard 
            number="02" 
            title="Roteiro Adaptável" 
            description="Modelos replicáveis para Fitness, Financeiro, Educação, Infantil, Curiosidades e Páginas Dark."
            icon={BookOpen}
          />
          <PillarCard 
            number="03" 
            title="Produção Cinematográfica" 
            description="Gere imagens estilo Pixar 3D com iluminação profissional e profundidade de campo sem técnica."
            icon={Film}
          />
          <PillarCard 
            number="04" 
            title="Movimento e Voz" 
            description="Ferramentas para animar microexpressões e usar vozes que aumentam drasticamente a retenção."
            icon={Mic2}
          />
          <PillarCard 
            number="05" 
            title="Monetização Estratégica" 
            description="6 formas comprovadas de transformar visualizações em dinheiro real no seu bolso."
            icon={DollarSign}
          />
          <div className="bg-orange-500 p-8 rounded-2xl flex flex-col justify-center text-white">
            <h3 className="text-2xl font-bold mb-4">Diferencial Premium</h3>
            <p className="text-orange-100 mb-6">Não é apenas um ebook. É um manual estratégico de crescimento orgânico com IA.</p>
            <div className="flex items-center gap-2 font-bold">
              <TrendingUp className="w-5 h-5" />
              Ativo Digital Escalável
            </div>
          </div>
        </div>
      </Section>

      {/* Why it works */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Brain className="w-12 h-12 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que isso funciona?</h2>
            <p className="text-zinc-600 text-lg">
              Porque ativa 4 gatilhos neurais poderosos que o algoritmo ama.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Quebra de Padrão", icon: Zap },
              { label: "Personificação", icon: Target },
              { label: "Humor Absurdo", icon: Star },
              { label: "Movimento + Emoção", icon: TrendingUp }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-black/5 text-center flex flex-col items-center gap-3">
                <item.icon className="w-6 h-6 text-orange-500" />
                <span className="text-sm font-bold text-zinc-900">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Clock className="w-32 h-32" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">Imagine...</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed relative z-10">
              Criar 1 vídeo por dia em menos de 30 minutos. Sem depender de tendências ou audiência inicial. Imagine isso por 30 dias. Você só precisa que um viralize para puxar todos os outros.
            </p>
            <div className="flex items-center gap-4 text-orange-400 font-bold relative z-10">
              <TrendingUp className="w-6 h-6" />
              Oceano Azul: Quem entra cedo domina.
            </div>
          </div>
        </div>
      </Section>

      {/* What you get */}
      <Section className="bg-white border-y border-black/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Você Recebe Hoje</h2>
          <p className="text-zinc-600">Acesso imediato a todo o ecossistema do método.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              "Acesso completo ao método Objetos que Falam™",
              "Estrutura viral validada e testada",
              "Modelo de roteiro replicável e adaptável",
              "Fórmula de prompt profissional para IA",
              "Estratégias de animação cinematográfica",
              "Guia completo de voz com IA",
              "Estratégia de publicação e frequência",
              "Plano de monetização detalhado",
              "Plano de ação prático de 7 dias"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl border border-black/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-zinc-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-zinc-900 rounded-3xl p-8 text-white flex flex-col justify-between">
            <div>
              <ShieldCheck className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Garantia Blindada</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Você tem 7 dias para acessar, aplicar e testar. Se perceber que não é para você, basta solicitar reembolso. Sem perguntas. Risco zero.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-emerald-400 font-bold">
              <Lock className="w-5 h-5" />
              Compra 100% Segura
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" className="bg-orange-50">
        <div className="max-w-md mx-auto bg-white rounded-[2rem] border border-orange-200 p-10 shadow-2xl shadow-orange-500/10 text-center relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
            Oferta Limitada
          </div>
          <h2 className="text-2xl font-bold mb-2">Investimento Simbólico</h2>
          <p className="text-zinc-500 mb-8">Acesso vitalício ao método completo.</p>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-zinc-400 line-through text-xl">R$ 97,00</span>
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">80% OFF</span>
          </div>
          
          <div className="flex items-baseline justify-center gap-1 mb-8">
            <span className="text-2xl font-bold text-zinc-900">R$</span>
            <span className="text-6xl font-black text-zinc-900 tracking-tight">19,90</span>
          </div>

          <a 
            href="https://pay.kiwify.com.br/A804HYQ"
            className="block w-full py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-orange-500/30 transition-all mb-6 uppercase tracking-tight"
          >
            Quero Começar Agora
          </a>

          <div className="space-y-3 text-sm text-zinc-500 font-medium">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Acesso Imediato via E-mail
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Atualizações Gratuitas
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-zinc-500 text-sm">
            Este valor pode aumentar a qualquer momento conforme o número de alunos cresce. Garanta sua vaga no oceano azul hoje mesmo.
          </p>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-zinc-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-zinc-600">Tire suas dúvidas antes de começar.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "Preciso ter experiência com edição?",
              a: "Não! O método foi desenhado para quem nunca abriu um editor de vídeo. Usamos ferramentas de IA que fazem o trabalho pesado por você."
            },
            {
              q: "Funciona para qualquer nicho?",
              a: "Sim. Seja para canal infantil, curiosidades, finanças ou humor, a estrutura de retenção é a mesma e funciona em qualquer segmento."
            },
            {
              q: "Quanto tempo preciso dedicar por dia?",
              a: "Com o método, você consegue criar um vídeo completo em menos de 30 minutos por dia."
            },
            {
              q: "O acesso é vitalício?",
              a: "Sim! Você paga uma única vez e tem acesso para sempre ao método e a todas as atualizações futuras."
            }
          ].map((item, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-black/5 p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-zinc-900 list-none">
                {item.q}
                <span className="group-open:rotate-180 transition-transform">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* Final Decision */}
      <Section className="bg-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Sua Decisão Hoje</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl border border-zinc-200 bg-zinc-50 text-left opacity-60">
              <h3 className="text-xl font-bold mb-4 text-zinc-400">O Caminho Comum</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-zinc-500">❌ Continuar no improviso</li>
                <li className="flex items-center gap-2 text-zinc-500">❌ Esperar o formato saturar</li>
                <li className="flex items-center gap-2 text-zinc-500">❌ Assistir outros monetizarem</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border-2 border-orange-500 bg-orange-50 text-left">
              <h3 className="text-xl font-bold mb-4 text-orange-600">O Caminho do Método</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-zinc-900 font-bold">✅ Começar hoje mesmo</li>
                <li className="flex items-center gap-2 text-zinc-900 font-bold">✅ Publicar nas próximas 24h</li>
                <li className="flex items-center gap-2 text-zinc-900 font-bold">✅ Construir sua máquina de tráfego</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <a 
              href="https://pay.kiwify.com.br/A804HYQ"
              className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-900 hover:bg-black text-white rounded-2xl font-bold text-xl transition-all shadow-2xl"
            >
              QUERO TRANSFORMAR OBJETOS EM VÍDEOS VIRAIS
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 text-center text-zinc-400 text-sm">
        <div className="max-w-5xl mx-auto px-6">
          <p className="mb-4">© 2026 OBJETOS QUE FALAM™. Todos os direitos reservados.</p>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Este site não faz parte do Google ou do Facebook. Além disso, este site NÃO é endossado pelo Google ou pelo Facebook de forma alguma.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/SEUNUMERO" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        title="Dúvidas no WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
