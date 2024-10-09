import { NDKNip07Signer } from '@nostr-dev-kit/ndk';
import NDKSvelte from '@nostr-dev-kit/ndk-svelte';
import { user } from '$lib/stores/user';

export const ndk = new NDKSvelte({
    explicitRelayUrls: ['ws://localhost:7777', 'wss://purplepag.es'],
    enableOutboxModel: false
});

export const init = async () => {
    await ndk.connect();
    await login();
};

export const login = async () => {
    const signer = new NDKNip07Signer();
    const signerUser = await signer.blockUntilReady();
    signerUser.ndk = ndk;
    await signerUser.fetchProfile();

    ndk.activeUser = signerUser;
    ndk.signer = signer;
    user.set(signerUser);
}

export const logout = () => {
    ndk.signer = undefined;
    ndk.activeUser = undefined;
    user.set(null);
}
