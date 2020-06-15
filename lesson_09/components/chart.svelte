<script>
    import { scaleLinear } from 'd3-scale';
    import { store } from '../storage';

    const yTicks = [0, 2, 4, 6, 8];
    const xTicks = $store.length ? $store.map(i => i.date).sort() : [];

    const padding = { top: 20, right: 15, bottom: 20, left: 25 };

    let width = 500;
    let height = 200;

    $: minX = $store.length ? $store.reduce((a,b)=>a.date<b.date?a:b).date : null;
    $: maxX = $store.length ? $store.reduce((a,b)=>a.date>b.date?a:b).date : null;

    $: xScale = scaleLinear()
            .domain([minX, maxX])
            .range([padding.left, width - padding.right]);

    $: yScale = scaleLinear()
            .domain([Math.min.apply(null, yTicks), Math.max.apply(null, yTicks)])
            .range([height - padding.bottom, padding.top]);

    $: pathA = `M${$store.filter(a => a.typeValue === 1).sort((a,b) => {return a.date-b.date}).map(p => `${xScale(p.date)},${yScale(p.value/1000)}`).join('L')}`;
    $: pathS = `M${$store.filter(a => a.typeValue === -1).sort((a,b) => {return a.date-b.date}).map(p => `${xScale(p.date)},${yScale(p.value/1000)}`).join('L')}`;
    $: areaA = `${pathA}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(0)}Z`;
    $: areaS = `${pathS}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(0)}Z`;

    function formatMobile (tick) {
        return "'" + tick % 100;
    }
</script>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
    <svg>
        <!-- y axis -->
        <g class="axis y-axis" transform="translate(0, {padding.top})">
            {#each yTicks as tick}
                <g class="tick tick-{tick}" transform="translate(0, {yScale(tick) - padding.bottom})">
                    <line x2="100%"></line>
                    <text y="-4">{tick} {tick === 8 ? ' thou. USD' : ''}</text>
                </g>
            {/each}
        </g>

        <!-- x axis -->
        <g class="axis x-axis">
            {#each xTicks as tick}
                <g class="tick tick-{ tick }" transform="translate({xScale(tick)},{height})">
                    <line y1="-{height}" y2="-{padding.bottom}" x1="0" x2="0"></line>
                    <text y="-2">{width > 380 ? tick.toLocaleDateString('ru-RU') : formatMobile(tick)}</text>
                </g>
            {/each}
        </g>

        <!-- data -->
        <path class="path-area" d={areaA}></path>
        <path class="path-line green" d={pathA}></path>
        <path class="path-area" d={areaS}></path>
        <path class="path-line red" d={pathS}></path>
    </svg>
</div>

<style>
    .chart, h2, p {
        width: 100%;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    .chart {
        margin-bottom: 75px;
    }

    svg {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: visible;
    }

    .tick {
        font-size: .725em;
        font-weight: 200;
    }

    .tick line {
        stroke: #aaa;
        stroke-dasharray: 2;
    }

    .tick text {
        fill: #666;
        text-anchor: start;
    }

    .tick.tick-0 line {
        stroke-dasharray: 0;
    }

    .x-axis .tick text {
        text-anchor: end;
        transform: rotate(-70deg);
    }

    .path-line {
        fill: none;
        stroke: rgb(0,100,100);
        stroke-linejoin: round;
        stroke-linecap: round;
        stroke-width: 2;
    }

    .red {
        stroke: rgb(255,0,0);
    }

    .green {
        stroke: rgb(0, 255, 0);
    }

    .path-area {
        fill: rgba(0,100,100,0.2);
    }
</style>
