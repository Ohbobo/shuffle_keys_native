import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes avant de considérer les données comme obsolètes
        gcTime: 1000 * 60 * 10, // 10 minutes en cache
        refetchOnWindowFocus: false, // Ne pas refetch automatiquement sur focus
      },
    },
});