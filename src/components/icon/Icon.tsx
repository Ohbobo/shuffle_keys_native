import * as LucideIcons from "lucide-react-native";

export default function Icon({ selectedIcon, color, size }: { selectedIcon: string, color: string, size: string }) {
  const LucideIcon =
    (LucideIcons as unknown as Record<string, React.ElementType>)[
      selectedIcon
    ] || LucideIcons.Sun;
    return <LucideIcon color={color} size={size} />
}
