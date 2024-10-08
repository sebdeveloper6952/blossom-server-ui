<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Icon from "@iconify/svelte";
    import BaseModal from "$lib/components/modals/BaseModal.svelte";
    import FilledButton from "$lib/components/buttons/FilledButton.svelte";

    export let show = false;

    const dispatch = createEventDispatcher();

    const onClickExtensionMethod = async () => {};
</script>

<BaseModal {show} on:close>
    <div class="w-full flex flex-col justify-center items-center text-gray-50">
        <Icon icon="pixelarticons:lock-open" width="48" height="48" />
        <p class="mt-4 text-2xl font-bold text-gray-50">Login method</p>
    </div>

    <div class="w-full mt-8 flex justify-center gap-2">
        <FilledButton on:click={() => onClickExtensionMethod()}
            >Browser Extension</FilledButton
        >
    </div>
</BaseModal>
