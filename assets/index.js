function createModal(options) {
    const modal = document.createElement("div")
    modal.classList.add("vmodal")
    modal.insertAdjacentHTML("afterbegin", `

        <div class="modal-overlay">
            <div class="modal_window">
                <span class="modal-close">&times;</span>
            </div>
        </div>

    `)
    document.body.appendChild(modal)
    return modal
}

modalActions = function (options) {
    const modal = createModal(options)
    return {
        open() {
            modal.classList.add("open")
        },
        close () {
            modal.classList.remove("open")
        }
    }
}

const myModal = modalActions()