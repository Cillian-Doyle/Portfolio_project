<script>
    import { base, asset } from '$app/paths';
</script>


<div class="container">
    <h1 class="splash-text">Lets Get To Designing</h1>

    <table class="items">
        <tbody>
            <tr>
                <td>
                    <a href={base + '/about'}>About Me</a>
                    <div class="card-content">
                        <img class="profile" src={asset('/Photo-of-me.jpg')} alt="Portrait of author">
                        <p>Learn about me, how i think <br>and my experiences</p>
                    </div>
                </td>
                <td><a href={base + '/work'}>My Work</a>
                <div class="card-content">
                    <img class="profile" src={asset('/work-image.png')} alt="an example of my work">
                    <p> See my work, my process<br>and how i design things.<br>Get a view into me as a creative<br>and see what type of work i can provide</p>
                </div>
                </td>
                <td><a href={base + '/contact'}>Contact Me</a>
                <div class="card-content">
                    <img class="profile" src={asset('/contact-icon.png')} alt="contact-icon">
                    <p>Get in touch with me<br>to discuss potential projects<br>or ask further about my work</p>
                </div>
                </td>
            </tr>
        </tbody>
    </table>

</div>

<style>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.splash-text {
    font-family: var(--font-body);
    font-size: var(--font-xxxl);
    padding: var(--space-xl);
    background-color: var(--color-surface);
    border: 50px solid var(--color-border);
    border-radius: var(--radius-sm);
}
.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    margin-top: var(--space-md);
}

.profile {
    width: 200px;
    height: auto;
    margin: 0;
}
.items{
    margin-top: var(--space-lg);
    font-family: var(--font-body);
    font-size: var(--font-lg);
    padding: 20px 40px;
    text-align: center;
    
}
.items td {
    padding: 0 40px;
    background-color: var(--color-surface);
    border: 25px solid var(--color-border);
    border-radius: var(--radius-sm);
}
.items td a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 750;
    font-size: larger;
}
.items td:hover,
.items td:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 28px 50px rgba(0, 0, 0, 0.2);
    background-color: var(--color-surface);
}

@media (max-width: 768px) {
    .container {
        padding: var(--space-md);
    }

    .splash-text {
        font-size: calc(var(--font-xxxl) * 0.9);
        padding: var(--space-lg);
        border-width: 30px;
    }

    .items {
        margin-top: var(--space-lg);
        width: 100%;
        max-width: 720px;
        padding: 0;
    }

    .items,
    .items tbody,
    .items tr {
        display: block;
        width: 100%;
    }

    .items td {
        display: block;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: var(--space-lg);
        padding: var(--space-md);
        border-width: 20px;
    }

    .items td:last-child {
        margin-bottom: 0;
    }

    .card-content {
        width: 100%;
    }

    .profile {
        width: 100%;
        max-width: 260px;
    }
}
</style>