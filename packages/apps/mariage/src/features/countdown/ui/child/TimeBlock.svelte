<script lang="ts">
  export let labelTime: number
  export let description: string
</script>

<span class="min-w-[35%] sm:min-w-0 my-4 flex flex-col mx-3 items-center">
  <span class="flex flex-wrap justify-center items-center  text-white text-2xl font-bold">{labelTime}</span> 
  <span class="my-2 uppercase font-bold">{description}</span>
</span>
