<script lang="ts">
    import Icon from "@iconify/svelte";

    export let files: FileList;
    export let multiple: boolean = false;
    export let disabled = false;
</script>

<div
    class="w-full h-32 flex justify-center items-center gap-1 rounded-lg border border-gray-300"
>
    <label
        for="fileInput"
        class="px-2 py-1 w-full h-full flex justify-center items-center rounded text-black hover:cursor-pointer"
    >
        <p>Add File(s)</p>
        <Icon icon="system-uicons:file-upload" width="24" height="24" />
    </label>
    <input
        bind:files
        {multiple}
        on:change
        {disabled}
        id="fileInput"
        type="file"
        class="hidden"
    />
</div>
