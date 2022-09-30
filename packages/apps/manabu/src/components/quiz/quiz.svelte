<script lang='ts'>
  import { createQuizStore, QuizStore } from "../../features/quiz/adapters/store"
  
  import { setContext } from "svelte"
  import Content from "./content/content.svelte"
  import Portal from "./portal/portal.svelte"

  const store = createQuizStore(new Set([{
    title: 'Title A',
    solution: '1'
  }]))

  setContext<QuizStore>('quizStore', store)
</script>

<aside class="text-center">
  <div class="card w-96 my-10 bg-base-100 shadow-xl">
    <div class="card-body items-center text-center">
      <Portal>
        <Content />
      </Portal>
    </div>
  </div>	
</aside>

