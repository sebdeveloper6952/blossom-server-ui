<script lang="ts">
    export let expanded = false;
    export let disabled = false;
    export let size = "md";
    export let bgColor = "bg-pink-100";
    export let textColor = "text-pink-500";

    let px = "px-6";
    let py = "py-2";
    let textSize = "";

    if (size === "sm") {
        px = "px-2";
        py = "py-1";
        textSize = "text-sm";
    }

    $: c = `${px} ${py} ${textSize} ${textColor} ${bgColor} flex justify-center items-center rounded font-bold disabled:cursor-not-allowed`;
</script>

<button
    on:click
    {disabled}
    class:w-full={expanded}
    class:w-fit={!expanded}
    class={c}
>
    <slot />
</button>
