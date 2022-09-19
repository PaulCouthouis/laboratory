<script lang='ts'>
  export let loading: boolean
  export let disabled: boolean
</script>

<div class="form-control mt-6">
  <button 
    class:loading
    class="btn btn-primary" 
    type="submit" 
    {disabled}
  >
    <slot />
  </button>
</div>