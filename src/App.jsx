import AnimatedSection from "./components/AnimatedSection";
import Nav from "./components/Nav";
import {
  Hero,
  Features,
  Footer,
  JoinUs,
  Interagation,
  CaseStudy,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding">
        <Hero />
      </section>
      <AnimatedSection
        animationProps={{ y: [200, 0], opacity: [0, 1] }}
        transitionProps={{ ease: "easeOut", duration: 1 }}
      >
        <section className="padding bg-[#DCE6EA]">
          <CaseStudy />
        </section>
      </AnimatedSection>
      <AnimatedSection
        animationProps={{ y: [200, 0], opacity: [0, 1] }}
        transitionProps={{ ease: "easeOut", duration: 1 }}
      >
        <section className="padding">
          <Interagation />
        </section>
      </AnimatedSection>
      <AnimatedSection
        animationProps={{ y: [200, 0], opacity: [0, 1] }}
        transitionProps={{ ease: "easeOut", duration: 1 }}
      >
        <section className="padding bg-[#DCE6EA]">
          <Features />
        </section>
      </AnimatedSection>
      <AnimatedSection
        animationProps={{ y: [200, 0], opacity: [0, 1] }}
        transitionProps={{ ease: "easeOut", duration: 1 }}
      >
        <section className="padding-x sm:py-32 py-16 w-full">
          <JoinUs />
        </section>
      </AnimatedSection>
      <AnimatedSection
        animationProps={{ y: [200, 0], opacity: [0, 1] }}
        transitionProps={{ ease: "easeOut", duration: 1 }}
      >
        <section className="padding-x padding-t pb-8 bg-[#DCE6EA]">
          <Footer />
        </section>
      </AnimatedSection>
    </main>
  );
};

export default App;
