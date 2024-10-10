<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<div class="absolute bottom-4 right-4">
    <button
        on:click
        class="px-4 py-2 h-[56px] flex flex-row gap-2 justify-center items-center rounded-2xl bg-purple-100 text-purple-500"
    >
        <Icon icon="system-uicons:upload-alt" width="24" height="24" />
        <p>Upload</p>
    </button>
</div>
