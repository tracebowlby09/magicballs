import { Storage } from './storage.js';

export const CONFIG = {
  KEYS: {
    SETTINGS: 'm8b_settings',
    STATS: 'm8b_stats',
    HISTORY: 'm8b_history'
  },
  RARITIES: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic']
};

export let state = {
  isAnimating: false,
  settings: Storage.get(CONFIG.KEYS.SETTINGS, {
    soundEnabled: true,
    animationsEnabled: true,
    theme: 'dark',
    autoClearInput: true
  }),
  stats: Storage.get(CONFIG.KEYS.STATS, {
    totalAsked: 0,
    Common: 0, Uncommon: 0, Rare: 0, Epic: 0, Legendary: 0, Mythic: 0,
    rarestReceived: 'None',
    mostCommonReceived: 'None',
    longestStreakWithoutRare: 0,
    currentStreakWithoutRare: 0
  })
};

export function updateSettings(newSettings) {
  state.settings = { ...state.settings, ...newSettings };
  Storage.set(CONFIG.KEYS.SETTINGS, state.settings);
}

export function updateStats(newStats) {
  state.stats = { ...state.stats, ...newStats };
  Storage.set(CONFIG.KEYS.STATS, state.stats);
}
