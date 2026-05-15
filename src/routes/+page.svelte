<script>
    import { base } from '$app/paths';
</script>


<div class="container">
    <h1 class="splash-text">Lets Get To Designing</h1>

    <table class="items">
        <tbody>
            <tr>
                <td><a href={base + '/about'}>About Me</a>
                <p>Learn about me, how i think <br>and my experiences</p></td>
                <td><a href={base + '/work'}>My Work</a>
                <p> See my work, my process<br>and how i design things.<br>Get a view into me as a creative<br>and see what type of work i can provide</p></td>
                <td><a href={base + '/contact'}>Contact Me</a>
                <p>Get in touch with me<br>to discuss potential projects<br>or ask further about my work</p></td>
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
    font-family: var(--font-heading);
    font-size: var(--font-xxxl);
    padding: var(--space-xl);
    background-color: var(--color-surface);
    border: 50px solid var(--color-border);
    border-radius: var(--radius-sm);
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
.items td a:hover {
    color: var(--color-tertiary);
}
</style>