document.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector("#site-search");
    const clear = document.querySelector("#clear-search");
    const status = document.querySelector("#search-status");
    const items = [...document.querySelectorAll("[data-search-item]")];
    const filter = () => {
        const query = (search?.value || "").trim().toLowerCase();
        let visible = 0;
        items.forEach((item) => {
            const match = !query || (item.dataset.searchText || "").toLowerCase().includes(query);
            item.classList.toggle("is-filtered", !match);
            if (match) visible += 1;
        });
        if (status) status.textContent = query ? `找到 ${visible} 项` : "全部内容";
        if (clear) clear.hidden = !query;
    };
    search?.addEventListener("input", filter);
    clear?.addEventListener("click", () => { search.value = ""; filter(); search.focus(); });
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
