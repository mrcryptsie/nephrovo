import { forwardRef } from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "default", isLoading, ...props }, ref) => {
    // Map our variant to Shadcn variants
    const mappedVariant = variant === "primary" ? "default" : variant;
    
    return (
      <ShadcnButton
        ref={ref}
        className={cn(
          "font-medium",
          variant === "primary" && "bg-primary-500 hover:bg-primary-600 text-white",
          className
        )}
        variant={mappedVariant}
        size={size}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? "Chargement..." : children}
      </ShadcnButton>
    );
  }
);

Button.displayName = "Button";
