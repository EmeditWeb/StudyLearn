import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { resolveTheme, THEME_STORAGE_KEY } from './theme';
import type { Theme } from './theme';

export function useWorkspaceTheme() {
 const [theme, setTheme] = useState<Theme>(() => {
  let saved: string | null = null;
  try { saved = localStorage.getItem(THEME_STORAGE_KEY); } catch { /* Works for this session without storage. */ }
  return resolveTheme(saved, window.matchMedia('(prefers-color-scheme: dark)').matches);
 });
 useEffect(() => {
  try { localStorage.setItem(THEME_STORAGE_KEY, theme); } catch { /* Keep the selected theme in memory. */ }
 }, [theme]);
 useEffect(() => {
  const sync = (event: StorageEvent) => {
   if (event.key === THEME_STORAGE_KEY) setTheme(resolveTheme(event.newValue, window.matchMedia('(prefers-color-scheme: dark)').matches));
  };
  window.addEventListener('storage', sync);
  return () => window.removeEventListener('storage', sync);
 }, []);
 return { theme, setTheme, toggleTheme: () => setTheme(current => current === 'light' ? 'dark' : 'light') };
}

export function ThemeToggle({ theme, toggle }: { theme: Theme; toggle: () => void }) {
 const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
 return <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
  {theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}
  <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
 </button>;
}
