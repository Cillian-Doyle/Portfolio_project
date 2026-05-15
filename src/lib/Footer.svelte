<footer class="footer">
    <p>Email: example@example.com</p>
    <p>Phone: 123-456-7890</p>
    <p>LinkedIn: </p>
    <p>© 2026 Cillian Doyle. All rights reserved.</p>   
</footer>


<style>
    .footer {
        width: 100%;
        padding: var(--space-sm);
        text-align: left;
        font-family: var(--font-body);
        font-size: var(--font-sm);
        color: var(--text-tertiary);
        background-color: var(--color-surface);
        border-top: var(--border-default);
        box-shadow: var(--shadow-sm);
        position: relative;
        z-index: 10;
    }

    .footer p {
        margin: 0.25rem 0;
    }

    .footer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        width: 100%;
    }

    @keyframes fadeInFooter {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gradientScroll {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }

    @media (max-width: 768px) {
        .footer {
            padding: var(--space-xs);
            font-size: var(--font-xs);
        }
    }
</style>
