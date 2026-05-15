<script>
    import { asset } from '$app/paths';

</script>

<div class="container">
    <h2 class="page-title"> Who am I?</h2>
    <img class="profile" src={asset('/Photo-of-me.jpg')} alt="Portrait of Cillian Doyle">
    <p class="first-part"> You're probably thinking "God why is such a talented, intellectual, god like person who is definetly the greatest at 
        spelling makings a portfolio".... no? just me? <br><br>Jokes aside my name is Cillian Doyle, i am currently 20 years old and my dream is a simple one,
    to make people smile, think and grow with the art and stories i create. i hope to become a 2d and 3d artist, primarily as an animator.
<br><br>I have grown up in wexford, in ireland and now currently live in carlow... in ireland... moved very far i know some people do call me quite adventurous. 
i hope to move out of here though and start working remotely or in different companies to build my relative experience within the industry.
<br><br>I work primarily n 2D Art and animation with a mix between digital and traditional media. i am currently working on developing my skills in 
3D art further to use the creations in backgrounds to make my 2D works and animations more dynamic</p>
<h2 class="tech-title">The technologies im versed in</h2>
<table>
    <tbody>
        <tr>
            <td class="table">
                <img class="icons" src={asset('/icons/photoshop-icon.png')} alt="Photoshop icon">
                <img class="icons" src={asset('/icons/animate-icon.png')} alt="After Effects icon">
                <img class="icons" src={asset('/icons/aseprite-icon.png')} alt="Aseprite icon">
                <img class="icons" src={asset('/icons/clip-studio-icon.png')} alt="Clip Studio icon">
                <img class="icons" src={asset('/icons/maya-icon.png')} alt="Maya icon">
                <img class="icons" src={asset('/icons/premier-pro-icon.png')} alt="premier icon">
                <img class="icons" src={asset('/icons/html-icon.png')} alt="html icon">
                <img class="icons" src={asset('/icons/css-icon.png')} alt="css icon">
            </td>
            <td class="table">
                <img class="icons" src={asset('/icons/javascript-icon.png')} alt="javascript icon">
                <img class="icons" src={asset('/icons/cpp-icon.png')} alt="cpp icon">
            </td>
        </tr>
    </tbody>
</table>
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
    font-family: var(--font-body);
    font-size: var(--font-xxl);
    padding: var(--space-md);
    background-color: var(--color-surface);
    border: 10px solid var(--color-border);
    border-radius: var(--radius-sm);
    margin-top: 0;
}
.tech-title {
    grid-column: 1 / -1;
    font-family: var(--font-body);
    font-size: var(--font-xxl);
    padding: var(--space-md);
    background-color: var(--color-surface);
    border: 10px solid var(--color-border);
    border-radius: var(--radius-sm);
    margin-top: var(--space-lg);
}

.first-part {
    grid-area: text;
    font-family: var(--font-body);
    font-size: var(--font-lg);
    line-height: 1.8;
    padding: var(--space-md);
    background-color: var(--color-surface);
    border: 10px solid var(--color-border);
    border-radius: var(--radius-sm);
    margin-bottom: 0;
}
.table{
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: var(--space-md);
    justify-items: center;
    align-items: center;
    background-color: var(--color-surface);
    border: 10px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: var(--space-md);
}

.icons {
    width: 140px;
    height: auto;
    padding: var(--space-sm);
}

.profile {
    grid-area: image;
    width: 400px;
    height: auto;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-sm);
}

@media (max-width: 768px) {
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: var(--space-md);
        padding-right: var(--space-md);
    }

    .page-title,
    .first-part,
    .profile {
        width: 100%;
        max-width: 720px;
    }

    .page-title {
        font-size: calc(var(--font-xxl) * 0.95);
    }

    .profile {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }
    .table {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 480px) {
    .table {
        grid-template-columns: 1fr;
    }

    .icons {
        width: 100%;
        max-width: 260px;
    }
}
</style>