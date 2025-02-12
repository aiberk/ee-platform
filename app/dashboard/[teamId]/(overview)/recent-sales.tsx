import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Sensor" />
          <AvatarFallback>T1</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Temperature Sensor #1
          </p>
          <p className="text-sm text-muted-foreground">
            Overheat warning at 85°C
          </p>
        </div>
        <div className="ml-auto font-medium text-red-500">Critical</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Sensor" />
          <AvatarFallback>M2</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Motion Sensor #2</p>
          <p className="text-sm text-muted-foreground">
            Unexpected movement detected
          </p>
        </div>
        <div className="ml-auto font-medium text-yellow-500">Warning</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Sensor" />
          <AvatarFallback>H3</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Humidity Sensor #3</p>
          <p className="text-sm text-muted-foreground">
            Humidity dropped below 20%
          </p>
        </div>
        <div className="ml-auto font-medium text-yellow-500">Warning</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Sensor" />
          <AvatarFallback>P4</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Power Sensor #4</p>
          <p className="text-sm text-muted-foreground">
            Voltage spike detected
          </p>
        </div>
        <div className="ml-auto font-medium text-red-500">Critical</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Sensor" />
          <AvatarFallback>C5</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">CO2 Sensor #5</p>
          <p className="text-sm text-muted-foreground">
            CO2 levels exceeded safe limit
          </p>
        </div>
        <div className="ml-auto font-medium text-red-500">Critical</div>
      </div>
    </div>
  );
}
