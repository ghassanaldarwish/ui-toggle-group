import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { VariantProps } from 'class-variance-authority';

declare const ToggleGroup: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const ToggleGroupItem: React.ForwardRefExoticComponent<Omit<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

export { ToggleGroup, ToggleGroupItem };
