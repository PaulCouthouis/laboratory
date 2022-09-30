<script lang='ts'>
  import { setContext } from "svelte"
  import { createQuizStore, QuizStore } from "../store"
  
  import Content from "./content/content.svelte"
  import Portal from "./portal/portal.svelte"

  const store = createQuizStore(new Set([
    {
      choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      title: 'Title A',
      solution: 'Choice 1'
    }, {
      choices: ['Choice 9', 'Choice 8', 'Choice 7'],
      title: 'Title B',
      solution: 'Choice 7'
    },
  ]))

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

