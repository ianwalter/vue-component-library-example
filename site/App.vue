<template>
  <main class="container">

    <h1 class="my-5">Vue Component Library Example</h1>

    <section class="mb-5">

      <h3 class="mb-4">LoadingButton</h3>

      <LoadingButton>Click Me!</LoadingButton>

    </section>

    <section class="mb-5">

      <h3 class="mb-4">DropPanel</h3>

      <DropPanel class="card">

        <div
          slot="header"
          class="card-header"
        >
          What is Lorem Ipsum?
        </div>

        <div
          slot="panel"
          class="card-body"
        >
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </div>

      </DropPanel>

    </section>

    <section>

      <h3>Tooltip</h3>

      <DropPanel />

    </section>

  </main>
</template>

<script>
  import DropPanel from '../components/DropPanel'
  import LoadingButton from '../components/LoadingButton'

  export default {
    components: { DropPanel, LoadingButton }
  }
</script>
