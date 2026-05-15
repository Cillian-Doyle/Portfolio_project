<script>
    import { base } from '$app/paths';
</script>

<div class="container">
    <div class="grid">
        <a class="card" href={base + '/coding'}>CODING</a>
        <a class="card" href={base + '/art'}>ART</a>
        <a class="card" href={base + '/3d-art'}>3D ART</a>
        <a class="card" href={base + '/animation'}>ANIMATION</a>
        <a class="card" href={base + '/webdev'}>WEBDEV</a>
        <a class="card" href={base + '/acting'}>ACTING</a>
    </div>
</div>

<style>
.container {
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(180px, 320px));
    gap: 5rem;
    width: 100%;
    justify-content: center;
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1.5rem;
    background-color: var(--color-surface);
    color: var(--text-primary);
    font-family: var(--font-body, system-ui, sans-serif);
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.08em;
    border: 10px solid var(--color-border);
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-sm);
    text-align: center;
}

.card:hover,
.card:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 28px 50px rgba(0, 0, 0, 0.2);
    background-color: var(--color-surface);
}

@media (max-width: 720px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>