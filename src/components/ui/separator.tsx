import * as React from "react";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn(
      "border-t border-gray-300 my-4", // Estilos por defecto para el separador
      className // Permite sobreescribir o extender clases si es necesario
    )}
    {...props}
  />
));

Separator.displayName = "Separator";

export { Separator };
