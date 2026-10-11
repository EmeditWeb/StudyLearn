export type Theme = 'light' | 'dark';
export const THEME_STORAGE_KEY = 'studylearn-workspace-theme';
export function resolveTheme(saved: string | null, systemDark: boolean): Theme {
 return saved === 'light' || saved === 'dark' ? saved : systemDark ? 'dark' : 'light';
}
