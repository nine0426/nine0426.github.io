const memberStyle = document.createElement("style");
memberStyle.textContent = ".member-actions{display:flex;gap:12px;flex-wrap:wrap}.member-link,.member-actions button{min-height:48px;padding:0 18px;display:inline-flex;align-items:center;border:1px solid #10201e;background:#10201e;color:#f0eee7;cursor:pointer;font:500 13px 'DM Mono',monospace}.member-actions button{background:transparent;color:#10201e}.member-actions button:hover,.member-link:hover{background:#f46f54;border-color:#f46f54;color:#f0eee7}";
document.head.appendChild(memberStyle);

if (sessionStorage.getItem("nine0426_member") !== "true") {
    window.location.replace("./staticlogin.html");
}
document.querySelector("#logout").addEventListener("click", () => {
    sessionStorage.removeItem("nine0426_member");
    window.location.replace("../index.html");
});
