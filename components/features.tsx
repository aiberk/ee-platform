import { Separator } from "@radix-ui/react-separator";

export function FeatureGridItem(props: {
  // icon: React.ReactNode;
  title: string;
  description: string;
  sensors: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-full flex-col rounded-md p-6 gap-4">
        <div className="space-y-2">
          <h3 className="font-bold">{props.title}</h3>
          <p className="text-sm text-muted-foreground">{props.description}</p>
          <div className="bg-slate-100 p-4 rounded-md dark:bg-slate-800">
            <h4 className="text-sm">Sensors:</h4>
            {props.sensors.map((item) => (
              <h5
                className="text-xs text-muted-foreground dark:text-white"
                key={item}>
                {item}
              </h5>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeatureGrid(props: {
  title: string;
  subtitle: string;
  items: {
    // icon: React.ReactNode;
    title: string;
    description: string;
    sensors: string[];
  }[];
}) {
  return (
    <section
      id="features"
      className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">{props.title}</h2>
        {/* <p className="max-w-[85%] text-muted-foreground sm:text-lg">
          {props.subtitle}
        </p> */}
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        {props.items.map((item, index) => (
          <FeatureGridItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
