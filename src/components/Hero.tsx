import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import TypewriterEffect from "./TypewriterEffect";
import devImg from '@/assets/Studio/dev.png';
import uxuiImg from '@/assets/Studio/uxui.png';
import designingImg from '@/assets/Studio/designing.png';
import workflowsImg from '@/assets/Studio/workflows.png';
import productsImg from '@/assets/Studio/products.png';
import promotingImg from '@/assets/Studio/promoting.png';

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
        },
    },
}

const Hero = () => {
  const dynamicWords = ["Business Success", "Digital Growth", "AI Innovation", "Future Solutions"];

  return (
    <>
      <section className="relative mx-auto max-w-6xl px-6 pt-32 lg:pb-16 lg:pt-48">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              item: transitionVariants.item,
            }}
          >
            <h1
              className="text-balance text-4xl font-medium sm:text-5xl md:text-6xl">
              We Help You Build
              <br />
              <TypewriterEffect words={dynamicWords} />
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
              Professional consulting services to help your business grow and succeed in today's competitive market
            </p>

            <form
              action=""
              className="mt-12 mx-auto max-w-sm">
              <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] pr-1.5 items-center rounded-[1rem] border shadow shadow-zinc-950/5 has-[input:focus]:ring-2 lg:pr-0">
                <div className="pointer-events-none absolute inset-y-0 left-4 my-auto size-5 text-muted-foreground flex items-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <input
                  placeholder="Your mail address"
                  className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                  type="email"
                />

                <div className="md:pr-1.5 lg:pr-0">
                  <Button
                    aria-label="submit"
                    size="sm"
                    className="rounded-[0.5rem]">
                    <span className="hidden md:block">Get Started</span>
                    <span className="md:hidden">→</span>
                  </Button>
                </div>
              </div>
            </form>

            <div
              aria-hidden
              className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left"
            >
              <div className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--border),var(--border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
              </div>
              <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                  <AppComponent />

                  <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5" />
            </div>
          </AnimatedGroup>
        </div>
      </section>
      <LogoCloud />
    </>
  );
};

const AppComponent = () => {
  return (
    <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
      <div className="flex items-center gap-1.5 text-orange-400">
        <div className="size-6 text-primary flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <div className="text-sm font-medium">Guidesoft</div>
      </div>
      <div className="space-y-3">
        <div className="text-foreground border-b border-white/10 pb-3 text-sm font-medium">This year, we're powering more businesses than ever.</div>
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="space-x-1">
              <span className="text-foreground align-baseline text-xl font-medium">500+</span>
              <span className="text-muted-foreground text-xs">Projects</span>
            </div>
            <div className="flex h-5 items-center rounded bg-gradient-to-l from-emerald-400 to-indigo-600 px-2 text-xs text-white">2024</div>
          </div>
          <div className="space-y-1">
            <div className="space-x-1">
              <span className="text-foreground align-baseline text-xl font-medium">300+</span>
              <span className="text-muted-foreground text-xs">Projects</span>
            </div>
            <div className="text-foreground bg-muted flex h-5 w-2/3 items-center rounded px-2 text-xs dark:bg-white/20">2023</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LogoCloud = () => {
  return (
    <section className="bg-background pb-16 md:pb-32 w-full">
      <div className="group w-full px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Our latest tools and ready to integrate</p>
          </div>
          <div className="relative py-6 w-full md:w-[calc(100%-11rem)]">
            <InfiniteSlider
              durationOnHover={20}
              duration={40}
              gap={112}>
              <div className="flex">
                <img
                  className="mx-auto w-[150px] h-[150px] object-contain"
                  src={devImg}
                  alt="Development Services"
                  width="150"
                  height="150"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto w-[150px] h-[150px] object-contain"
                  src={uxuiImg}
                  alt="UI/UX Design"
                  width="150"
                  height="150"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto w-[150px] h-[150px] object-contain"
                  src={designingImg}
                  alt="Graphic Design"
                  width="150"
                  height="150"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto w-[150px] h-[150px] object-contain"
                  src={workflowsImg}
                  alt="Workflow Automation"
                  width="150"
                  height="150"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto w-[150px] h-[150px] object-contain"
                  src={productsImg}
                  alt="Product Development"
                  width="150"
                  height="150"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto w-[150px] h-[150px] object-contain"
                  src={promotingImg}
                  alt="Digital Promotion"
                  width="150"
                  height="150"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
