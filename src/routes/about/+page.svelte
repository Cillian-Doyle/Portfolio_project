<script>
    import { asset } from '$app/paths';

</script>

<div class="container">
    <h2 class="page-title"> Who am I?</h2>
    <img class="profile" src="{asset("/Photo-of-me.jpg")}">
    <p class="first-part"> You're probably thinking "God why is such a talented, intellectual, god like person who is definetly the greatest at 
        spelling makings a portfolio".... no? just me? <br><br>Jokes aside my name is Cillian Doyle, i am currently 20 years old and my dream is a simple one,
    to make people smile, think and grow with the art and stories i create. i hope to become a 2d and 3d artist, primarily as an animator.
<br><br>I have grown up in wexford, in ireland and now currently live in carlow... in ireland... moved very far i know some people do call me quite adventurous. 
i hope to move out of here though and start working remotely or in different companies to build my relative experience within the industry.
<br><br>I work primarily n 2D Art and animation with a mix between digital and traditional media. i am currently working on developing my skills in 
3D art further to use the creations in backgrounds to make my 2D works and animations more dynamic</p>
</div>

<style>
.container {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-areas:
        "title image"
        "text image";
    gap: var(--space-md);
    align-items: start;
    justify-content: start;
    padding: var(--space-lg);
    padding-right: 150px;
    grid-template-rows: auto auto;
}

.page-title {
    grid-area: title;
    font-family: var(--font-heading);
    font-size: var(--font-xxl);
    padding: var(--space-md);
    background-color: var(--color-surface);
    border: 10px solid var(--color-border);
    border-radius: var(--radius-sm);
    margin-top: 0;
}

.first-part {
    grid-area: text;
    font-family: var(--font-body);
    font-size: var(--font-lg);
    padding: var(--space-md);
    background-color: var(--color-surface);
    border: 10px solid var(--color-border);
    border-radius: var(--radius-sm);
    margin-bottom: 100%;
}

/* right column */
.profile {
    grid-area: image;
    width: 400px;
    height: auto;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-sm);
}
</style>