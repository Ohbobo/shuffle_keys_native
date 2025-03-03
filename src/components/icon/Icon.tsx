import { icons } from "lucide-react-native";

export default function Icon({ name, color, size }: { name: keyof typeof icons, color: string, size: string }) {
    const LucideIcon = icons[name];
    if (!LucideIcon) {
        return null;
    } 
    return <LucideIcon color={color} size={size} />
}
