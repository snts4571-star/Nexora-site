// =========================
// NEXORA — SCRIPT.JS
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // MENU
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");

    if (menuButton && mobileMenu && closeMenu && overlay) {

        menuButton.addEventListener("click", () => {
            mobileMenu.classList.add("active");
            overlay.classList.add("active");
        });

        closeMenu.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");
        });

        overlay.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");
        });

    }


    // TEMA ESCURO / CLARO

    const themeButton = document.getElementById("themeButton");

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("light");

            if (document.body.classList.contains("light")) {

                themeButton.textContent = "☾";

                localStorage.setItem(
                    "nexora-theme",
                    "light"
                );

            } else {

                themeButton.textContent = "☼";

                localStorage.setItem(
                    "nexora-theme",
                    "dark"
                );

            }

        });

        // Recuperar tema salvo

        const savedTheme =
            localStorage.getItem("nexora-theme");

        if (savedTheme === "light") {

            document.body.classList.add("light");

            themeButton.textContent = "☾";

        }

    }


    // MODAL

    const modal =
        document.getElementById("modal");

    const modalClose =
        document.getElementById("modalClose");

    const modalTitle =
        document.getElementById("modalTitle");

    const productButtons =
        document.querySelectorAll(".product-button");


    productButtons.forEach(button => {

        button.addEventListener("click", () => {

            const siteName =
                button.getAttribute("data-site");

            if (modalTitle) {
                modalTitle.textContent = siteName;
            }

            if (modal) {
                modal.classList.add("active");
            }

            document.body.style.overflow = "hidden";

        });

    });


    // FECHAR MODAL

    if (modalClose && modal) {

        modalClose.addEventListener("click", () => {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        });

    }


    if (modal) {

        modal.addEventListener("click", (event) => {

            if (event.target === modal) {

                modal.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

    }


    // WHATSAPP

    const sendRequest =
        document.getElementById("sendRequest");


    if (sendRequest) {

        sendRequest.addEventListener("click", () => {

            const name =
                document.getElementById("clientName")?.value.trim();

            const company =
                document.getElementById("companyName")?.value.trim();

            const site =
                modalTitle?.textContent || "Site";


            if (!name || !company) {

                alert(
                    "Preencha seu nome e o nome da empresa."
                );

                return;

            }


            // COLOQUE SEU NÚMERO AQUI
            const phone = "5571999999999";


            const message =
                `Olá, Nexora!%0A%0A` +
                `Gostaria de solicitar um site.%0A%0A` +
                `Modelo: ${site}%0A` +
                `Nome: ${name}%0A` +
                `Empresa: ${company}`;


            window.open(
                `https://wa.me/${phone}?text=${message}`,
                "_blank"
            );

        });

    }


    // ANIMAÇÃO DOS CARDS

    const cards =
        document.querySelectorAll(".product-card");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateY(0)";

                        }

                    });

                },
                {
                    threshold: 0.1
                }
            );


        cards.forEach(card => {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(25px)";

            card.style.transition =
                "opacity .6s ease, transform .6s ease";

            observer.observe(card);

        });

    }

});
