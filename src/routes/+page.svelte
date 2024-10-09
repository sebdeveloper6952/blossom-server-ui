<script lang="ts">
    import UploadFilesModal from "$lib/components/modals/UploadFilesModal.svelte";
    import Icon from "@iconify/svelte";

    let showUploadModal = true;

    const onClickUpload = () => (showUploadModal = true);
</script>

<div>
    <dl class="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="overflow-hidden rounded-lg bg-white py-5 shadow sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">
                Total Files
            </dt>
            <dd
                class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
                71,897
            </dd>
        </div>
        <div
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
        >
            <dt class="truncate text-sm font-medium text-gray-500">
                Unique Pubkeys
            </dt>
            <dd
                class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
                58
            </dd>
        </div>
        <div
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
        >
            <dt class="truncate text-sm font-medium text-gray-500">
                Data Transferred (GiB)
            </dt>
            <dd
                class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
                <p>24</p>
            </dd>
        </div>
    </dl>
</div>

<UploadFilesModal
    show={showUploadModal}
    on:close={() => (showUploadModal = false)}
/>

<div class="absolute bottom-4 right-4">
    <button
        on:click={() => onClickUpload()}
        class="px-4 py-2 h-[56px] flex flex-row gap-2 justify-center items-center rounded-2xl bg-purple-100 text-purple-500"
    >
        <Icon icon="system-uicons:upload-alt" width="24" height="24" />
        <p>Upload</p>
    </button>
</div>
