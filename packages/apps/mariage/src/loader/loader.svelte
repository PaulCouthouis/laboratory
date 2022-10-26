<script lang='ts'>
  let loaded = false

  const onLoad = () => {
    console.log('fire9000')
    loaded = true
  }
</script>

<link rel="preload" href="/images/cover-horizontal.jpeg" as="image" on:load={onLoad}>

<div>
  {#if loaded}
    <slot />
  {:else}
    Chargement...
  {/if}
</div>