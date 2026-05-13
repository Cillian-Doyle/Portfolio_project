<script>
    // No script needed for this page
</script>


<div class="container">
    <h1 class="splash-text">Contact Me!</h1>

    <table class="items">
        <tbody>
            <tr>
                <td><h3> c00311110@setu.ie </h3>
                <p>Email me to get in contact!</p></td>
                <td><h3> LinkedIn </h3>
                <p>Find me on LinkedIn to see my work experience<br> and connect with me professionally</p></td>
                <td><h3> 083 xxx xxxx </h3>
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
.items td h3 {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 750;
    font-size: larger;
}
.items td h3:hover {
    color: var(--color-tertiary);
}
</style>