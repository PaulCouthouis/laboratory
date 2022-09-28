<script lang='ts'>
  import { createQuizStore } from "../../../features/quiz/adapters/store"

  const { state, actions } = createQuizStore(new Set([{
    title: 'Title A',
    solution: '1'
  }]))

  const { title } = state
  const { moveOnNextQuestion } = actions

  moveOnNextQuestion()

</script>

<h2 class="card-title">{$title}</h2>