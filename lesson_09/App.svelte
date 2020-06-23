<div class="container">
  <Button on:click={() => clicked++}>
    <Icon class="material-icons">thumb_up</Icon>
    <Label>Click Me!</Label>
  </Button>
  <p class="mdc-typography--body1">
    {#if clicked}
      You've clicked the button {clicked} time{clicked === 1 ? '' : 's'}.
    {:else}
      <span class="grayed">You haven't clicked the button.</span>
    {/if}
  </p>
  <p>{cnt}</p>
  <ChartArea />
  <Modal>
    <DataTable />
  </Modal>
</div>

<script>
  import Button, {Label, Icon} from '@smui/button';
  import DataTable from './components/grid.svelte';
  import ChartArea from './components/chart.svelte';
  import Modal from './components/Modal.svelte';
  import {store} from './storage.js';

  $: cnt = $store.length;
  let clicked = 0;
</script>

<style>
  .grayed {
    opacity: .6;
  }
</style>
