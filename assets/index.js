function createModal() {
    const modal = document.createElement("div")
    modal.classList.add("vmodal")
    const arrayOfImgSrc = []
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto1.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto2.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto3.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto4.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto5.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto6.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto7.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto8.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto9.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto10.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto11.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto12.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto13.jpg")
    arrayOfImgSrc.push("assets/foto/SliderFotos/foto14.jpg")
    console.log(arrayOfImgSrc)
    modal.insertAdjacentHTML("afterbegin", `
 <div class="modal-overlay" data-close="true">
  <div class="modal_window" data-close="true">
    <div class="left-btn-wrapper">
        <button id="prev-img"> < </button>
    </div>
    <div class="img-wrapper">
  <img src="" alt="Ryu" id="slider-img">
  </div>
    <div class="right-btn-wrapper">
        <button id="next-img"> > </button>
    </div> 
  </div>
  </div>
   `)
    document.body.appendChild(modal)
    const img = document.getElementById("slider-img")
    const leftButton = document.getElementById("prev-img")
    const rightButton = document.getElementById("next-img")
    let currentPage = 0
    img.src = arrayOfImgSrc[currentPage]
    leftButton.disabled = true
    const showPrevImg = () => {
        currentPage--
        if (currentPage === 0) {
            leftButton.disabled = true
        }
        img.src = arrayOfImgSrc[currentPage]
        rightButton.disabled = false
    }

    const showNextImg = () => {
        currentPage++
        if (currentPage === arrayOfImgSrc.length - 1) {
            rightButton.disabled = true
        }
        img.src = arrayOfImgSrc[currentPage]
        leftButton.disabled = false
    }

    leftButton.addEventListener("click", showPrevImg)
    rightButton.addEventListener("click", showNextImg)
    return modal
}

const modalActions = function () {
    const modal = createModal()
    const animationSpeed = 200
    let closing = false
    const openAndCloseModal = {
        open() {
            !closing && modal.classList.add("open")
        },
        close() {
            closing = true
            modal.classList.remove("open")
            modal.classList.add("hide")
            setTimeout(() => {
                modal.classList.remove("hide")
                closing = false
            }, animationSpeed)
            modal.parentNode.removeChild(modal)
            modal.removeEventListener("click", listener)
        }
    }

    openAndCloseModal.open()

    const listener = event => {
        if (event.target.dataset.close) {
            openAndCloseModal.close()
        }
    }
    modal.addEventListener("click", listener)

    return openAndCloseModal
}

const myModal = function () {
    modalActions()
}
const mainAva = document.getElementById("main-avatar")
mainAva.addEventListener("click", myModal)