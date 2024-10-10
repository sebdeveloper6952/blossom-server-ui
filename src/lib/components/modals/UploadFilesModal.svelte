<script lang="ts">
    import BaseModal from "$lib/components/modals/BaseModal.svelte";
    import FileInput from "$lib/components/FileInput.svelte";
    import FilledButton from "$lib/components/buttons/FilledButton.svelte";
    import Icon from "@iconify/svelte";
    import { BlossomClient } from "blossom-client-sdk";
    import { blossomClientSignEvent } from "$lib/helpers/blossom/signEvent";
    import { createEventDispatcher } from "svelte";
    import { PUBLIC_CDN_URL } from "$env/static/public";

    export let show = false;

    class upload {
        name: string;
        size: number;
        status: string;

        constructor(name: string, size: number, status: string) {
            this.name = name;
            this.size = size;
            this.status = status;
        }
    }

    let files: FileList | null;
    $: uploads =
        files == null
            ? null
            : Array.from(files).map((file: File) => {
                  return new upload(file.name, file.size, "IDLE");
              });
    $: success =
        uploads == null
            ? false
            : uploads.reduce(
                  (acc, upload) => acc && upload.status === "SUCCESS",
                  true,
              );

    let loading = false;
    const blossomClient = new BlossomClient(
        PUBLIC_CDN_URL,
        blossomClientSignEvent,
    );
    const dispatch = createEventDispatcher();

    const onClickCancel = () => {
        dispatch("close");
    };

    const onClickUpload = async () => {
        if (success) {
            files = null;
            dispatch("close");
            return;
        }

        if (files !== null && uploads != null) {
            const promises = [];
            for (let i = 0; i < files.length; i++) {
                const uploadPromise = blossomClient.uploadBlob(files[i], true);
                uploads[i].status = "UPLOADING";
                uploadPromise
                    .then((blob) => {
                        uploads[i].status = "SUCCESS";
                    })
                    .catch((err) => {
                        uploads[i].status = "ERROR";
                    });
                promises.push(uploadPromise);
            }

            await Promise.all(promises);
        }
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return "0 Bytes";

        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));

        const formattedSize = parseFloat(
            (bytes / Math.pow(1024, i)).toFixed(2),
        );

        return `${formattedSize} ${sizes[i]}`;
    };
</script>

<BaseModal {show}>
    <div class="w-full md:w-96">
        <h3 class="text-lg font-bold">Upload Files</h3>
        <div class="px-4 py-2 flex flex-row gap-2 rounded-2xl bg-gray-200">
            <Icon
                icon="system-uicons:check-circle"
                width="24"
                height="24"
                class="text-green-500"
            />
            <p>You can upload files to this CDN.</p>
        </div>
        <div class="mt-4">
            <FileInput bind:files multiple />
            {#if uploads}
                <div class="max-h-32 mt-2 flex flex-col gap-1 overflow-auto">
                    {#each uploads as file}
                        <div
                            class="w-fit p-1 flex flex-row gap-1 text-sm bg-gray-300 rounded"
                        >
                            <p>
                                {file.name} - {formatFileSize(file.size)}
                            </p>
                            {#if file.status === "UPLOADING"}
                                <Icon
                                    icon="system-uicons:clock"
                                    width="20"
                                    height="20"
                                />
                            {:else if file.status === "SUCCESS"}
                                <Icon
                                    icon="system-uicons:check-circle"
                                    width="20"
                                    height="20"
                                    class="text-green-500"
                                />
                            {:else if file.status === "ERROR"}
                                <Icon
                                    icon="system-uicons:cross-circle"
                                    width="20"
                                    height="20"
                                    class="text-red-500"
                                />
                            {/if}
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
        <!-- footer -->
        <div class="mt-4 flex flex-row gap-2 justify-end">
            <FilledButton
                on:click={() => onClickCancel()}
                disabled={loading}
                bgColor="bg-red-100"
                textColor="text-red-500">Cancel</FilledButton
            >
            <FilledButton
                on:click={() => onClickUpload()}
                disabled={loading}
                bgColor="bg-purple-200"
                textColor="text-purple-500"
            >
                {#if success}
                    Done
                {:else}
                    Upload
                {/if}
            </FilledButton>
        </div>
    </div>
</BaseModal>
