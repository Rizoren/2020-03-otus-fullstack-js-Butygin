<div class="data-table">
    <DataTable table$aria-label="Money">
        <Head>
            <Row>
                <Cell><Button type="button" on:click={() => showDialog(0)}><Icon class="material-icons">add</Icon></Button></Cell>
                <Cell>Name</Cell>
                <Cell>Type</Cell>
                <Cell>Value</Cell>
                <Cell>Date</Cell>
                <Cell>-</Cell>
            </Row>
        </Head>
        <Body>
        {#each $store as item}
            <Row>
                <Cell><Button on:click={() => showDialog(item.id)}><Icon class="material-icons">edit</Icon></Button></Cell>
                <Cell>{item.name}</Cell>
                <Cell>{item.typeValue > 0 ? 'Income' : 'Expense'}</Cell>
                <Cell numeric>{item.value}</Cell>
                <Cell date>{item.date}</Cell>
                <Cell><Button on:click={() => delRec(item.id)}><Icon class="material-icons">delete</Icon></Button></Cell>
            </Row>
        {/each}
        </Body>
    </DataTable>
</div>

<script>
    import { getContext } from 'svelte';
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    import Button, {Label, Icon} from '@smui/button';
    import { fly } from 'svelte/transition';

    import { store, recById } from '../storage.js';
    import Dialog from './Dialog.svelte';

    const { open } = getContext('simple-modal');

    let opening = false;
    let opened = false;
    let closing = false;
    let closed = false;

    let name;
    let status = 0;

    const onCancel = (text) => {
        name = '';
        status = -1;
    }

    const onOkay = (text) => {
        name = text;
        status = 1;
    }

    const showDialog = (id) => {
        open(
                Dialog,
                {
                    id: id,
                    message: id,
                    hasForm: true,
                    onCancel,
                    onOkay,
                    rec: recById(id)
                },
                {
                    closeButton: false,
                    closeOnEsc: false,
                    closeOnOuterClick: false,
                }
        );
    };

    const delRec = (id) => {
        store.update(n => {
            return n.filter(i => i.id !== id);
        })
    };

</script>

<style>
    .data-table {
        width: 100%;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
