<script lang='ts'>
  import type { QuizStore } from "../../store"
  
  import { getContext } from "svelte"

  const {
    actions: { answer },
    state: { choices, title }
  } = getContext<QuizStore>('quizStore')

</script>

<h2 class="card-title">{$title}</h2>
{#if $choices}
  <div class="card-actions justify-end">
    {#each $choices as choice}
      <button class="btn btn-secondary" on:click={() => answer(choice)}>
        {choice}
      </button>
    {/each}
  </div>
{/if}