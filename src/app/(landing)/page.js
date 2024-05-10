import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import heroImage1 from "../../../public/images/wchex-hero-1.png";
import heroImage2 from "../../../public/images/wchex-hero-2.png";
import heroImage3 from "../../../public/images/wchex-hero-3.png";
export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center md:min-h-[85svh] bg-background font-sans antialiased gap-[1rem]">
      <div className="flex flex-col items-center gap-[1rem] h-[600px] w-full justify-center">
        <span className="flex flex-col gap-1.5 items-center text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Achieve excellence through ease
          </h1>
          <p className="text-sm md:text-md">
            Ace your writing exams with our AI powered system integrated
          </p>
        </span>
        <div className="flex gap-[1rem]">
          <Button size="sm" asChild>
            <Link href="/exam">Get Started</Link>
          </Button>
          <Button size="sm" variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
      <div className="max-w-[1250px]">
        <div className="flex flex-col items-center gap-[1rem]  md:h-[600px] w-full justify-center p-[2rem]">
          <div className="w-full flex flex-col md:flex-row  items-center justify-between">
            <div className="w-full md:max-w-[50%] md:p-[2rem]">
              <Image
                src={heroImage1}
                alt="Acheiving success"
                objectFit="contain"
                width={2000}
                height={2000}
              />
            </div>
            <div className="w-full md:max-w-[50%] flex flex-col gap-1.5">
              <h1 className="text-lg md:text-3xl font-semibold">
                AI-Infused Fundamentals: Building Blocks for IELTS Writing
                Success
              </h1>
              <p className="text-sm md:text-lg">
                Embark on your journey to IELTS writing excellence with our
                AI-infused foundational section. Through a combination of
                expertly curated content and cutting-edge AI technology, our
                platform provides a comprehensive learning experience tailored
                to your individual needs. Our AI-powered tools analyze your
                writing patterns, identify areas for improvement, and offer
                personalized recommendations to help you strengthen your
                foundational skills. Whether you&apos;re grappling with grammar
                rules, struggling with sentence structure, or seeking clarity on
                task requirements, our platform equips you with the knowledge
                and confidence to tackle each writing task with precision and
                proficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[1rem]  md:h-[600px] w-full justify-center p-[2rem]">
          <div className="w-full flex flex-col md:flex-row  items-center justify-between">
            <div className="w-full md:max-w-[50%] flex flex-col gap-1">
              <div className="w-full md:max-w-[50%]  block md:hidden  md:p-[2rem]">
                <Image
                  src={heroImage2}
                  alt="Acheiving success"
                  objectFit="contain"
                  width={2000}
                  height={2000}
                />
              </div>
              <h1 className="text-lg md:text-3xl font-semibold">
                AI-Driven Composition: Crafting Proficient IELTS Essays
              </h1>
              <p className="text-sm md:text-lg">
                Elevate your essay-writing skills to new heights with our
                AI-enhanced composition section. Here, you&apos;ll immerse yourself
                in the art of crafting compelling essays tailored specifically
                for the IELTS exam. Our innovative platform integrates
                state-of-the-art AI algorithms with expert guidance to provide
                you with unparalleled support throughout your writing journey.
                Whether you&apos;re grappling with essay structure, refining your
                argumentation, or enhancing your vocabulary, our AI-powered
                tools are here to help. By analyzing your writing in real-time,
                our platform offers intelligent suggestions and actionable
                feedback to help you refine your compositions and maximize your
                score potential.
              </p>
            </div>
            <div className="w-full md:max-w-[50%]  hidden md:block  md:p-[2rem]">
              <Image
                src={heroImage2}
                alt="Acheiving success"
                objectFit="contain"
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[1rem]  md:h-[600px] w-full justify-center p-[2rem]">
          <div className="w-full flex flex-col md:flex-row  items-center justify-between">
            <div className="w-full md:max-w-[50%]  md:p-[2rem] ">
              <Image
                src={heroImage3}
                alt="Acheiving success"
                objectFit="contain"
                width={2000}
                height={2000}
              />
            </div>
            <div className="w-full md:max-w-[50%] flex flex-col gap-1">
              <h1 className="text-lg md:text-3xl font-semibold">
                AI-Powered Refinement: Advanced Strategies for IELTS Writing
                Mastery
              </h1>
              <p className="text-sm md:text-lg">
                ake your writing skills to the next level with our AI-optimized
                refinement section. Here, you&apos;ll explore advanced strategies and
                techniques designed to elevate your performance in the IELTS
                writing test. Leveraging the latest advancements in artificial
                intelligence, our platform provides you with the tools and
                resources you need to refine your writing and achieve mastery in
                every aspect of the exam. From mastering complex grammatical
                structures to enhancing your coherence and cohesion, our
                AI-powered tools offer intelligent insights and personalized
                feedback to help you fine-tune your writing with precision and
                polish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
