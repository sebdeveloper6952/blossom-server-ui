<script lang="ts">
    import FloatingActionButton from "$lib/components/buttons/FloatingActionButton.svelte";
    import UploadFilesModal from "$lib/components/modals/UploadFilesModal.svelte";

    let showUploadModal = false;
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

<FloatingActionButton on:click={() => (showUploadModal = true)} />
