import "./bootstrap";

import Alpine from "alpinejs";
import { createApp } from "vue";
import Swal from "sweetalert2";

window.Swal = Swal;

const toastMixin = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
});

window.Toast = toastMixin;

const app = createApp({});
Object.entries(import.meta.glob("./**/*.vue", { eager: true })).forEach(
    ([path, definition]) => {
        app.component(
            path
                .split("/")
                .pop()
                .replace(/\.\w+$/, ""),
            definition.default
        );
    }
);

app.mount("#app");

window.Alpine = Alpine;

Alpine.start();
