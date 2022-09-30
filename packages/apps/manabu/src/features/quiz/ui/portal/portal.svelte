<script lang="ts">
  import type { QuizStore } from '../../store'
  
  import { getContext } from 'svelte'

  const { 
    actions: { start, stop },
    state: {isStarted}, 
  } = getContext<QuizStore>('quizStore')
</script>

{#if !$isStarted}
  <p>
    Avez-vous bien retenu la leçon ? <br />
    <b>Vérifions ça !</b>
  </p>
  <div class="card-actions">
    <button class="btn btn-primary" on:click={start}>Commencer le questionnaire</button>
  </div>
{:else}
  <slot />
  <button class="btn btn-ghost" on:click={stop}>
    <i class="fa-solid fa-circle-arrow-left mr-2" />
    Revenir à la leçon
  </button>
{/if}