<script lang="ts">
    export let expanded = false;
    export let disabled = false;
    export let size = "md";

    let px = "px-6";
    let py = "py-2";
    let textSize = "";

    if (size === "sm") {
        px = "px-2";
        py = "py-1";
        textSize = "text-sm";
    }
</script>

<button
    on:click
    {disabled}
    class:w-full={expanded}
    class:w-fit={!expanded}
    class={`${px} ${py} ${textSize} rounded text-gray-800 font-bold bg-gray-300 hover:bg-gray-400/50 active:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-300`}
>
    <slot />
</button>
