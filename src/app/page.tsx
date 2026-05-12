"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="large"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Início",
          id: "hero",
        },
        {
          name: "Planos",
          id: "pricing",
        },
        {
          name: "Vantagens",
          id: "features",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contato",
          id: "contact",
        },
      ]}
      brandName="AGF Invest"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Tenha acesso às melhores ferramentas de renda passiva com dividendos."
      description="Junte-se à maior comunidade de investidores do Brasil e simplifique seus aportes mensais."
      buttons={[
        {
          text: "Adquirir plano",
          href: "#pricing",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design-smartphone_23-2150165982.jpg",
          imageAlt: "AGF App dashboard view",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-staff-gathers-examines-monthly-revenue-balance_482257-130896.jpg",
          imageAlt: "Dashboard stats",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/person-looking-finance-graphs_52683-116602.jpg",
          imageAlt: "Portfolio growth",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/ui-ux-representations-with-smartphone_23-2150201874.jpg",
          imageAlt: "Dividend tracker",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/person-looking-finance-graphs_52683-116604.jpg",
          imageAlt: "Community insights",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-checking-stock-market-online_53876-163988.jpg",
          imageAlt: "AGF Investment insights",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "mensal",
          badge: "Popular",
          price: "R$ 69,90",
          subtitle: "Por mês",
          buttons: [
            {
              text: "Assinar Mensal",
              href: "#",
            },
          ],
          features: [
            "Ferramentas avançadas",
            "Comunidade exclusiva",
            "Dashboard de dividendos",
          ],
        },
        {
          id: "anual",
          badge: "30% OFF",
          price: "R$ 49,90",
          subtitle: "Por mês (Cobrado anualmente)",
          buttons: [
            {
              text: "Assinar Anual",
              href: "#",
            },
          ],
          features: [
            "Tudo do plano mensal",
            "Melhor custo-benefício",
            "Acesso prioritário",
          ],
        },
      ]}
      title="Escolha o seu plano"
      description="Planos flexíveis para impulsionar seus investimentos."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Dashboard Completo",
          subtitle: "Monitore seus dividendos em tempo real.",
          category: "Tecnologia",
          value: "100%",
        },
        {
          id: "f2",
          title: "Comunidade Ativa",
          subtitle: "Troque conhecimentos com investidores.",
          category: "Comunidade",
          value: "Global",
        },
        {
          id: "f3",
          title: "Segurança Total",
          subtitle: "Dados protegidos com criptografia.",
          category: "Privacidade",
          value: "Alta",
        },
      ]}
      title="Vantagens AGF"
      description="Por que escolher nossa plataforma de investimentos?"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split-description"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "O que é o app AGF?",
          content: "É a plataforma definitiva para investidores de dividendos.",
        },
        {
          id: "q2",
          title: "O que são dividendos?",
          content: "É a parte dos lucros de uma empresa distribuída aos acionistas.",
        },
        {
          id: "q3",
          title: "O AGF é para iniciantes?",
          content: "Sim, temos conteúdos educativos para todos os níveis.",
        },
        {
          id: "q4",
          title: "Como funciona o reembolso?",
          content: "Se cancelar em 7 dias, garantimos o reembolso total.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/creative-geometrical-background-with-white-hexagons_23-2148811536.jpg"
      mediaAnimation="slide-up"
      title="Dúvidas frequentes"
      description="Tudo o que você precisa saber sobre o AGF."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Suporte"
      title="Precisa de ajuda?"
      description="Nossa equipe está pronta para te atender via WhatsApp ou e-mail."
      buttons={[
        {
          text: "Falar no WhatsApp",
          href: "https://wa.me/5511913437080",
        },
        {
          text: "Enviar e-mail",
          href: "mailto:suporte@agf.com.br",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Sobre",
              href: "#",
            },
            {
              label: "Planos",
              href: "#pricing",
            },
          ],
        },
        {
          items: [
            {
              label: "Suporte",
              href: "#contact",
            },
            {
              label: "Privacidade",
              href: "#",
            },
          ],
        },
      ]}
      logoText="AGF Invest"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
