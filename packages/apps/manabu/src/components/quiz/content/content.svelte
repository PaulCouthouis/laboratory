<script lang='ts'>
  import type { QuizStore } from "../../../features/quiz/adapters/store"
  
  import { getContext } from "svelte"

  const {
    state: { title }
  } = getContext<QuizStore>('quizStore')

</script>

<h2 class="card-title">{$title}</h2>