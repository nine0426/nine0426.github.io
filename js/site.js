document.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) window.lucide.createIcons();
    document.querySelectorAll(".copy-qq").forEach((button) => {
        button.addEventListener("click", async () => {
            const original = button.innerHTML;
            try {
                await navigator.clipboard.writeText(button.dataset.qq);
                button.innerHTML = '<i data-lucide="check"></i><span>已复制 QQ</span><b>OK</b>';
                if (window.lucide) window.lucide.createIcons({ nodes: [button] });
            } catch { window.prompt("复制 QQ 号码：", button.dataset.qq); }
            window.setTimeout(() => { button.innerHTML = original; if (window.lucide) window.lucide.createIcons({ nodes: [button] }); }, 1800);
        });
    });
});
