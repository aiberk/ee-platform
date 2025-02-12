import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero(props: {
  capsuleText: string;
  capsuleLink: string;
  title: string;
  subtitle: string;
  credits?: React.ReactNode;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}) {
  return (
    <section className="space-y-6 py-32 md:pt-[25rem]">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        {/* <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
          {props.capsuleText}
        </div> */}
        {/* <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-8xl bg-gradient-to-br from-blue-400 to-purple-700 bg-clip-text text-transparent">
          {props.title}
        </h1> */}
        <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-8xl bg-gradient-to-br from-blue-500 via-purple-500 via-pink-500 via-orange-500 via-green-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
          {props.title}
        </h1>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {props.subtitle}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href={props.primaryCtaLink}
            className={cn(buttonVariants({ size: "lg" }))}>
            {props.primaryCtaText}
          </Link>

          <Link
            href={props.secondaryCtaLink}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            {props.secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
