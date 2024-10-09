<script lang="ts">
    import Icon from "@iconify/svelte";

    export let icon = "";
    export let size = "24";
</script>

<button on:click>
    <Icon {icon} width={size} height={size} />
</button>
