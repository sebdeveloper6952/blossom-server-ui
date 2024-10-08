<script lang="ts">
    import type { NDKUser } from "@nostr-dev-kit/ndk";

    export let user: NDKUser;
</script>

<div>
    {#if user.profile?.image}
        <img
            src={user?.profile.image}
            alt="profile"
            class="w-10 h-10 p-px ring ring-gray-300 rounded-full"
        />
    {:else}
        <img
            src={`https://robohash.org/${user.pubkey}`}
            alt="profile"
            class="w-10 h-10 p-px ring ring-gray-300 rounded-full"
        />
    {/if}
</div>
