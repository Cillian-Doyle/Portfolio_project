<script>
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
    

    const navigationItems = [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about' },
        { name: 'My Work', path: '/work' },
        { name: 'Contact Me', path: '/contact' }
    ];

    let isOpen = false;

    function hideMenu() {
        isOpen = false;
    }
</script>


<nav class="nav" aria-label="Main navigation">
    <button
        class="burger"
        on:click={() => (isOpen = !isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="main-menu"
    >
        ☰
    </button>

    <ul id="main-menu" class:open={isOpen}>
        {#each navigationItems as item}
            <li class="nav-item">
                <a 
                    href={resolve(item.path)}
                    class:active={page.url.pathname === resolve(item.path)}
                    on:click={hideMenu}
                >{item.name}</a>
            </li>
        {/each}
    </ul>
</nav>


<style>
    .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: var(--space-lg);
    }

    .nav ul {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-md);
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav a {
        position: relative;
        font-family: var(--font-body);
        font-size: var(--font-lg);
        font-weight: 600;
        color: var(--text-primary);
        padding: var(--space-xs) var(--space-sm);
        text-decoration: none;
    }
    .nav a:hover {
        color: var(--color-tertiary);
    }
    .nav a.active {
        color: var(--color-primary);
        font-style: underline;
    }

    .burger {
        display: none;
        font-size: var(--font-xl);
        background: none;
        border: none;
        color: var(--text-primary);
        padding: var(--space-xs);
        cursor: pointer;
        margin-left: auto;
    }

    @media (max-width: 768px) {
        .nav {
            flex-direction: column;
            align-items: flex-start;
        }

        .nav ul {
            display: none;
            flex-direction: column;
            gap: var(--space-sm);
            margin-top: var(--space-sm);
        }

        .nav ul.open {
            display: flex;
        }

        .burger {
            display: block;
        }

        .nav li,
        .nav a {
            width: 100%;
        }

        .nav-item {
            transform: translateX(20px);
            animation: fadeLeft 0.4s ease forwards;
        }
    }

</style>
