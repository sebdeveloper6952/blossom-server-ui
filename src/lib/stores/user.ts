import type { NDKUser } from '@nostr-dev-kit/ndk';
import { writable, type Writable } from 'svelte/store';

export const user: Writable<NDKUser | null> = writable(null);
