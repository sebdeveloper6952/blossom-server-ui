<script lang="ts">
    import "$lib/assets/css/app.css";
    import Icon from "@iconify/svelte";
    import { init } from "$lib/helpers/ndk";
    import LoginModal from "$lib/components/modals/LoginModal.svelte";
    import TopBar from "$lib/components/TopBar.svelte";

    let showLoginModal = false;
</script>

{#await init()}
    <div
        class="w-full h-full flex flex-col justify-center items-center bg-gray-100 text-black"
    >
        <Icon icon="system-uicons:loader" width="48" height="48" />
        <p>loading</p>
    </div>
{:then}
    <TopBar />
    <div class="min-h-full">
        <div class="py-10">
            <main>
                <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <slot />
                </div>
            </main>
        </div>
    </div>

    <LoginModal
        show={showLoginModal}
        on:close={() => {
            showLoginModal = false;
        }}
    />
{/await}
